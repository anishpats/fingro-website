/** Fixed heights — keep hero layout stable when carousel / insight content cycles */
export const CAROUSEL_VIEW_HEIGHT = "h-[400px]";
export const DASHBOARD_SHELL_MIN_HEIGHT = "min-h-[600px] sm:min-h-[620px] lg:min-h-[640px]";
export const GROX_INSIGHT_MIN_HEIGHT = "h-[108px]";

export type DashboardView = "net-worth" | "income" | "portfolio" | "balance";

export interface DashboardTab {
  id: DashboardView;
  label: string;
}

export const dashboardTabs: DashboardTab[] = [
  { id: "net-worth", label: "Net Worth" },
  { id: "income", label: "Income" },
  { id: "portfolio", label: "Portfolio" },
  { id: "balance", label: "Balance" },
];

export const chartHeights = [26, 29, 38, 51, 45, 58];

export const incomeData = [
  { month: "Jan", income: 18200 },
  { month: "Feb", income: 19400 },
  { month: "Mar", income: 20100 },
  { month: "Apr", income: 21800 },
  { month: "May", income: 22400 },
  { month: "Jun", income: 24100 },
];

export const portfolioRows = [
  { asset: "Vanguard Total Market", value: "$1,240,000", change: "+4.2%" },
  { asset: "Real Estate Holdings", value: "$890,000", change: "+1.8%" },
  { asset: "Private Equity", value: "$412,500", change: "+6.1%" },
  { asset: "Cash & Equivalents", value: "$299,690", change: "+0.3%" },
];

export const balanceSheet = {
  assets: [
    { label: "Investments", amount: "$2,142,190" },
    { label: "Real Estate", amount: "$890,000" },
    { label: "Cash", amount: "$299,690" },
  ],
  liabilities: [
    { label: "Mortgage", amount: "$412,000" },
    { label: "Credit Lines", amount: "$77,690" },
  ],
  netPosition: "$2,842,190",
};

export interface GroxInsight {
  text: string;
  primaryAction: string;
  secondaryAction: string;
}

export const groxInsights: Record<DashboardView, GroxInsight> = {
  "net-worth": {
    text: "Net worth rose 4.2% this month, driven by equities. Recommend rebalancing your cash reserves.",
    primaryAction: "Rebalance Now",
    secondaryAction: "Details",
  },
  income: {
    text: "$4,200 tax-loss harvesting available in Q4. Apply now to offset your monthly income drag?",
    primaryAction: "Approve",
    secondaryAction: "Details",
  },
  portfolio: {
    text: "Tech exposure is 12% above target after recent surges. I can run a sweep to lock in profits.",
    primaryAction: "Execute Sweep",
    secondaryAction: "Review Allocation",
  },
  balance: {
    text: "Debt-to-asset ratio looks healthy. Moving $5k to your high-yield bucket earns +$245 annually.",
    primaryAction: "Transfer Funds",
    secondaryAction: "See Projection",
  },
};
