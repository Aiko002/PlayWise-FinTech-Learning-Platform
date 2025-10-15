export type StepType = "mcq" | "truefalse";

export interface GamifiedStep {
  id: string;
  type: StepType;
  prompt: string;
  options?: string[];
  correctIndex?: number; // for mcq
  answerBool?: boolean; // for true/false
  explanation?: string;
}

export const scamPlayData: Record<string, GamifiedStep[]> = {
  // lesson "1" - Fake Trading Apps
  "1": [
    {
      id: "1-1",
      type: "mcq",
      prompt:
        "Which is a red flag that an Android trading app might be FAKE?",
      options: [
        "It’s listed on Google Play with many real reviews",
        "It asks you to download the APK from a Telegram channel",
        "It supports 2FA and biometric login",
        "It has detailed company info and SEBI registration number",
      ],
      correctIndex: 1,
      explanation:
        "Legit apps should be downloaded from official stores. APKs from Telegram/websites are risky and often malicious.",
    },
    {
      id: "1-2",
      type: "truefalse",
      prompt: "True or False: You should verify the app publisher before installing.",
      answerBool: true,
      explanation:
        "Always check the developer/publisher, reviews, and permissions before trusting any finance app.",
    },
    {
      id: "1-3",
      type: "mcq",
      prompt: "What should you do if an app promises guaranteed daily returns?",
      options: [
        "Trust it if a friend used it",
        "Invest small first to test",
        "Report and avoid – it’s a classic scam claim",
        "Ask for the admin’s PAN card",
      ],
      correctIndex: 2,
      explanation:
        "Guaranteed returns are a hallmark of scams. Real markets carry risk; no one can guarantee profit.",
    },
  ],
  // lesson "2" - Wallet Drain Attacks
  "2": [
    {
      id: "2-1",
      type: "truefalse",
      prompt:
        "True or False: Random airdrops in your wallet can be part of a scam.",
      answerBool: true,
      explanation:
        "Scammers drop fake tokens to lure you into malicious sites where approvals drain your wallet.",
    },
    {
      id: "2-2",
      type: "mcq",
      prompt: "Which action reduces wallet-drain risk?",
      options: [
        "Blindly approving all requests",
        "Regularly reviewing and revoking token approvals",
        "Sharing seed phrase with support staff",
        "Disabling 2FA on exchanges",
      ],
      correctIndex: 1,
      explanation:
        "Use explorers (e.g., Etherscan/Polygonscan) to review and revoke risky approvals.",
    },
  ],
};

export function getScamLessonSteps(lessonId: string): GamifiedStep[] {
  return scamPlayData[lessonId] || [];
}
