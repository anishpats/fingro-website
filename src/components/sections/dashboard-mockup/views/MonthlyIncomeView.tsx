import { motion } from "framer-motion";
import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { incomeData } from "../dashboardData";

function formatCurrency(value: number) {
  return `$${(value / 1000).toFixed(1)}k`;
}

export function MonthlyIncomeView() {
  const latest = incomeData[incomeData.length - 1].income;
  const previous = incomeData[incomeData.length - 2].income;
  const change = (((latest - previous) / previous) * 100).toFixed(1);

  return (
    <div className="flex h-full flex-col">
      <p className="text-xs font-bold uppercase tracking-widest text-fingro-muted">
        Monthly Income
      </p>
      <motion.p
        className="mt-2 text-3xl font-extrabold tracking-tight text-fingro-ink sm:text-4xl"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
      >
        ${latest.toLocaleString()}
      </motion.p>
      <p className="mt-1 text-xs font-semibold text-fingro-purple-light">
        +{change}% vs last month · $289,200 annualized
      </p>

      <div className="mt-4 min-h-0 flex-1">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={incomeData}
            margin={{ top: 8, right: 8, left: -16, bottom: 0 }}
          >
            <defs>
              <linearGradient id="incomeGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#6d28d9" stopOpacity={0.35} />
                <stop offset="100%" stopColor="#6d28d9" stopOpacity={0.02} />
              </linearGradient>
            </defs>
            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 10, fill: "#6b7280" }}
              dy={4}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 9, fill: "#9ca3af" }}
              tickFormatter={formatCurrency}
              width={40}
            />
            <Tooltip
              contentStyle={{
                background: "rgba(255,255,255,0.92)",
                border: "1px solid rgba(109,40,217,0.15)",
                borderRadius: 8,
                fontSize: 11,
                boxShadow: "0 4px 12px rgba(25,28,29,0.08)",
              }}
              formatter={(value) => [
                `$${Number(value).toLocaleString()}`,
                "Income",
              ]}
            />
            <Area
              type="monotone"
              dataKey="income"
              stroke="#6d28d9"
              strokeWidth={2}
              fill="url(#incomeGradient)"
              dot={false}
              activeDot={{ r: 4, fill: "#6d28d9", strokeWidth: 0 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
