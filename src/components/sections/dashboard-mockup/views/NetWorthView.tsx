import { motion } from "framer-motion";
import { TrendingUp } from "lucide-react";
import { chartHeights } from "../dashboardData";

const accountBreakdown = [
  { label: "Investments", value: "$2,142,190", share: "75%" },
  { label: "Real Estate", value: "$890,000", share: "31%" },
  { label: "Cash", value: "$299,690", share: "11%" },
];

export function NetWorthView() {
  return (
    <div className="flex h-full flex-col">
      <p className="text-xs font-bold uppercase tracking-widest text-fingro-muted">
        Total Net Worth
      </p>
      <motion.p
        className="mt-2 text-3xl font-extrabold tracking-tight text-fingro-ink sm:text-4xl"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
      >
        $2,842,190.50
      </motion.p>
      <div className="mt-2 flex items-center gap-1.5 text-xs font-semibold text-emerald-600">
        <TrendingUp className="h-3.5 w-3.5" />
        <span>+12.4% YTD · +4.2% this month</span>
      </div>

      <div className="mt-5 flex min-h-0 flex-1 flex-col">
        <div className="flex h-[100px] items-end gap-1.5 sm:h-[110px]">
          {chartHeights.map((height, i) => (
            <motion.div
              key={i}
              className={`flex-1 rounded-sm origin-bottom ${
                i === 3 ? "bg-fingro-purple-light" : "bg-fingro-purple-light/25"
              }`}
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{
                delay: 0.1 + i * 0.06,
                duration: 0.4,
                ease: "easeOut",
              }}
              style={{ height: `${height}%` }}
            />
          ))}
        </div>
        <div className="mt-3 grid gap-2 sm:grid-cols-3">
          {accountBreakdown.map((item, i) => (
            <motion.div
              key={item.label}
              className="rounded-lg border border-fingro-purple/10 bg-white/60 px-3 py-2.5"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.08 }}
            >
              <p className="text-[10px] font-bold uppercase tracking-wider text-fingro-muted">
                {item.label}
              </p>
              <p className="mt-0.5 text-sm font-bold text-fingro-ink">{item.value}</p>
              <p className="text-[10px] text-fingro-purple-light">{item.share} of total</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
