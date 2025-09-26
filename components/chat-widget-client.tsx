"use client";

import { useState, useEffect } from "react";
import { MessageCircle, X, Phone, Send, Users, Clock } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

interface ChatOption {
  id: string;
  name: string;
  icon: React.ReactNode;
  color: string;
  hoverColor: string;
  description: string;
  action: () => void;
}

function ChatWidgetClient() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const chatOptions: ChatOption[] = [
    {
      id: "whatsapp",
      name: "WhatsApp",
      icon: <FaWhatsapp className="w-6 h-6" />,
      color: "bg-green-500",
      hoverColor: "hover:bg-green-600",
      description: "Chat with us instantly",
      action: () => {
        window.open("https://wa.me/61468384001", "_blank");
      },
    },
    {
      id: "phone",
      name: "Call Us",
      icon: <Phone className="w-6 h-6" />,
      color: "bg-[#d93b3b]",
      hoverColor: "hover:bg-[#c02d2d]",
      description: "Speak with our team",
      action: () => {
        window.open("tel:+61468384001", "_self");
      },
    },
  ];

  if (!isMounted) {
    return null;
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Options Menu */}
      {isOpen && (
        <div className="mb-4 space-y-3 animate-fade-in-up">
          {chatOptions.map((option, index) => (
            <div
              key={option.id}
              className={`group flex items-center gap-3 bg-white rounded-2xl p-4 shadow-xl border border-[#2151A1]/10 hover:shadow-2xl hover:border-[#d93b3b]/20 transition-all duration-300 cursor-pointer transform hover:-translate-y-1 min-w-[280px] ${
                index === 0 ? "animate-fade-in-up" : ""
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={option.action}
            >
              {/* Icon */}
              <div
                className={`w-12 h-12 ${option.color} ${option.hoverColor} rounded-xl flex items-center justify-center text-white font-bold text-lg transition-all duration-300 group-hover:scale-110 shadow-lg`}
              >
                <span className="text-xl">{option.icon}</span>
              </div>

              {/* Content */}
              <div className="flex-1">
                <h4 className="font-semibold text-[#2151A1] group-hover:text-[#d93b3b] transition-colors duration-300">
                  {option.name}
                </h4>
                <p className="text-sm text-gray-600">{option.description}</p>
              </div>

              {/* Arrow */}
              <Send className="w-4 h-4 text-gray-400 group-hover:text-[#d93b3b] group-hover:translate-x-1 transition-all duration-300" />
            </div>
          ))}

          {/* Quick Info Card */}
          <div className="bg-[#2151A1] rounded-2xl p-4 text-white shadow-xl border border-[#d93b3b]/20">
            <div className="flex items-center gap-2 mb-2">
              <Users className="w-5 h-5" />
              <span className="font-semibold">We're Online!</span>
            </div>
            <p className="text-sm opacity-90 mb-3">
              Get instant help with your tutoring needs
            </p>
            <div className="flex items-center gap-4 text-xs">
              <div className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                <span>Mon-Sun 8AM-10PM</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>Online Now</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`group relative w-16 h-16 rounded-full shadow-2xl transition-all duration-500 transform hover:scale-110 ${
          isOpen
            ? "bg-[#d93b3b] hover:bg-[#c02d2d] rotate-180"
            : "bg-[#d93b3b] hover:bg-[#c02d2d]"
        }`}
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        {/* Button Icon */}
        <div className="absolute inset-0 flex items-center justify-center">
          {isOpen ? (
            <X className="w-6 h-6 text-white transition-transform duration-300" />
          ) : (
            <MessageCircle className="w-6 h-6 text-white transition-transform duration-300 group-hover:scale-110" />
          )}
        </div>

        {/* Ripple Effect */}
        <div className="absolute inset-0 rounded-full bg-white/20 scale-0 group-hover:scale-100 transition-transform duration-300"></div>
      </button>
    </div>
  );
}

export default ChatWidgetClient;
