import React, { useState, useRef, useEffect } from 'react';
import { Send, Sparkles, AlertCircle } from 'lucide-react';
import { getRabbiAdvice } from '../services/geminiService';
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

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: ChatRole.USER, text: userMsg }]);
    setIsLoading(true);

    try {
      const stream = await getRabbiAdvice(userMsg);

      // Add an empty model message to start streaming into
      setMessages(prev => [...prev, { role: ChatRole.MODEL, text: '' }]);

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

    } catch (error) {
      setMessages(prev => [...prev, { role: ChatRole.MODEL, text: "My lawyers advise me not to answer that right now. (API Error)", isError: true }]);
    } finally {
      setIsLoading(false);
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
                    <p className="text-gold-500 text-xs font-bold uppercase tracking-wider mb-2">Rabbi McDickerson</p>
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