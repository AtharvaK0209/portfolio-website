"use client";

import * as React from "react";
import { createContext, useContext, useState, useEffect, useCallback } from "react";

interface CommandShellContextType {
  isOpen: boolean;
  openShell: () => void;
  closeShell: () => void;
  toggleShell: () => void;
}

const CommandShellContext = createContext<CommandShellContextType | undefined>(undefined);

export function CommandShellProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openShell = useCallback(() => setIsOpen(true), []);
  const closeShell = useCallback(() => setIsOpen(false), []);
  const toggleShell = useCallback(() => setIsOpen((prev) => !prev), []);

  // Global keyboard shortcut: Ctrl+K / Cmd+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        toggleShell();
      } else if (e.key === "Escape" && isOpen) {
        e.preventDefault();
        closeShell();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, toggleShell, closeShell]);

  // Prevent body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <CommandShellContext.Provider value={{ isOpen, openShell, closeShell, toggleShell }}>
      {children}
    </CommandShellContext.Provider>
  );
}

export function useCommandShell() {
  const context = useContext(CommandShellContext);
  if (!context) {
    throw new Error("useCommandShell must be used within a CommandShellProvider");
  }
  return context;
}
