"use client";

import * as React from "react";
import { useState, useRef, useEffect } from "react";
import { useCommandShell } from "@/components/providers/CommandShellProvider";
import { Terminal, X, RotateCcw, Send, Loader2, AlertCircle, CornerDownLeft } from "lucide-react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const SUGGESTED_PROMPTS = [
  "Tell me about Lazarus.",
  "What technologies does Atharva use?",
  "Which competitions has he been a finalist in?",
  "What experience does he have in cybersecurity?",
];

export function CommandShell() {
  const { isOpen, closeShell } = useCommandShell();
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const inputRef = useRef<HTMLInputElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const previousActiveElementRef = useRef<HTMLElement | null>(null);

  // Focus input when opened and capture previous active element
  useEffect(() => {
    if (isOpen) {
      previousActiveElementRef.current = document.activeElement as HTMLElement | null;
      setTimeout(() => {
        inputRef.current?.focus();
      }, 50);
    } else {
      if (previousActiveElementRef.current && typeof previousActiveElementRef.current.focus === "function") {
        previousActiveElementRef.current.focus();
      }
    }
  }, [isOpen]);

  // Focus trap inside modal
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;

      const modalElement = modalRef.current;
      if (!modalElement) return;

      const focusableElements = modalElement.querySelectorAll<HTMLElement>(
        'button:not([disabled]), input:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );

      if (focusableElements.length === 0) return;

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        }
      } else {
        if (document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  // Scroll to bottom on new message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading, error]);

  if (!isOpen) return null;

  const sendMessage = async (userQuery: string) => {
    const trimmed = userQuery.trim();
    if (!trimmed || loading) return;

    setError(null);
    setInput("");

    const newMessages: Message[] = [...messages, { role: "user", content: trimmed }];
    setMessages(newMessages);
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: trimmed,
          history: messages.slice(-6),
        }),
      });

      const data = await res.json().catch(() => ({}));

      if (res.ok && data.reply) {
        setMessages([...newMessages, { role: "assistant", content: data.reply }]);
      } else {
        setError(
          data.error ||
            "Unable to generate response. Please try again or reach out to Atharva directly."
        );
      }
    } catch {
      setError(
        "Network connection failed. Please check your internet connection or try again."
      );
    } finally {
      setLoading(false);
      setTimeout(() => {
        inputRef.current?.focus();
      }, 50);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  const handleClear = () => {
    setMessages([]);
    setError(null);
    setInput("");
    inputRef.current?.focus();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/75 backdrop-blur-sm animate-fade-in-up"
      role="dialog"
      aria-modal="true"
      aria-labelledby="shell-title"
      onClick={closeShell}
    >
      <div
        ref={modalRef}
        className="relative w-full max-w-2xl max-h-[85vh] h-[600px] flex flex-col rounded-2xl border border-border bg-surface shadow-2xl overflow-hidden font-mono text-xs sm:text-sm"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Terminal Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-surface-elevated/80 select-none">
          {/* Mac-like terminal control dots */}
          <div className="flex items-center gap-2">
            <button
              onClick={closeShell}
              className="w-3 h-3 rounded-full bg-error/80 hover:bg-error transition-colors cursor-pointer"
              aria-label="Close terminal"
              title="Close terminal"
            />
            <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
            <div className="w-3 h-3 rounded-full bg-green-500/70" />
          </div>

          {/* Terminal Title */}
          <div className="flex items-center gap-2 text-text-muted">
            <Terminal className="w-3.5 h-3.5 text-primary" aria-hidden="true" />
            <span id="shell-title" className="text-xs font-semibold tracking-wider text-foreground">
              atharva@portfolio-ai ~ v1.2
            </span>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-1">
            <button
              onClick={handleClear}
              className="p-1.5 rounded hover:bg-surface text-text-muted hover:text-foreground transition-colors cursor-pointer"
              title="Clear session history"
              aria-label="Clear session history"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={closeShell}
              className="p-1.5 rounded hover:bg-surface text-text-muted hover:text-foreground transition-colors cursor-pointer"
              title="Close shell (Esc)"
              aria-label="Close shell"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Terminal Message Stream */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4 custom-scrollbar bg-background/50">
          {/* Welcome Banner */}
          <div className="p-3.5 rounded-xl bg-surface-elevated/60 border border-border/80 text-text-secondary leading-relaxed">
            <div className="flex items-center gap-2 text-primary font-bold mb-1">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span>Atharva Portfolio AI Shell [v1.2.0]</span>
            </div>
            <p className="text-xs text-text-muted mb-2">
              Grounding: Verified Portfolio Dataset • Live Natural-Language Interface
            </p>
            <p className="text-xs">
              Ask anything about Atharva&apos;s projects, technical skills, cybersecurity experience, or competition results.
            </p>
          </div>

          {/* Suggested Prompts when history is empty */}
          {messages.length === 0 && (
            <div className="pt-2">
              <p className="text-xs font-mono text-text-muted uppercase tracking-wider mb-2.5">
                Suggested Commands:
              </p>
              <div className="flex flex-wrap gap-2">
                {SUGGESTED_PROMPTS.map((prompt) => (
                  <button
                    key={prompt}
                    onClick={() => sendMessage(prompt)}
                    className="px-3 py-1.5 rounded-lg border border-border bg-surface text-xs font-mono text-text-secondary hover:text-primary hover:border-primary/50 transition-colors text-left cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  >
                    <span>&gt; {prompt}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Conversation Messages */}
          {messages.map((msg, index) => (
            <div key={index} className="space-y-1.5">
              {msg.role === "user" ? (
                <div className="flex items-start gap-2 pt-1 text-foreground">
                  <span className="text-primary font-bold shrink-0">$</span>
                  <span className="font-semibold break-words">{msg.content}</span>
                </div>
              ) : (
                <div className="rounded-xl bg-surface-elevated/60 border border-border/80 p-3.5 sm:p-4 text-foreground leading-relaxed">
                  <div className="flex items-center gap-1.5 text-xs text-primary font-bold mb-1.5">
                    <span>atharva.ai</span>
                    <span className="text-text-muted">&gt;</span>
                  </div>
                  <div className="text-xs sm:text-sm whitespace-pre-wrap font-sans text-text-secondary leading-relaxed">
                    {msg.content}
                  </div>
                </div>
              )}
            </div>
          ))}

          {/* Loading Indicator */}
          {loading && (
            <div className="rounded-xl bg-surface-elevated/40 border border-border/60 p-3 flex items-center gap-2.5 text-text-muted text-xs">
              <Loader2 className="w-3.5 h-3.5 animate-spin text-primary shrink-0" />
              <span>Querying verified portfolio dataset...</span>
            </div>
          )}

          {/* Error Message */}
          {error && (
            <div className="rounded-xl bg-surface-elevated border border-error/40 p-3 sm:p-4 text-xs text-foreground">
              <div className="flex items-start gap-2.5">
                <AlertCircle className="w-4 h-4 text-error shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-error mb-1">Terminal Notice</p>
                  <p className="text-text-secondary leading-relaxed">{error}</p>
                </div>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Terminal Input Bar */}
        <form
          onSubmit={handleSubmit}
          className="flex items-center gap-2 px-3 sm:px-4 py-3 border-t border-border bg-surface-elevated/70"
        >
          <span className="text-primary font-bold select-none text-base">$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            disabled={loading}
            placeholder="Ask about projects, skills, or competitions..."
            aria-label="Terminal command input"
            className="flex-1 bg-transparent border-none text-foreground placeholder:text-text-muted focus:outline-none text-xs sm:text-sm font-mono"
          />

          <div className="flex items-center gap-2">
            <span className="hidden sm:inline-flex items-center gap-1 text-[10px] font-mono text-text-muted px-1.5 py-0.5 rounded bg-surface border border-border">
              <span>Enter</span>
              <CornerDownLeft className="w-2.5 h-2.5" />
            </span>

            <button
              type="submit"
              disabled={loading || !input.trim()}
              className="p-2 rounded-lg bg-primary text-white hover:bg-primary-hover disabled:opacity-40 disabled:cursor-not-allowed transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              title="Submit command"
              aria-label="Submit command"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
