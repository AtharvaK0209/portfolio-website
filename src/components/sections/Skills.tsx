"use client";

import * as React from "react";
import { useState } from "react";
import { skills, SkillCategory } from "@/data/skills";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { FaArrowRight } from "react-icons/fa6";

function SkillCard({ category }: { category: SkillCategory }) {
  const [showSkills, setShowSkills] = useState(false);

  return (
    <button
      type="button"
      onClick={() => setShowSkills(!showSkills)}
      className="group relative flex flex-col text-left h-64 p-6 md:p-8 rounded-2xl border border-border bg-surface hover:border-primary/50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary overflow-hidden"
      aria-expanded={showSkills}
      aria-label={`Toggle details for ${category.title}`}
    >
      {/* Front State: Description */}
      <div 
        className={`absolute inset-0 p-6 md:p-8 flex flex-col transition-opacity duration-300 ease-in-out ${
          showSkills ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <div className="flex justify-between items-start mb-4">
          <span className="text-xs font-mono font-bold text-text-muted">
            {category.index}
          </span>
          <div className="w-6 h-6 rounded-full bg-surface-elevated flex items-center justify-center group-hover:bg-primary/10 transition-colors">
            <FaArrowRight className="w-2.5 h-2.5 text-text-muted group-hover:text-primary transition-colors -rotate-45" />
          </div>
        </div>
        <h3 className="text-xl font-display font-bold text-foreground mb-3 uppercase tracking-wide">
          {category.title}
        </h3>
        <p className="text-sm text-text-secondary leading-relaxed">
          {category.description}
        </p>
      </div>

      {/* Back State: Technologies */}
      <div 
        className={`absolute inset-0 p-6 md:p-8 flex flex-col transition-opacity duration-300 ease-in-out bg-surface ${
          showSkills ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex justify-between items-start mb-4">
          <span className="text-xs font-mono font-bold text-primary">
            {category.index}
          </span>
          <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
          </div>
        </div>
        <h3 className="text-lg font-display font-bold text-foreground mb-4 uppercase tracking-wide">
          {category.title}
        </h3>
        <div className="flex flex-wrap gap-2 overflow-y-auto pr-2 custom-scrollbar">
          {category.skills.map((skill) => (
            <span
              key={skill}
              className="px-2.5 py-1 text-xs font-mono font-medium rounded-md bg-surface-elevated text-text-secondary border border-border"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </button>
  );
}

export function Skills() {
  return (
    <SectionContainer id="skills" className="py-24 bg-surface-elevated/30">
      
      {/* Section Header */}
      <div className="mb-16 md:mb-20 max-w-2xl animate-fade-in-up delay-100">
        <span className="inline-block text-xs font-mono font-medium tracking-wider text-primary uppercase mb-4">
          Technical Capabilities
        </span>
        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
          Engineering Map
        </h2>
        <p className="text-base md:text-lg text-text-secondary">
          A breakdown of the domains I explore, the systems I build, and the technologies I use to implement them. Tap any card to view specific tools.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((category, index) => {
          // Staggered reveal
          const delayClass = 
            index === 0 ? "delay-200" :
            index === 1 ? "delay-300" :
            index === 2 ? "delay-500" :
            index === 3 ? "delay-700" : ""; // fallback to instant after first few
            
          return (
            <div key={category.id} className={`animate-fade-in-up ${delayClass} fill-mode-both`}>
              <SkillCard category={category} />
            </div>
          );
        })}
      </div>

    </SectionContainer>
  );
}
