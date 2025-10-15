export interface Lesson {
  id: string;
  title: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced" | "Expert";
  xp: number;
  duration: string;
  completed?: boolean;
}

export interface Module {
  id: string;
  title: string;
  description: string;
  learners: string;
  rating: number;
  duration: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced" | "Expert";
  lessons: Lesson[];
  icon: string;
}

export const modules: Module[] = [
  {
    id: "stocks-101",
    title: "Stocks 101",
    description: "Master the fundamentals of stock market investing from NSE/BSE basics to advanced analysis techniques.",
    learners: "4.2k",
    rating: 4.7,
    duration: "45 min",
    difficulty: "Beginner",
    icon: "TrendingUp",
    lessons: [
      { id: "1", title: "What are Stocks?", difficulty: "Beginner", xp: 50, duration: "8 min" },
      { id: "2", title: "How NSE/BSE Work", difficulty: "Beginner", xp: 75, duration: "10 min" },
      { id: "3", title: "Reading Stock Charts", difficulty: "Intermediate", xp: 100, duration: "12 min" },
      { id: "4", title: "P/E Ratios Explained", difficulty: "Intermediate", xp: 125, duration: "10 min" },
      { id: "5", title: "Dividend Strategies", difficulty: "Advanced", xp: 150, duration: "15 min" },
      { id: "6", title: "SEBI Regulations", difficulty: "Advanced", xp: 200, duration: "20 min" },
    ],
  },
  {
    id: "crypto-fundamentals",
    title: "Crypto Fundamentals",
    description: "Navigate the world of cryptocurrency safely with blockchain basics, wallet security, and India-specific regulations.",
    learners: "6.8k",
    rating: 4.9,
    duration: "65 min",
    difficulty: "Beginner",
    icon: "Bitcoin",
    lessons: [
      { id: "1", title: "Blockchain Basics", difficulty: "Beginner", xp: 60, duration: "10 min" },
      { id: "2", title: "Bitcoin vs Altcoins", difficulty: "Beginner", xp: 80, duration: "12 min" },
      { id: "3", title: "Wallet Security 101", difficulty: "Intermediate", xp: 120, duration: "15 min" },
      { id: "4", title: "DeFi Explained", difficulty: "Intermediate", xp: 140, duration: "18 min" },
      { id: "5", title: "NFT Reality Check", difficulty: "Advanced", xp: 160, duration: "14 min" },
      { id: "6", title: "India's Crypto Tax Rules", difficulty: "Advanced", xp: 180, duration: "16 min" },
      { id: "7", title: "Spot the Rugpull", difficulty: "Expert", xp: 250, duration: "20 min" },
    ],
  },
  {
    id: "options-trading",
    title: "Options Trading",
    description: "Understand calls, puts, Greeks, and hedging strategies for F&O trading with proper risk management.",
    learners: "2.1k",
    rating: 4.3,
    duration: "55 min",
    difficulty: "Intermediate",
    icon: "Layers",
    lessons: [
      { id: "1", title: "Calls & Puts Basics", difficulty: "Beginner", xp: 70, duration: "12 min" },
      { id: "2", title: "Strike Price Selection", difficulty: "Intermediate", xp: 110, duration: "14 min" },
      { id: "3", title: "Greeks Simplified", difficulty: "Advanced", xp: 180, duration: "18 min" },
      { id: "4", title: "Hedging Strategies", difficulty: "Expert", xp: 220, duration: "20 min" },
      { id: "5", title: "F&O Expiry Day", difficulty: "Expert", xp: 200, duration: "16 min" },
    ],
  },
  {
    id: "forex-trading",
    title: "Forex Trading",
    description: "Learn currency pair trading, leverage risks, and RBI regulations for legal forex trading in India.",
    learners: "3.4k",
    rating: 4.5,
    duration: "48 min",
    difficulty: "Intermediate",
    icon: "DollarSign",
    lessons: [
      { id: "1", title: "Currency Pairs 101", difficulty: "Beginner", xp: 65, duration: "10 min" },
      { id: "2", title: "RBI Forex Rules", difficulty: "Beginner", xp: 90, duration: "12 min" },
      { id: "3", title: "Leverage Dangers", difficulty: "Intermediate", xp: 130, duration: "14 min" },
      { id: "4", title: "Technical Analysis", difficulty: "Advanced", xp: 170, duration: "16 min" },
      { id: "5", title: "Spot vs Futures", difficulty: "Expert", xp: 210, duration: "18 min" },
    ],
  },
  {
    id: "scam-awareness",
    title: "Scam Awareness",
    description: "Protect yourself from fake apps, wallet drains, pump & dump schemes, and social engineering attacks.",
    learners: "8.9k",
    rating: 5.0,
    duration: "70 min",
    difficulty: "Beginner",
    icon: "Shield",
    lessons: [
      { id: "1", title: "Fake Trading Apps", difficulty: "Beginner", xp: 100, duration: "10 min" },
      { id: "2", title: "Wallet Drain Attacks", difficulty: "Beginner", xp: 120, duration: "12 min" },
      { id: "3", title: "Pump & Dump Schemes", difficulty: "Intermediate", xp: 150, duration: "14 min" },
      { id: "4", title: "Telegram Scams", difficulty: "Intermediate", xp: 140, duration: "12 min" },
      { id: "5", title: "Fake Exchanges", difficulty: "Advanced", xp: 180, duration: "16 min" },
      { id: "6", title: "Social Engineering", difficulty: "Advanced", xp: 200, duration: "18 min" },
      { id: "7", title: "Red Flag Checklist", difficulty: "Expert", xp: 250, duration: "20 min" },
    ],
  },
  {
    id: "mutual-funds-sip",
    title: "Mutual Funds & SIPs",
    description: "Build wealth systematically with SIP strategies, fund selection, and tax-efficient investing.",
    learners: "5.6k",
    rating: 4.6,
    duration: "42 min",
    difficulty: "Beginner",
    icon: "PieChart",
    lessons: [
      { id: "1", title: "SIP Basics", difficulty: "Beginner", xp: 55, duration: "8 min" },
      { id: "2", title: "Equity vs Debt Funds", difficulty: "Beginner", xp: 75, duration: "10 min" },
      { id: "3", title: "Expense Ratios", difficulty: "Intermediate", xp: 100, duration: "12 min" },
      { id: "4", title: "Tax Saving Funds", difficulty: "Intermediate", xp: 110, duration: "14 min" },
      { id: "5", title: "Index Funds", difficulty: "Advanced", xp: 150, duration: "16 min" },
    ],
  },
];
