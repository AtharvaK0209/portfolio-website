import * as React from "react";
import type { Metadata } from "next";
import { projects } from "@/data/projects";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { ProjectCard } from "@/components/ui/ProjectCard";

export const metadata: Metadata = {
  title: "Projects — Atharva Khandagale",
  description: "A selection of software engineering, AI, cybersecurity, and product projects built by Atharva Khandagale.",
};

export default function ProjectsPage() {
  return (
    <main className="flex-1 flex flex-col bg-background">
      
      {/* Page Hero */}
      <SectionContainer className="pt-24 md:pt-32 pb-12 md:pb-16 border-b border-border bg-surface-elevated/30">
        <div className="max-w-3xl animate-fade-in-up delay-100">
          <span className="inline-block text-xs font-mono font-medium tracking-wider text-primary uppercase mb-4">
            Selected Work
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6">
            Projects I've Built
          </h1>
          <p className="text-lg md:text-xl text-text-secondary leading-relaxed">
            A comprehensive catalog of projects representing my work across software engineering, AI experimentation, cybersecurity, and product development.
          </p>
        </div>
      </SectionContainer>

      {/* Project Catalog */}
      <SectionContainer className="py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, index) => {
            // Apply staggered delays for the first few cards to create a nice entrance effect
            const delayClass = 
              index === 0 ? "delay-200" :
              index === 1 ? "delay-300" :
              index === 2 ? "delay-500" :
              index === 3 ? "delay-700" : "";

            return (
              <div key={project.id} className={`animate-fade-in-up ${delayClass} fill-mode-both`}>
                <ProjectCard 
                  project={project} 
                  showFeaturedBadge={true} 
                />
              </div>
            );
          })}
        </div>
      </SectionContainer>

    </main>
  );
}
