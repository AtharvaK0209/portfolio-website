import * as React from "react";
import { experiences, ExperienceType } from "@/data/experience";
import { SectionContainer } from "@/components/layout/SectionContainer";

function getTypeColor(type: ExperienceType) {
  switch (type) {
    case "INTERNSHIP":
      return "bg-primary text-white border-primary";
    case "AMBASSADOR":
      return "bg-surface-elevated text-primary border-primary/40";
    case "COMMUNITY":
    case "VOLUNTEER":
    default:
      return "bg-surface text-text-secondary border-border";
  }
}

export function Experience() {
  return (
    <SectionContainer id="experience" className="py-24 bg-background overflow-hidden">
      
      {/* Section Header */}
      <div className="mb-16 md:mb-24 text-center md:text-left max-w-2xl animate-fade-in-up delay-100">
        <span className="inline-block text-xs font-mono font-medium tracking-wider text-primary uppercase mb-4">
          Experience
        </span>
        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
          Experience & Community
        </h2>
        <p className="text-base md:text-lg text-text-secondary">
          A track record spanning software development, cybersecurity, and technical community leadership.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative max-w-5xl mx-auto md:mx-0">
        
        {/* Vertical Line */}
        <div className="absolute left-4 md:left-[25%] top-4 bottom-4 w-px bg-border/60 animate-fade-in-up delay-200" />

        <div className="flex flex-col gap-12">
          {experiences.map((exp, index) => {
            const delayClass = 
              index === 0 ? "delay-200" :
              index === 1 ? "delay-300" :
              index === 2 ? "delay-500" : "delay-700";

            const hasDates = exp.startDate || exp.endDate;
            const dateString = hasDates 
              ? `${exp.startDate || ""} ${exp.startDate && exp.endDate ? "—" : ""} ${exp.endDate || ""}`
              : exp.type;

            return (
              <div 
                key={exp.id} 
                className={`group relative flex flex-col md:flex-row gap-6 md:gap-12 animate-fade-in-up ${delayClass}`}
              >
                
                {/* Left Column (Dates/Type) */}
                <div className="md:w-[25%] shrink-0 pl-12 md:pl-0 md:text-right pt-1 md:pr-12">
                  <span className="text-sm font-mono font-medium text-text-muted group-hover:text-foreground transition-colors uppercase tracking-wider">
                    {dateString}
                  </span>
                </div>

                {/* Timeline Marker */}
                <div className="absolute left-4 md:left-[25%] top-2 md:top-1.5 w-2.5 h-2.5 rounded-full -translate-x-[4.5px] bg-background border-2 border-border group-hover:border-primary transition-colors z-10" />

                {/* Right Column (Content) */}
                <div className="flex-1 pl-12 md:pl-0">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-xl font-display font-bold text-foreground group-hover:text-primary transition-colors">
                        {exp.organization}
                      </h3>
                      <div className="flex items-center gap-3 mt-1">
                        <span className="text-sm font-medium text-text-secondary">
                          {exp.role}
                        </span>
                        <span className={`text-[10px] font-mono font-semibold uppercase tracking-wider px-2 py-0.5 rounded-sm border ${getTypeColor(exp.type)}`}>
                          {exp.type}
                        </span>
                      </div>
                    </div>
                  </div>

                  <ul className="flex flex-col gap-2 mb-4">
                    {exp.description.map((desc, i) => (
                      <li key={i} className="text-sm md:text-base text-text-secondary leading-relaxed flex items-start gap-2">
                        <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-border mt-2 group-hover:bg-primary/50 transition-colors" aria-hidden="true" />
                        <span>{desc}</span>
                      </li>
                    ))}
                  </ul>

                  {exp.technologies && exp.technologies.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-4">
                      {exp.technologies.map((tech) => (
                        <span 
                          key={tech} 
                          className="px-2.5 py-1 text-xs font-mono font-medium rounded-md bg-surface-elevated text-text-secondary border border-border"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </SectionContainer>
  );
}
