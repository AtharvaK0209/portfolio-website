# Atharva Khandagale — Portfolio Website Product & Design Specification

## 1. Product Goal

Build a polished, modern, responsive personal portfolio website for a third-year Computer Engineering student.

The site should communicate:

**Software Engineering + Agentic AI + Data Analytics + Product Building + Technical Community Leadership**

The portfolio should feel like a professional engineering/product portfolio rather than a generic student template.

The repository already exists locally and is not deployed yet. Development should happen section-by-section, with architecture established before major implementation.

## 2. Core UX Principle

The website must be:

- Professional
- Modern
- Technically impressive
- Fast
- Responsive
- Accessible
- Easy to scan
- Animation-rich but not animation-heavy
- Maintainable
- Easy to update after deployment
- Suitable for recruiters, hiring managers, hackathon judges and collaborators

Avoid:
- Excessive animations
- Visual clutter
- Huge paragraphs
- Generic template appearance
- Unnecessary gradients
- Unreadable typography
- Over-engineered components
- Hard-coded duplicated content

## 3. Theme System

### Primary Theme
A switchable **Dark / Light theme**.

### Dark Theme
- Primary background: near-black / black
- Surfaces: slightly lighter black / charcoal
- Primary accent: red
- Text: white / near-white
- Secondary text: muted gray
- Borders: subtle dark gray

### Light Theme
- Do NOT use pure white everywhere.
- Base background should be a very light beige / cream.
- Secondary surfaces can use white.
- Primary accent: red
- Text: near-black
- Secondary text: muted dark gray
- Borders: warm/light gray

### Color Direction
Core palette:

**Red + Black + White**

with the light theme introducing:

**Red + Cream/Beige + White + Black**

The exact red, neutral tones and contrast values should be selected systematically rather than arbitrarily.

## 4. Typography

Use a modern, highly readable sans-serif type system.

Requirements:
- Strong hierarchy
- Large display heading for hero
- Compact navigation
- Clear section headings
- Comfortable body text
- Monospace accent font may be used selectively for code/AI terminal elements

Avoid using too many font families.

## 5. Navigation

Persistent responsive navbar.

Desktop:
- Logo / name
- About
- Projects
- Experience
- Skills
- Competitions & Achievements
- Contact
- Theme toggle
- AI Command Shell trigger

Mobile:
- Compact menu
- Same navigation destinations
- Theme toggle
- AI command access

Navbar should:
- Stay visually clean
- Support smooth section navigation
- Clearly indicate active section
- Remain accessible

## 6. Landing / Home / Hero

Purpose:
Immediately communicate who Atharva is and what he builds.

Content:
- Professional photo
- Name
- Short positioning statement
- Short supporting introduction
- Primary CTA: View Projects
- Secondary CTA: Get in Touch
- Optional resume CTA
- Social links
- Subtle visual/interactive element

Possible positioning direction:

> Computer Engineering student building software products across AI, full-stack engineering and data.

Do not lock this exact copy until final content is reviewed.

Hero should establish the visual language of the whole website.

## 7. About Section

Include:
- Short professional introduction
- Education
- Current interests
- Engineering focus
- Builder mindset
- Community involvement
- Relevant highlights

Could include a compact "currently exploring" area:
- Agentic AI
- Data Analytics
- Software Engineering
- Product Engineering

Keep the section concise.

## 8. Featured Projects Section

Home page should showcase selected/high-value projects rather than every project.

Candidate featured projects:
1. Lazarus
2. GlobeTrotter
3. CareerLens
4. Nexus
5. DealFlow360
6. Expired Medicine Detection & Redistribution Management System

Final ordering should be based on career relevance.

Each project card can contain:
- Project name
- One-line value proposition
- Description
- Tech stack
- Role / contribution
- Outcome / achievement
- GitHub link
- Live demo link where available
- Related achievement badge if applicable

Use tasteful hover interactions.

