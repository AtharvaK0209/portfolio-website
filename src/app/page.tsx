export default function Home() {
  return (
    <main className="flex-1 flex flex-col items-center justify-center p-8 text-center min-h-[80vh]">
      <h1 className="text-4xl md:text-6xl font-display font-bold mb-4 text-primary">
        Phase 2 Complete
      </h1>
      <p className="text-xl text-text-secondary max-w-2xl font-sans mb-8">
        The Next.js App Router, Tailwind CSS design system, typography, and dark/light theme foundation are successfully configured.
      </p>
      
      {/* Test Buttons for Theme/Colors */}
      <div className="flex gap-4">
        <button className="px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary-hover transition-colors duration-normal">
          Primary Action
        </button>
        <button className="px-6 py-3 rounded-full bg-surface-elevated text-foreground font-semibold border border-border hover:bg-surface transition-colors duration-normal">
          Secondary Action
        </button>
      </div>
    </main>
  );
}
