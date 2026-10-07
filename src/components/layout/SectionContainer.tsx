import * as React from "react";

export interface SectionContainerProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  id?: string;
}

export function SectionContainer({ children, className = "", id, ...props }: SectionContainerProps) {
  return (
    <section id={id} className={`w-full py-16 md:py-24 ${className}`} {...props}>
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        {children}
      </div>
    </section>
  );
}
