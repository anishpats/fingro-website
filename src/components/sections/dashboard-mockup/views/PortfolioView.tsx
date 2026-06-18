import { motion } from "framer-motion";
import { portfolioRows } from "../dashboardData";

export function PortfolioView() {
  return (
    <div className="flex h-full flex-col">
      <p className="text-xs font-bold uppercase tracking-widest text-fingro-muted">
        Portfolio
      </p>
      <motion.p
        className="mt-2 text-3xl font-extrabold tracking-tight text-fingro-ink sm:text-4xl"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
      >
        $2,842,190
      </motion.p>
      <p className="mt-1 text-xs text-fingro-muted">
        4 holdings · diversified · +5.8% blended return
      </p>

      <div className="mt-4 min-h-0 flex-1 overflow-hidden rounded-xl border border-fingro-purple/10 bg-white/50">
        <div className="grid grid-cols-[1fr_auto_auto] gap-x-3 border-b border-fingro-purple/10 px-3 py-2 text-[10px] font-bold uppercase tracking-wider text-fingro-muted sm:px-4 sm:text-xs">
          <span>Asset</span>
          <span className="text-right">Value</span>
          <span className="text-right">Change</span>
        </div>
        <div className="divide-y divide-fingro-purple/5">
          {portfolioRows.map((row, i) => (
            <motion.div
              key={row.asset}
              className="grid grid-cols-[1fr_auto_auto] gap-x-3 px-3 py-2.5 sm:px-4"
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.05 * i, duration: 0.3 }}
            >
              <span className="truncate text-xs font-semibold text-fingro-ink sm:text-sm">
                {row.asset}
              </span>
              <span className="text-right text-xs font-medium text-fingro-ink sm:text-sm">
                {row.value}
              </span>
              <span className="text-right text-xs font-semibold text-emerald-600 sm:text-sm">
                {row.change}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
