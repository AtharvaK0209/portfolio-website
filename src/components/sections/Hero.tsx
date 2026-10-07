import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/config";
import { SectionContainer } from "@/components/layout/SectionContainer";

export function Hero() {
  return (
    <SectionContainer className="pt-24 md:pt-32 pb-16 md:pb-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        
        {/* Left Column: Text Hierarchy */}
        <div className="flex flex-col items-start order-2 lg:order-1">
          
          <div className="animate-fade-in-up delay-100">
            <span className="inline-flex items-center gap-2 text-xs font-mono font-medium tracking-wider text-text-secondary mb-6 px-3 py-1 rounded-full bg-surface border border-border">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
              {siteConfig.hero.label}
            </span>
          </div>

          <div className="animate-fade-in-up delay-200">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-4 leading-tight">
              {siteConfig.name}
            </h1>
            <h2 className="text-2xl md:text-3xl font-display font-medium text-text-secondary mb-6 leading-snug max-w-xl">
              {siteConfig.hero.headline}
            </h2>
          </div>

          <div className="animate-fade-in-up delay-300">
            <p className="text-base md:text-lg text-text-muted mb-10 max-w-lg leading-relaxed">
              {siteConfig.hero.description}
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12 w-full sm:w-auto animate-fade-in-up delay-500">
            <Link 
              href="/#projects"
              className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold rounded-md bg-primary text-primary-foreground hover:bg-primary-hover transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              View Projects
            </Link>
            <a 
              href={siteConfig.resumeUrl}
              download
              className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold rounded-md bg-surface-elevated border border-border text-foreground hover:bg-surface hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              Download Resume
            </a>
          </div>

          <div className="animate-fade-in-up delay-700">
            <p className="text-xs md:text-sm font-mono text-text-muted border-l-2 border-border pl-4">
              {siteConfig.hero.technicalDetail}
            </p>
          </div>
        </div>

        {/* Right Column: Profile Photo */}
        <div className="order-1 lg:order-2 flex justify-center lg:justify-end animate-fade-in-up delay-300">
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
            <div className="absolute inset-0 bg-primary/10 rounded-2xl transform translate-x-4 translate-y-4" aria-hidden="true" />
            <div className="relative w-full h-full rounded-2xl border border-border bg-surface overflow-hidden hover:scale-[1.02] transition-transform duration-slow">
              <Image
                src="/images/ak.jpeg"
                alt={siteConfig.hero.imageAlt}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 256px, (max-width: 1024px) 320px, 384px"
              />
            </div>
          </div>
        </div>

      </div>
    </SectionContainer>
  );
}
