import * as React from "react";
import { Project } from "@/data/projects";
import { FaGithub, FaArrowRight } from "react-icons/fa6";

interface ProjectCardProps {
  project: Project;
  isPrimary?: boolean;
  showFeaturedBadge?: boolean;
}

export function ProjectCard({ project, isPrimary = false, showFeaturedBadge = false }: ProjectCardProps) {
  return (
    <div 
      className={`group flex flex-col h-full rounded-2xl border border-border bg-surface hover:border-primary/50 hover:-translate-y-1 transition-all duration-normal overflow-hidden ${
        isPrimary ? "lg:flex-row lg:items-center" : ""
      }`}
    >
      <div className={`p-6 md:p-8 flex flex-col flex-1 ${isPrimary ? "lg:p-12" : ""}`}>
        
        {/* Header */}
        <div className="mb-4">
          <div className="flex items-start justify-between gap-4 mb-1">
            <h3 className={`${isPrimary ? "text-2xl lg:text-3xl" : "text-xl"} font-display font-bold text-foreground group-hover:text-primary transition-colors`}>
              {project.name}
            </h3>
            {showFeaturedBadge && project.featured && (
              <span className="shrink-0 px-2.5 py-0.5 text-[10px] font-mono font-semibold uppercase tracking-wider rounded-full bg-primary/10 text-primary border border-primary/20">
                Featured
              </span>
            )}
          </div>
          <p className="text-sm font-medium text-text-muted">
            {project.tagline}
          </p>
        </div>

        {/* Description */}
        <p className={`text-text-secondary leading-relaxed mb-6 flex-1 ${isPrimary ? "text-base lg:text-lg max-w-2xl" : "text-sm"}`}>
          {project.description}
        </p>

        {/* Metadata */}
        <div className="flex flex-col gap-4 mt-auto">
          
          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span 
                key={tech} 
                className="px-2.5 py-1 text-xs font-mono font-medium rounded-md bg-surface-elevated text-text-secondary border border-border"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Achievement */}
          {project.achievement && (
            <div className="flex items-center gap-2 text-xs font-medium text-primary">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
              {project.achievement}
            </div>
          )}

          {/* Links */}
          <div className="flex items-center gap-4 pt-4 mt-2 border-t border-border/50">
            {project.githubUrl && (
              <a 
                href={project.githubUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-text-muted hover:text-foreground transition-colors flex items-center gap-2 text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm"
                aria-label={`View ${project.name} on GitHub`}
              >
                <FaGithub className="w-4 h-4" />
                <span>GitHub</span>
              </a>
            )}
            {project.liveUrl && (
              <a 
                href={project.liveUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-text-muted hover:text-foreground transition-colors flex items-center gap-2 text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm"
                aria-label={`View live demo of ${project.name}`}
              >
                <span>Live Demo</span>
                <FaArrowRight className="w-3 h-3 -rotate-45" />
              </a>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}
