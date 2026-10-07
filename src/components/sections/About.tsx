import * as React from "react";
import { siteConfig } from "@/data/config";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { Sparkles, GraduationCap, Award } from "lucide-react";

export function About() {
  const { about } = siteConfig;

  return (
    <SectionContainer id="about" className="py-24 bg-background">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
        
        {/* Left Column: Narrative */}
        <div className="lg:col-span-7 flex flex-col items-start">
          <div className="animate-fade-in-up delay-100">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-8">
              {about.title}
            </h2>
          </div>
          
          <div className="animate-fade-in-up delay-200 space-y-6">
            {about.paragraphs.map((paragraph, index) => (
              <p 
                key={index} 
                className="text-base md:text-lg text-text-secondary leading-relaxed"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {/* Right Column: Information Cards */}
        <div className="lg:col-span-5 flex flex-col gap-6 w-full max-w-md mx-auto lg:mx-0 lg:ml-auto">
          
          {/* Currently Exploring */}
          <div className="p-6 rounded-2xl border border-border bg-surface animate-fade-in-up delay-300 transition-colors hover:border-primary/50">
            <div className="flex items-center gap-2 mb-4 text-foreground font-medium">
              <Sparkles className="w-5 h-5 text-primary" />
              <h3>Currently Exploring</h3>
            </div>
            <ul className="flex flex-col gap-3">
              {about.exploring.map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-sm text-text-secondary">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/60" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Education */}
          <div className="p-6 rounded-2xl border border-border bg-surface animate-fade-in-up delay-500 transition-colors hover:border-primary/50">
            <div className="flex items-center gap-2 mb-4 text-foreground font-medium">
              <GraduationCap className="w-5 h-5 text-primary" />
              <h3>Education</h3>
            </div>
            <div className="flex flex-col gap-1 text-sm text-text-secondary">
              <span className="font-semibold text-foreground">{about.education.institution}</span>
              <span>{about.education.degree}</span>
              <span className="font-mono text-xs text-text-muted mt-1">{about.education.period}</span>
            </div>
          </div>

          {/* Highlights */}
          <div className="p-6 rounded-2xl border border-border bg-surface animate-fade-in-up delay-700 transition-colors hover:border-primary/50">
            <div className="flex items-center gap-2 mb-4 text-foreground font-medium">
              <Award className="w-5 h-5 text-primary" />
              <h3>Highlights</h3>
            </div>
            <ul className="flex flex-col gap-3">
              {about.highlights.map((item, index) => (
                <li key={index} className="flex flex-col text-sm text-text-secondary border-l-2 border-primary/20 pl-3">
                  {item}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </SectionContainer>
  );
}
