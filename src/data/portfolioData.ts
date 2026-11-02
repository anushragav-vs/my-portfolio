import type { Milestone, Project, SkillCategory, Certification } from '../types';

export const PERSONAL_INFO = {
  name: 'Anush Ragav V S',
  shortName: 'Anush Ragav',
  initials: 'AR',
  role: 'AI/ML Student & Quantitative Finance Explorer',
  tagline: 'Building at the intersection of AI, Data & Quantitative Finance.',
  altTagline: 'Learning. Building. Exploring.',
  bio: 'Currently pursuing B.E. Computer Science and Engineering (Artificial Intelligence & Machine Learning) — B.E. CSE (AI/ML) at K. S. Rangasamy College of Technology, exploring how mathematics, machine learning, and data can unlock insights into financial markets.',
  collaborationMessage: 'Always open to learning, exploring new technologies, and collaborating on meaningful projects with curious and driven people.',
  narrativeLead: "Curiosity became a direction.",
  narrativeBody: [
    "Before starting my engineering degree, I spent approximately four years analyzing currency price movements as an independent forex trader, alongside four years of data processing and image classification through Amazon Mechanical Turk.",
    "These early experiences taught me two fundamental realities: the messiness of real-world data and the probabilistic nature of financial markets. I realized intuition alone wasn't enough—I needed rigorous mathematics, computation, and machine learning to build systematic understanding.",
    "Now, as a student currently pursuing B.E. Computer Science and Engineering (Artificial Intelligence & Machine Learning) — B.E. CSE (AI/ML) at K. S. Rangasamy College of Technology, I am uniting these threads: studying algorithms, writing Python, modeling risk, and turning financial curiosity into transparent code."
  ],
  college: 'K. S. Rangasamy College of Technology',
  degree: 'B.E. Computer Science and Engineering (Artificial Intelligence & Machine Learning) — B.E. CSE (AI/ML)',
  duration: 'August 2026 – 2030 (Currently Pursuing)',
  location: 'Tamil Nadu, India',
  email: 'anushragav.dev@outlook.com',
  githubUrl: 'https://github.com/anushragav-vs',
  linkedinUrl: 'https://www.linkedin.com/in/anushragavvs',
  avatarUrl: '/hero-portrait.jpg',
};

