import type { ConstellationNode } from '../types';

export const CONSTELLATION_NODES: ConstellationNode[] = [
  {
    id: 'python',
    label: 'Python',
    category: 'Execution Engine',
    iconName: 'Code2',
    x: 22,
    y: 28,
    summary: 'The lingua franca for mathematical modeling, data wrangling, and intelligent pipelines.',
    interestWhy: 'Python transforms abstract mathematical equations and financial logic into executable, reproducible experiments. Its scientific ecosystem makes it the ideal tool for testing hypotheses quickly.',
    learningFocus: [
      'Clean modular script architecture',
      'Vectorization with NumPy',
      'Timeseries indexing with pandas',
      'Integration with local SLMs & APIs'
    ],
    relatedNodes: ['data', 'ai', 'quant-finance'],
    projectConnections: ['SignalFlow AI', 'Moving Average Crossover Backtester']
  },
  {
    id: 'data',
    label: 'Data Science',
    category: 'Empirical Foundation',
    iconName: 'Database',
    x: 78,
    y: 26,
    summary: 'Understanding anomalies, distributions, and ground-truth structures in large datasets.',
    interestWhy: 'Having processed thousands of tasks on MTurk, I learned early that all AI models are only as good as the underlying data cleanliness. Extracting signal from noisy market data is a constant challenge.',
    learningFocus: [
      'Exploratory data analysis (EDA)',
      'Handling survivorship and look-ahead bias',
      'OHLCV timeseries validation',
      'Data cleaning pipelines'
    ],
    relatedNodes: ['python', 'mathematics', 'machine-learning'],
    projectConnections: ['Moving Average Crossover Backtester', 'Amazon MTurk Data Processing']
  },
  {
    id: 'mathematics',
    label: 'Mathematics',
    category: 'Analytical Rigor',
    iconName: 'Sigma',
    x: 84,
    y: 70,
    summary: 'The formal language of probability, linear algebra, and statistical inference.',
    interestWhy: 'Financial markets and machine learning models are fundamentally mathematical structures. Understanding the math behind loss functions, covariance matrices, and probability distributions prevents treating algorithms as black boxes.',
    learningFocus: [
      'Linear algebra and matrix decompositions',
      'Multivariable calculus for optimization',
      'Probability distributions and Bayesian inference',
      'Risk metrics (Sharpe, Drawdown, Variance)'
    ],
    relatedNodes: ['data', 'quant-finance', 'machine-learning'],
    projectConnections: ['Backtester Risk Metrics', 'B.E. AI/ML Academic Curriculum']
  },
  {
    id: 'quant-finance',
    label: 'Quantitative Finance',
    category: 'Domain Curiosity',
    iconName: 'TrendingUp',
    x: 50,
    y: 88,
    summary: 'Applying systematic, rules-based logic to evaluate risk, return, and market structure.',
    interestWhy: 'Four years of forex trading taught me that emotional decisions fail. Quantitative finance replaces discretionary hunches with backtested rules, risk-adjusted returns, and clear risk/reward parameters.',
    learningFocus: [
      'Moving average crossover dynamics',
      'Maximum drawdown mitigation strategies',
      'Market microstructure and volatility behavior',
      'Sentiment impact on price action'
    ],
    relatedNodes: ['python', 'mathematics', 'ai'],
    projectConnections: ['MA Crossover Strategy Backtester', 'SignalFlow AI']
  },
  {
    id: 'machine-learning',
    label: 'Machine Learning',
    category: 'Learning Systems',
    iconName: 'Cpu',
    x: 16,
    y: 68,
    summary: 'Algorithms that generalize patterns from empirical data rather than rigid hardcoded rules.',
    interestWhy: 'Traditional statistical models often assume normal distributions and linear relationships that financial markets violate. Machine learning provides nonlinear pattern recognition tools to adapt to complex environments.',
    learningFocus: [
      'Supervised regression and classification',
      'Feature engineering from timeseries',
      'Model validation and train/test splits',
      'Overfitting prevention and regularization'
    ],
    relatedNodes: ['data', 'mathematics', 'ai'],
    projectConnections: ['Reliance Foundation ML Certification', 'SignalFlow AI Sentiment Analysis']
  },
  {
    id: 'ai',
    label: 'Artificial Intelligence',
    category: 'Cognitive Architecture',
    iconName: 'BrainCircuit',
    x: 50,
    y: 12,
    summary: 'Combining local small language models with deep research synthesizers for workflow acceleration.',
    interestWhy: 'AI is not just about massive LLMs; practical AI is about efficient cognitive architecture. Balancing small, local 2B models for fast classification with selective cloud LLMs creates economically viable intelligence.',
    learningFocus: [
      'Small Language Models (SLMs) deployment',
      'Confidence scoring & threshold routing',
      'Prompt engineering for structured research',
      'Human-in-the-loop audit trails'
    ],
    relatedNodes: ['python', 'machine-learning', 'quant-finance'],
    projectConnections: ['SignalFlow AI (Strands/Decider 2B + Gemini 3.5)']
  }
];

export const CONSTELLATION_CONNECTIONS: [string, string][] = [
  ['python', 'data'],
  ['data', 'mathematics'],
  ['mathematics', 'quant-finance'],
  ['quant-finance', 'machine-learning'],
  ['machine-learning', 'python'],
  ['ai', 'python'],
  ['ai', 'data'],
  ['ai', 'quant-finance'],
  ['mathematics', 'machine-learning'],
  ['data', 'quant-finance'],
  ['python', 'quant-finance'],
  ['ai', 'machine-learning']
];

export const SUPERPOWER_REVEAL = {
  title: 'PATTERN RECOGNITION ACROSS DATA, MARKETS & MACHINE INTELLIGENCE',
  statement: 'My developing strength lies in connecting ideas across different disciplines and exploring how they can work together.',
  steps: [
    'INITIALIZING NEURAL FABRIC...',
    'CONNECTING INTERDISCIPLINARY NODES...',
    'CALIBRATING RISK, DATA & COGNITION...',
    'SUPERPOWER UNLOCKED'
  ]
};
