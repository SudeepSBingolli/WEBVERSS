'use client';

import { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useRouter } from 'next/navigation';

const INITIAL_MESSAGE = { id: 1, text: 'Hello! 👋 I\'m here to help you navigate SJBIT. What would you like to know?', sender: 'bot', timestamp: new Date() };

const KEYWORD_RESPONSES = {
  'admission': { text: '📚 Admissions are open for 2025-26! Visit the Admissions page for more details.', link: '/admissions', linkText: 'Go to Admissions' },
  'placement': { text: '💼 Check our placements details and statistics. Our students are placed in top companies!', link: '/placements', linkText: 'View Placements' },
  'department': { text: '🏢 Explore all departments with programs, faculty, and facilities.', link: '/departments', linkText: 'Browse Departments' },
  'contact': { text: '📞 Get in touch with us through various departments and support teams.', link: '/contact', linkText: 'Contact Us' },
  'alumni': { text: '👥 Connect with 11,000+ SJBIT alumni across the globe.', link: '/alumni', linkText: 'Visit Alumni' },
  'course': { text: '📖 Check out our programs under different departments.', link: '/departments', linkText: 'View Programs' },
  'program': { text: '🎓 Explore our undergraduate, postgraduate, and PhD programs.', link: '/programs', linkText: 'View Programs' },
  'academic': { text: '📝 Learn about our academic structure, calendar, and policies.', link: '/academics', linkText: 'Academics Info' },
  'campus': { text: '🏫 Explore our world-class campus facilities and student life.', link: '/campus-life', linkText: 'Campus Life' },
  'research': { text: '🔬 Discover our research initiatives and innovations.', link: '/research', linkText: 'Research Details' },
  'student': { text: '👨‍🎓 Resources and information for current students.', link: '/students', linkText: 'Student Portal' },
  'about': { text: '📖 Learn about SJBIT\'s history, mission, and vision.', link: '/about', linkText: 'About SJBIT' },
  'home': { text: '🏠 Return to our homepage.', link: '/', linkText: 'Home' }
};

const QUICK_BUTTONS = [
  { label: 'Admissions', keyword: 'admission' },
  { label: 'Placements', keyword: 'placement' },
  { label: 'Departments', keyword: 'department' },
  { label: 'Contact', keyword: 'contact' }
];

export default function SmartChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([INITIAL_MESSAGE]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const router = useRouter();

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, scrollToBottom]);

  const findBestMatch = useCallback((userInput) => {
    const lowerInput = userInput.toLowerCase();
    for (const [keyword, response] of Object.entries(KEYWORD_RESPONSES)) {
      if (lowerInput.includes(keyword)) {
        return response;
      }
    }
    return null;
  }, []);

  const handleSendMessage = useCallback((e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userMessage = { id: messages.length + 1, text: inputValue, sender: 'user', timestamp: new Date() };
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    setTimeout(() => {
      const response = findBestMatch(inputValue);
      const botMessage = {
        id: messages.length + 2,
        text: response?.text || '❓ Sorry, I can help with admissions, placements, departments, contact, alumni, or campus life.',
        sender: 'bot',
        timestamp: new Date(),
        link: response?.link,
        linkText: response?.linkText
      };
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 800);
  }, [inputValue, messages.length, findBestMatch]);

  const handleQuickButton = useCallback((keyword) => {
    const userMessage = { id: messages.length + 1, text: keyword, sender: 'user', timestamp: new Date() };
    setMessages(prev => [...prev, userMessage]);
    setIsTyping(true);

    setTimeout(() => {
      const response = findBestMatch(keyword);
      const botMessage = {
        id: messages.length + 2,
        text: response?.text || '❓ Sorry, I couldn\'t find information about that.',
        sender: 'bot',
        timestamp: new Date(),
        link: response?.link,
        linkText: response?.linkText
      };
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 800);
  }, [messages.length, findBestMatch]);

  const handleNavigate = useCallback((link) => {
    router.push(link);
    setIsOpen(false);
  }, [router]);

  return (
    <>
      {/* Floating Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-8 right-8 z-40 w-14 h-14 bg-gradient-to-r from-[#E36A0A] to-[#F59E0B] text-white rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-300 flex items-center justify-center"
        title="Chat with us"
      >
        <span className="text-2xl">💬</span>
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-8 z-40 w-96 max-h-[600px] bg-white rounded-3xl shadow-2xl flex flex-col border border-gray-200 animation-slide-up">
          
          {/* Header */}
          <div className="bg-gradient-to-r from-[#E36A0A] to-[#F59E0B] text-white p-6 rounded-t-3xl flex items-center justify-between">
            <div>
              <h3 className="font-bold text-lg">SJBIT Assistant</h3>
              <p className="text-xs text-white/80">Always here to help</p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-2xl hover:bg-white/20 w-8 h-8 rounded-full flex items-center justify-center transition"
            >
              ✕
            </button>
          </div>

          {/* Messages Container */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((msg) => (
              <MessageBubble key={msg.id} msg={msg} onNavigate={handleNavigate} />
            ))}
            
            {isTyping && <TypingIndicator />}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Buttons */}
          {messages.length === 1 && (
            <div className="px-4 py-3 border-t border-gray-200 flex flex-wrap gap-2 bg-white">
              {QUICK_BUTTONS.map((btn) => (
                <button
                  key={btn.keyword}
                  onClick={() => handleQuickButton(btn.keyword)}
                  className="text-xs bg-orange-100 text-[#E36A0A] px-3 py-2 rounded-full hover:bg-orange-200 transition font-medium"
                >
                  {btn.label}
                </button>
              ))}
            </div>
          )}

          {/* Input Form */}
          <form onSubmit={handleSendMessage} className="border-t border-gray-200 p-4 bg-white rounded-b-3xl">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask about admissions, placements..."
                className="flex-1 border border-gray-300 rounded-full px-4 py-2 text-sm focus:outline-none focus:border-[#E36A0A]"
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-[#E36A0A] to-[#F59E0B] text-white rounded-full p-2 hover:shadow-lg transition"
              >
                <span className="text-lg">→</span>
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}

// Memoized sub-components for performance
const MessageBubble = ({ msg, onNavigate }) => (
  <div className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
    <div className={`max-w-xs px-4 py-3 rounded-2xl ${msg.sender === 'user' ? 'bg-gradient-to-r from-[#E36A0A] to-[#F59E0B] text-white rounded-br-none' : 'bg-white text-gray-800 border border-gray-200 rounded-bl-none'}`}>
      <p className="text-sm">{msg.text}</p>
      {msg.link && (
        <button onClick={() => onNavigate(msg.link)} className="mt-2 bg-white text-[#E36A0A] px-3 py-1 rounded-lg text-xs font-bold hover:bg-gray-100 transition w-full">
          {msg.linkText} →
        </button>
      )}
    </div>
  </div>
);

const TypingIndicator = () => (
  <div className="flex justify-start">
    <div className="bg-white border border-gray-200 px-4 py-3 rounded-2xl rounded-bl-none">
      <div className="flex gap-1">
        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"/>
        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}/>
        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}/>
      </div>
    </div>
  </div>
);