## 9. Projects Page / Tab

Separate full projects listing.

Support:
- All projects
- Categories / filters
- Technology tags
- Search if the collection becomes large

Project details should be data-driven so projects can be added/edited without modifying multiple UI components.

## 10. Experience Section

Display experiences as a chronological timeline.

Each timeline entry should contain:
- Organization
- Role
- Start date
- End date
- Duration
- Location / mode where relevant
- Short description
- Responsibilities
- Impact / achievements
- Technologies where useful

Potential experiences:
- Google Student Ambassador 2026
- E-Cell IIT Bombay Campus Ambassador 2026
- GDG On Campus SIESGST Volunteer
- Oasis Infobyte internship
- Ethical Hacking / in-house internship
- Other verified future experiences

Timeline should visually communicate progression.

## 11. Skills Section

Skills displayed in category-based cards.

Categories:
- Programming
- Frontend
- Backend
- Databases
- AI / GenAI
- Data / Analytics
- Cybersecurity
- Tools / Platforms

Each card should have:
- Category title
- Icon or subtle visual identifier
- Skill list
- Optional proficiency/context indicators

### Interaction
On hover:
- Card can tilt/flip subtly.

On click:
- Card should perform a complete flip to reveal useful contextual information, such as:
  - What the technology is used for in Atharva's work
  - Relevant projects
  - Experience where it was used

The interaction must remain usable on mobile where hover does not exist.

Do not make skill proficiency percentages unless objectively justified.

## 12. Competitions & Achievements

Dedicated section for:
- Hackathons
- Finalist achievements
- Rankings
- Awards
- Competitions
- CTFs

Known highlights:
- Odoo × SNS Coimbatore Hackathon finalist
- Vishwanova grand finalist among 700+ teams
- PCB Designing Competition — 2nd position
- X'ploitathon CTF — Rank 26 in Round 2
- Other verified achievements

Use achievement cards/timeline/grid depending on final visual architecture.

## 13. Contact / Get In Touch

Two large cards side-by-side on desktop and stacked on mobile.

### Card 1 — Direct Contact

Display:
- Email
- Mobile number
- Location

Below:
1. GitHub
2. LinkedIn
3. Instagram
4. Twitter/X

Each with:
- Recognizable icon
- Accessible label
- External-link behavior

Sensitive information should only be exposed after the user confirms the exact public email, phone and location wording.

### Card 2 — Message Form

Fields:
- Sender name
- Sender email
- Subject
- Message body
- Send Message button

Requirement:
The form should actually deliver the message to Atharva's email address.

Implementation must use a secure email/form service or backend mechanism. Never expose private email credentials or API keys in client-side code.

Include:
- Client-side validation
- Server/API validation
- Loading state
- Success state
- Error state
- Spam/abuse protection
- Accessible form labels

## 14. Footer

Footer should contain:

### Identity
- Atharva Khandagale
- Short one-line positioning statement

### Explore
- About
- Projects
- Experience
- Skills
- Competitions & Achievements

### Resources
- GitHub
- LinkedIn
- Twitter/X

Potentially:
- Resume
- Contact

Bottom:
- Copyright notice
- Current year

## 15. AI Command Shell

Major differentiating feature.

Create an interactive command-shell-style UI that allows visitors to ask questions about Atharva.

Example:

```text
> ask "What projects has Atharva built?"
> ask "What cybersecurity experience does he have?"
> ask "Which hackathons has he qualified for?"
> ask "What technologies does he know?"
```

### Core requirement

The AI should answer questions using information from Atharva's own portfolio/content.

It should NOT invent facts.

The knowledge source should be the website's structured content / verified portfolio data.

### UX

Opening the AI shell:
- Subtle terminal/command-line animation
- Focus input automatically
- Command suggestions
- Typing / response animation where appropriate
- Clear loading state
- Error handling
- Close / escape support

### Architecture

