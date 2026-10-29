import type { Metadata } from "next";
import { Outfit, Plus_Jakarta_Sans, Fira_Code } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { CommandShellProvider } from "@/components/providers/CommandShellProvider";
import { CommandShell } from "@/components/ui/CommandShell";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://atharvakhandagale.com"),
  title: {
    default: "Atharva Khandagale | Software Engineering & Agentic AI",
    template: "%s | Atharva Khandagale",
  },
  description:
    "Computer Engineering student building practical software across AI, data analytics, and product engineering. Explore verified projects, technical capabilities, and competition outcomes.",
  keywords: [
    "Atharva Khandagale",
    "Software Engineer",
    "Agentic AI",
    "Data Analytics",
    "Full Stack Developer",
    "Portfolio",
    "SIES GST",
    "Nexus",
    "Lazarus",
  ],
  authors: [{ name: "Atharva Khandagale", url: "https://github.com/AtharvaK0209" }],
  creator: "Atharva Khandagale",
  openGraph: {
    title: "Atharva Khandagale | Software Engineering & Agentic AI",
    description:
      "Computer Engineering student building practical software across AI, data analytics, and product engineering.",
    url: "/",
    siteName: "Atharva Khandagale Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Atharva Khandagale | Software Engineering & Agentic AI",
    description:
      "Computer Engineering student building practical software across AI, data analytics, and product engineering.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${outfit.variable} ${jakarta.variable} ${firaCode.variable}`}>
      <body className="antialiased min-h-screen flex flex-col bg-background text-foreground transition-colors duration-normal font-sans selection:bg-primary/30 selection:text-primary-foreground pt-16">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <CommandShellProvider>
            <Navbar />
            <main className="flex-1 flex flex-col">
              {children}
            </main>
            <Footer />
            <CommandShell />
          </CommandShellProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
