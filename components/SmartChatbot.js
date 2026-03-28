'use client';

import { useState, useRef, useEffect, useCallback, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { Send, MessageCircle, RotateCcw, X, Sparkles, Mic, Volume2, Copy, ThumbsUp, ThumbsDown, Lightbulb, Clock } from 'lucide-react';

const INITIAL_MESSAGE = { id: 1, text: 'Welcome to SJBIT! 👋 I\'m your intelligent assistant. I can help you with admissions, placements, departments, campus life, and everything else. What would you like to know?', sender: 'bot', timestamp: new Date() };

const KEYWORD_RESPONSES = {
  'admission': { text: '📚 Admissions 2025-26 are now open. Get complete guidance on eligibility, documents, deadlines, counseling steps, and seat intake. Our team supports applicants from first query to final admission confirmation.', link: '/admissions', linkText: 'Start Admission Journey' },
  'placement': { text: '💼 Placements are career-focused with strong recruiter engagement, training support, and interview readiness. Explore outcomes, hiring partners, and opportunities across core, tech, and emerging domains.', link: '/placements', linkText: 'See Placement Highlights' },
  'department': { text: '🏢 Departments offer domain-specialized learning, modern labs, project mentoring, and industry-aligned curriculum. Compare each branch to choose the best-fit academic and career pathway.', link: '/departments', linkText: 'Explore Departments' },
  'contact': { text: '📞 Connect with SJBIT instantly for admissions, academics, and student support. Find official contact channels and get quick guidance from the right office without delays.', link: '/contact', linkText: 'Contact SJBIT Team' },
  'alumni': { text: '👥 SJBIT alumni are making impact across top companies, startups, and research institutions worldwide. Discover the network, mentorship culture, and success journeys that inspire current students.', link: '/alumni', linkText: 'Meet Our Alumni Network' },
  'course': { text: '📖 Courses are designed for conceptual clarity, practical skills, and employability. Explore curriculum depth, electives, and learning pathways aligned with industry expectations.', link: '/departments', linkText: 'Browse Course Paths' },
  'program': { text: '🎓 SJBIT offers UG, PG, and research programs with future-ready specializations. Review program structure, outcomes, and academic progression to choose your ideal track.', link: '/programs', linkText: 'View All Programs' },
  'academic': { text: '📝 Academics at SJBIT are structured for consistency and excellence with planned calendars, evaluation transparency, and strong faculty guidance throughout every semester.', link: '/academics', linkText: 'View Academic Framework' },
  'campus': { text: '🏫 Campus life blends modern infrastructure, active student communities, and a vibrant learning environment. Explore facilities, experiences, and support systems designed for holistic growth.', link: '/campus-life', linkText: 'Take Campus Tour' },
  'research': { text: '🔬 Research culture at SJBIT encourages innovation, publications, and solution-building. Explore focus areas, project opportunities, and initiatives that connect ideas with real-world impact.', link: '/research', linkText: 'Discover Research Ecosystem' },
  'student': { text: '👨‍🎓 Student services include academic support, activity platforms, and development resources. Access tools and opportunities that help you grow beyond the classroom.', link: '/students', linkText: 'Open Student Hub' },
  'about': { text: '📖 Learn what defines SJBIT: mission, values, institutional journey, and commitment to quality technical education. See why students and families trust this ecosystem.', link: '/about', linkText: 'Know SJBIT Better' },
  'hostel': { text: '🏠 Hostel life is safe, supportive, and student-friendly with essential amenities and campus connectivity. Explore accommodation information and living support details.', link: '/campus-life', linkText: 'View Hostel Facilities' },
  'fees': { text: '💰 Get clear fee and payment guidance, including admission-linked details and available support options. Review cost planning information before you apply.', link: '/admissions', linkText: 'Check Fee Information' },
  'scholarship': { text: '🎯 Scholarship and aid opportunities help deserving students pursue education confidently. Explore available support routes and eligibility directions through Admissions.', link: '/admissions', linkText: 'Explore Scholarship Support' },
  'events': { text: '🎉 Events at SJBIT include technical fests, workshops, competitions, and cultural showcases that build confidence, creativity, and teamwork.', link: '/campus-life', linkText: 'View Event Life at SJBIT' },
  'clubs': { text: '🎭 Student clubs power innovation, leadership, and collaboration through technical and non-technical communities. Find where your passion and skills can grow.', link: '/campus-life', linkText: 'Explore Student Clubs' },
  'library': { text: '📚 Library resources support deep learning with curated collections and academic access support. Discover how students use these resources for coursework and research.', link: '/campus-life', linkText: 'See Library Resources' },
  'sports': { text: '⚽ Sports culture promotes fitness, discipline, and team spirit with active participation opportunities. Explore facilities and student engagement in athletics.', link: '/campus-life', linkText: 'View Sports Facilities' },
  'faq': { text: '❓ Get quick answers to common admission, academics, campus, and student-life questions. Ask any specific query and I will guide you to the right section instantly.', link: '/contact', linkText: 'Ask More Questions' },
  'home': { text: '🏠 Start from home to explore admissions, academics, placements, campus life, and more in one place.', link: '/', linkText: 'Go to Home' }
};

const QUICK_BUTTONS = [
{ label: 'Admissions', keyword: 'admission' },
{ label: 'Placements', keyword: 'placement' },
{ label: 'Departments', keyword: 'department' },
{ label: 'Courses', keyword: 'course' },
{ label: 'Programs', keyword: 'program' },
{ label: 'Academics', keyword: 'academic' },
{ label: 'Campus', keyword: 'campus' },
{ label: 'Research', keyword: 'research' },
{ label: 'Students', keyword: 'student' },
{ label: 'Alumni', keyword: 'alumni' },
{ label: 'About', keyword: 'about' },
{ label: 'Contact', keyword: 'contact' },
{ label: 'Hostel', keyword: 'hostel' },
{ label: 'Fees', keyword: 'fees' },
{ label: 'Scholarship', keyword: 'scholarship' },
{ label: 'Events', keyword: 'events' },
{ label: 'Clubs', keyword: 'clubs' },
{ label: 'Library', keyword: 'library' },
{ label: 'Sports', keyword: 'sports' },
{ label: 'FAQ', keyword: 'faq' }
];


const SUGGESTED_QUESTIONS = {
  'admission': ['scholarship', 'fees', 'academic'],
  'placement': ['alumni', 'research', 'department'],
  'department': ['course', 'program', 'academic'],
  'campus': ['hostel', 'clubs', 'sports'],
  'contact': ['admission', 'placement'],
  'alumni': ['placement', 'research'],
  'course': ['program', 'academic', 'admission'],
  'default': ['admission', 'placement', 'department', 'campus']
};

export default function SmartChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([INITIAL_MESSAGE]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [speakingMessageId, setSpeakingMessageId] = useState(null);
  const [copiedMessageId, setCopiedMessageId] = useState(null);
  const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(-1);
  const [feedback, setFeedback] = useState({});
  
  const messageIdRef = useRef(2);
  const messagesEndRef = useRef(null);
  const speechRecognitionRef = useRef(null);
  const preferredVoiceRef = useRef(null);
  const router = useRouter();

  // Load chat history from localStorage
  useEffect(() => {
    const savedMessages = localStorage.getItem('sjbit_chat_history');
    if (savedMessages) {
      try {
        setMessages(JSON.parse(savedMessages));
        messageIdRef.current = Math.max(...JSON.parse(savedMessages).map(m => m.id)) + 1;
      } catch (e) {
        console.error('Failed to load chat history:', e);
      }
    }
  }, []);

  // Save chat history to localStorage
  useEffect(() => {
    localStorage.setItem('sjbit_chat_history', JSON.stringify(messages));
  }, [messages]);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, scrollToBottom]);

  useEffect(() => {
    const handleOpenChat = () => setIsOpen(true);
    window.addEventListener('open-sjbit-chat', handleOpenChat);
    return () => window.removeEventListener('open-sjbit-chat', handleOpenChat);
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined' || !window.speechSynthesis) return;

    const pickPreferredVoice = () => {
      const voices = window.speechSynthesis.getVoices();
      if (!voices.length) return;

      const preferredNames = [
        'zira', 'samantha', 'victoria', 'karen', 'moira', 'tessa',
        'female', 'woman', 'girl', 'google us english'
      ];

      const preferredVoice = voices.find((voice) => {
        const name = voice.name.toLowerCase();
        return preferredNames.some((term) => name.includes(term));
      });

      preferredVoiceRef.current =
        preferredVoice ||
        voices.find((voice) => voice.lang?.toLowerCase().startsWith('en-in')) ||
        voices.find((voice) => voice.lang?.toLowerCase().startsWith('en')) ||
        voices[0];
    };

    pickPreferredVoice();
    window.speechSynthesis.onvoiceschanged = pickPreferredVoice;

    return () => {
      window.speechSynthesis.onvoiceschanged = null;
    };
  }, []);

  const findBestMatch = useCallback((userInput) => {
    const lowerInput = userInput.toLowerCase();
    for (const [keyword, response] of Object.entries(KEYWORD_RESPONSES)) {
      if (lowerInput.includes(keyword)) {
        return response;
      }
    }
    return null;
  }, []);

  const createMessage = useCallback((text, sender, extra = {}) => {
    const nextId = messageIdRef.current;
    messageIdRef.current += 1;

    return {
      id: nextId,
      text,
      sender,
      timestamp: new Date(),
      ...extra
    };
  }, []);

  const inputSuggestions = useMemo(() => {
    const query = inputValue.trim().toLowerCase();
    if (!query) return [];

    const directMatches = QUICK_BUTTONS.filter((btn) =>
      btn.label.toLowerCase().includes(query) || btn.keyword.includes(query)
    ).slice(0, 5);

    if (directMatches.length > 0) return directMatches;

    const relatedKeywords =
      Object.entries(SUGGESTED_QUESTIONS).find(([keyword]) =>
        keyword !== 'default' && query.includes(keyword)
      )?.[1] || SUGGESTED_QUESTIONS.default;

    return relatedKeywords
      .map((keyword) => QUICK_BUTTONS.find((btn) => btn.keyword === keyword))
      .filter(Boolean)
      .slice(0, 5);
  }, [inputValue]);

  const copyToClipboard = useCallback((text, msgId) => {
    navigator.clipboard.writeText(text);
    setCopiedMessageId(msgId);
    setTimeout(() => setCopiedMessageId(null), 2000);
  }, []);

  const handleFeedback = useCallback((msgId, isHelpful) => {
    setFeedback(prev => ({
      ...prev,
      [msgId]: isHelpful
    }));
  }, []);

  const requestBotReply = useCallback(async (text, history) => {
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        message: text,
        history: history.map((msg) => ({ text: msg.text, sender: msg.sender }))
      })
    });

    if (!response.ok) {
      throw new Error('Failed to get chatbot response');
    }

    return response.json();
  }, []);

  // Speech Recognition (Voice to Text)
  const startVoiceInput = useCallback(() => {
    if (typeof window === 'undefined') return;
    
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert('Speech Recognition not supported in your browser');
      return;
    }

    if (isListening) {
      speechRecognitionRef.current?.stop();
      setIsListening(false);
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = 'en-US';

    recognition.onstart = () => setIsListening(true);
    
    recognition.onresult = (event) => {
      let transcript = '';
      for (let i = event.resultIndex; i < event.results.length; i++) {
        transcript += event.results[i][0].transcript;
      }
      if (transcript) {
        setInputValue(transcript);
      }
    };

    recognition.onerror = (event) => {
      console.error('Speech recognition error:', event.error);
      setIsListening(false);
    };

    recognition.onend = () => setIsListening(false);

    recognition.start();
    speechRecognitionRef.current = recognition;
  }, [isListening]);

  // Text to Speech (Voice Output)
  const speakMessage = useCallback((text, msgId) => {
    if (typeof window === 'undefined') return;

    window.speechSynthesis.cancel();

    if (speakingMessageId === msgId) {
      setSpeakingMessageId(null);
      return;
    }

    const utterance = new SpeechSynthesisUtterance(text);
    if (preferredVoiceRef.current) {
      utterance.voice = preferredVoiceRef.current;
      utterance.lang = preferredVoiceRef.current.lang || 'en-US';
    } else {
      utterance.lang = 'en-US';
    }
    utterance.rate = 0.9;
    utterance.pitch = 1.15;
    utterance.volume = 1;
    utterance.onend = () => setSpeakingMessageId(null);

    setSpeakingMessageId(msgId);
    window.speechSynthesis.speak(utterance);
  }, [speakingMessageId]);

  const sendMessage = useCallback(async (rawText) => {
    const text = rawText.trim();
    if (!text || isTyping) return;

    const userMessage = createMessage(text, 'user');
    const historyWithUser = [...messages, userMessage];

    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    try {
      const aiResponse = await requestBotReply(text, historyWithUser);
      const botMessage = createMessage(
        aiResponse?.reply || '❓ Sorry, I can help with admissions, placements, departments, contact, alumni, or campus life.',
        'bot',
        {
          link: aiResponse?.link || undefined,
          linkText: aiResponse?.linkText || undefined
        }
      );
      setMessages((prev) => [...prev, botMessage]);
    } catch {
      const fallback = findBestMatch(text);
      const botMessage = createMessage(
        fallback?.text || '❓ Sorry, I can help with admissions, placements, departments, contact, alumni, or campus life.',
        'bot',
        {
          link: fallback?.link,
          linkText: fallback?.linkText
        }
      );
      setMessages((prev) => [...prev, botMessage]);
    } finally {
      setIsTyping(false);
    }
  }, [createMessage, findBestMatch, isTyping, messages, requestBotReply]);

  const handleSendMessage = useCallback((e) => {
    if (inputSuggestions.length > 0 && e.key === 'ArrowDown') {
      e.preventDefault();
      setActiveSuggestionIndex((prev) => (prev + 1) % inputSuggestions.length);
      return;
    }

    if (inputSuggestions.length > 0 && e.key === 'ArrowUp') {
      e.preventDefault();
      setActiveSuggestionIndex((prev) => (prev <= 0 ? inputSuggestions.length - 1 : prev - 1));
      return;
    }

    if (e.key === 'Escape') {
      setActiveSuggestionIndex(-1);
      return;
    }

    if (e.key === 'Enter' && activeSuggestionIndex >= 0 && inputSuggestions[activeSuggestionIndex]) {
      e.preventDefault();
      sendMessage(inputSuggestions[activeSuggestionIndex].keyword);
      setActiveSuggestionIndex(-1);
      return;
    }

    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage(inputValue);
    }
  }, [activeSuggestionIndex, inputSuggestions, inputValue, sendMessage]);

  const handleFormSubmit = useCallback((e) => {
    e.preventDefault();
    sendMessage(inputValue);
  }, [inputValue, sendMessage]);

  const handleQuickButton = useCallback((keyword) => {
    setActiveSuggestionIndex(-1);
    sendMessage(keyword);
  }, [sendMessage]);

  const handleNavigate = useCallback((link) => {
    router.push(link);
    setIsOpen(false);
  }, [router]);

  const handleRestart = useCallback(() => {
    setMessages([INITIAL_MESSAGE]);
    messageIdRef.current = 2;
    setInputValue('');
    setIsTyping(false);
  }, []);

  return (
    <>
      {/* Floating Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-gradient-to-br from-[#E36A0A] to-[#F59E0B] text-white rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-300 flex items-center justify-center group"
        title="Chat with SJBIT Assistant"
      >
        <MessageCircle className="w-8 h-8 group-hover:rotate-12 transition-transform" />
        {/* Pulsing dot */}
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full animate-pulse" />
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed left-4 right-4 bottom-24 sm:left-auto sm:right-6 sm:bottom-28 z-50 w-auto sm:w-[420px] max-h-[calc(100dvh-6rem)] sm:max-h-[85vh] bg-white rounded-3xl shadow-2xl flex flex-col border-2 border-gray-100 animate-slide-up">
          
          {/* Header */}
          <div className="bg-gradient-to-r from-[#E36A0A] via-[#F59E0B] to-[#E36A0A] text-white p-5 rounded-t-3xl flex items-center justify-between shadow-lg">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 backdrop-blur-lg rounded-full flex items-center justify-center">
                <Sparkles className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg">SJBIT Assistant</h3>
                <p className="text-xs text-white/80 flex items-center gap-1">
                  <span className="w-2 h-2 bg-green-300 rounded-full animate-pulse" />
                  Always online
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              {messages.length > 1 && (
                <button
                  onClick={handleRestart}
                  className="bg-white/20 hover:bg-white/40 p-2 rounded-full transition-all duration-200"
                  title="New conversation"
                >
                  <RotateCcw className="w-5 h-5" />
                </button>
              )}
              <button
                onClick={() => setIsOpen(false)}
                className="bg-white/20 hover:bg-white/40 p-2 rounded-full transition-all duration-200"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Messages Container - Enhanced */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4 bg-gradient-to-b from-white to-gray-50/50">
            {/* Message count indicator */}
            {messages.length > 1 && (
              <div className="text-center text-xs text-gray-400 mb-3">
                {messages.length - 1} message{messages.length !== 2 ? 's' : ''} • Chat will reload on refresh
              </div>
            )}
            
            {messages.map((msg) => (
              <div key={msg.id} className="animate-scale-in">
                <MessageBubble 
                  msg={msg} 
                  onNavigate={handleNavigate} 
                  onSpeak={speakMessage} 
                  speakingId={speakingMessageId}
                  onCopy={copyToClipboard}
                  copiedId={copiedMessageId}
                  onFeedback={handleFeedback}
                  feedback={feedback}
                />
              </div>
            ))}
            
            {isTyping && <TypingIndicator />}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Buttons - Show when at initial message or after restart */}
          {messages.length === 1 && (
            <div className="px-4 py-3 border-t-2 border-gray-100 flex flex-wrap gap-2.5 bg-gradient-to-b from-gray-50 to-white overflow-y-auto" style={{ maxHeight: '130px' }}>
              {QUICK_BUTTONS.map((btn) => (
                <button
                  key={btn.keyword}
                  onClick={() => handleQuickButton(btn.keyword)}
                  className="text-xs bg-white border-2 border-[#E36A0A]/30 text-[#E36A0A] px-4 py-2 rounded-full hover:bg-gradient-to-r hover:from-[#E36A0A] hover:to-[#F59E0B] hover:text-white hover:border-transparent transition-all duration-200 font-semibold whitespace-nowrap shadow-sm hover:shadow-md"
                >
                  {btn.label}
                </button>
              ))}
            </div>
          )}

          {/* Input Form - Enhanced */}
          <form onSubmit={handleFormSubmit} className="border-t border-gray-200 p-4 bg-white rounded-b-3xl shadow-lg relative">
            {inputSuggestions.length > 0 && (
              <div className="absolute left-4 right-4 bottom-[4.6rem] bg-white border border-blue-100 rounded-2xl shadow-xl p-3 z-10 animate-scale-in" role="listbox" id="chat-suggestion-list" aria-label="Suggested topics">
                <div className="flex items-center gap-2 mb-2">
                  <Lightbulb className="w-4 h-4 text-blue-500" />
                  <span className="text-xs font-semibold text-gray-600">Suggestions</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {inputSuggestions.map((item, index) => (
                    <button
                      key={item.keyword}
                      type="button"
                      role="option"
                      aria-selected={activeSuggestionIndex === index}
                      onClick={() => handleQuickButton(item.keyword)}
                      className={`text-xs border px-3 py-1.5 rounded-full transition-all duration-200 font-semibold whitespace-nowrap ${
                        activeSuggestionIndex === index
                          ? 'bg-blue-600 border-blue-600 text-white'
                          : 'bg-blue-50 border-blue-200 text-blue-700 hover:bg-blue-100 hover:border-blue-300'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="flex gap-2 items-center">
              {/* Microphone Button */}
              <button
                type="button"
                onClick={startVoiceInput}
                className={`p-3 rounded-full transition-all duration-200 ${
                  isListening
                    ? 'bg-red-500 text-white animate-pulse'
                    : 'bg-gray-100 text-gray-600 hover:bg-orange-100 hover:text-[#E36A0A]'
                }`}
                title={isListening ? 'Listening...' : 'Click to speak'}
              >
                <Mic className="w-5 h-5" />
              </button>

              <input
                type="text"
                value={inputValue}
                onChange={(e) => {
                  setInputValue(e.target.value);
                  setActiveSuggestionIndex(-1);
                }}
                onKeyDown={handleSendMessage}
                disabled={isTyping}
                aria-label="Chat input"
                aria-autocomplete="list"
                aria-expanded={inputSuggestions.length > 0}
                aria-controls="chat-suggestion-list"
                placeholder="Ask about admissions, placements... (Enter to send, Shift+Enter for new line)"
                className="flex-1 border-2 border-gray-200 rounded-full px-5 py-3 text-sm focus:outline-none focus:border-[#E36A0A] bg-gray-50 transition-all duration-200 resize-none"
              />
              <button
                type="submit"
                disabled={isTyping || !inputValue.trim()}
                className="bg-gradient-to-r from-[#E36A0A] to-[#F59E0B] text-white rounded-full p-3 hover:shadow-lg hover:scale-105 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}

// Memoized sub-components for performance
const MessageBubble = ({ msg, onNavigate, onSpeak, speakingId, onCopy, copiedId, onFeedback, feedback }) => {
  const formatTime = (date) => {
    const now = new Date();
    const msgDate = new Date(date);
    const diffMs = now - msgDate;
    const diffMins = Math.floor(diffMs / 60000);
    
    if (diffMins < 1) return 'just now';
    if (diffMins < 60) return `${diffMins}m ago`;
    const diffHours = Math.floor(diffMins / 60);
    if (diffHours < 24) return `${diffHours}h ago`;
    const diffDays = Math.floor(diffHours / 24);
    if (diffDays < 7) return `${diffDays}d ago`;
    return msgDate.toLocaleDateString();
  };

  return (
    <div className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'} gap-2 group`}>
      <div className={`max-w-[85%] transition-all duration-200 ${
        msg.sender === 'user' ? '' : 'flex-1'
      }`}>
        <div className={`px-5 py-4 rounded-2xl shadow-md transition-all duration-200 ${
          msg.sender === 'user' 
            ? 'bg-gradient-to-r from-[#E36A0A] to-[#F59E0B] text-white rounded-br-none' 
            : 'bg-white text-gray-800 border-2 border-gray-100 rounded-bl-none hover:border-[#E36A0A]/30'
        }`}>
          <div className="flex items-start justify-between gap-2">
            <p className="text-sm leading-relaxed whitespace-pre-wrap flex-1 break-words">{msg.text}</p>
            {msg.sender === 'bot' && (
              <button
                onClick={() => onSpeak(msg.text, msg.id)}
                className={`ml-2 flex-shrink-0 p-2 rounded-lg transition-all duration-200 ${
                  speakingId === msg.id
                    ? 'bg-[#E36A0A] text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-orange-100 hover:text-[#E36A0A]'
                }`}
                title="Listen to this message"
              >
                <Volume2 className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Action buttons for bot messages */}
          {msg.sender === 'bot' && (
            <div className="flex items-center gap-1 mt-3 pt-3 border-t border-gray-200">
              <button
                onClick={() => onCopy(msg.text, msg.id)}
                className={`text-xs px-2 py-1.5 rounded-lg transition-all flex items-center gap-1 ${
                  copiedId === msg.id
                    ? 'bg-green-100 text-green-700'
                    : 'bg-gray-100 text-gray-600 hover:bg-blue-100 hover:text-blue-700'
                }`}
                title="Copy this message"
              >
                <Copy className="w-3.5 h-3.5" />
                {copiedId === msg.id ? 'Copied!' : 'Copy'}
              </button>

              <div className="flex-1" />

              {/* Feedback buttons */}
              <button
                onClick={() => onFeedback(msg.id, true)}
                className={`text-xs px-2 py-1.5 rounded-lg transition-all flex items-center gap-1 ${
                  feedback?.[msg.id] === true
                    ? 'bg-green-100 text-green-700'
                    : 'bg-gray-100 text-gray-600 hover:bg-green-100 hover:text-green-700'
                }`}
                title="This was helpful"
              >
                <ThumbsUp className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => onFeedback(msg.id, false)}
                className={`text-xs px-2 py-1.5 rounded-lg transition-all flex items-center gap-1 ${
                  feedback?.[msg.id] === false
                    ? 'bg-red-100 text-red-700'
                    : 'bg-gray-100 text-gray-600 hover:bg-red-100 hover:text-red-700'
                }`}
                title="This wasn't helpful"
              >
                <ThumbsDown className="w-3.5 h-3.5" />
              </button>
            </div>
          )}

          {/* Link button */}
          {msg.link && (
            <button 
              onClick={() => onNavigate(msg.link)} 
              className={`mt-3 px-4 py-2 rounded-lg text-xs font-semibold transition-all duration-200 w-full ${
                msg.sender === 'user'
                  ? 'bg-white/20 text-white hover:bg-white/30'
                  : 'bg-gradient-to-r from-[#E36A0A] to-[#F59E0B] text-white hover:shadow-lg'
              }`}
            >
              {msg.linkText} ↗
            </button>
          )}
        </div>

        {/* Timestamp */}
        <div className={`text-xs text-gray-400 mt-1 flex items-center gap-1 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
          <Clock className="w-3 h-3" />
          {formatTime(msg.timestamp)}
        </div>
      </div>
    </div>
  );
};

const TypingIndicator = () => (
  <div className="flex justify-start animate-fade-in">
    <div className="bg-white border-2 border-gray-100 px-5 py-4 rounded-2xl rounded-bl-none shadow-md">
      <div className="flex gap-2 items-center">
        <span className="text-xs text-gray-600 font-medium">Composing</span>
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 bg-[#E36A0A] rounded-full animate-bounce" style={{ animationDelay: '0s' }}/>
          <div className="w-2.5 h-2.5 bg-[#F59E0B] rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}/>
          <div className="w-2.5 h-2.5 bg-[#E36A0A] rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}/>
        </div>
      </div>
    </div>
  </div>
);
