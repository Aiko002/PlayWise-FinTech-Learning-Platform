export interface LeaderboardUser {
  rank: number;
  name: string;
  xp: number;
  level: number;
  streak: number;
  city: string;
  badge?: string;
}

export interface Badge {
  id: string;
  name: string;
  icon: string;
  description: string;
  earnedBy: string;
  category: "Learning" | "Streak" | "Achievement" | "Special";
}

export const leaderboardUsers: LeaderboardUser[] = [
  { rank: 1, name: "CryptoRaj", xp: 8450, level: 42, streak: 89, city: "Delhi", badge: "👑" },
  { rank: 2, name: "TradingQueen_Mumbai", xp: 8210, level: 40, streak: 67, city: "Mumbai", badge: "🥈" },
  { rank: 3, name: "ForexNinja", xp: 7980, level: 39, streak: 45, city: "Bangalore", badge: "🥉" },
  { rank: 4, name: "StockGuru_Pune", xp: 7750, level: 38, streak: 56, city: "Pune" },
  { rank: 5, name: "DeFiExplorer", xp: 7420, level: 37, streak: 34, city: "Hyderabad" },
  { rank: 6, name: "OptionsWizard", xp: 7200, level: 36, streak: 41, city: "Chennai" },
  { rank: 7, name: "ScamBuster", xp: 6980, level: 35, streak: 28, city: "Kolkata" },
  { rank: 8, name: "InvestmentPro", xp: 6750, level: 34, streak: 52, city: "Ahmedabad" },
  { rank: 9, name: "ChartMaster", xp: 6540, level: 33, streak: 38, city: "Surat" },
  { rank: 10, name: "WealthBuilder", xp: 6320, level: 32, streak: 44, city: "Jaipur" },
  { rank: 11, name: "RiskManager", xp: 6100, level: 31, streak: 26, city: "Lucknow" },
  { rank: 12, name: "ValueInvestor", xp: 5890, level: 30, streak: 33, city: "Nagpur" },
  { rank: 13, name: "DayTrader_DL", xp: 5670, level: 29, streak: 29, city: "Delhi" },
  { rank: 14, name: "LongTermGains", xp: 5450, level: 28, streak: 47, city: "Mumbai" },
  { rank: 15, name: "TechnicalAnalyst", xp: 5230, level: 27, streak: 35, city: "Bangalore" },
  { rank: 16, name: "FundamentalGuru", xp: 5010, level: 26, streak: 31, city: "Pune" },
  { rank: 17, name: "SwingTrader", xp: 4800, level: 25, streak: 22, city: "Hyderabad" },
  { rank: 18, name: "DividendHunter", xp: 4590, level: 24, streak: 40, city: "Chennai" },
  { rank: 19, name: "GrowthSeeker", xp: 4380, level: 23, streak: 27, city: "Kolkata" },
  { rank: 20, name: "BearMarketSurvivor", xp: 4170, level: 22, streak: 36, city: "Ahmedabad" },
];

export const badges: Badge[] = [
  {
    id: "quiz-master",
    name: "Quiz Master",
    icon: "🎯",
    description: "Complete 50 quizzes",
    earnedBy: "3.2k users",
    category: "Learning",
  },
  {
    id: "scam-spotter",
    name: "Scam Spotter",
    icon: "🛡️",
    description: "Identify 10 scams",
    earnedBy: "5.6k users",
    category: "Achievement",
  },
  {
    id: "stock-savvy",
    name: "Stock Savvy",
    icon: "📈",
    description: "Master stocks module",
    earnedBy: "4.1k users",
    category: "Learning",
  },
  {
    id: "crypto-connoisseur",
    name: "Crypto Connoisseur",
    icon: "💎",
    description: "Complete crypto path",
    earnedBy: "2.8k users",
    category: "Learning",
  },
  {
    id: "30-day-streak",
    name: "30-Day Streak",
    icon: "🔥",
    description: "Login for 30 consecutive days",
    earnedBy: "7.9k users",
    category: "Streak",
  },
  {
    id: "top-10-ranker",
    name: "Top 10 Ranker",
    icon: "🏆",
    description: "Reach top 10 on leaderboard",
    earnedBy: "234 users",
    category: "Special",
  },
  {
    id: "knowledge-guru",
    name: "Knowledge Guru",
    icon: "📚",
    description: "Read 100 articles",
    earnedBy: "1.5k users",
    category: "Learning",
  },
  {
    id: "simulation-master",
    name: "Simulation Master",
    icon: "🎮",
    description: "Complete all 12 simulations",
    earnedBy: "892 users",
    category: "Achievement",
  },
];
