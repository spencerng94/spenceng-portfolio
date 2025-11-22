import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Loader2, Sparkles } from 'lucide-react';
import { streamChatResponse } from '../services/geminiService';
import { ChatMessage, ChatSender } from '../types';
import { GenerateContentResponse } from '@google/genai';

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'init',
      text: "Hi! I'm Spencer's AI assistant. Ask me anything about his experience at AWS or his tech stack!",
      sender: ChatSender.BOT,
      timestamp: Date.now()
    }
  ]);
  const [isStreaming, setIsStreaming] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isStreaming) return;

    const userText = input;
    setInput('');
    
    // Add user message
    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      text: userText,
      sender: ChatSender.USER,
      timestamp: Date.now()
    };
    
    setMessages(prev => [...prev, userMsg]);
    setIsStreaming(true);

    try {
      // Prepare history for API
      const history = messages.map(m => ({
        role: m.sender === ChatSender.USER ? 'user' as const : 'model' as const,
        parts: [{ text: m.text }]
      }));

      const stream = await streamChatResponse(userText, history);
      
      // Create placeholder for bot response
      const botMsgId = (Date.now() + 1).toString();
      setMessages(prev => [...prev, {
        id: botMsgId,
        text: '',
        sender: ChatSender.BOT,
        timestamp: Date.now(),
        isTyping: true
      }]);

      let fullText = '';

      for await (const chunk of stream) {
        const c = chunk as GenerateContentResponse;
        const textChunk = c.text || '';
        fullText += textChunk;
        
        setMessages(prev => prev.map(msg => 
          msg.id === botMsgId 
            ? { ...msg, text: fullText, isTyping: false } 
            : msg
        ));
      }
      
    } catch (error) {
      console.error("Chat error:", error);
      setMessages(prev => [...prev, {
        id: Date.now().toString(),
        text: "I'm sorry, I'm having trouble connecting to the brain right now. Please try again later.",
        sender: ChatSender.BOT,
        timestamp: Date.now()
      }]);
    } finally {
      setIsStreaming(false);
    }
  };

  return (
    <>
      {/* FAB */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 p-4 bg-orange-500 hover:bg-orange-600 text-white rounded-full shadow-2xl transition-transform hover:scale-110 z-40 ${isOpen ? 'scale-0' : 'scale-100'}`}
      >
        <MessageSquare size={28} />
        <span className="absolute -top-1 -right-1 w-3 h-3 bg-rose-500 rounded-full animate-ping"></span>
      </button>

      {/* Chat Window */}
      <div className={`fixed bottom-6 right-6 w-[90vw] sm:w-[400px] h-[500px] bg-stone-900 border border-stone-700 rounded-2xl shadow-2xl flex flex-col z-50 transition-all duration-300 origin-bottom-right ${isOpen ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-90 pointer-events-none'}`}>
        
        {/* Header */}
        <div className="p-4 bg-stone-800 rounded-t-2xl border-b border-stone-700 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="bg-orange-500/20 p-1.5 rounded-lg">
                <Sparkles size={18} className="text-orange-400" />
            </div>
            <div>
              <h3 className="text-white font-semibold text-sm">Ask AI Spencer</h3>
              <p className="text-xs text-stone-400 flex items-center gap-1">
                <span className="w-1.5 h-1.5 bg-orange-500 rounded-full animate-pulse"></span>
                Online
              </p>
            </div>
          </div>
          <button onClick={() => setIsOpen(false)} className="text-stone-400 hover:text-white transition-colors">
            <X size={20} />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${msg.sender === ChatSender.USER ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed ${
                  msg.sender === ChatSender.USER
                    ? 'bg-orange-600 text-white rounded-br-none'
                    : 'bg-stone-800 text-stone-200 rounded-bl-none border border-stone-700'
                }`}
              >
                {msg.text}
                {msg.isTyping && (
                   <span className="inline-block w-1 h-4 ml-1 align-middle bg-orange-400 animate-pulse">|</span>
                )}
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <form onSubmit={handleSubmit} className="p-3 border-t border-stone-700 bg-stone-900 rounded-b-2xl">
          <div className="relative flex items-center">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about my projects..."
              disabled={isStreaming}
              className="w-full bg-stone-800 text-white rounded-xl pl-4 pr-12 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500/50 border border-transparent focus:border-orange-500/50 text-sm placeholder-stone-500"
            />
            <button
              type="submit"
              disabled={!input.trim() || isStreaming}
              className="absolute right-2 p-2 text-orange-400 hover:text-white disabled:text-stone-600 disabled:cursor-not-allowed transition-colors"
            >
              {isStreaming ? <Loader2 size={18} className="animate-spin" /> : <Send size={18} />}
            </button>
          </div>
          <div className="text-[10px] text-center text-stone-600 mt-2">
            Powered by Gemini 2.5 Flash
          </div>
        </form>
      </div>
    </>
  );
};

export default ChatWidget;