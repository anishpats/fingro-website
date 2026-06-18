export type WidgetType =
  | "stocks"
  | "spending"
  | "allocation"
  | "net-worth"
  | "goals"
  | "tax"
  | "harvest";

export interface GroXQuery {
  id: string;
  label: string;
  response: string;
  widget: WidgetType;
}

/** Canonical figures — aligned with hero dashboard ($2,842,190 net worth) */
export const NET_WORTH_CURRENT = 2_842_190;
export const NET_WORTH_YTD_START = 2_529_000;
export const NET_WORTH_YTD_PCT = 12.4;

export const groxQueries: GroXQuery[] = [
  {
    id: "stocks",
    label: "Show my current stock positions",
    response:
      "Your top equity holdings total $1.24M and returned +11.0% YTD on average — the main driver behind your broader net worth gain.",
    widget: "stocks",
  },
  {
    id: "spending",
    label: "Visualize my monthly spending habits",
    response:
      "Your November spend is tracking 8% below budget. Dining and subscriptions are the two categories trending up.",
    widget: "spending",
  },
  {
    id: "allocation",
    label: "Show portfolio allocation",
    response:
      "Your portfolio is well diversified across equities, real assets, and cash. You're slightly overweight equities vs. target.",
    widget: "allocation",
  },
  {
    id: "net-worth",
    label: "Analyze my net worth growth",
    response:
      "Net worth grew 12.4% YTD — from $2.53M to $2.84M. Equities (+11.0%) drove most of the gain; real estate (+1.8%) added steady appreciation.",
    widget: "net-worth",
  },
  {
    id: "goals",
    label: "Am I reaching my goals?",
    response:
      "You're on track for 3 of 4 goals. Retirement is 3 years ahead of schedule; your emergency fund needs one more month.",
    widget: "goals",
  },
  {
    id: "tax",
    label: "What's my tax position this year?",
    response:
      "You're at a 22% effective rate YTD with $18,200 in estimated payments made. A $6,400 gap remains before year-end.",
    widget: "tax",
  },
  {
    id: "harvest",
    label: "Where can I harvest tax losses?",
    response:
      "I found $4,200 in harvestable losses across two positions. Acting now offsets Q4 income without triggering wash-sale rules.",
    widget: "harvest",
  },
];

export const groxWelcomeMessage =
  "Hi — I'm GroX. Pick a suggested query below to explore your financial picture.";

/** Top equity lots — sum $1,240,000; weighted avg YTD ≈ +10.9% */
export const stockPositions = [
  { ticker: "VTI", name: "Vanguard Total Market", value: 748_000, changePct: 11.5 },
  { ticker: "AAPL", name: "Apple Inc.", value: 198_400, changePct: 14.2 },
  { ticker: "MSFT", name: "Microsoft", value: 165_600, changePct: 11.8 },
  { ticker: "VNQ", name: "Vanguard Real Estate", value: 128_000, changePct: 2.1 },
];

export const stockPositionsSummary = {
  totalValue: 1_240_000,
  weightedYtdPct: 11.0,
};

export const spendingData = [
  { category: "Housing", amount: 2800 },
  { category: "Food", amount: 920 },
  { category: "Transport", amount: 540 },
  { category: "Subs", amount: 380 },
  { category: "Other", amount: 610 },
];

export const allocationData = [
  { name: "Equities", value: 58, color: "#6d28d9" },
  { name: "Real Assets", value: 31, color: "#a78bfa" },
  { name: "Cash", value: 11, color: "#ddd6fe" },
];

/** Monthly net worth ($k) — Jan $2,529k → Dec $2,842k = +12.4% YTD */
export const netWorthData = [
  { month: "Jan", value: 2529 },
  { month: "Feb", value: 2555 },
  { month: "Mar", value: 2582 },
  { month: "Apr", value: 2609 },
  { month: "May", value: 2636 },
  { month: "Jun", value: 2664 },
  { month: "Jul", value: 2692 },
  { month: "Aug", value: 2720 },
  { month: "Sep", value: 2748 },
  { month: "Oct", value: 2776 },
  { month: "Nov", value: 2809 },
  { month: "Dec", value: 2842 },
];

export const goalsData = [
  { goal: "Retirement", progress: 92, status: "Ahead" },
  { goal: "Home Upgrade", progress: 74, status: "On track" },
  { goal: "Emergency Fund", progress: 88, status: "Almost there" },
  { goal: "College Fund", progress: 61, status: "Needs attention" },
];

export const taxSummary = [
  { label: "Effective rate", value: "22%" },
  { label: "Paid YTD", value: "$18,200" },
  { label: "Projected gap", value: "$6,400" },
];

export const harvestOpportunities = [
  { position: "Tech ETF", loss: "$2,800", action: "Harvest" },
  { position: "Single-name equity", loss: "$1,400", action: "Harvest" },
];