Prefer:
- Structured local portfolio data as the canonical source
- Backend/serverless endpoint for LLM calls
- Environment variables for API keys
- No secret keys in frontend code

The AI layer should be replaceable so the portfolio remains usable if the AI service is unavailable.

## 16. Animation System

Animations should communicate hierarchy and interaction, not exist everywhere.

Recommended:
- Hero entrance animation
- Section reveal on scroll
- Subtle navbar transition
- Project-card hover
- Skill-card flip
- Achievement-card hover
- AI shell opening animation
- Button micro-interactions
- Timeline reveal
- Theme transition
- Page transitions where useful

Avoid:
- Constant floating elements
- Excessive parallax
- Long animations
- Animation on every text element
- Animations that hurt accessibility or performance

Respect:
`prefers-reduced-motion`

## 17. Responsive Design

Must support:
- Desktop
- Laptop
- Tablet
- Mobile

Test at common breakpoints.

Mobile must not be a compressed desktop version.

Special attention:
- Navbar
- Hero photo
- Project cards
- Timeline
- Skill flip interaction
- Contact cards
- AI command shell

## 18. Accessibility

Implement:
- Semantic HTML
- Keyboard navigation
- Visible focus states
- ARIA labels where appropriate
- Accessible form labels
- Sufficient color contrast
- Reduced-motion support
- Alt text for meaningful images
- No interaction that requires hover only

## 19. Performance

Target:
- Fast initial load
- Optimized images
- Lazy loading where appropriate
- Minimal JavaScript overhead
- Avoid unnecessary dependencies
- Efficient animations
- Production build validation

## 20. SEO

Include:
- Meaningful page title
- Meta description
- Open Graph metadata
- Twitter/X card metadata where useful
- Semantic headings
- Canonical URL once deployed
- Structured data where appropriate

## 21. Technical Architecture Principles

Before implementation:
1. Inspect the existing repository.
2. Identify current framework and dependencies.
3. Do not replace the stack unnecessarily.
4. Create a clear component architecture.
5. Separate content/data from presentation.
6. Establish design tokens.
7. Establish routing.
8. Establish responsive behavior.
9. Establish accessibility conventions.
10. Establish deployment configuration.

Content should ideally live in structured data modules, for example:

```text
src/
  components/
  sections/
  pages/
  data/
    profile.*
    projects.*
    experience.*
    skills.*
    achievements.*
  assets/
  styles/
  lib/
```

Exact architecture must adapt to the repository's existing framework.

## 22. Content Architecture

Create one canonical data model for:

- Profile
- Education
- Projects
- Experience
- Skills
- Achievements
- Social links
- Contact details

The UI should consume this data rather than hard-coding repeated content.

This makes future updates easy.

## 23. Security

Never:
- Put LLM API keys in frontend source
- Put email service secrets in frontend source
- Commit `.env` secrets
- Trust arbitrary user input
- Send unsanitized user input directly to unsafe systems

Use server-side/serverless functions for:
- LLM requests
- Email delivery
- Other privileged operations

## 24. Deployment

Target:
**Vercel**

Requirements:
- Production build passes
- Environment variables configured
- Correct SPA/route behavior
- Secure API routes
- Contact form works in production
- AI shell works in production
- No development-only code
- Responsive QA completed

## 25. Section-by-Section Development Workflow

The website must NOT be generated as one giant implementation.

Use this sequence:

### Phase 1 — Repository Audit & Architecture
No major UI implementation.

Deliver:
- Existing stack analysis
- Existing code analysis
- Current routes/components
- Proposed information architecture
- Component hierarchy
- Data architecture
- Design-token strategy
- AI architecture
- Contact-form architecture
- Deployment architecture
- Implementation roadmap

### Phase 2 — Design System Foundation
Implement:
- Theme system
- Colors
- Typography
- Spacing
- Borders
- Shadows
- Buttons
- Cards
- Container/grid system
- Responsive foundations
- Animation primitives

