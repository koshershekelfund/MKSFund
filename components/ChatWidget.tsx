import React, { useEffect, useRef, useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { ChatMessage, ChatRole } from '../types';
import { getRabbiAdvice } from '../services/geminiService';

export const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: ChatRole.MODEL,
      text: "Nu? You found the emergency line. Ask fast before I start billing you by the breath."
    }
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: ChatRole.USER, text: userMsg }]);
    setIsLoading(true);

    try {
      const stream = await getRabbiAdvice(userMsg);
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
    <>
      <button
        className="fixed bottom-6 right-6 z-50 bg-gold-500 text-slate-950 w-14 h-14 rounded-full shadow-lg flex items-center justify-center hover:bg-gold-400 transition-colors animate-[pulse_2s_infinite] relative"
        onClick={() => setIsOpen(true)}
        aria-label="Open chat"
      >
        <div className="absolute top-1/2 -translate-y-1/2 right-full mr-3 bg-slate-950 text-gold-400 text-xs px-3 py-1 rounded-sm border border-gold-500 shadow-lg animate-[flash_2.5s_ease-in-out_infinite] whitespace-nowrap">
          Consult with Rabbi
        </div>
        <MessageCircle className="w-6 h-6 animate-[wiggle_1.5s_ease-in-out_infinite]" />
      </button>

      {isOpen && (
        <div className="fixed inset-0 md:inset-auto md:right-6 md:bottom-24 md:w-96 md:h-[520px] z-50 bg-slate-950/90 md:bg-slate-900 border border-slate-800 shadow-2xl flex flex-col">
          <div className="flex items-center justify-between px-4 py-3 border-b border-slate-800 bg-slate-900/80">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-gold-500">Consult</p>
              <h3 className="text-lg font-serif text-slate-100">Rabbi McDickerson</h3>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-slate-500 hover:text-gold-500 transition-colors"
              aria-label="Close chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === ChatRole.USER ? 'justify-end' : 'justify-start'}`}>
                <div className={`
                  max-w-[85%] p-3 rounded-sm text-sm leading-relaxed
                  ${msg.role === ChatRole.USER
                    ? 'bg-gold-500 text-slate-950 font-semibold'
                    : 'bg-slate-800 text-slate-200 border-l-2 border-gold-500'}
                  ${msg.isError ? 'border-red-500 bg-red-900/20 text-red-200' : ''}
                `}>
                  {msg.role === ChatRole.MODEL && !msg.isError && (
                    <p className="text-gold-500 text-[10px] font-bold uppercase tracking-wider mb-1">Rabbi</p>
                  )}
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="text-slate-500 text-xs">Calculating profits...</div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <form onSubmit={handleSubmit} className="p-3 border-t border-slate-800 bg-slate-900/80">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask for financial salvation..."
                className="flex-1 bg-slate-950 border border-slate-800 text-slate-200 px-3 py-2 text-sm focus:outline-none focus:border-gold-500"
              />
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="bg-gold-500 text-slate-950 px-3 py-2 text-sm font-bold uppercase tracking-wider hover:bg-gold-400 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
            <p className="text-[10px] text-slate-600 mt-2 text-center uppercase">
              Not financial advice. All losses are yours. All gains are ours.
            </p>
          </form>
        </div>
      )}
    </>
  );
};