export const PROJECTS: Project[] = [
  {
    id: 'signalflow-ai',
    title: 'SignalFlow AI',
    category: 'Fintech Cognitive Architecture & NLP',
    summary: 'A two-tier cognitive architecture designed to filter financial noise and synthesize high-conviction market research dossiers.',
    description: 'Designed to solve the bottleneck of financial news overload and costly cloud API consumption. SignalFlow AI implements a two-tier cognitive architecture: System One uses a local small language model (Strands Decider 2B) running on CPU for confidence-aware sentiment classification in ~968 ms with $0.00 API cost, filtering neutral noise locally. System Two routes high-conviction signals to Google Gemini 3.5 for 8-factor institutional research dossiers with SQLite audit ledgering.',
    tags: ['Python 3.10+', 'Strands Decider 2B', 'Gemini 3.5', 'google-genai SDK', 'SQLite', 'Pytest'],
    metrics: [
      { label: 'Local Classification', value: '968.8 ms (CPU)' },
      { label: 'Cloud Spend Cut', value: '62.5% Avoided' },
      { label: 'Noise Filtered Local', value: '50.0% at $0.00' }
    ],
    features: [
      'System One (Local Edge Gatekeeper): Strands Decider 2B classifies market sentiment into [Bullish, Bearish, Neutral, Noise] in ~968 ms at $0.00 cost',
      'Confidence-Aware Policy Pattern: Blocks Noise/Neutral locally, escalates items (< 0.80) to persistent Human Review Queue',
      'System Two (Cloud Deep Research): Google AI Studio Gemini 3.5 synthesizes 8-factor institutional research dossiers',
      'Immutable SQLite audit ledger tracking all model predictions, timestamps, and confidence scores',
      'Live market data & stock correlation engine with real-time ticker ribbon, sparklines, and interactive research modals',
      'Production-tested test suite with 29 passing Pytest test cases validating sentiment parsing and routing rules'
    ],
    architecture: [
      'Stage 1: Multi-Stream Financial News & RSS Ingestion',
      'Stage 2: System One Strands Decider 2B Local Gatekeeper (~968ms, $0.00)',
      'Stage 3: Confidence-Aware Escalation & Quarantine Filter',
      'Stage 4: System Two Google Gemini 3.5 8-Factor Dossier Generator',
      'Stage 5: SQLite Audit Ledger & Interactive Market Terminal'
    ],
    githubUrl: 'https://github.com/anushragav-vs/SignalFlow-AI',
    featured: true
  },
  {
    id: 'ma-crossover-backtester',
    title: 'Moving Average Crossover Backtester',
    category: 'Quantitative Finance & Strategy Simulation',
    summary: 'A rigorous Python backtesting engine testing moving average crossover trading strategies on Google stock (GOOG) vs Buy & Hold.',
    description: 'Developed to understand systematic rule-based trading and the genuine trade-offs between absolute return, drawdown, and capital preservation. Emphasizes quantitative honesty: zero look-ahead bias with next-day open execution, clean historical data pipelines via Yahoo Finance, and comprehensive risk analysis.',
    tags: ['Python', 'pandas', 'NumPy', 'yfinance', 'Matplotlib', 'Risk Analysis'],
    metrics: [
      { label: 'V1 Strategy CAGR', value: '12.04%' },
      { label: 'Buy & Hold CAGR', value: '21.01%' },
      { label: 'V2 Max Drawdown', value: '-22.04% (vs -44.6%)' }
    ],
    findings: 'While Buy & Hold achieved 21.01% CAGR with a severe -44.60% max drawdown, V1 (20/50-day crossover) achieved 12.04% CAGR with -34.12% max drawdown (cutting drawdown by >10 percentage points). V2 (+ 200-day trend filter) delivered 11.32% CAGR and cut max drawdown in half to -22.04%, proving systematic downside capital preservation over return chasing.',
    features: [
      'Automated historical OHLCV data collection via Yahoo Finance API with split adjustment validation',
      'Next-day open order simulation ensuring strict elimination of look-ahead bias',
      'Iterative multi-version quantitative testing: V1 (20/50 SMA crossover) and V2 (+ 200-day trend filter)',
      'Compound Annual Growth Rate (CAGR) and annualized volatility calculations',
      'Sharpe ratio risk-adjusted return evaluation across varying market cycles',
      'Maximum Drawdown (MDD) tracking and duration calculation',
      'Visual comparative equity curve and drawdown plot generation using Matplotlib'
    ],
    githubUrl: 'https://github.com/anushragav-vs/ma-crossover-backtester',
    featured: true
  },
  {
    id: 'touchgrass',
    title: 'TouchGrass 🌱',
    category: 'Productivity & Open-Source AI',
    summary: 'AI that helps you put your phone down and go outside — built for the Hacktoberfest Open-Source AI Challenge.',
    description: 'A local-first Progressive Web App (PWA) powered by open-weight AI (Ollama) and TypeScript, designed to curb screen fatigue and encourage real-world wellness through smart session tracking and non-intrusive notifications.',
    tags: ['TypeScript', 'React 19', 'Vite', 'Tailwind CSS', 'Ollama', 'PWA'],
    features: [
      'Local-first Progressive Web App architecture ensuring complete data privacy',
      'Open-weight local AI integration using Ollama',
      'Smart session tracking with customizable wellness intervals',
      'Responsive modern UI crafted with React 19 and Tailwind CSS'
    ],
    githubUrl: 'https://github.com/anushragav-vs/TouchGrass'
  },
  {
    id: 'lingobuddy',
    title: 'LingoBuddy',
    category: 'Language Learning & Speech AI',
    summary: 'Anxiety-free language conversation partner powered by local open-weight AI and the Web Speech API.',
    description: 'A personalized, zero-judgment foreign language conversation simulator built for the Hacktoberfest Weekend Challenge, running 100% locally with open-weight Ollama and browser Web Speech API for voice interactions.',
    tags: ['JavaScript', 'Web Speech API', 'Ollama', 'Local AI', 'PWA Ready'],
    features: [
      'Interactive voice conversation loops using the native Web Speech API',
      '100% private, local AI generation powered by Ollama',
      'Adaptive conversational prompts with zero external cloud dependencies',
      'Zero-build PWA design with immediate browser execution'
    ],
    githubUrl: 'https://github.com/anushragav-vs/LingoBuddy'
  }
];

