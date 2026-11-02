# Anush Ragav V S — Personal Portfolio
> Currently pursuing B.E. Computer Science and Engineering (Artificial Intelligence & Machine Learning) — B.E. CSE (AI/ML) at K. S. Rangasamy College of Technology, exploring how mathematics, machine learning, and data can unlock insights into financial markets.

[![AWS Amplify](https://img.shields.io/badge/Deploy-AWS_Amplify-FF9900?logo=aws-amplify&logoColor=white)](https://aws.amazon.com/amplify/)
[![React](https://img.shields.io/badge/React-19.x-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.x-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3.4-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![GSAP](https://img.shields.io/badge/GSAP-ScrollTrigger-88CE02?logo=greensock&logoColor=white)](https://greensock.com/)

---

## 🌟 Overview

This web application is an immersive digital story presenting an authentic personal portfolio. Rather than a conventional static CV, it presents an authentic journey combining four years of independent currency trading curiosity and distributed data annotation experience with formal computer science education at **K. S. Rangasamy College of Technology**.

The experience is centered around two signature interactive concepts:
1. **The Scroll-Driven Vertical Roadmap:** An animated SVG timeline that progressively draws itself as visitors scroll through real milestones—from early data processing on Amazon Mechanical Turk to algorithmic backtesting and small language model cognitive architecture.
2. **The Neural Constellation:** An interactive node graph uniting Python, Mathematics, Data Science, Quantitative Finance, and Machine Learning. Activating **"Unlock My Tech Superpower"** initiates a cinematic multi-stage calibration revealing:  
   *"Pattern Recognition Across Data, Markets & Machine Intelligence."*

---

## 🚀 Key Features

### 1. Interactive Scroll-Driven Roadmap (GSAP + SVG)
- **Continuous SVG Timeline Path:** Dynamically tracks viewport progress with luminous stroke animation and glowing bead indicators.
- **Alternating Cinematic Milestones (Desktop):** Balanced staggered cards with subtle elevations and real-world narratives.
- **Responsive Mobile Vertical Track:** Clean left-aligned timeline with touch-friendly node cards.
- **Authentic Milestones:**
  - `01 (2019)`: Amazon Mechanical Turk — Part-time Data Processor (~4 years data validation & image classification).
  - `02 (2022)`: Independent Forex Trader & Market Research (~4 years price action & risk management).
  - `03 (August 2026 — 2030)`: K. S. Rangasamy College of Technology — Currently Pursuing B.E. Computer Science and Engineering (Artificial Intelligence & Machine Learning) — B.E. CSE (AI/ML).
  - `04 (2026)`: Building with Python & Data — Self-Directed Learning · Strengthening Technical Foundations.
  - `05 (Present)`: Moving Average Crossover Backtester & SignalFlow AI.
  - `06 (2026)`: Advancing Through Data Science & AI — Currently Selected — GCI World 2026 September.
  - `07 (The Future)`: Quantitative Intelligence — "Where mathematics meets machine intelligence."

### 2. Signature "Neural Constellation" & Superpower Reveal
- **Central AR Core:** Features authentic GitHub portrait and luminous neon accents.
- **Interactive Multi-Disciplinary Nodes:** Inspect Python, Data Science, Mathematics, Quantitative Finance, and Machine Learning.
- **Dynamic Detail Inspection Panel:** Explains why each discipline was chosen, active learning focus, and project connections.
- **Cinematic Reveal Modal:** Interactive calibration (`INITIALIZING...` → `CONNECTING DISCIPLINES...` → `CALIBRATING RISK, DATA & COGNITION`) ending with celebratory confetti and superpower synthesis.

### 3. Quantitative Projects & Deep Case Studies
- **Moving Average Crossover Strategy Backtester:**
  - Tested on historical Google stock data (GOOG) vs Buy & Hold benchmark with zero look-ahead bias.
  - V1 (20/50 SMA crossover): **12.04% CAGR** with **-34.12% max drawdown** (reducing drawdown by >10% vs -44.60% Buy & Hold).
  - V2 (+ 200-day trend filter): **11.32% CAGR** with **-22.04% max drawdown** (cutting drawdown in half to preserve downside capital).
- **SignalFlow AI:**
  - Two-tier fintech cognitive architecture pairing a local 2B SLM (Strands Decider 2B) with cloud Gemini 3.5.
  - Confidence-aware routing with ~968.8 ms local sentiment classification at $0.00 cost.
  - **62.5% cloud API spend avoided**, **50% locally filtered**, and **29 passing Pytest test cases**.
- **Public GitHub Repositories:** Live API integration with graceful static fallback for TouchGrass 🌱 (Hacktoberfest Open-Source AI Challenge, React 19 + Ollama PWA), LingoBuddy (Speech AI, Web Speech API + Ollama), and coding-solutions (LeetCode/DSA algorithms).

### 4. Transparent Skills Grid & Verified Credentials
- **No Fabricated Percentage Bars:** Clear categorization by actual stage: *Used in Projects*, *Practically Explored*, and *Currently Learning*.
- **Verified Credentials:**
  - Reliance Foundation: *AI – Machine Learning Engineer Certificate Course* (June 2026).
  - EF Standard English Test: *65/100 | C1 Advanced* (November 2026).

### 5. Micro-Interactions & Accessibility
- Minimal custom desktop glowing cyan cursor (automatically disabled on touch devices and for users with `prefers-reduced-motion`).
- Lenis smooth scrolling with GSAP ScrollTrigger synchronization.
- One-click copy email with visual toast notification.
- Accessible ARIA attributes, semantic HTML5 landmarks, and keyboard navigation.

---

## 🛠️ Technology Stack

| Layer | Technologies |
| :--- | :--- |
| **Framework & Core** | React 19, TypeScript, Vite |
| **Styling** | Vanilla CSS + Tailwind CSS (Custom dark futuristic theme) |
| **Animation & Scroll** | GSAP, GSAP ScrollTrigger, Lenis Smooth Scroll |
| **Interactive Visuals** | SVG Paths & Dynamic Coordinate Vectors, Canvas Confetti |
| **Icons & Typography** | Lucide React, Google Fonts (*Outfit*, *JetBrains Mono*) |
| **Cloud & Deployment** | AWS Amplify Hosting, Amazon CloudFront (Global CDN) |

---

## 💻 Local Development Setup

### Prerequisites
- **Node.js** (v18.x or v20.x or v24.x recommended)
- **npm** (v9+ or v11+)

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/anushragav-vs/my-portfolio.git
   cd my-portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the local development server:
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser.

4. Run the production build test:
   ```bash
   npm run build
   ```

5. Preview the production build locally:
   ```bash
   npm run preview
   ```

---

## ☁️ AWS Amplify Deployment Guide

This repository includes a pre-configured `amplify.yml` build specification tailored for Vite and Single Page Applications (SPA).

### Step-by-Step Deployment:
1. Push your code to your GitHub repository:
   ```bash
   git add .
   git commit -m "feat: complete portfolio for AWS Student Builder Challenge"
   git push origin main
   ```
2. Log into the **AWS Management Console** and navigate to **AWS Amplify**.
3. Click **"Deploy an app"** (or **"New app"** → **"Host web app"**).
4. Choose **GitHub** as the source code repository provider and authorize AWS Amplify.
5. Select the repository `anushragav-vs/my-portfolio` and branch `main`.
6. AWS Amplify will automatically detect the build settings from `amplify.yml`:
   ```yaml
   version: 1
   frontend:
     phases:
       preBuild:
         commands:
           - npm ci
       build:
         commands:
           - npm run build
     artifacts:
       baseDirectory: dist
       files:
         - '**/*'
     cache:
       paths:
         - node_modules/**/*
   ```
7. **Single Page Application (SPA) Rewrites:**  
   In the Amplify console, navigate to **Rewrites and redirects** and ensure the default SPA fallback is active:
   - Source: `</^[^.]+$|\.(?!(css|gif|ico|jpg|js|png|txt|svg|woff|woff2|ttf|map|json)$)([^.]+$)/>`
   - Target: `/index.html`
   - Status: `200 (Rewrite)`
8. Click **Save and Deploy**. AWS Amplify will provision, build, and deploy your site to a secure, globally accelerated CloudFront URL (with free managed SSL/TLS).

---

## 📊 AWS Services Used

- **AWS Amplify Hosting:** Continuous Git-based deployment, automated build pipeline, and custom domain hosting.
- **Amazon CloudFront:** Low-latency worldwide content delivery network caching static assets (JavaScript, CSS, SVG).
- **Amazon Route 53 (Optional):** DNS routing and custom domain configuration with automatic SSL certificate issuance.

---

## 🧠 Challenges & Key Learnings

1. **Synchronizing Lenis Smooth Scroll with GSAP ScrollTrigger:**  
   *Challenge:* Achieving high-frame-rate momentum scrolling while maintaining pixel-perfect SVG path drawing and trigger points.  
   *Solution:* Hooked Lenis's `raf` updates directly into GSAP's ticker (`gsap.ticker.add`) and notified ScrollTrigger on scroll ticks, eliminating jitter and lag.

2. **Authentic Quantitative Rationale vs Exaggeration:**  
   *Challenge:* Presenting backtested financial strategies without unrealistic claims.  
   *Solution:* Highlighted the exact trade-off of the 20/50 SMA crossover strategy—underperforming total buy-and-hold CAGR (11.6% vs 22.3%) while successfully reducing maximum drawdown by 10 percentage points and curtailing portfolio volatility.

3. **Responsive Constellation Coordinates:**  
   *Challenge:* Ensuring interconnected SVG vector nodes remain aligned and touch-friendly across small mobile viewports (360px–390px) up to large 4K displays.  
   *Solution:* Designed the canvas with percentage-based mathematical anchors and flexible detail cards that slide into focus upon touch.

---

## 🔮 Future Improvements

- Add a live interactive parameter slider to the Moving Average Crossover simulation directly in the browser using WebAssembly.
- Integrate AWS Lambda with Amazon API Gateway to create a serverless market news sentiment digest microservice.
- Implement light/dark theme toggle while preserving futuristic neon cyan aesthetics.

---

## 👤 Author

**Anush Ragav V S**  
*Currently pursuing B.E. Computer Science and Engineering (Artificial Intelligence & Machine Learning) — B.E. CSE (AI/ML)*  
*K. S. Rangasamy College of Technology, Tamil Nadu, India*  

- **Email:** [anushragav.dev@outlook.com](mailto:anushragav.dev@outlook.com)
- **GitHub:** [https://github.com/anushragav-vs](https://github.com/anushragav-vs)
- **LinkedIn:** [https://www.linkedin.com/in/anushragavvs](https://www.linkedin.com/in/anushragavvs)
