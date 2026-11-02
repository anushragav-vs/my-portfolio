# AWS Student Builder Challenge Submission Draft
## "Build Your Tech Superpower"

---

### 1. Project Title
**Anush Ragav V S — Interactive Personal Portfolio & Neural Superpower Engine**

---

### 2. Student & Builder Information
- **Name:** Anush Ragav V S
- **Degree:** B.E. Computer Science and Engineering (Artificial Intelligence and Machine Learning)
- **Institution:** K. S. Rangasamy College of Technology
- **Duration:** August 2026 – 2030
- **Location:** Tamil Nadu, India
- **Email:** [anushragav.dev@outlook.com](mailto:anushragav.dev@outlook.com)
- **GitHub:** [https://github.com/anushragav-vs](https://github.com/anushragav-vs)
- **LinkedIn:** [https://www.linkedin.com/in/anushragavvs](https://www.linkedin.com/in/anushragavvs)
- **Repository:** [https://github.com/anushragav-vs/my-portfolio](https://github.com/anushragav-vs/my-portfolio) *(Update with your repository URL)*
- **Live Deployment URL:** `[Your AWS Amplify Live App URL Here — e.g. https://main.dXXXXXXXXX.amplifyapp.com]`

---

### 3. Project Summary & Narrative
Before beginning my undergraduate degree in Computer Science (AI/ML), I spent approximately four years gaining practical experience as an independent forex trader and four years processing, classifying, and validating large datasets through Amazon Mechanical Turk.

These formative experiences revealed two critical truths: real-world data is noisy and imperfect, and markets operate on probability rather than emotion. To understand these systems rigorously, intuition alone was insufficient—I needed computation, higher mathematics, and machine learning.

This portfolio is an interactive digital journey built for the AWS Student Builder Challenge. It showcases an authentic early-stage builder's evolution: moving from unstructured curiosity into formal AI/ML education and quantitative strategy engineering.

---

### 4. Unique Creative Features

#### A. Signature Interactive Neural Constellation ("Unlock My Tech Superpower")
- **Concept:** A visual neural graph mapping the interdisciplinary intersection of Python, Data Science, Mathematics, Quantitative Finance, and Machine Learning.
- **Cinematic Reveal:** Triggering **"Unlock My Tech Superpower"** runs a multi-stage calibration sequence:
  `INITIALIZING...` → `CONNECTING DISCIPLINES...` → `IDENTIFYING PATTERNS...` →
  **"PATTERN RECOGNITION ACROSS DATA, MARKETS & MACHINE INTELLIGENCE"**
- **Exploration:** Visitors can interactively inspect each node to examine why that discipline was chosen, active learning focus areas, and applied project cross-links.

#### B. Scroll-Driven Vertical SVG Roadmap
- **Progressive Timeline Drawing:** Utilizes GSAP ScrollTrigger to progressively draw an illuminated SVG timeline path as visitors scroll down the page.
- **Desktop & Mobile Adaptability:** Displays an alternating cinematic layout on desktop screens and shifts seamlessly to a touch-first left-aligned vertical layout on mobile devices.
- **Authentic Milestones:** Spans from early data work on Amazon Mechanical Turk (2019) to algorithmic backtesting and future quantitative intelligence aspirations.

#### C. Quantitative Rationale & Deep Project Case Studies
- **Moving Average Crossover Backtester:** Honest trade-off demonstration—underperforming buy-and-hold in absolute CAGR (11.6% vs 22.3%) while cutting maximum drawdown by ~10% and significantly lowering volatility. Zero look-ahead bias.
- **SignalFlow AI:** Two-tier cognitive architecture utilizing a local 2B SLM (Strands/Decider) to filter neutral news locally (~950 ms) before routing to Google Gemini 3.5, reducing cloud API consumption by 62.5%.
- **Live GitHub API Repositories:** Real-time repository showcase with static fallback.

---

### 5. Technology Stack

- **Frontend Core:** React 19, TypeScript, Vite
- **Styling & Design System:** Tailwind CSS with a tailored Dark Futuristic theme (`#05070B`, electric aqua `#00E5FF`, sky blue `#38BDF8`)
- **Animations:** GSAP, GSAP ScrollTrigger, Lenis Smooth Scroll
- **Visuals & Data Graphics:** Dynamic SVG Path rendering, Canvas Confetti
- **Icons & Fonts:** Lucide React, Google Fonts (*Outfit*, *JetBrains Mono*)
- **Deployment Platform:** AWS Amplify Hosting

---

### 6. AWS Services Used

- **AWS Amplify Hosting:**
  - Automated continuous Git integration connected to the GitHub repository.
  - Automatic build detection using root-level `amplify.yml`.
  - Seamless Single Page Application (SPA) 200 rewrite rule management.
- **Amazon CloudFront:**
  - Global edge caching ensuring low-latency delivery of static JS, CSS, and SVG assets worldwide.
- **AWS Certificate Manager (ACM):**
  - Managed SSL/TLS certificate provisioning for custom domain encryption.

---

### 7. Key Challenges & Technical Learnings

1. **Integrating Smooth Scroll with GSAP ScrollTrigger:**  
   Coordinating Lenis smooth momentum scrolling with ScrollTrigger without frame drops or offset desynchronization. Solved by binding Lenis updates directly to GSAP's central ticker.
2. **Authentic Quantitative Presentation:**  
   Avoiding the temptation to claim exaggerated returns. Documenting real-world backtest trade-offs (volatility reduction vs total return) reflects genuine quantitative methodology.
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

### 9. Deployment Instructions for Submission Reviewers

1. Fork or clone repository: `https://github.com/anushragav-vs/my-portfolio`
2. Install dependencies: `npm install`
3. Execute production build: `npm run build`
4. Preview production build: `npm run preview`
5. Connect repository to AWS Amplify Hosting following `amplify.yml`.
