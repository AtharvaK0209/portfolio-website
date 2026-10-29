"use client";

import * as React from "react";
import { useState } from "react";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { siteConfig } from "@/data/config";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { Mail, MapPin, Send, Loader2, Check, Copy, AlertCircle, ArrowUpRight } from "lucide-react";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    hp_website: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(siteConfig.links.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } catch {
      // Fallback if clipboard API is restricted
      setCopiedEmail(false);
    }
  };

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Please enter your name.";
    } else if (formData.name.trim().length > 100) {
      newErrors.name = "Name must be less than 100 characters.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email address.";
    } else if (!EMAIL_REGEX.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Please enter a subject.";
    } else if (formData.subject.trim().length > 150) {
      newErrors.subject = "Subject must be less than 150 characters.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please enter your message.";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters long.";
    } else if (formData.message.trim().length > 2000) {
      newErrors.message = "Message must be less than 2000 characters.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error for field on change
    if (errors[name]) {
      setErrors((prev) => {
        const updated = { ...prev };
        delete updated[name];
        return updated;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setStatus("loading");
    setStatusMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json().catch(() => ({}));

      if (res.ok) {
        setStatus("success");
        setStatusMessage(
          data.message || "Thank you! Your message has been sent successfully."
        );
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
          hp_website: "",
        });
        setErrors({});
      } else {
        setStatus("error");
        setStatusMessage(
          data.error ||
            "Unable to send message at this time. Please contact Atharva directly at " +
              siteConfig.links.email
        );
      }
    } catch {
      setStatus("error");
      setStatusMessage(
        "Network connection error. Please try again or email directly at " +
          siteConfig.links.email
      );
    }
  };

  return (
    <SectionContainer id="contact" className="py-24 bg-surface-elevated/30">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Direct Contact & Profiles */}
        <div className="lg:col-span-5 animate-fade-in-up delay-100">
          <span className="inline-block text-xs font-mono font-medium tracking-wider text-primary uppercase mb-4">
            GET IN TOUCH
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Let&apos;s Build Something Meaningful.
          </h2>
          <p className="text-base md:text-lg text-text-secondary leading-relaxed mb-8">
            Whether you have a technical project inquiry, an internship opportunity, a hackathon idea, or want to connect about agentic systems and engineering, feel free to reach out.
          </p>

          <div className="flex flex-col gap-4">
            {/* Email Card */}
            <div className="p-5 rounded-xl border border-border bg-surface hover:border-primary/40 transition-colors">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-surface-elevated flex items-center justify-center shrink-0 text-primary border border-border">
                    <Mail className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <div>
                    <span className="text-xs font-mono font-medium text-text-muted uppercase block">
                      Email Directly
                    </span>
                    <a
                      href={`mailto:${siteConfig.links.email}`}
                      className="text-base font-medium text-foreground hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm"
                    >
                      {siteConfig.links.email}
                    </a>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="p-2 rounded-md hover:bg-surface-elevated text-text-muted hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  title="Copy email address"
                  aria-label="Copy email address to clipboard"
                >
                  {copiedEmail ? (
                    <Check className="w-4 h-4 text-primary" aria-hidden="true" />
                  ) : (
                    <Copy className="w-4 h-4" aria-hidden="true" />
                  )}
                </button>
              </div>
              {copiedEmail && (
                <p className="text-xs font-mono text-primary mt-2 pl-13" role="status">
                  Copied to clipboard!
                </p>
              )}
            </div>

            {/* Location Card */}
            <div className="p-5 rounded-xl border border-border bg-surface">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-surface-elevated flex items-center justify-center shrink-0 text-text-muted border border-border">
                  <MapPin className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <span className="text-xs font-mono font-medium text-text-muted uppercase block">
                    Location
                  </span>
                  <span className="text-base font-medium text-foreground">
                    {siteConfig.links.location}
                  </span>
                </div>
              </div>
            </div>

            {/* Professional Profiles Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
              <a
                href={siteConfig.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-4 rounded-xl border border-border bg-surface hover:border-primary/40 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                aria-label="Visit Atharva's LinkedIn Profile (opens in a new tab)"
              >
                <div className="flex items-center gap-3">
                  <FaLinkedin className="w-5 h-5 text-text-secondary group-hover:text-primary transition-colors" />
                  <span className="text-sm font-medium text-foreground">LinkedIn</span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-text-muted group-hover:text-primary transition-colors" />
              </a>

              <a
                href={siteConfig.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-4 rounded-xl border border-border bg-surface hover:border-primary/40 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                aria-label="Visit Atharva's GitHub Profile (opens in a new tab)"
              >
                <div className="flex items-center gap-3">
                  <FaGithub className="w-5 h-5 text-text-secondary group-hover:text-primary transition-colors" />
                  <span className="text-sm font-medium text-foreground">GitHub</span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-text-muted group-hover:text-primary transition-colors" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="lg:col-span-7 animate-fade-in-up delay-200">
          <div className="rounded-2xl border border-border bg-surface p-6 sm:p-8 md:p-10 shadow-sm">
            <h3 className="text-xl md:text-2xl font-display font-bold text-foreground mb-2">
              Send a Message
            </h3>
            <p className="text-sm text-text-secondary mb-6">
              Drop a note directly to Atharva&apos;s inbox. All fields marked with an asterisk are required.
            </p>

            {/* Status Notifications */}
            {status === "success" && (
              <div
                role="status"
                aria-live="polite"
                className="mb-6 p-4 rounded-xl bg-surface-elevated border border-primary/40 flex items-start gap-3"
              >
                <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-0.5 text-primary">
                  <Check className="w-3.5 h-3.5" aria-hidden="true" />
                </div>
                <div className="text-sm text-foreground">
                  <p className="font-semibold text-primary mb-0.5">Message Sent</p>
                  <p className="text-text-secondary">{statusMessage}</p>
                </div>
              </div>
            )}

            {status === "error" && (
              <div
                role="alert"
                aria-live="assertive"
                className="mb-6 p-4 rounded-xl bg-surface-elevated border border-error/40 flex items-start gap-3"
              >
                <AlertCircle className="w-5 h-5 text-error shrink-0 mt-0.5" aria-hidden="true" />
                <div className="text-sm text-foreground">
                  <p className="font-semibold text-error mb-0.5">Delivery Notice</p>
                  <p className="text-text-secondary">{statusMessage}</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
              {/* Hidden Honeypot Field */}
              <input
                type="text"
                name="hp_website"
                id="hp_website"
                value={formData.hp_website}
                onChange={handleChange}
                tabIndex={-1}
                autoComplete="off"
                className="sr-only"
                aria-hidden="true"
              />

              {/* Name & Email Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-xs font-mono font-medium text-foreground uppercase tracking-wider mb-2"
                  >
                    Your Name <span className="text-primary" aria-hidden="true">*</span>
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Maya Patel"
                    aria-required="true"
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? "name-error" : undefined}
                    disabled={status === "loading"}
                    className={`w-full px-4 py-3 rounded-xl border bg-background text-foreground text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent ${
                      errors.name ? "border-error focus:ring-error" : "border-border hover:border-primary/40"
                    }`}
                  />
                  {errors.name && (
                    <p id="name-error" className="text-xs text-error mt-1.5 font-medium" role="alert">
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-xs font-mono font-medium text-foreground uppercase tracking-wider mb-2"
                  >
                    Your Email <span className="text-primary" aria-hidden="true">*</span>
                  </label>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@organization.com"
                    aria-required="true"
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? "email-error" : undefined}
                    disabled={status === "loading"}
                    className={`w-full px-4 py-3 rounded-xl border bg-background text-foreground text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent ${
                      errors.email ? "border-error focus:ring-error" : "border-border hover:border-primary/40"
                    }`}
                  />
                  {errors.email && (
                    <p id="email-error" className="text-xs text-error mt-1.5 font-medium" role="alert">
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="contact-subject"
                  className="block text-xs font-mono font-medium text-foreground uppercase tracking-wider mb-2"
                >
                  Subject <span className="text-primary" aria-hidden="true">*</span>
                </label>
                <input
                  type="text"
                  id="contact-subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Software Engineering Inquiry / Project Collaboration"
                  aria-required="true"
                  aria-invalid={Boolean(errors.subject)}
                  aria-describedby={errors.subject ? "subject-error" : undefined}
                  disabled={status === "loading"}
                  className={`w-full px-4 py-3 rounded-xl border bg-background text-foreground text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent ${
                    errors.subject ? "border-error focus:ring-error" : "border-border hover:border-primary/40"
                  }`}
                />
                {errors.subject && (
                  <p id="subject-error" className="text-xs text-error mt-1.5 font-medium" role="alert">
                    {errors.subject}
                  </p>
                )}
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-xs font-mono font-medium text-foreground uppercase tracking-wider mb-2"
                >
                  Message <span className="text-primary" aria-hidden="true">*</span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Share details regarding your opportunity, project, or question..."
                  aria-required="true"
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? "message-error" : undefined}
                  disabled={status === "loading"}
                  className={`w-full px-4 py-3 rounded-xl border bg-background text-foreground text-sm transition-colors resize-y min-h-[120px] focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent ${
                    errors.message ? "border-error focus:ring-error" : "border-border hover:border-primary/40"
                  }`}
                />
                {errors.message && (
                  <p id="message-error" className="text-xs text-error mt-1.5 font-medium" role="alert">
                    {errors.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl font-semibold text-sm bg-primary text-white hover:bg-primary-hover active:scale-[0.99] transition-all disabled:opacity-60 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background cursor-pointer"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-4 h-4" aria-hidden="true" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
