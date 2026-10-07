"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Terminal } from "lucide-react";
import { siteConfig } from "@/data/config";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const pathname = usePathname();
  const [activeHash, setActiveHash] = React.useState("");

  // Handle scroll state for navbar background
  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Sync hash on load and hash change
  React.useEffect(() => {
    const handleHashChange = () => {
      setActiveHash(window.location.hash);
    };
    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  // Close mobile menu on route change
  React.useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname, activeHash]);

  // Lock body scroll when mobile menu is open
  React.useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const isActive = (href: string) => {
    if (href.startsWith("/#")) {
      return pathname === "/" && activeHash === href.substring(1);
    }
    return pathname === href;
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-normal ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-8 h-16 flex items-center justify-between">
        
        {/* Brand / Logo */}
        <Link 
          href="/" 
          className="text-lg font-display font-bold hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm"
        >
          Atharva<span className="text-primary">.</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6">
          {siteConfig.navItems.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors duration-fast hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm ${
                  active ? "text-primary" : "text-text-secondary"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* Actions (Resume, Theme, AI Trigger) */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href={siteConfig.resumeUrl}
            download
            className="text-sm font-medium text-foreground hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm"
          >
            Resume
          </a>
          
          <div className="w-[1px] h-4 bg-border" aria-hidden="true" />
          
          <ThemeToggle />
          
          <button 
            className="flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-md bg-surface-elevated border border-border text-foreground hover:bg-surface hover:border-primary/50 hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            aria-label="Open AI Command Shell"
          >
            <Terminal className="w-4 h-4" />
            <span>Ask AI</span>
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 -mr-2 text-foreground hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-md"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      {isMobileMenuOpen && (
        <div 
          id="mobile-menu"
          className="fixed inset-0 top-16 bg-background border-t border-border flex flex-col lg:hidden z-40 h-[calc(100vh-4rem)] overflow-y-auto"
        >
          <nav className="flex flex-col p-6 gap-6">
            {siteConfig.navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-2xl font-display font-medium ${
                  isActive(item.href) ? "text-primary" : "text-foreground"
                }`}
              >
                {item.name}
              </Link>
            ))}
            
            <hr className="border-border my-2" />
            
            <a
              href={siteConfig.resumeUrl}
              download
              className="text-xl font-medium text-foreground hover:text-primary transition-colors"
            >
              Download Resume
            </a>
            
            <button 
              className="flex items-center gap-2 px-4 py-3 mt-4 text-base font-semibold rounded-md bg-surface-elevated border border-border text-foreground hover:bg-surface justify-center"
            >
              <Terminal className="w-5 h-5" />
              <span>Ask AI Command Shell</span>
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
