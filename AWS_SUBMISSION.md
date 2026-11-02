# Personal Portfolio & Digital Journey — AWS Amplify Deployment Guide & Project Summary

---

### 1. Project Title
**Anush Ragav V S — Interactive Personal Portfolio & Neural Superpower Engine**

---

### 2. Builder & Education Information
- **Name:** Anush Ragav V S
- **Degree:** B.E. Computer Science and Engineering (Artificial Intelligence & Machine Learning) — B.E. CSE (AI/ML) *(Currently Pursuing)*
- **Institution:** K. S. Rangasamy College of Technology
- **Duration:** August 2026 – 2030 (Currently Pursuing)
- **Location:** Tamil Nadu, India
- **Email:** [anushragav.dev@outlook.com](mailto:anushragav.dev@outlook.com)
- **GitHub:** [https://github.com/anushragav-vs](https://github.com/anushragav-vs)
- **LinkedIn:** [https://www.linkedin.com/in/anushragavvs](https://www.linkedin.com/in/anushragavvs)
- **Collaboration Note:** *"Always open to learning, exploring new technologies, and collaborating on meaningful projects with curious and driven people."*
- **Repository:** [https://github.com/anushragav-vs/my-portfolio](https://github.com/anushragav-vs/my-portfolio)
- **Live Deployment URL:** `[Your AWS Amplify Live App URL Here — e.g. https://main.dXXXXXXXXX.amplifyapp.com]`

---

### 3. Project Summary & Authentic Narrative
Before beginning formal undergraduate studies in Computer Science and Engineering (AI/ML), I spent approximately four years gaining practical experience as an independent currency trader studying market structure, alongside four years processing, classifying, and validating large datasets through Amazon Mechanical Turk.

These formative experiences revealed two critical realities: real-world data is noisy and imperfect, and markets operate on probability rather than emotion. To understand these systems rigorously, intuition alone was insufficient—I needed computation, higher mathematics, and machine learning.

This portfolio is an interactive digital journey showcasing an authentic early-stage builder's evolution: moving from unstructured curiosity into formal AI/ML education, open-source development, and quantitative strategy engineering.

---

### 4. Core Interactive Features

#### A. Signature Interactive Neural Constellation
- **Concept:** A visual neural graph mapping the interdisciplinary intersection of Python, Data Science, Mathematics, Quantitative Finance, and Machine Learning.
- **Cinematic Calibration:** Triggering **"Unlock My Tech Superpower"** runs a multi-stage calibration sequence:
  `INITIALIZING...` → `CONNECTING DISCIPLINES...` → `IDENTIFYING PATTERNS...` →
  **"PATTERN RECOGNITION ACROSS DATA, MARKETS & MACHINE INTELLIGENCE"**
- **Exploration:** Visitors can interactively inspect each node to examine why that discipline was chosen, active learning focus areas, and applied project cross-links.

#### B. Scroll-Driven Vertical SVG Roadmap
- **Progressive Timeline Drawing:** Utilizes GSAP ScrollTrigger to progressively draw an illuminated continuous SVG timeline path as visitors scroll down the page.
- **Desktop & Mobile Adaptability:** Displays an alternating cinematic layout on desktop screens and shifts seamlessly to a touch-first left-aligned vertical layout on mobile devices.
- **Authentic Chronological Milestones:**
  1. `01 (2019 — 2023)`: Amazon Mechanical Turk — Part-time Data Processor (~4 years data validation & image classification).
  2. `02 (2022 — Present)`: Independent Forex Trader & Market Research (~4 years price action & risk management).
  3. `03 (August 2026 — 2030)`: K. S. Rangasamy College of Technology — Currently Pursuing B.E. CSE (AI/ML).
  4. `04 (2026)`: Building with Python & Data — Self-Directed Learning · Strengthening Technical Foundations.
  5. `05 (Present)`: Building & Experimenting — Moving Average Crossover Backtester & SignalFlow AI.
  6. `06 (2026)`: Advancing Through Data Science & AI — Currently Selected — GCI World 2026 September.
  7. `07 (The Future)`: Quantitative Intelligence — *"Where mathematics meets machine intelligence."*

#### C. Verified Quantitative & AI Projects
- **Moving Average Crossover Strategy Backtester:**
  - Tested on historical Google stock data (GOOG) vs Buy & Hold benchmark with zero look-ahead bias.
  - V1 (20/50 SMA crossover): 12.04% CAGR with -34.12% max drawdown (reducing drawdown by >10% vs -44.60% Buy & Hold).
  - V2 (+ 200-day trend filter): 11.32% CAGR with -22.04% max drawdown (cutting drawdown in half!).
- **SignalFlow AI:**
  - Two-tier cognitive architecture utilizing a local 2B SLM (Strands Decider 2B) running on CPU for confidence-aware sentiment classification in ~968.8 ms at $0.00 cost.
  - 62.5% cloud API spend avoided, 50% locally filtered as noise/neutral, and 29 passing Pytest test cases.
- **TouchGrass 🌱:** Local-first PWA built for Hacktoberfest Open-Source AI Challenge using React 19, TypeScript, and Ollama open-weight AI.
- **LingoBuddy:** Voice-interactive foreign language companion built for Hacktoberfest Weekend Challenge using the Web Speech API and Ollama.

---

### 5. Technology Stack

- **Frontend Core:** React 19, TypeScript 5.x, Vite
- **Styling & Design System:** Tailwind CSS with a tailored Dark Futuristic theme (`#05070B`, electric aqua `#00E5FF`, sky blue `#38BDF8`)
- **Animations:** GSAP, GSAP ScrollTrigger, Lenis Smooth Momentum Scroll
- **Visuals & Data Graphics:** Dynamic SVG Path rendering, Canvas Confetti
- **Icons & Typography:** Lucide React, Google Fonts (*Outfit*, *JetBrains Mono*)
- **Deployment Platform:** AWS Amplify Hosting

---

### 6. AWS Services Used

- **AWS Amplify Hosting:**
  - Automated continuous Git integration connected to the GitHub repository (`main` branch).
  - Automatic build detection using root-level `amplify.yml`.
  - Seamless Single Page Application (SPA) rewrite rules.
- **Amazon CloudFront:**
  - Global edge caching ensuring low-latency delivery of static JS, CSS, and SVG assets worldwide.
- **AWS Certificate Manager (ACM):**
  - Managed SSL/TLS certificate provisioning for HTTPS encryption.

---

### 7. Key Challenges & Technical Learnings

1. **Synchronizing Smooth Scroll with GSAP ScrollTrigger:**  
   Coordinating Lenis smooth momentum scrolling with ScrollTrigger without frame drops or offset desynchronization. Solved by binding Lenis updates directly to GSAP's central ticker.
2. **Authentic Quantitative Rationale:**  
   Avoiding exaggerated returns. Documenting real-world backtest trade-offs (volatility reduction vs total return) reflects genuine quantitative methodology.
3. **Responsive Mathematical Coordinates:**  
   Designing vector connections that dynamically scale from compact 360px mobile viewports to ultra-wide displays while ensuring touch accessibility.

---

### 8. Verification & Screenshots Placeholder

```markdown
<!-- Replace these placeholders with actual screenshots after deployment -->
![Hero Section and Identity](screenshot_hero.png)
![Neural Constellation - Superpower Reveal](screenshot_constellation.png)
![Interactive SVG Roadmap](screenshot_roadmap.png)
![Project Case Study Modal](screenshot_project_modal.png)
![AWS Amplify Hosting Console](screenshot_aws_amplify.png)
```

---

### 9. Deployment Instructions

1. Fork or clone repository: `https://github.com/anushragav-vs/my-portfolio`
2. Install dependencies: `npm install`
3. Execute production build: `npm run build`
4. Preview production build: `npm run preview`
5. Connect repository to AWS Amplify Hosting following `amplify.yml`.
