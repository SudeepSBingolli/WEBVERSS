'use client';

import { useState, useRef, useEffect } from 'react';

const knowledgeBase = {
  // Home Page
  'home': {
    keywords: ['home', 'welcome', 'main page', 'homepage'],
    response: 'Welcome to SJB Institute of Technology! We\'re empowering minds and shaping the future. Visit our home page to explore our vision, mission, and key programs.'
  },
  'mission': {
    keywords: ['mission', 'vision', 'objective', 'goal'],
    response: 'Our Mission: To provide learning opportunities that foster ethical values, intellectual growth in science and technology, and social responsibility.'
  },

  // About
  'about': {
    keywords: ['about us', 'about', 'institute', 'college'],
    response: 'SJB Institute of Technology is a premier engineering college in Bengaluru, dedicated to academic excellence and student development. Learn more on our About page.'
  },
  'leadership': {
    keywords: ['founder', 'president', 'director', 'management', 'leadership'],
    response: 'Our college is guided by visionary leadership including our Founder, President, and Managing Director who are committed to excellence in education.'
  },

  // Programs
  'programs': {
    keywords: ['programs', 'courses', 'undergraduate', 'postgraduate', 'phd'],
    response: 'We offer diverse academic programs including Undergraduate, Post Graduate, and Ph.D. programmes across various engineering disciplines. Visit our Programs page for details.'
  },
  'departments': {
    keywords: ['departments', 'engineering', 'cse', 'ece', 'civil', 'mechanical', 'eee'],
    response: 'SJBIT has departments in: Civil Engineering, Computer Science & Engineering, Electrical & Electronics, Electronics & Communication, Information Science, Mechanical Engineering, AI & ML, and more.'
  },

  // Campus Life
  'campus': {
    keywords: ['campus life', 'campus', 'infrastructure', 'facilities'],
    response: 'Our world-class infrastructure includes Central Library, Residential Hostels, Sports Complex, and Cafeteria. Explore Campus Life for more details.'
  },
  'library': {
    keywords: ['library', 'books', 'resources', 'journals'],
    response: 'Our Central Library is a sanctuary for knowledge with digital access to global journals and extensive book collections.'
  },
  'sports': {
    keywords: ['sports', 'athletic', 'games', 'fitness'],
    response: 'SJBIT has a state-of-the-art Sports Complex for various athletic activities and student engagement.'
  },
  'hostel': {
    keywords: ['hostel', 'accommodation', 'residential', 'living'],
    response: 'We provide comfortable residential facilities (hostels) for students seeking on-campus accommodation.'
  },

  // Admissions
  'admission': {
    keywords: ['admission', 'apply', 'enrollment', 'apply now'],
    response: 'For more information about admissions, eligibility criteria, and how to apply, please visit our Admissions section or contact our admissions office.'
  },

  // Academics
  'academics': {
    keywords: ['academics', 'curriculum', 'vtu', 'regulation', 'evaluation'],
    response: 'SJBIT follows both Autonomous Curriculum and VTU curriculum with regular evaluations and learning-focused pedagogy.'
  },

  // Research
  'research': {
    keywords: ['research', 'publication', 'innovation', 'studies'],
    response: 'SJBIT is committed to research and innovation in engineering and technology. Visit our Research section for ongoing projects and publications.'
  },

  // Placements
  'placement': {
    keywords: ['placement', 'job', 'career', 'recruit', 'company'],
    response: 'Our strong placement record reflects employer confidence in SJBIT graduates. Visit the Placements section for more information about our placement support.'
  },

  // Contact
  'contact': {
    keywords: ['contact', 'phone', 'email', 'address'],
    response: 'Contact SJBIT: Email: info@sjbit.edu.in | Phone: +91 XXXXX XXXXX | Location: Bengaluru, Karnataka, India'
  },
};

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: 'Hello! 👋 I\'m SJBIT Assistant. I can help you with information about our college. Ask me anything about our programs, campus, admissions, and more!',
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const findResponse = (userMessage) => {
    const lowerMessage = userMessage.toLowerCase();

    // Search through knowledge base
    for (const topic in knowledgeBase) {
      const kb = knowledgeBase[topic];
      if (kb.keywords.some(keyword => lowerMessage.includes(keyword))) {
        return kb.response;
      }
    }

    // Default response for out-of-scope questions
    return "I'm here to answer questions about SJBIT only. Please ask me about our programs, campus, admissions, academics, placements, or other college-related topics! 😊";
  };

  const handleSendMessage = (e) => {
    e.preventDefault();

    if (!inputValue.trim()) return;

    // Add user message
    const userMessage = {
      id: Date.now(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate bot thinking time
    setTimeout(() => {
      const botResponse = findResponse(inputValue);
      const botMessage = {
        id: Date.now() + 1,
        text: botResponse,
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000);
  };

  return (
    <>
      {/* Floating Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-gradient-to-r from-[#E36A0A] to-[#F59E0B] text-white rounded-full shadow-lg shadow-orange-500/40 hover:shadow-xl hover:scale-110 transition-all duration-300 flex items-center justify-center text-2xl"
        title="Chat with SJBIT Assistant"
      >
        💬
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-96 h-[600px] bg-white rounded-2xl shadow-2xl border border-orange-100 overflow-hidden flex flex-col">
          
          {/* Header */}
          <div className="bg-gradient-to-r from-[#E36A0A] to-[#F59E0B] text-white p-4 flex items-center justify-between">
            <div>
              <h2 className="font-bold text-lg">SJBIT Assistant</h2>
              <p className="text-xs text-orange-100">Always here to help</p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-2xl hover:scale-125 transition-transform"
            >
              ✕
            </button>
          </div>

          {/* Messages Container */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs px-4 py-2 rounded-lg ${
                    message.sender === 'user'
                      ? 'bg-[#E36A0A] text-white rounded-br-none'
                      : 'bg-white text-gray-800 border border-orange-200 rounded-bl-none'
                  }`}
                >
                  <p className="text-sm">{message.text}</p>
                  <span className="text-xs opacity-70 block mt-1">
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </div>
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white text-gray-800 border border-orange-200 px-4 py-2 rounded-lg rounded-bl-none">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-[#E36A0A] rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-[#E36A0A] rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-2 h-2 bg-[#E36A0A] rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <form onSubmit={handleSendMessage} className="border-t border-orange-100 p-4 bg-white">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask me about SJBIT..."
                className="flex-1 border border-orange-200 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#E36A0A] text-sm"
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-[#E36A0A] to-[#F59E0B] text-white rounded-full p-2 hover:shadow-lg transition-all"
                title="Send message"
              >
                ➤
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-2">
              💡 Ask about programs, campus, admissions, and more!
            </p>
          </form>
        </div>
      )}
    </>
  );
}
