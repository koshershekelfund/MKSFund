import React, { useState, useRef, useEffect } from 'react';
import { Send, Sparkles, AlertCircle, Volume2, StopCircle, Loader2, CheckCircle2 } from 'lucide-react';
import { getRabbiAdvice, generateRabbiAudioBuffer, playAudioBuffer, stopAudio } from '../services/geminiService';
import { ChatMessage, ChatRole } from '../types';

export const AskTheRabbi: React.FC = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    { 
      role: ChatRole.MODEL, 
      text: "Nu? You are staring at me like I owe you money. Ask me how to make a Shekel before I charge you for the air you are breathing in my lobby." 
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  
  // Audio State
  const [audioState, setAudioState] = useState<{ index: number; status: 'loading' | 'playing' } | null>(null);
  const [audioCache, setAudioCache] = useState<Record<number, AudioBuffer>>({});
  const [audioLoading, setAudioLoading] = useState<Record<number, boolean>>({}); // Track background loads

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Cleanup audio on unmount
  useEffect(() => {
    return () => stopAudio();
  }, []);

  const prefetchAudio = async (text: string, index: number) => {
    // Mark as loading in background
    setAudioLoading(prev => ({ ...prev, [index]: true }));
    
    try {
        const buffer = await generateRabbiAudioBuffer(text);
        setAudioCache(prev => ({ ...prev, [index]: buffer }));
    } catch (err) {
        console.error("Background audio generation failed", err);
    } finally {
        setAudioLoading(prev => {
            const newState = { ...prev };
            delete newState[index];
            return newState;
        });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: ChatRole.USER, text: userMsg }]);
    setIsLoading(true);
    
    // Stop any playing audio when new chat starts
    if (audioState) {
        stopAudio();
        setAudioState(null);
    }

    try {
      const stream = await getRabbiAdvice(userMsg);
      
      // Add an empty model message to start streaming into
      setMessages(prev => [...prev, { role: ChatRole.MODEL, text: '' }]);
      const modelMsgIndex = messages.length + 1; // Index of the message we are creating

      let fullResponse = '';
      
      for await (const chunk of stream) {
        fullResponse += chunk;
        setMessages(prev => {
          const newMsgs = [...prev];
          const lastMsg = newMsgs[newMsgs.length - 1];
          if (lastMsg.role === ChatRole.MODEL) {
            lastMsg.text = fullResponse;
          }
          return newMsgs;
        });
      }

      // Stream finished. Immediately pre-fetch audio in background.
      // Note: modelMsgIndex in state is length-1 because we added user msg then model msg
      // Actually, calculating index based on setMessages logic:
      // We have `messages` (len N). Added User (N+1). Added Model (N+2).
      // The index in the map map loop will be N+1.
      // A safer way is to use the length of the array after we finish loop.
      prefetchAudio(fullResponse, messages.length + 1); 

    } catch (error) {
      setMessages(prev => [...prev, { role: ChatRole.MODEL, text: "My lawyers advise me not to answer that right now. (API Error)", isError: true }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handlePlayAudio = async (text: string, index: number) => {
    // If clicking the active playing button, stop it
    if (audioState?.index === index && audioState.status === 'playing') {
        stopAudio();
        setAudioState(null);
        return;
    }

    setAudioState({ index, status: 'loading' });
    
    try {
        let buffer = audioCache[index];

        // If not in cache, generate it now (lazy load if pre-fetch failed or wasn't ready)
        if (!buffer) {
            buffer = await generateRabbiAudioBuffer(text);
            setAudioCache(prev => ({ ...prev, [index]: buffer }));
        }

        await playAudioBuffer(buffer, () => {
            // Callback when audio starts playing
            setAudioState(prev => {
                if (prev?.index === index) {
                    return { index, status: 'playing' };
                }
                return prev;
            });
        });
        
        // Reset state when done
        setAudioState(prev => {
            if (prev?.index === index) return null;
            return prev;
        });
    } catch (error) {
        console.error("Failed to play audio", error);
        setAudioState(prev => {
            if (prev?.index === index) return null;
            return prev;
        });
    }
  };

  return (
    <div className="py-24 bg-slate-950 relative">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-gold-500 mb-2">
            <Sparkles className="w-5 h-5" />
            <span className="uppercase tracking-widest text-sm font-bold">AI Advisory</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-serif text-slate-100">Consult The Rabbi</h2>
          <p className="text-slate-400 mt-2">Direct access to the wisdom of the Wolf of Tax-free Street.</p>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-sm shadow-2xl overflow-hidden flex flex-col h-[600px]">
          {/* Chat Area */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6 custom-scrollbar">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === ChatRole.USER ? 'justify-end' : 'justify-start'}`}>
                <div className={`
                  max-w-[85%] p-4 rounded-sm text-sm leading-relaxed relative group
                  ${msg.role === ChatRole.USER 
                    ? 'bg-gold-500 text-slate-950 font-medium' 
                    : 'bg-slate-800 text-slate-200 border-l-2 border-gold-500'}
                  ${msg.isError ? 'border-red-500 bg-red-900/20 text-red-200' : ''}
                `}>
                  {msg.role === ChatRole.MODEL && !msg.isError && (
                    <div className="flex justify-between items-center mb-2">
                        <p className="text-gold-500 text-xs font-bold uppercase tracking-wider">Rabbi McDickerson</p>
                        
                        <button 
                            onClick={() => handlePlayAudio(msg.text, idx)}
                            className="text-slate-500 hover:text-gold-500 transition-colors p-1 rounded-full hover:bg-slate-700/50 flex items-center gap-1"
                            title="Hear the Rabbi speak"
                        >
                            {/* Show loading spinner if actively playing/loading THIS specific message */}
                            {audioState?.index === idx ? (
                                audioState.status === 'loading' ? (
                                    <Loader2 className="w-4 h-4 animate-spin" />
                                ) : (
                                    <StopCircle className="w-4 h-4 text-gold-500 animate-pulse" />
                                )
                            ) : (
                                <>
                                   {/* If cached, show a small indicator that it's ready */}
                                   {audioCache[idx] && <CheckCircle2 className="w-3 h-3 text-gold-500/50" />}
                                   {/* If loading in background, show spinner */}
                                   {audioLoading[idx] && <Loader2 className="w-3 h-3 animate-spin text-slate-600" />}
                                   <Volume2 className="w-4 h-4" />
                                </>
                            )}
                        </button>
                    </div>
                  )}
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && messages[messages.length - 1]?.role === ChatRole.USER && (
               <div className="flex justify-start">
                 <div className="bg-slate-800 text-slate-400 p-4 rounded-sm text-xs animate-pulse flex items-center gap-2">
                   <div className="w-2 h-2 bg-gold-500 rounded-full animate-bounce"></div>
                   <div className="w-2 h-2 bg-gold-500 rounded-full animate-bounce delay-75"></div>
                   <div className="w-2 h-2 bg-gold-500 rounded-full animate-bounce delay-150"></div>
                   Calculating profits...
                 </div>
               </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 bg-slate-950 border-t border-slate-800">
            <form onSubmit={handleSubmit} className="flex gap-4">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask for financial salvation..."
                className="flex-1 bg-slate-900 border border-slate-700 text-slate-200 px-4 py-3 focus:outline-none focus:border-gold-500 transition-colors placeholder:text-slate-600"
              />
              <button 
                type="submit"
                disabled={isLoading || !input.trim()}
                className="bg-gold-500 text-slate-950 px-6 py-3 font-bold uppercase tracking-wider hover:bg-gold-300 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span className="hidden md:inline">Send</span>
              </button>
            </form>
            <div className="mt-2 flex items-center gap-2 justify-center">
               <AlertCircle className="w-3 h-3 text-slate-600" />
               <p className="text-[10px] text-slate-600 uppercase text-center">
                 Not financial advice. All losses are yours. All gains are ours.
               </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};