import React, { useState, useRef, useEffect } from 'react';
import { Icons } from './Icons';
import { GoogleGenAI } from "@google/genai";
import ReactMarkdown from 'react-markdown';
import { getSystemInstruction } from '../utils/aiContext';

interface Message {
  role: 'user' | 'model';
  text: string;
}

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: "Hello! I'm Jelle's AI Assistant. Ask me how his experience at UltiMaker makes him the perfect fit for the Cloud Manager role at Medido." }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMessage = inputValue;
    setInputValue('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const systemInstruction = getSystemInstruction();
      
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: [
          ...messages.map(m => ({
            role: m.role,
            parts: [{ text: m.text }]
          })),
          { role: 'user', parts: [{ text: userMessage }] }
        ],
        config: {
          systemInstruction: systemInstruction,
        }
      });

      const text = response.text;
      if (text) {
        setMessages(prev => [...prev, { role: 'model', text: text }]);
      }
    } catch (error) {
      console.error("Chat Error:", error);
      setMessages(prev => [...prev, { role: 'model', text: "I apologize, but I'm having trouble connecting right now. Please try again later." }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-none">
      
      {/* Chat Window */}
      {isOpen && (
        <div className="pointer-events-auto bg-white border border-medido-purple/10 rounded-3xl shadow-2xl w-[90vw] md:w-[400px] h-[500px] flex flex-col mb-4 overflow-hidden animate-in slide-in-from-bottom-10 fade-in duration-300">
          {/* Header */}
          <div className="bg-medido-purple p-5 border-b border-medido-purple/10 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-2.5 h-2.5 rounded-full bg-medido-peach animate-pulse" />
              <h3 className="font-bold text-white text-lg">Jelle's AI Agent</h3>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-white/70 hover:text-white transition-colors"
            >
              <Icons.Code size={24} className="rotate-45" />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4 bg-gray-50">
            {messages.map((msg, idx) => (
              <div 
                key={idx} 
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div 
                  className={`max-w-[85%] rounded-2xl p-4 text-base shadow-sm ${
                    msg.role === 'user' 
                      ? 'bg-medido-purple text-white rounded-br-none' 
                      : 'bg-white text-medido-purple border border-gray-100 rounded-bl-none'
                  }`}
                >
                  <ReactMarkdown className="prose prose-sm max-w-none prose-p:text-inherit prose-headings:text-inherit prose-strong:text-medido-peach prose-ul:text-inherit">
                    {msg.text}
                  </ReactMarkdown>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white border border-gray-100 rounded-2xl rounded-bl-none p-4 flex gap-1 shadow-sm">
                  <div className="w-2 h-2 bg-medido-purple/40 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                  <div className="w-2 h-2 bg-medido-purple/40 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                  <div className="w-2 h-2 bg-medido-purple/40 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-5 bg-white border-t border-gray-100">
            <div className="relative">
              <textarea
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Ask about Jelle's fit for Medido..."
                className="w-full bg-medido-gray text-medido-purple border border-transparent rounded-2xl pl-4 pr-12 py-3 focus:outline-none focus:bg-white focus:border-medido-purple/20 focus:ring-2 focus:ring-medido-purple/10 resize-none h-14 text-base transition-all"
              />
              <button 
                onClick={handleSendMessage}
                disabled={isLoading || !inputValue.trim()}
                className="absolute right-3 top-3 p-1.5 text-medido-purple hover:bg-medido-peach/20 rounded-lg disabled:opacity-50 transition-colors"
              >
                <Icons.Code size={24} className="rotate-90" />
              </button>
            </div>
            <div className="text-[11px] text-medido-purple/40 mt-3 text-center font-bold uppercase tracking-wider">
              Powered by Google Gemini • Grounded in Resume & Research
            </div>
          </div>
        </div>
      )}

      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="pointer-events-auto bg-medido-purple hover:bg-medido-purple/90 text-white p-4 rounded-full shadow-2xl shadow-medido-purple/30 transition-all hover:scale-105 active:scale-95 flex items-center justify-center ring-4 ring-white"
        aria-label="Open Chat"
      >
        {isOpen ? (
          <div className="h-6 w-6 relative">
             <div className="absolute inset-0 border-2 border-white rotate-45 transform origin-center top-1/2" style={{height: 0}}></div>
             <div className="absolute inset-0 border-2 border-white -rotate-45 transform origin-center top-1/2" style={{height: 0}}></div>
          </div>
        ) : (
          <Icons.Cpu size={24} />
        )}
      </button>
    </div>
  );
};

export default ChatWidget;