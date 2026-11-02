import type { Milestone, Project, SkillCategory, Certification } from '../types';

export const PERSONAL_INFO = {
  name: 'Anush Ragav V S',
  shortName: 'Anush Ragav',
  initials: 'AR',
  role: 'AI/ML Student & Quantitative Finance Explorer',
  tagline: 'Building at the intersection of AI, Data & Quantitative Finance.',
  altTagline: 'Learning. Building. Exploring.',
  bio: 'First-year AI/ML student exploring how mathematics, machine learning, and data can unlock insights into financial markets.',
  narrativeLead: "Curiosity became a direction.",
  narrativeBody: [
    "Before starting my engineering degree, I spent approximately four years analyzing currency price movements as an independent forex trader, alongside four years of data processing and image classification through Amazon Mechanical Turk.",
    "These early experiences taught me two fundamental realities: the messiness of real-world data and the probabilistic nature of financial markets. I realized intuition alone wasn't enough—I needed rigorous mathematics, computation, and machine learning to build systematic understanding.",
    "Now, as a first-year AI/ML student at K. S. Rangasamy College of Technology, I am uniting these threads: studying algorithms, writing Python, modeling risk, and turning financial curiosity into transparent code."
  ],
  college: 'K. S. Rangasamy College of Technology',
  degree: 'B.E. Computer Science and Engineering (AI/ML)',
  duration: 'August 2026 – 2030',
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
    description: 'Designed to solve the bottleneck of financial news overload and costly cloud API consumption. SignalFlow AI uses a local small language model (Strands/Decider 2B) for rapid confidence-aware sentiment classification, filtering neutral chatter locally and routing only high-conviction events to Google Gemini 3.5 for institutional-grade research synthesis.',
    tags: ['Python', 'Local SLM', 'Gemini API', 'Fintech', 'SQLite', 'Cognitive Architecture'],
    metrics: [
      { label: 'Local Classification', value: '~950 ms' },
      { label: 'Cloud Cost Reduction', value: '62.5%' },
      { label: 'Dossier Factors', value: '8-Factor Depth' }
    ],
    features: [
      'Two-tier cognitive routing: Local Strands/Decider 2B pre-filters noise before invoking cloud LLMs',
      'Confidence-aware sentiment analysis filtering neutral market headlines without expensive API calls',
      'Google Gemini 3.5 synthesis producing 8-factor institutional research dossiers',
      'Human-in-the-loop safeguards to inspect intermediate inferences before trade execution',
      'SQLite immutable audit ledger tracking all model predictions, timestamps, and confidence scores',
      'Real-time financial intelligence dashboard with live market headlines integration'
    ],
    architecture: [
      'Stage 1: News Aggregation & Parsing',
      'Stage 2: Local 2B SLM Sentiment & Conviction Filter (~950ms)',
      'Stage 3: Cloud Gemini 3.5 8-Factor Dossier Generator (selective)',
      'Stage 4: SQLite Audit Ledger & Operator Dashboard'
    ],
    githubUrl: 'https://github.com/anushragav-vs/SignalFlow-AI',
    featured: true
  },
  {
    id: 'ma-crossover-backtester',
    title: 'Moving Average Crossover Backtester',
    category: 'Quantitative Finance & Strategy Simulation',
    summary: 'A rigorous Python backtesting engine testing a 20/50-day moving average crossover on historical Google stock data against a buy-and-hold benchmark.',
    description: 'Developed to understand systematic rule-based trading and the genuine trade-offs between absolute return, drawdown, and capital preservation. Emphasizes quantitative honesty: zero look-ahead bias, clean historical data pipelines, and comprehensive risk metrics.',
    tags: ['Python', 'pandas', 'NumPy', 'yfinance', 'Matplotlib', 'Risk Metrics'],
    metrics: [
      { label: 'Strategy CAGR', value: '11.6%' },
      { label: 'Buy & Hold CAGR', value: '22.3%' },
      { label: 'Max Drawdown Cut', value: '~10% Lower' }
    ],
    findings: 'The strategy underperformed buy-and-hold in total return (11.6% vs 22.3% CAGR) but successfully reduced maximum drawdown by ~10 percentage points and mitigated portfolio volatility during extended corrections. Demonstrates the core quantitative trade-off between return maximization and downside capital defense.',
    features: [
      'Automated historical OHLCV data collection via Yahoo Finance API',
      'Data cleaning, missing data handling, and corporate split adjustment validation',
      '20-day / 50-day moving average crossover signal generation with strict next-day open execution (zero look-ahead bias)',
      'Compound Annual Growth Rate (CAGR) calculations',
      'Sharpe ratio and Sortino risk-adjusted return evaluation',
      'Maximum Drawdown (MDD) tracking and duration calculation',
      'Visual comparative equity curve generation with Matplotlib'
    ],
    githubUrl: 'https://github.com/anushragav-vs/ma-crossover-backtester',
    featured: true
  },
  {
    id: 'touchgrass',
    title: 'TouchGrass',
    category: 'Productivity & Digital Wellness',
    summary: 'A lightweight utility encouraging developers and students to maintain healthy balance between intense coding sessions and real-world wellness.',
    description: 'Built during early programming explorations to practice clean state management, timed background notifications, and lightweight desktop/web utilities.',
    tags: ['Python', 'Productivity', 'Automation', 'CLI/GUI'],
    features: [
      'Smart session tracking with customizable break intervals',
      'Non-intrusive system notifications',
      'Lightweight memory footprint'
    ],
    githubUrl: 'https://github.com/anushragav-vs/TouchGrass'
  },
  {
    id: 'lingobuddy',
    title: 'LingoBuddy',
    category: 'Language Learning & Educational Tool',
    summary: 'An interactive language companion exploring vocabulary retention and conversational prompt structures.',
    description: 'An exploratory project examining how structured natural language prompts and adaptive flashcard mechanics assist early learners in vocabulary acquisition.',
    tags: ['Python', 'NLP Basics', 'Educational Tech', 'Algorithms'],
    features: [
      'Contextual vocabulary suggestions',
      'Interactive quiz loops',
      'Spaced repetition algorithm foundation'
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
    role: 'B.E. Computer Science and Engineering (AI/ML)',
    narrative: 'Moving from independent curiosity toward structured technical knowledge.',
    activities: [
      'Embarking on formal undergraduate technical education in Artificial Intelligence and Machine Learning',
      'Building strong computer science foundations in algorithms, data structures, and architecture',
      'Studying higher mathematics, linear algebra, multivariable calculus, and probability theory',
      'Collaborating with peers and mentors on algorithmic problem solving'
    ],
    skills: ['Data Structures', 'Algorithms', 'Linear Algebra', 'Computer Science Fundamentals'],
    badgeText: 'Undergraduate Degree'
  },
  {
    id: 'milestone-4',
    number: '04',
    period: '2026',
    title: 'Building with Python & Data',
    organization: 'Self-Directed Technical Engineering',
    role: 'Foundational Builder',
    narrative: 'Turning ideas into experiments, code, and measurable results.',
    activities: [
      'Deepened Python development for computational science and financial modeling',
      'Mastered core scientific data stack: NumPy matrix operations, pandas dataframes, Matplotlib plotting',
      'Implemented clean version control workflows using Git and GitHub',
      'Began implementing machine learning fundamentals and exploratory data analysis'
    ],
    skills: ['Python', 'NumPy', 'pandas', 'Matplotlib', 'Git', 'Statistical Analysis'],
    badgeText: 'Scientific Data Stack'
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
      'Engineering systematic tools and exploring interdisciplinary tech superpowers'
    ],
    skills: ['Backtesting', 'NLP Systems', 'Cognitive Routing', 'Risk Metrics', 'API Integration'],
    badgeText: 'Active Projects',
    projects: PROJECTS
  },
  {
    id: 'milestone-6',
    number: '06',
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
