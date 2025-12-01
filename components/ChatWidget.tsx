import React, { useState, useRef, useEffect } from 'react';
import { Icons } from './Icons';
import { GoogleGenAI } from "@google/genai";
import ReactMarkdown from 'react-markdown';
import { getSystemInstruction } from '../utils/aiContext';

interface Message {
  role: 'user' | 'model';
  text: string;
}

const SUGGESTIONS = [
  "Why is Jelle a good fit?",
  "Leadership style?",
  "Experience with ISO 27001?",
  "Insourcing experience?",
  "Firmware & Cloud knowledge?"
];

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: "Hello! I'm Jelle's AI Assistant. Ask me how his experience at UltiMaker makes him the perfect fit for the Cloud Manager role at Medido." }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isExpanded]);

  // Focus input when chat opens or expands
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [isOpen, isExpanded]);

  const handleSendMessage = async (textOverride?: string) => {
    const userMessage = textOverride || inputValue;
    if (!userMessage.trim() || isLoading) return;

    // If using textOverride (suggestions), clear input just in case
    if (!textOverride) {
        setInputValue('');
    }
    
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

  // Toggle Chat Open/Close
  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Backdrop Blur - Active when chat is open */}
      <div 
        className={`fixed inset-0 bg-white/60 backdrop-blur-md z-[60] transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />

      {/* Chat Window */}
      <div 
        className={`fixed z-[70] bg-white shadow-2xl flex flex-col overflow-hidden transition-all duration-300 ease-in-out border border-medido-purple/10 ${
          isOpen 
            ? 'opacity-100 translate-y-0 scale-100' 
            : 'opacity-0 translate-y-10 scale-95 pointer-events-none'
        } ${
          isExpanded 
            ? 'inset-4 md:inset-10 rounded-2xl' 
            : 'bottom-6 right-6 md:bottom-24 md:right-6 w-[95vw] md:w-[450px] h-[80vh] md:h-[600px] rounded-3xl'
        }`}
      >
        {/* Header */}
        <div className="bg-medido-purple p-4 md:p-5 flex justify-between items-center shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-2.5 h-2.5 rounded-full bg-medido-peach animate-pulse" />
            <div>
              <h3 className="font-bold text-white text-lg leading-none">Jelle's AI Agent</h3>
              <p className="text-white/60 text-xs mt-1 font-medium">Ask me anything about Jelle</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button 
              onClick={() => setIsExpanded(!isExpanded)}
              className="p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-colors hidden md:block"
              title={isExpanded ? "Collapse" : "Expand"}
            >
              {isExpanded ? <Icons.Minimize size={20} /> : <Icons.Maximize size={20} />}
            </button>
            <button 
              onClick={() => setIsOpen(false)}
              className="p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
              title="Close"
            >
              <Icons.Close size={24} />
            </button>
          </div>
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-4 md:p-5 space-y-4 bg-gray-50/50">
          {messages.map((msg, idx) => (
            <div 
              key={idx} 
              className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div 
                className={`max-w-[85%] md:max-w-[80%] rounded-2xl p-4 text-base shadow-sm ${
                  msg.role === 'user' 
                    ? 'bg-medido-purple text-white rounded-br-none' 
                    : 'bg-white text-medido-purple border border-gray-100 rounded-bl-none'
                }`}
              >
                <div className="prose prose-sm max-w-none prose-p:text-inherit prose-headings:text-inherit prose-strong:text-medido-peach prose-ul:text-inherit prose-a:text-inherit prose-a:underline">
                  <ReactMarkdown>
                    {msg.text}
                  </ReactMarkdown>
                </div>
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

        {/* Suggestions & Input Area */}
        <div className="p-4 md:p-5 bg-white border-t border-gray-100 shrink-0">
          
          {/* Suggestions Chips - Show if not loading */}
          {!isLoading && (
             <div className="flex gap-2 overflow-x-auto pb-3 mb-1 no-scrollbar mask-gradient-r">
               {SUGGESTIONS.map((suggestion, idx) => (
                 <button
                   key={idx}
                   onClick={() => handleSendMessage(suggestion)}
                   className="whitespace-nowrap px-3 py-1.5 bg-medido-purple/5 hover:bg-medido-purple/10 text-medido-purple text-xs font-bold rounded-lg border border-medido-purple/10 transition-colors flex items-center gap-1.5 shrink-0"
                 >
                   <Icons.Sparkles size={12} className="text-medido-peach" />
                   {suggestion}
                 </button>
               ))}
             </div>
          )}

          <div className="relative">
            <textarea
              ref={inputRef}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Type your question here..."
              className="w-full bg-medido-gray text-medido-purple border border-transparent rounded-2xl pl-4 pr-12 py-4 focus:outline-none focus:bg-white focus:border-medido-purple/20 focus:ring-4 focus:ring-medido-purple/5 resize-none h-16 text-base transition-all shadow-inner"
            />
            <button 
              onClick={() => handleSendMessage()}
              disabled={isLoading || !inputValue.trim()}
              className="absolute right-3 top-3 bottom-3 aspect-square flex items-center justify-center text-white bg-medido-purple rounded-xl disabled:opacity-50 disabled:bg-medido-gray disabled:text-gray-400 hover:bg-medido-purple/90 transition-all shadow-md hover:shadow-lg active:scale-95"
            >
              <Icons.Code size={20} className="rotate-90" />
            </button>
          </div>
          <div className="text-[10px] text-medido-purple/40 mt-3 text-center font-bold uppercase tracking-wider">
            Powered by Google Gemini • Grounded in Resume & LinkedIn Data
          </div>
        </div>
      </div>

      {/* Floating Action Button (FAB) */}
      <button
        onClick={toggleChat}
        className={`fixed bottom-6 right-6 z-[65] bg-medido-purple hover:bg-medido-purple/90 text-white p-4 rounded-full shadow-2xl shadow-medido-purple/30 transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center ring-4 ring-white ${
          isOpen ? 'translate-y-24 opacity-0 pointer-events-none' : 'translate-y-0 opacity-100'
        }`}
        aria-label="Open Chat"
      >
        <Icons.Cpu size={24} />
      </button>
    </>
  );
};

export default ChatWidget;