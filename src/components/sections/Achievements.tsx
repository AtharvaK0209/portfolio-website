import * as React from "react";
import { achievements, Achievement } from "@/data/achievements";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { ArrowUpRight } from "lucide-react";

export function Achievements() {
  const featured = achievements.find((item) => item.featured) || achievements[0];
  const secondaryAchievements = achievements.filter((item) => item.id !== featured.id);

  return (
    <SectionContainer id="achievements" className="py-24 bg-background">
      {/* Section Header */}
      <div className="mb-12 md:mb-16 max-w-2xl animate-fade-in-up delay-100">
        <span className="inline-block text-xs font-mono font-medium tracking-wider text-primary uppercase mb-4">
          COMPETITIONS & ACHIEVEMENTS
        </span>
        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
          Built, Tested, Recognized.
        </h2>
        <p className="text-base md:text-lg text-text-secondary leading-relaxed">
          A verified record of competitive problem-solving, national project finals, and technical milestones.
        </p>
      </div>

      <div className="flex flex-col gap-6">
        {/* Prominent Primary Achievement */}
        {featured && (
          <div className="animate-fade-in-up delay-200">
            <div className="group relative p-6 sm:p-8 md:p-10 rounded-2xl border border-border bg-surface hover:border-primary/50 transition-all duration-300 shadow-sm overflow-hidden">
              {/* Subtle top indicator bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/80 via-primary/40 to-transparent" />

              {/* Card Header Metadata */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                <div className="flex items-center gap-2.5">
                  <span className="px-2.5 py-0.5 text-xs font-mono font-semibold uppercase tracking-wider rounded-md bg-surface-elevated text-text-secondary border border-border">
                    {featured.category}
                  </span>
                  {featured.year && (
                    <span className="text-xs font-mono font-medium text-text-muted">
                      {featured.year}
                    </span>
                  )}
                </div>

                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary font-mono text-xs font-bold tracking-wide uppercase">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
                  <span>{featured.result} • {featured.metric}</span>
                </div>
              </div>

              {/* Title & Project Meta */}
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-foreground group-hover:text-primary transition-colors tracking-tight mb-2">
                {featured.event}
              </h3>

              {featured.project && (
                <div className="flex flex-wrap items-center gap-2 text-sm font-mono text-text-secondary mb-4">
                  <span className="text-text-muted">Associated Project:</span>
                  <span className="font-semibold text-foreground">{featured.project}</span>
                  <span className="text-text-muted hidden sm:inline">•</span>
                  <span className="text-text-muted">Zombie API Discovery & Defence Platform</span>
                </div>
              )}

              {/* Description */}
              <p className="text-base md:text-lg text-text-secondary leading-relaxed max-w-3xl mb-8">
                {featured.description}
              </p>

              {/* Key Highlights Strip */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-border/60">
                <div className="p-4 rounded-xl bg-surface-elevated/50 border border-border/60">
                  <span className="text-xs font-mono text-text-muted uppercase tracking-wider block mb-1">
                    Scale
                  </span>
                  <span className="text-lg font-display font-bold text-foreground">
                    700+ Teams
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-surface-elevated/50 border border-border/60">
                  <span className="text-xs font-mono text-text-muted uppercase tracking-wider block mb-1">
                    Outcome
                  </span>
                  <span className="text-lg font-display font-bold text-primary">
                    Grand Finalist
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-surface-elevated/50 border border-border/60">
                  <span className="text-xs font-mono text-text-muted uppercase tracking-wider block mb-1">
                    Domain
                  </span>
                  <span className="text-lg font-display font-bold text-foreground">
                    Cybersecurity & AI
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Secondary Achievements Grid */}
        {secondaryAchievements.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in-up delay-300">
            {secondaryAchievements.map((achievement: Achievement) => (
              <div
                key={achievement.id}
                className="group flex flex-col justify-between p-6 md:p-8 rounded-2xl border border-border bg-surface hover:border-primary/50 transition-all duration-300 shadow-sm"
              >
                <div>
                  {/* Top Meta Bar */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 text-[11px] font-mono font-medium uppercase tracking-wider rounded-md bg-surface-elevated text-text-secondary border border-border">
                        {achievement.category}
                      </span>
                      {achievement.year && (
                        <span className="text-xs font-mono text-text-muted">
                          {achievement.year}
                        </span>
                      )}
                    </div>

                    <span className="px-2.5 py-0.5 text-xs font-mono font-semibold rounded-full bg-surface-elevated text-primary border border-primary/20">
                      {achievement.result}
                    </span>
                  </div>

                  {/* Title / Event */}
                  <h3 className="text-xl font-display font-bold text-foreground group-hover:text-primary transition-colors tracking-tight mb-2">
                    {achievement.event}
                  </h3>

                  {/* Context Info (Project or Team) */}
                  {(achievement.project || achievement.team) && (
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-mono text-text-secondary mb-3">
                      {achievement.project && (
                        <span>
                          <span className="text-text-muted">Project: </span>
                          <span className="font-semibold text-foreground">{achievement.project}</span>
                        </span>
                      )}
                      {achievement.team && (
                        <span>
                          <span className="text-text-muted">Team: </span>
                          <span className="font-medium text-foreground">{achievement.team}</span>
                        </span>
                      )}
                    </div>
                  )}

                  {/* Description */}
                  <p className="text-sm text-text-secondary leading-relaxed mb-4">
                    {achievement.description}
                  </p>
                </div>

                {/* Footer Link if verified URL exists */}
                {achievement.url && (
                  <div className="pt-4 border-t border-border/60 mt-auto">
                    <a
                      href={achievement.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm"
                      aria-label={`View live deployment for ${achievement.project || achievement.title}`}
                    >
                      <span>View Live Deployment</span>
                      <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </SectionContainer>
  );
}
