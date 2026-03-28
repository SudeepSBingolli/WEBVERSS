'use client';

import { useState } from 'react';
import { Mail, Phone, MessageCircle, Plus } from 'lucide-react';

export default function FloatingContactButton() {
  const [isOpen, setIsOpen] = useState(false);

  const contactOptions = [
    { icon: Phone, label: 'Call', hint: '+91-XXXX-XXXX', color: 'bg-blue-500' },
    { icon: Mail, label: 'Email', hint: 'admissions@sjbit.edu', color: 'bg-red-500' },
    { icon: MessageCircle, label: 'WhatsApp', hint: 'Chat with us', color: 'bg-green-500' },
  ];

  return (
    <div className="fixed bottom-8 right-8 z-40">
      {/* Contact menu items */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 space-y-3 animate-in fade-in zoom-in-75 duration-200">
          {contactOptions.map((option, idx) => {
            const Icon = option.icon;
            return (
              <button
                key={idx}
                onClick={() => setIsOpen(false)}
                className={`group flex items-center gap-3 ${option.color} text-white px-4 py-3 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 whitespace-nowrap`}
                title={option.hint}
              >
                <Icon className="w-5 h-5" />
                <span className="text-sm font-medium">{option.label}</span>
              </button>
            );
          })}
        </div>
      )}

      {/* Main floating button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`relative w-16 h-16 rounded-full bg-gradient-to-r from-[#E36A0A] to-[#F59E0B] shadow-2xl shadow-orange-500/40 flex items-center justify-center text-white font-bold text-2xl transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-orange-500/60 group`}
      >
        <Plus
          className={`w-8 h-8 transition-transform duration-300 ${
            isOpen ? 'rotate-45' : 'rotate-0'
          }`}
        />

        {/* Pulsing animation */}
        <div className="absolute inset-0 rounded-full bg-[#E36A0A] animate-ping opacity-25" />

        {/* Tooltip */}
        <div className="absolute bottom-20 right-0 bg-gray-900 text-white px-4 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
          Need Help?
          <div className="absolute bottom-0 right-4 translate-y-1/2 w-2 h-2 bg-gray-900 rotate-45" />
        </div>
      </button>
    </div>
  );
}