export const MILESTONES: Milestone[] = [
  {
    id: 'milestone-1',
    number: '01',
    period: '2019 — 2023',
    title: 'The Beginning of Data Work',
    organization: 'Amazon Mechanical Turk',
    role: 'Part-time Data Processor',
    narrative: 'My first exposure to working with information at scale, developing attention to detail and analytical thinking.',
    activities: [
      'Processed, validated, and structured thousands of distributed data tasks',
      'Performed image analysis, categorization, and computer vision training dataset classification',
      'Conducted data verification, quality assurance, and anomaly checking',
      'Built a deep respect for data cleanliness, precision, and consistency'
    ],
    skills: ['Data Validation', 'Image Annotation', 'Quality Control', 'Analytical Consistency'],
    badgeText: '4 Years Data Foundation'
  },
  {
    id: 'milestone-2',
    number: '02',
    period: '2022 — Present',
    title: 'Entering the Financial Markets',
    organization: 'Independent Forex Trader & Market Research',
    role: 'Independent Researcher & Trader',
    narrative: 'Markets introduced me to uncertainty, probability, risk, and the search for patterns.',
    activities: [
      'Observed currency pair dynamics, liquidity pools, and market microstructure',
      'Studied technical price behavior, support/resistance, and volatility clustering',
      'Practiced disciplined risk and capital management under volatile market conditions',
      'Recognized the necessity of systematic, rules-based research over discretionary emotion'
    ],
    skills: ['Risk Management', 'Market Microstructure', 'Probabilistic Thinking', 'Price Action'],
    badgeText: '4 Years Market Immersion'
  },
  {
    id: 'milestone-3',
    number: '03',
    period: 'August 2026 — 2030',
    title: 'Beginning My AI/ML Journey',
    organization: 'K. S. Rangasamy College of Technology',
    role: 'Currently Pursuing B.E. Computer Science and Engineering (Artificial Intelligence & Machine Learning) — B.E. CSE (AI/ML)',
    narrative: 'Moving from independent curiosity toward structured technical knowledge in an active undergraduate engineering program.',
    activities: [
      'Currently pursuing undergraduate degree in Computer Science and Engineering (Artificial Intelligence & Machine Learning)',
      'Building strong computer science foundations in algorithms, data structures, and architecture',
      'Studying higher mathematics, linear algebra, multivariable calculus, and probability theory',
      'Collaborating with peers and mentors on algorithmic problem solving'
    ],
    skills: ['Data Structures', 'Algorithms', 'Linear Algebra', 'Computer Science Fundamentals'],
    badgeText: 'Currently Pursuing Degree'
  },
  {
    id: 'milestone-4',
    number: '04',
    period: '2026',
    title: 'Building with Python & Data',
    organization: 'Self-Directed Learning · Strengthening Technical Foundations',
    role: 'Foundational Learner & Builder',
    narrative: 'Strengthening technical foundations through self-directed learning, experiments, code, and measurable progress.',
    activities: [
      'Strengthening Python development for computational science and financial modeling.',
      'Building practical familiarity with NumPy matrix operations, pandas dataframes, and Matplotlib visualization.',
      'Practicing Git and GitHub version control workflows.',
      'Exploring machine learning fundamentals and introductory data analysis.',
      'Improving mathematical reasoning, statistical understanding, and problem-solving.'
    ],
    skills: ['Python', 'NumPy', 'pandas', 'Matplotlib', 'Git', 'Statistical Analysis'],
    badgeText: 'Strengthening Foundations'
  },
  {
    id: 'milestone-5',
    number: '05',
    period: 'Present',
    title: 'Building & Experimenting',
    organization: 'Applied Open-Source Research',
    role: 'Quantitative & AI Project Builder',
    narrative: 'Translating interdisciplinary curiosity into functional, transparent software.',
    activities: [
      'Engineered Moving Average Crossover Strategy Backtester with 0 look-ahead bias and drawdown analysis',
      'Architected SignalFlow AI: 2-tier cognitive NLP architecture pairing local 2B SLM with Gemini 3.5',
      'Published verified open-source repositories documenting real findings, trade-offs, and metrics',
      'Continuously learning, building, and exploring one project at a time'
    ],
    skills: ['Backtesting', 'NLP Systems', 'Cognitive Routing', 'Risk Metrics', 'API Integration'],
    badgeText: 'Active Projects',
    projects: PROJECTS
  },
  {
    id: 'milestone-6',
    number: '06',
    period: '2026',
    title: 'Advancing Through Data Science & AI',
    organization: 'Currently Selected — GCI World 2026 September',
    role: 'GCI World Participant & AI/Data Explorer',
    narrative: 'Selected for GCI World 2026 September. Continuing to strengthen my foundations in AI, data science, and computational thinking while exploring new opportunities to apply technology to real-world problems.',
    activities: [
      'Currently participating in the GCI World 2026 September program.',
      'Strengthening Python programming and computational problem-solving.',
      'Deepening my understanding of scientific data analysis using NumPy, pandas, and Matplotlib.',
      'Exploring machine learning fundamentals and data-driven approaches.',
      'Continuing to develop mathematical, analytical, and technical foundations.'
    ],
    skills: ['Python', 'NumPy', 'pandas', 'Matplotlib', 'Machine Learning', 'Data Science'],
    badgeText: 'GCI World 2026'
  },
  {
    id: 'milestone-7',
    number: '07',
    period: 'The Future',
    title: 'Quantitative Intelligence',
    organization: 'Future Aspirations',
    role: 'Systematic Quantitative Researcher',
    narrative: 'Where mathematics meets machine intelligence.',
    activities: [
      'Deepen mathematical modeling, stochastic calculus, and statistical arbitrage concepts',
      'Develop reinforcement learning agents for optimal trade execution and portfolio balancing',
      'Design institutional-grade data ingestion pipelines for alternative market signals',
      'Bridge the gap between academic AI research and real-world market efficiency'
    ],
    skills: ['Reinforcement Learning', 'Stochastic Modeling', 'Algorithmic Execution', 'Deep Learning'],
    badgeText: 'Future Horizon',
    isFuture: true
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Programming',
    skills: [
      { name: 'Python', level: 'Used in Projects', context: 'Data structures, strategy backtesting, SLM/LLM pipelines' },
      { name: 'C / C++', level: 'Currently Learning', context: 'Academic foundation and memory management' }
    ]
  },
  {
    title: 'Data & Visualization',
    skills: [
      { name: 'NumPy', level: 'Used in Projects', context: 'Vectorized calculations and matrix math' },
      { name: 'pandas', level: 'Used in Projects', context: 'Timeseries data manipulation & OHLCV pipelines' },
      { name: 'Matplotlib', level: 'Used in Projects', context: 'Equity curves, drawdown charts & distributions' }
    ]
  },
  {
    title: 'Core Foundations',
    skills: [
      { name: 'Mathematics', level: 'Currently Learning', context: 'Linear algebra, calculus & optimization' },
      { name: 'Statistics & Probability', level: 'Practically Explored', context: 'Distributions, variance, risk & hypothesis testing' },
      { name: 'Data Structures & Algorithms', level: 'Currently Learning', context: 'Complexity, search, sorting & trees' }
    ]
  },
  {
    title: 'Machine Learning & AI',
    skills: [
      { name: 'ML Fundamentals', level: 'Currently Learning', context: 'Supervised/unsupervised learning & regression' },
      { name: 'Local SLM Integration', level: 'Used in Projects', context: 'Strands/Decider 2B confidence classification' },
      { name: 'LLM Orchestration', level: 'Used in Projects', context: 'Gemini 3.5 research synthesis pipelines' }
    ]
  },
  {
    title: 'Tools & Engineering',
    skills: [
      { name: 'Git & GitHub', level: 'Used in Projects', context: 'Version control, open-source documentation' },
      { name: 'VS Code', level: 'Used in Projects', context: 'Primary development environment & debugging' },
      { name: 'SQLite', level: 'Used in Projects', context: 'Audit logs & transaction ledgering' },
      { name: 'AWS Amplify', level: 'Used in Projects', context: 'Cloud hosting & continuous deployment' }
    ]
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: 'reliance-ml',
    title: 'AI – Machine Learning Engineer Certificate Course',
    issuer: 'Reliance Foundation',
    date: 'June 2026',
    skills: ['Machine Learning Foundations', 'Supervised Learning', 'Model Evaluation', 'Python for ML'],
    credentialNote: 'Comprehensive curriculum covering core ML engineering workflows and data modeling'
  },
  {
    id: 'efset-english',
    title: 'EF SET English Certificate',
    issuer: 'EF Standard English Test',
    date: 'November 2026',
    score: '65/100 | C1 Advanced',
    skills: ['Technical Documentation', 'Verbal Communication', 'International Collaboration'],
    credentialNote: 'Certified C1 Advanced operational proficiency in international technical English'
  }
];
