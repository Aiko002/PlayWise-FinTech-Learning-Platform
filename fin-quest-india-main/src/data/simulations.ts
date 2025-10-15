export interface SimulationOption {
  text: string;
  isCorrect: boolean;
  feedback: string;
  xp: number;
}

export interface Simulation {
  id: string;
  title: string;
  category: "Crypto" | "Stocks" | "Forex" | "Scam" | "Options";
  difficulty: 1 | 2 | 3 | 4 | 5;
  scenario: string;
  context: string;
  options: SimulationOption[];
  learningPoint: string;
  completedBy: string;
}

export const simulations: Simulation[] = [
  {
    id: "trump-tweet-chaos",
    title: "Trump Tweet Chaos",
    category: "Crypto",
    difficulty: 3,
    scenario: "Trump tweets 'Bitcoin is a scam'. Market drops 18% in 2 hours.",
    context: "Your portfolio: ₹50,000 in BTC. What do you do?",
    options: [
      {
        text: "HODL - Don't panic",
        isCorrect: false,
        feedback: "Not bad, but you missed an opportunity. Historical data shows recoveries after FUD.",
        xp: 100,
      },
      {
        text: "Panic Sell immediately",
        isCorrect: false,
        feedback: "Emotional decision! Market recovered 24% in 3 days. You locked in losses.",
        xp: 50,
      },
      {
        text: "Buy the Dip",
        isCorrect: true,
        feedback: "Smart move! Historical data shows recovery after similar FUD. Market rebounded 24% in 3 days.",
        xp: 200,
      },
      {
        text: "Convert to Stablecoin",
        isCorrect: false,
        feedback: "Safe choice but you missed gains. Market recovered within days.",
        xp: 75,
      },
    ],
    learningPoint: "FUD (Fear, Uncertainty, Doubt) causes temporary dips. Research before reacting emotionally.",
    completedBy: "67% users panic sold",
  },
  {
    id: "wallet-drain-attack",
    title: "Wallet Drain Attack",
    category: "Scam",
    difficulty: 4,
    scenario: "You installed a Chrome extension promising 'Free Airdrops'. Your wallet now shows $0.",
    context: "What should you do FIRST?",
    options: [
      {
        text: "Tweet about it to warn others",
        isCorrect: false,
        feedback: "Good intention but wrong priority. Stop the bleeding first!",
        xp: 50,
      },
      {
        text: "Revoke all token permissions immediately",
        isCorrect: true,
        feedback: "Correct! Use Etherscan/Token approval checkers to revoke malicious contracts ASAP.",
        xp: 250,
      },
      {
        text: "Contact exchange support",
        isCorrect: false,
        feedback: "Exchanges can't help with wallet drains. You need to revoke approvals yourself.",
        xp: 75,
      },
      {
        text: "Do nothing, it's too late",
        isCorrect: false,
        feedback: "Never give up! Revoking permissions can stop further drains.",
        xp: 25,
      },
    ],
    learningPoint: "Always verify extensions. Use tools like Etherscan to check and revoke token approvals.",
    completedBy: "42% users chose correctly",
  },
  {
    id: "forex-leverage-trap",
    title: "Forex Leverage Trap",
    category: "Forex",
    difficulty: 5,
    scenario: "100x leverage offered by offshore broker. ₹10k can control ₹10L position.",
    context: "Current: USD/INR up 0.5%. What's your move?",
    options: [
      {
        text: "Max leverage - YOLO!",
        isCorrect: false,
        feedback: "Disaster! One wrong move = account wiped. Plus this broker is illegal in India.",
        xp: 0,
      },
      {
        text: "Use 5x leverage only",
        isCorrect: false,
        feedback: "Still risky, but you're trading with an illegal offshore broker (RBI violation).",
        xp: 100,
      },
      {
        text: "No leverage",
        isCorrect: false,
        feedback: "Smart risk management but you're still using an illegal broker.",
        xp: 150,
      },
      {
        text: "Report broker + Don't trade",
        isCorrect: true,
        feedback: "Perfect! This is an illegal offshore broker (RBI/ED violation). Penalties up to ₹3L.",
        xp: 300,
      },
    ],
    learningPoint: "Most online forex brokers are ILLEGAL in India. Only SEBI-registered platforms are legal.",
    completedBy: "Only 23% passed",
  },
  {
    id: "ipo-hype-train",
    title: "IPO Hype Train",
    category: "Stocks",
    difficulty: 2,
    scenario: "Everyone's talking about XYZ IPO. Grey market premium at 90%.",
    context: "Friends are applying. What do you do?",
    options: [
      {
        text: "Apply immediately before it closes",
        isCorrect: false,
        feedback: "FOMO decision! 60% of hyped IPOs fall below issue price in 6 months.",
        xp: 50,
      },
      {
        text: "Wait for listing day to buy",
        isCorrect: false,
        feedback: "Still risky without research. Listing gains often fade quickly.",
        xp: 75,
      },
      {
        text: "Research company first",
        isCorrect: true,
        feedback: "Smart! Check financials, business model, and peer comparison before investing.",
        xp: 200,
      },
      {
        text: "FOMO buy at any premium",
        isCorrect: false,
        feedback: "Worst decision! Buying at inflated prices = high risk, low reward.",
        xp: 25,
      },
    ],
    learningPoint: "Grey market premiums are speculative. Always research before investing in IPOs.",
    completedBy: "58% users researched first",
  },
  {
    id: "pump-dump-telegram",
    title: "Pump & Dump Telegram",
    category: "Scam",
    difficulty: 3,
    scenario: "Anonymous Telegram admin: 'ABC coin will 100x tomorrow, buy now!'",
    context: "Channel has 50k members. What do you do?",
    options: [
      {
        text: "Buy immediately",
        isCorrect: false,
        feedback: "You're the exit liquidity! Admins already bought and will dump on you.",
        xp: 0,
      },
      {
        text: "Ask for proof/whitepaper",
        isCorrect: false,
        feedback: "They'll send fake documents. Pump & dump groups are scams by design.",
        xp: 50,
      },
      {
        text: "Report group to authorities",
        isCorrect: true,
        feedback: "Perfect! This is a classic pump & dump scheme. Report to cybercrime portal.",
        xp: 200,
      },
      {
        text: "Share with friends 'for their benefit'",
        isCorrect: false,
        feedback: "You're spreading the scam! Never share unverified investment tips.",
        xp: 25,
      },
    ],
    learningPoint: "Pump & dump groups are illegal. Admins profit, members lose money. Always report!",
    completedBy: "71% users reported correctly",
  },
  {
    id: "margin-call-panic",
    title: "Margin Call Nightmare",
    category: "Options",
    difficulty: 4,
    scenario: "Your broker calls: Add ₹30k margin or positions will be squared off in 1 hour.",
    context: "Your account: ₹15k. Market is volatile. What do you do?",
    options: [
      {
        text: "Borrow from friends/family",
        isCorrect: false,
        feedback: "Never trade with borrowed money! You're compounding losses.",
        xp: 50,
      },
      {
        text: "Add margin from savings",
        isCorrect: false,
        feedback: "Throwing good money after bad. Market may move against you further.",
        xp: 75,
      },
      {
        text: "Exit positions immediately",
        isCorrect: true,
        feedback: "Smart! Take the loss and preserve remaining capital. Never over-leverage.",
        xp: 250,
      },
      {
        text: "Ignore and hope market recovers",
        isCorrect: false,
        feedback: "Broker will square off anyway. You lose control + pay penalties.",
        xp: 25,
      },
    ],
    learningPoint: "Position sizing is crucial. Never risk more than 2% of capital per trade.",
    completedBy: "49% users made the right choice",
  },
];
