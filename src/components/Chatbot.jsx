import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, RefreshCw, Send, Briefcase, Code, Folder, User } from 'lucide-react';
import './Chatbot.css';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [showOptions, setShowOptions] = useState(true);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const initialMessage = {
    id: 1,
    type: 'ai',
    text: "Hi! I'm Sampath Gonnuru's AI twin. Ask me anything about my work, experience, or projects."
  };

  const options = [
    { id: 'exp', icon: <Briefcase size={16} />, text: "What's your experience?" },
    { id: 'skills', icon: <Code size={16} />, text: "What skills do you have?" },
    { id: 'built', icon: <Folder size={16} />, text: "What have you built?" },
    { id: 'who', icon: <User size={16} />, text: "Who are you?" }
  ];

  const mockedReplies = {
    "What's your experience?": "I have over six years of experience in product management, currently serving as a Senior Product Manager at The Home Depot. My journey began as a Data Scientist at Turiya Softech Pvt Ltd, where I honed my skills in data analytics, predictive modeling, and SQL. This technical background has been invaluable in my transition to product management, allowing me to approach product strategy with a data-driven mindset.\n\nIn my current role, I've led initiatives that resulted in a 34% increase in retention and contributed to $8 million in annual recurring revenue growth through AI-driven features. I've also developed a comprehensive experimentation framework that supports our A/B testing processes. This unique blend of product management and data science not only informs our decision-making but also helps us build more effective and impactful products. I'm always eager to take on new challenges and explore innovative solutions in the tech space.",
    "What skills do you have?": "I bring a unique blend of skills as a Senior Product Manager with a strong background in data science. My expertise includes product strategy, A/B testing, and developing machine learning and AI-driven products. I leverage my data analytics skills using tools like SQL and Python to derive insights that inform product decisions. This data-driven mindset has been instrumental in achieving significant milestones, such as a 34% increase in retention and driving $8 million in annual recurring revenue through the implementation of AI features.\n\nIn addition to my technical skills, I excel in roadmap planning and stakeholder management, ensuring alignment across teams and effective communication of product vision. My experience in building experimentation frameworks allows me to iteratively test and refine product features, maximizing their potential impact on users. Overall, my combination of product management and data science expertise enables me to navigate complex challenges and deliver valuable solutions.",
    "What have you built?": "At The Home Depot, I've had the opportunity to lead several impactful initiatives that combine my expertise in data science with product management. One of my major achievements was developing and implementing an experimentation framework that allowed us to more effectively assess the performance of new features and enhancements. This framework has empowered our team to run A/B tests systematically, leading to a 34% increase in user retention and significantly boosting our decision-making process with data-driven insights.\n\nAdditionally, I spearheaded the integration of AI-driven features into our product offerings, which contributed to an $8M increase in annual recurring revenue (ARR). This effort involved close collaboration with engineering and design teams to ensure that these features not only met customer needs but were also aligned with our overall product strategy. My background in data science has been invaluable in this regard, as it allows me to bridge the gap between technical feasibility and market demand effectively.",
    "Who are you?": "Hi! I’m Sampath Gonnuru's AI twin, here to assist you with insights and knowledge stemming from Sampath’s background as a Senior Product Manager with a strong foundation in data science. Currently, he leads product initiatives at Meridian Technologies, leveraging over six years of product management experience and three years of prior expertise as a data scientist. This unique combination allows him to effectively drive data-driven product strategies and implement innovative features that enhance customer retention and overall product performance.\n\nWith a proven track record of achieving significant business growth—such as an impressive 34% increase in retention and contributing $8 million in annual recurring revenue from AI-driven features—Sampath excels in areas like A/B testing, machine learning products, and the development of robust experimentation frameworks. If you have any questions about product strategy, data analytics, or how to harness the power of data in decision-making, feel free to ask!"
  };

  useEffect(() => {
    // Initialize with welcome message when opened for the first time
    if (isOpen && messages.length === 0) {
      setMessages([initialMessage]);
    }
  }, [isOpen]);

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const getSmartReply = (text) => {
    const lowerText = text.toLowerCase();
    
    if (/linkedin|linked\s*in/i.test(lowerText)) {
      return "I can't provide personal contact information or LinkedIn IDs, but I'm here to help with any questions you might have about product management, data science, or how to leverage AI and analytics effectively in business. If you're looking to connect professionally, I recommend using LinkedIn’s search features and exploring relevant industry groups to find profiles aligned with your interests.\n\nFeel free to ask about product strategy, A/B testing, or any other topic where my expertise can assist you!";
    }
    
    if (/(fuck|shit|bitch|asshole|damn|crap)/i.test(lowerText)) {
      return "It sounds like you might be expressing some frustration! If there's something specific you'd like to talk about or any particular challenge you're facing, feel free to share. I'm here to help with any questions you might have, whether it's about product management, data science, or anything else on your mind.\n\nRemember, a data-driven approach can often help clarify complex situations, so if you need insights or strategies, just let me know!";
    }

    if (/contact/i.test(lowerText)) {
      return "I'm glad you're interested in getting in touch! While I can’t share personal contact information directly, I can help guide you in the right direction based on the context of your inquiry. If you're looking to connect with Sampath Gonnuru for professional reasons, I recommend visiting his LinkedIn profile for networking opportunities.\n\nIf you have specific questions about product management, data science, or any of the projects Sampath has worked on, feel free to ask me! I'm here to provide insights and information based on his expertise and experience.";
    }

    // Default Fallback
    return "It sounds like you're unsure about something specific. If you have a particular topic or question in mind, feel free to share! As a Senior Product Manager with a data science background, I can help with areas related to product strategy, data analytics, and AI implementations.\n\nWhether you’re looking for insights into product management practices, understanding the impact of data-driven decision-making, or seeking advice on how to leverage experimentation frameworks, I'm here to assist! Just let me know what you're curious about, and we can dive in.";
  };

  const simulateAiResponse = (replyText) => {
    setIsTyping(true);
    setTimeout(() => {
      const aiReply = { id: Date.now() + 1, type: 'ai', text: replyText };
      setMessages(prev => [...prev, aiReply]);
      setIsTyping(false);
    }, 1200);
  };

  const handleOptionClick = (optionText) => {
    setShowOptions(false);
    const newUserMsg = { id: Date.now(), type: 'user', text: optionText };
    setMessages(prev => [...prev, newUserMsg]);
    simulateAiResponse(mockedReplies[optionText]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    setShowOptions(false);
    const userText = inputValue.trim();
    const newUserMsg = { id: Date.now(), type: 'user', text: userText };
    setMessages(prev => [...prev, newUserMsg]);
    setInputValue('');
    
    simulateAiResponse(getSmartReply(userText));
  };

  const handleReset = () => {
    setMessages([initialMessage]);
    setShowOptions(true);
    setIsTyping(false);
  };

  return (
    <div className="chatbot-wrapper">
      {!isOpen && (
        <button className="chat-fab" onClick={() => setIsOpen(true)}>
          <MessageCircle size={24} />
        </button>
      )}

      {isOpen && (
        <div className="chatbot-window">
          {/* Header */}
          <div className="chatbot-header">
            <div className="header-title">
              <span className="online-dot"></span>
              Chat with Sampath Gonnuru
            </div>
            <div className="header-actions">
              <button className="icon-btn" onClick={handleReset} title="Reset Chat">
                <RefreshCw size={16} />
              </button>
              <button className="icon-btn" onClick={() => setIsOpen(false)} title="Close">
                <X size={20} />
              </button>
            </div>
          </div>

          {/* Messages Area */}
          <div className="chatbot-messages">
            {messages.map((msg) => (
              <div key={msg.id} className={`message ${msg.type === 'ai' ? 'message-ai' : 'message-user'}`}>
                {msg.text.split('\n').map((line, i) => (
                  <React.Fragment key={i}>
                    {line}
                    {i !== msg.text.split('\n').length - 1 && <br />}
                  </React.Fragment>
                ))}
              </div>
            ))}
            
            {isTyping && (
              <div className="typing-indicator">
                <span className="typing-dot"></span>
                <span className="typing-dot"></span>
                <span className="typing-dot"></span>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Options */}
          {showOptions && (
            <div className="chatbot-options">
              {options.map((opt) => (
                <button 
                  key={opt.id} 
                  className="option-btn"
                  onClick={() => handleOptionClick(opt.text)}
                >
                  <span className="option-icon">{opt.icon}</span>
                  {opt.text}
                </button>
              ))}
            </div>
          )}

          {/* Input Area */}
          <div className="chatbot-input-container">
            <form onSubmit={handleSubmit} className="chatbot-form">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Message the AI..."
                className="chatbot-input"
                disabled={isTyping}
              />
              <button type="submit" className="send-btn" disabled={!inputValue.trim() || isTyping}>
                <Send size={18} />
              </button>
            </form>
            <div className="chatbot-disclaimer">
              Disclaimer: This is my AI-powered twin. It may not be 100% accurate and should be verified.
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