### Phase 3 — Navbar + Global Shell
Implement:
- Navbar
- Theme switcher
- Navigation
- Mobile menu
- Global layout
- Footer foundation

### Phase 4 — Hero / Home
Implement:
- Photo
- Introduction
- CTA
- Social links
- Hero animations

### Phase 5 — About
Implement:
- About content
- Education
- Current focus
- Personal/professional highlights

### Phase 6 — Featured Projects
Implement:
- Featured project cards
- Interactions
- Tech badges
- Links
- Achievement highlights

### Phase 7 — Full Projects Page
Implement:
- Project data architecture
- Filters
- Search if needed
- Project detail views/cards

### Phase 8 — Experience
Implement:
- Timeline
- Dates
- Durations
- Roles
- Achievements

### Phase 9 — Skills
Implement:
- Category cards
- Hover interactions
- Click-to-flip behavior
- Mobile interaction fallback

### Phase 10 — Competitions & Achievements
Implement:
- Hackathons
- Rankings
- Awards
- Competition cards/timeline

### Phase 11 — Contact
Implement:
- Direct contact card
- Social links
- Message form
- Validation
- Email delivery
- Success/error states

### Phase 12 — AI Command Shell
Implement:
- Shell UI
- Backend/serverless API
- LLM integration
- Portfolio knowledge retrieval
- Guardrails against hallucination
- Loading/error states

### Phase 13 — Polish & QA
Review:
- Responsive behavior
- Accessibility
- Performance
- Animation quality
- SEO
- Content accuracy
- Broken links
- Console errors
- Build errors

### Phase 14 — Deployment
- Configure Vercel
- Configure environment variables
- Production build
- Deploy
- Test production URL
- Final QA

## 26. Mandatory Section Handoff Pattern

Before building every section, the agent must explain:

### Before Implementation
- What this section is supposed to achieve
- User experience
- Content required
- Component structure
- Data required
- Responsive behavior
- Animation/interactions
- Dependencies

Then implement only that section.

### After Implementation
Report:
- Files created/modified
- Components created
- Logic implemented
- Styling implemented
- Responsive behavior
- Accessibility
- Animations
- Data integration
- Tests/checks performed
- Any remaining issue or dependency

Then STOP and wait for approval before moving to the next section.

## 27. Reference Material Handling

The portfolio will receive many future references:
- Existing resume
- Updated CV
- Job/career information
- Design screenshots
- Website references
- Project descriptions
- GitHub repositories
- Certificates
- Photos
- Branding references

Rules:
- Treat newly provided verified career information as the latest source.
- Do not overwrite accurate existing data without checking conflicts.
- Do not invent achievements, technologies or metrics.
- Extract useful design principles from references rather than blindly copying.
- Maintain visual consistency across sections.

## 28. Content Accuracy Rules

The portfolio is a professional career document.

Therefore:
- No fabricated metrics
- No inflated claims
- No invented responsibilities
- No false proficiency levels
- No fake testimonials
- No fake client/company claims
- No misleading AI claims
- Clearly distinguish team achievement from individual contribution

## 29. Overall Visual Direction

Target aesthetic:

**Editorial engineering portfolio + modern product website + subtle terminal/AI identity**

Visual characteristics:
- Strong typography
- Generous whitespace
- Red accent system
- Black/cream/white surfaces
- Sharp but tasteful cards
- Thin borders
- Subtle depth
- Controlled motion
- Technical micro-details
- Professional photography
- Strong visual hierarchy

The website should look impressive at first glance but remain credible to a recruiter.

## 30. Future Update Model

After initial deployment, future updates should primarily require changing structured content rather than redesigning components.

Examples:
- Add new project
- Add internship
- Add achievement
- Update skills
- Update resume
- Update social links
- Add certificate
- Add new experience

The architecture should make these updates low-friction.
