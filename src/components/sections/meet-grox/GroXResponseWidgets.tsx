import {
  Bar,
  BarChart,
  Cell,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import {
  allocationData,
  goalsData,
  harvestOpportunities,
  netWorthData,
  spendingData,
  stockPositions,
  stockPositionsSummary,
  taxSummary,
  type WidgetType,
} from "./meetGroxData";

function formatUsd(value: number) {
  return `$${value.toLocaleString()}`;
}

function formatYtdPct(pct: number) {
  const sign = pct >= 0 ? "+" : "";
  return `${sign}${pct.toFixed(1)}%`;
}

function StockTable() {
  return (
    <div className="mt-3 overflow-hidden rounded-lg border border-fingro-purple/10">
      <div className="grid grid-cols-[auto_1fr_auto_auto] gap-x-2 border-b border-fingro-purple/10 bg-fingro-surface/80 px-2.5 py-1.5 text-[9px] font-bold uppercase tracking-wider text-fingro-muted">
        <span>Ticker</span>
        <span>Holding</span>
        <span className="text-right">Value</span>
        <span className="text-right">YTD</span>
      </div>
      {stockPositions.map((row) => (
        <div
          key={row.ticker}
          className="grid grid-cols-[auto_1fr_auto_auto] gap-x-2 border-b border-fingro-purple/5 px-2.5 py-2 text-[11px] last:border-0"
        >
          <span className="font-bold text-fingro-purple-light">{row.ticker}</span>
          <span className="truncate text-fingro-muted">{row.name}</span>
          <span className="text-right font-medium text-fingro-ink">
            {formatUsd(row.value)}
          </span>
          <span
            className={`text-right font-semibold ${
              row.changePct >= 0 ? "text-emerald-600" : "text-rose-500"
            }`}
          >
            {formatYtdPct(row.changePct)}
          </span>
        </div>
      ))}
      <div className="grid grid-cols-[1fr_auto_auto] gap-x-2 border-t border-fingro-purple/10 bg-fingro-surface/50 px-2.5 py-1.5 text-[10px]">
        <span className="font-medium text-fingro-muted">Equity sleeve total</span>
        <span className="text-right font-bold text-fingro-ink">
          {formatUsd(stockPositionsSummary.totalValue)}
        </span>
        <span className="text-right font-semibold text-emerald-600">
          {formatYtdPct(stockPositionsSummary.weightedYtdPct)} avg
        </span>
      </div>
    </div>
  );
}

function SpendingChart() {
  return (
    <div className="mt-3 h-[120px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={spendingData} margin={{ top: 4, right: 4, left: -20, bottom: 0 }}>
          <XAxis
            dataKey="category"
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 9, fill: "#6b7280" }}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 8, fill: "#9ca3af" }}
            tickFormatter={(v) => `$${v}`}
            width={32}
          />
          <Tooltip
            contentStyle={{
              fontSize: 10,
              borderRadius: 6,
              border: "1px solid rgba(109,40,217,0.15)",
            }}
            formatter={(value) => [`$${value}`, "Spent"]}
          />
          <Bar dataKey="amount" fill="#6d28d9" radius={[3, 3, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

function AllocationChart() {
  return (
    <div className="mt-3 flex items-center gap-4">
      <div className="h-[100px] w-[100px] shrink-0">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={allocationData}
              dataKey="value"
              innerRadius={28}
              outerRadius={44}
              strokeWidth={0}
            >
              {allocationData.map((entry) => (
                <Cell key={entry.name} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{ fontSize: 10, borderRadius: 6 }}
              formatter={(value) => [`${value}%`, "Allocation"]}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="space-y-1.5">
        {allocationData.map((item) => (
          <div key={item.name} className="flex items-center gap-2 text-[11px]">
            <span
              className="h-2 w-2 rounded-full"
              style={{ backgroundColor: item.color }}
            />
            <span className="text-fingro-muted">{item.name}</span>
            <span className="font-semibold text-fingro-ink">{item.value}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function NetWorthChart() {
  return (
    <div className="mt-3 h-[120px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={netWorthData}
          margin={{ top: 4, right: 12, left: 4, bottom: 0 }}
        >
          <XAxis
            dataKey="month"
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 8, fill: "#6b7280" }}
            interval={1}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 8, fill: "#9ca3af" }}
            tickFormatter={(v) => `$${(v / 1000).toFixed(1)}M`}
            width={44}
            domain={[2500, 2860]}
            ticks={[2529, 2600, 2700, 2800, 2842]}
          />
          <Tooltip
            contentStyle={{ fontSize: 10, borderRadius: 6 }}
            formatter={(value) => [
              `$${Number(value).toLocaleString()}k`,
              "Net Worth",
            ]}
            labelFormatter={(label) => `${label} · YTD`}
          />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#6d28d9"
            strokeWidth={2}
            dot={false}
            activeDot={{ r: 4, fill: "#6d28d9" }}
          />
        </LineChart>
      </ResponsiveContainer>
      <p className="mt-1.5 text-center text-[10px] text-fingro-muted">
        $2.53M → $2.84M · +12.4% YTD
      </p>
    </div>
  );
}

function GoalsProgress() {
  return (
    <div className="mt-3 space-y-2.5">
      {goalsData.map((goal) => (
        <div key={goal.goal}>
          <div className="mb-1 flex items-center justify-between text-[11px]">
            <span className="font-medium text-fingro-ink">{goal.goal}</span>
            <span
              className={`font-semibold ${
                goal.progress >= 85 ? "text-emerald-600" : "text-fingro-purple-light"
              }`}
            >
              {goal.progress}% · {goal.status}
            </span>
          </div>
          <div className="h-1.5 overflow-hidden rounded-full bg-fingro-purple-light/15">
            <div
              className="h-full rounded-full bg-fingro-purple-light transition-all duration-500"
              style={{ width: `${goal.progress}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

function TaxSummaryCard() {
  return (
    <div className="mt-3 grid grid-cols-3 gap-2">
      {taxSummary.map((item) => (
        <div
          key={item.label}
          className="rounded-lg border border-fingro-purple/10 bg-fingro-surface/60 px-2 py-2 text-center"
        >
          <p className="text-[9px] font-bold uppercase tracking-wider text-fingro-muted">
            {item.label}
          </p>
          <p className="mt-0.5 text-sm font-bold text-fingro-ink">{item.value}</p>
        </div>
      ))}
    </div>
  );
}

function HarvestList() {
  return (
    <div className="mt-3 overflow-hidden rounded-lg border border-fingro-purple/10">
      {harvestOpportunities.map((row) => (
        <div
          key={row.position}
          className="flex items-center justify-between border-b border-fingro-purple/5 px-2.5 py-2 text-[11px] last:border-0"
        >
          <span className="font-medium text-fingro-ink">{row.position}</span>
          <span className="font-semibold text-rose-500">{row.loss}</span>
          <span className="rounded bg-fingro-purple/10 px-2 py-0.5 text-[10px] font-bold text-fingro-purple">
            {row.action}
          </span>
        </div>
      ))}
    </div>
  );
}

export function GroXResponseWidget({ type }: { type: WidgetType }) {
  switch (type) {
    case "stocks":
      return <StockTable />;
    case "spending":
      return <SpendingChart />;
    case "allocation":
      return <AllocationChart />;
    case "net-worth":
      return <NetWorthChart />;
    case "goals":
      return <GoalsProgress />;
    case "tax":
      return <TaxSummaryCard />;
    case "harvest":
      return <HarvestList />;
    default:
      return null;
  }
}
