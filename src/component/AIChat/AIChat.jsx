
import { useState, useRef, useEffect } from "react";
import {
  MessageCircle,
  X,
  Send,
  Bot,
  Sparkles,
  RotateCcw,
} from "lucide-react";

import "./AIChat.css";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const suggestions = [
  "Tell me about Abbas",
  "What projects has he built?",
  "What are his technical skills?",
  "Is Abbas available for hiring?",
];

const welcomeMessage = {
  role: "assistant",
  text: "Hi! 👋 I'm Abbas's AI assistant. I can help you explore his experience, projects, technical skills and professional background. What would you like to know?",
};

const createId = () => crypto.randomUUID();

function AIChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([welcomeMessage]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  // One visitor ID for this browser session.
  const visitorIdRef = useRef(createId());

  // A new ID is created whenever a new conversation starts.
  const conversationIdRef = useRef(createId());

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, loading]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  // Save the completed exchange separately from the AI request.
  const saveConversation = (userMessage, assistantMessage) => {
    fetch("/api/log-chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        conversationId: conversationIdRef.current,
        visitorId: visitorIdRef.current,
        userMessage,
        assistantMessage,
      }),
    }).catch((error) => {
      console.error("Unable to send conversation log:", error);
    });
  };

  const sendMessage = async (text = input) => {
    const message = text.trim();

    if (!message || loading) return;

    const previousMessages = messages
      .slice(1)
      .filter(
        (item) =>
          item.role === "user" || item.role === "assistant"
      );

    const history = previousMessages.slice(-10).map((item) => ({
      role: item.role === "assistant" ? "model" : "user",
      text: item.text,
    }));

    setMessages((prev) => [
      ...prev,
      {
        role: "user",
        text: message,
      },
    ]);

    setInput("");
    setLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message,
          history,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.error || "Unable to get AI response."
        );
      }

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          text: data.reply,
        },
      ]);

      // Logging is separate. It does not delay displaying the AI reply.
      saveConversation(message, data.reply);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          text:
            error.message ||
            "Something went wrong. Please try again.",
          isError: true,
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const resetChat = () => {
    setMessages([welcomeMessage]);
    setInput("");

    // Keep the visitor ID but start a fresh conversation.
    conversationIdRef.current = createId();
  };

  return (
    <div className="ai-chat-container">
      {/* Floating Button */}
      {!isOpen && (
        <button
          className="ai-chat-trigger"
          onClick={() => setIsOpen(true)}
          aria-label="Open Ask Abbas AI"
        >
          <Sparkles size={21} />
          <span>Ask Abbas AI</span>
          <span className="ai-online-dot" />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="ai-chat-window">
          {/* Header */}
          <div className="ai-chat-header">
            <div className="ai-header-profile">
              <div className="ai-avatar">
                <Bot size={22} />
              </div>

              <div>
                <h3>Ask Abbas AI</h3>
                <p>
                  <span className="ai-status-dot" />
                  AI Portfolio Assistant
                </p>
              </div>
            </div>

            <div className="ai-header-actions">
              <button
                onClick={resetChat}
                title="New conversation"
                aria-label="New conversation"
              >
                <RotateCcw size={17} />
              </button>

              <button
                onClick={() => setIsOpen(false)}
                title="Close chat"
                aria-label="Close chat"
              >
                <X size={21} />
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="ai-chat-messages">
            <div className="ai-chat-date">
              YOUR AI PORTFOLIO ASSISTANT
            </div>

            {messages.map((item, index) => (
              <div
                key={index}
                className={`ai-message-row ${
                  item.role === "user"
                    ? "ai-user-row"
                    : "ai-assistant-row"
                }`}
              >
                {item.role === "assistant" && (
                  <div className="ai-message-avatar">
                    <Bot size={16} />
                  </div>
                )}

                <div
                  className={`ai-message ${
                    item.role === "user"
                      ? "ai-user-message"
                      : "ai-bot-message"
                  } ${item.isError ? "ai-error-message" : ""}`}
                >
                  {item.role === "assistant" ? (
                    <ReactMarkdown
                      remarkPlugins={[remarkGfm]}
                      components={{
                        a: ({ children, href }) => (
                          <a
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {children}
                          </a>
                        ),
                      }}
                    >
                      {item.text}
                    </ReactMarkdown>
                  ) : (
                    item.text
                  )}
                </div>
              </div>
            ))}

            {loading && (
              <div className="ai-message-row ai-assistant-row">
                <div className="ai-message-avatar">
                  <Bot size={16} />
                </div>

                <div className="ai-message ai-bot-message ai-typing">
                  <span />
                  <span />
                  <span />
                </div>
              </div>
            )}

            {messages.length === 1 && (
              <div className="ai-suggestions">
                <p>TRY ASKING</p>

                {suggestions.map((item) => (
                  <button
                    key={item}
                    onClick={() => sendMessage(item)}
                    disabled={loading}
                  >
                    {item}
                  </button>
                ))}
              </div>
            )}

            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <form
            className="ai-chat-input-area"
            onSubmit={(e) => {
              e.preventDefault();
              sendMessage();
            }}
          >
            <input
              ref={inputRef}
              type="text"
              placeholder="Ask me anything..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              maxLength={2000}
              disabled={loading}
            />

            <button
              type="submit"
              disabled={!input.trim() || loading}
              aria-label="Send message"
            >
              <Send size={18} />
            </button>
          </form>

          <div className="ai-chat-footer">
            Powered by Gemini AI
          </div>
        </div>
      )}
    </div>
  );
}

export default AIChat;
