// src/components/ChatBot.jsx
import { useState, useRef, useEffect } from "react";
import { GoogleGenAI } from "@google/genai";
import { TANMAY_CONTEXT } from "../data/tanmayContext";

const GREETING =
  "Hello, I'm Tanmay's assistant. Ask me anything about Tanmay's education, skills, certifications, or projects — I'll give you information. If you have a job description, you can paste it and I'll tell you how well Tanmay fits. I'm designed to give only truthful answers.";

// NOTE: put your key in an env var, never hardcode it in shipped frontend code.
// Vite: import.meta.env.VITE_GEMINI_API_KEY  |  CRA: process.env.REACT_APP_GEMINI_API_KEY
const ai = new GoogleGenAI({
  apiKey: import.meta.env.VITE_GEMINI_API_KEY,
});

// --- tiny, dependency-free markdown renderer -------------------------
// Handles **bold** and "- "/"* " bullet lines so raw asterisks never
// leak into the UI as literal characters.
function renderInline(line, keyPrefix) {
  const parts = line.split(/(\*\*[^*]+\*\*)/g).filter(Boolean);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={`${keyPrefix}-${i}`}>{part.slice(2, -2)}</strong>;
    }
    return <span key={`${keyPrefix}-${i}`}>{part}</span>;
  });
}

function FormattedMessage({ text }) {
  const lines = text.split("\n");
  return (
    <>
      {lines.map((line, i) => {
        const trimmed = line.trim();
        const isBullet = /^[-*]\s+/.test(trimmed);
        if (isBullet) {
          return (
            <div key={i} className="flex gap-1.5 pl-0.5">
              <span>•</span>
              <span>{renderInline(trimmed.replace(/^[-*]\s+/, ""), i)}</span>
            </div>
          );
        }
        return (
          <div key={i} className={i > 0 ? "mt-1" : undefined}>
            {renderInline(line, i)}
          </div>
        );
      })}
    </>
  );
}
// -----------------------------------------------------------------------

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [showHint, setShowHint] = useState(false);

  useEffect(() => {
    setShowHint(true);
    const timer = setTimeout(() => setShowHint(false), 4000); // hides after 4s
    return () => clearTimeout(timer);
  }, []);
  // The greeting is shown as a fixed, hardcoded intro (see JSX below) —
  // it never enters this array, so it's never sent back to the model
  // as conversation history and never scrolls away as a "message".
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight });
  }, [messages, open]);

  async function sendMessage() {
    const text = input.trim();
    if (!text || loading) return;

    const nextMessages = [...messages, { role: "user", text }];
    setMessages(nextMessages);
    setInput("");
    setLoading(true);

    // Placeholder assistant bubble we'll stream tokens into
    setMessages((m) => [...m, { role: "assistant", text: "" }]);

    const conversation = nextMessages
      .map((m) => `${m.role === "user" ? "Visitor" : "Assistant"}: ${m.text}`)
      .join("\n");

    const MAX_ATTEMPTS = 3;
    let lastErr = null;

    for (let attempt = 1; attempt <= MAX_ATTEMPTS; attempt++) {
      try {
        const stream = await ai.interactions.create({
          model: "gemini-3.8-flash",
          input: `${TANMAY_CONTEXT}\n\n=== CONVERSATION SO FAR ===\n${conversation}\n\nAssistant:`,
          stream: true,
        });

        let acc = "";
        for await (const event of stream) {
          if (event?.event_type === "error") {
            throw Object.assign(
              new Error(event.error?.message || "stream error"),
              {
                code: event.error?.code,
              },
            );
          }
          const chunk = event?.text ?? event?.delta?.text ?? "";
          if (chunk) {
            acc += chunk;
            setMessages((m) => {
              const copy = [...m];
              copy[copy.length - 1] = { role: "assistant", text: acc };
              return copy;
            });
          }
        }

        // Success — stop retrying
        lastErr = null;
        break;
      } catch (err) {
        lastErr = err;
        const retryable =
          err?.code === "service_unavailable" || err?.code === "rate_limit";
        console.error(`Chatbot attempt ${attempt} failed:`, err);
        if (retryable && attempt < MAX_ATTEMPTS) {
          // Exponential backoff: 1s, 2s, 4s...
          await new Promise((r) => setTimeout(r, 2 ** (attempt - 1) * 1000));
          continue;
        }
        break;
      }
    }

    if (lastErr) {
      const isBusy = lastErr?.code === "service_unavailable";
      setMessages((m) => {
        const copy = [...m];
        copy[copy.length - 1] = {
          role: "assistant",
          text: isBusy
            ? "The assistant is a bit busy right now (high demand). Please try again in a moment, or email tanmaykanase06@gmail.com."
            : "Sorry, something went wrong reaching the assistant. Please try again or email tanmaykanase06@gmail.com.",
        };
        return copy;
      });
    }

    setLoading(false);
  }

  function handleKeyDown(e) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  }

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end">
      {showHint && !open && (
        <div className="absolute right-16 bottom-2 whitespace-nowrap rounded-full bg-gray-900 px-3 py-2 text-xs font-medium text-white shadow-lg">
          Hello, I'm here for you 👋
          <div className="absolute -right-1 top-1/2 h-2 w-2 -translate-y-1/2 rotate-45 bg-gray-900" />
        </div>
      )}
      {open && (
        <div className="mb-3 flex h-[80vh] max-h-[42rem] w-[24rem] flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-2xl sm:w-[28rem]">
          <div className="flex items-center justify-between bg-gray-900 px-4 py-3 text-white">
            <span className="text-sm font-semibold">Tanmay's AI Assistant</span>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close chat"
              className="text-white/80 hover:text-white"
            >
              ✕
            </button>
          </div>

          <div
            ref={scrollRef}
            className="flex-1 space-y-3 overflow-y-auto bg-gray-50 px-3 py-3"
          >
            {/* Hardcoded intro — not part of the message list/history */}
            <div className="flex justify-start">
              <div className="max-w-[90%] rounded-xl bg-white px-3 py-2 text-sm text-gray-800 shadow">
                <FormattedMessage text={GREETING} />
              </div>
            </div>

            {messages.map((m, i) => (
              <div
                key={i}
                className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[90%] rounded-xl px-3 py-2 text-sm ${
                    m.role === "user"
                      ? "bg-gray-900 text-white"
                      : "bg-white text-gray-800 shadow"
                  }`}
                >
                  {m.text ? (
                    <FormattedMessage text={m.text} />
                  ) : loading && i === messages.length - 1 ? (
                    "…"
                  ) : (
                    ""
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-2 border-t border-gray-200 bg-white p-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask about Tanmay, or paste a JD…"
              disabled={loading}
              className="flex-1 rounded-full border border-gray-300 px-3 py-2 text-sm outline-none focus:border-gray-500"
            />
            <button
              onClick={sendMessage}
              disabled={loading || !input.trim()}
              className="rounded-full bg-gray-900 px-4 py-2 text-sm font-medium text-white disabled:opacity-40"
            >
              Send
            </button>
          </div>
        </div>
      )}

      <button
        onClick={() => setOpen((o) => !o)}
        aria-label="Open chat with Tanmay's assistant"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-gray-900 text-white shadow-xl hover:bg-gray-800"
      >
        {open ? "✕" : "💬"}
      </button>
    </div>
  );
}
