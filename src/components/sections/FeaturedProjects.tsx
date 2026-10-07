import * as React from "react";
import Link from "next/link";
import { projects } from "@/data/projects";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { FaArrowRight } from "react-icons/fa6";

export function FeaturedProjects() {
  const featured = projects.filter((p) => p.featured);
  
  if (featured.length === 0) return null;

  const primaryProject = featured[0];
  const secondaryProjects = featured.slice(1, 3);

  return (
    <SectionContainer id="projects" className="py-24 bg-surface-elevated/30">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 animate-fade-in-up delay-100">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Selected work
          </h2>
          <p className="text-base md:text-lg text-text-secondary">
            A selection of projects where I explored software engineering, AI, cybersecurity, and product development through hands-on building.
          </p>
        </div>
        <Link 
          href="/projects" 
          className="group inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-hover transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm shrink-0 pb-1"
        >
          <span>View All Projects</span>
          <FaArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      {/* Projects Grid */}
      <div className="flex flex-col gap-6">
        
        {/* Primary Project */}
        {primaryProject && (
          <div className="animate-fade-in-up delay-200">
            <ProjectCard project={primaryProject} isPrimary={true} />
          </div>
        )}

        {/* Secondary Projects Grid */}
        {secondaryProjects.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in-up delay-300">
            {secondaryProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        )}

      </div>

    </SectionContainer>
  );
}
