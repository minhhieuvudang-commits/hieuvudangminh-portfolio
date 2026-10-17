"use client";

import React, { useState, useRef, useEffect } from "react";
import { MessageSquare, X, Send, Sparkles, Bot, User, CornerDownLeft } from "lucide-react";
import { AI_KNOWLEDGE_BASE, PERSONAL_INFO } from "@/data/portfolioData";

interface ChatMessage {
  id: string;
  sender: "assistant" | "user";
  text: string;
  timestamp: string;
}

export default function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "welcome",
      sender: "assistant",
      text: AI_KNOWLEDGE_BASE.greeting,
      timestamp: "Just now",
    },
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSend = (userText: string) => {
    if (!userText.trim()) return;

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: "user",
      text: userText,
      timestamp: "Just now",
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputValue("");

    // Knowledge base matching logic
    setTimeout(() => {
      const query = userText.toLowerCase();
      let matchedAnswer: string | null = null;

      for (const item of AI_KNOWLEDGE_BASE.responses) {
        if (item.keywords.some((kw) => query.includes(kw))) {
          matchedAnswer = item.answer;
          break;
        }
      }

      if (!matchedAnswer) {
        matchedAnswer = `Thank you for your question. Hiếu's portfolio covers 40+ cross-functional projects in CFD/Fintech, corporate events, and digital media.\n\nYou can explore his detailed case studies in the Projects section or reach him directly at ${PERSONAL_INFO.email}. For immediate insights, try clicking one of the suggested questions below!`;
      }

      const botMsg: ChatMessage = {
        id: `bot-${Date.now()}`,
        sender: "assistant",
        text: matchedAnswer,
        timestamp: "Just now",
      };

      setMessages((prev) => [...prev, botMsg]);
    }, 400);
  };

  const handleSuggestedClick = (question: string) => {
    handleSend(question);
  };

  return (
    <>
      {/* Floating Launcher Button */}
      <div className="fixed bottom-6 right-6 z-50">
        {!isOpen && (
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="group flex items-center gap-3 px-5 py-3.5 rounded-full bg-[#176B9F] hover:bg-[#123A5A] text-white shadow-xl shadow-[#176B9F]/30 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 cursor-pointer focus:outline-none"
            aria-label="Open Ask About Hiếu assistant"
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
            </span>
            <div className="flex flex-col text-left">
              <span className="text-xs font-black tracking-wide uppercase">
                Ask About Hiếu
              </span>
              <span className="text-[10px] text-sky-200 font-medium">
                Portfolio Knowledge Base
              </span>
            </div>
            <MessageSquare className="w-4 h-4 ml-1 group-hover:scale-110 transition-transform" />
          </button>
        )}
      </div>

      {/* Assistant Modal / Panel */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-[min(420px,calc(100vw-32px))] h-[min(620px,calc(100vh-100px))] bg-white border border-[#BFDDEC] rounded-3xl shadow-2xl shadow-[#123A5A]/25 flex flex-col overflow-hidden animate-hero-in">
          
          {/* Header */}
          <div className="px-5 py-4 bg-[#EAF6FD] border-b border-[#D8EAF5] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#176B9F] text-white flex items-center justify-center">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="text-xs font-black text-[#123A5A]">
                    Ask About Hiếu
                  </span>
                  <span className="px-1.5 py-0.2 bg-[#BFDDEC] text-[9px] font-bold text-[#176B9F] rounded">
                    Verified Info
                  </span>
                </div>
                <p className="text-[10px] text-[#66859D] font-medium">
                  Grounded in Hiếu&rsquo;s actual portfolio & CV data
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="p-1.5 text-[#557B97] hover:text-[#123A5A] hover:bg-white/80 rounded-full transition-colors cursor-pointer"
              aria-label="Close assistant"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Body */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#FBFDFF]">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-2.5 ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                {msg.sender === "assistant" && (
                  <div className="w-7 h-7 rounded-lg bg-[#EAF6FD] border border-[#BFDDEC] text-[#176B9F] flex items-center justify-center shrink-0 mt-0.5">
                    <Sparkles className="w-3.5 h-3.5" />
                  </div>
                )}
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-3 text-xs leading-relaxed whitespace-pre-wrap ${
                    msg.sender === "user"
                      ? "bg-[#176B9F] text-white rounded-br-xs"
                      : "bg-[#F4FAFE] border border-[#D8EAF5] text-[#123A5A] rounded-bl-xs shadow-xs"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Suggested Quick Questions Pills */}
          <div className="px-4 py-2 bg-white border-t border-[#D8EAF5]/60 overflow-x-auto scrollbar-none">
            <div className="flex gap-1.5 min-w-max pb-1">
              {AI_KNOWLEDGE_BASE.suggestedQuestions.map((q) => (
                <button
                  key={q}
                  type="button"
                  onClick={() => handleSuggestedClick(q)}
                  className="px-2.5 py-1 text-[11px] font-semibold text-[#176B9F] bg-[#EAF6FD] hover:bg-[#DCEFF9] border border-[#BFDDEC] rounded-full transition-colors cursor-pointer text-left"
                >
                  {q}
                </button>
              ))}
            </div>
          </div>

          {/* Input Form */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend(inputValue);
            }}
            className="p-3 bg-white border-t border-[#D8EAF5] flex items-center gap-2"
          >
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ask about CFD projects, budgets, skills..."
              className="flex-1 px-3.5 py-2.5 text-xs bg-[#F8FCFF] border border-[#BFDDEC] rounded-xl focus:bg-white focus:outline-none focus:border-[#176B9F] text-[#123A5A] placeholder-[#66859D]"
            />
            <button
              type="submit"
              disabled={!inputValue.trim()}
              className="p-2.5 rounded-xl bg-[#176B9F] hover:bg-[#123A5A] text-white disabled:opacity-40 disabled:cursor-not-allowed transition-colors cursor-pointer"
              aria-label="Send query"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>

          {/* Honest Disclosure Footer */}
          <div className="px-4 py-1.5 bg-[#F4FAFE] border-t border-[#D8EAF5] text-center">
            <span className="text-[10px] text-[#66859D]">
              Knowledge base grounded in verified portfolio data. No fabricated metrics.
            </span>
          </div>

        </div>
      )}
    </>
  );
}
