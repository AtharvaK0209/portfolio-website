import * as React from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaXTwitter, FaInstagram } from "react-icons/fa6";
import { siteConfig } from "@/data/config";
import { SectionContainer } from "./SectionContainer";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface mt-auto">
      <SectionContainer className="py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          
          {/* Identity Column */}
          <div className="md:col-span-2">
            <Link href="/" className="text-xl font-display font-bold inline-block mb-4 hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm">
              Atharva<span className="text-primary">.</span>
            </Link>
            <p className="text-text-secondary max-w-sm">
              {siteConfig.description}
            </p>
          </div>
          
          {/* Explore Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Explore</h3>
            <ul className="flex flex-col gap-3">
              {siteConfig.navItems.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href}
                    className="text-text-muted hover:text-primary transition-colors text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Resources / Social */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Resources</h3>
            <ul className="flex flex-col gap-3">
              <li>
                <a 
                  href={siteConfig.resumeUrl} 
                  download
                  className="text-text-muted hover:text-primary transition-colors text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm"
                >
                  Download Resume
                </a>
              </li>
              <li>
                <a 
                  href={siteConfig.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-text-muted hover:text-primary transition-colors text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm w-fit"
                >
                  <FaGithub className="w-4 h-4" /> GitHub
                </a>
              </li>
              <li>
                <a 
                  href={siteConfig.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-text-muted hover:text-primary transition-colors text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm w-fit"
                >
                  <FaLinkedin className="w-4 h-4" /> LinkedIn
                </a>
              </li>
              <li>
                <a 
                  href={siteConfig.links.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-text-muted hover:text-primary transition-colors text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm w-fit"
                >
                  <FaXTwitter className="w-4 h-4" /> Twitter/X
                </a>
              </li>
              <li>
                <a 
                  href={siteConfig.links.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-text-muted hover:text-primary transition-colors text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm w-fit"
                >
                  <FaInstagram className="w-4 h-4" /> Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-text-muted text-center md:text-left">
            © {currentYear} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </SectionContainer>
    </footer>
  );
}
