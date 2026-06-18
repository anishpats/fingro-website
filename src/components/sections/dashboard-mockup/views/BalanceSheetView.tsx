import { motion } from "framer-motion";
import { balanceSheet } from "../dashboardData";

export function BalanceSheetView() {
  const totalAssets = "$3,331,880";
  const totalLiabilities = "$489,690";

  return (
    <div className="flex h-full flex-col">
      <p className="text-xs font-bold uppercase tracking-widest text-fingro-muted">
        Balance Sheet
      </p>
      <motion.p
        className="mt-2 text-3xl font-extrabold tracking-tight text-fingro-ink sm:text-4xl"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
      >
        {balanceSheet.netPosition}
      </motion.p>
      <p className="mt-1 text-xs text-fingro-muted">Net position after liabilities</p>

      <div className="mt-4 grid min-h-0 flex-1 gap-3 sm:grid-cols-2">
        <div className="rounded-xl border border-fingro-purple/10 bg-white/50 p-3 sm:p-4">
          <div className="mb-3 flex items-center justify-between">
            <p className="text-[10px] font-bold uppercase tracking-wider text-emerald-600 sm:text-xs">
              Assets
            </p>
            <span className="text-xs font-bold text-fingro-ink">{totalAssets}</span>
          </div>
          <ul className="space-y-2.5">
            {balanceSheet.assets.map((item, i) => (
              <motion.li
                key={item.label}
                className="flex items-center justify-between gap-2"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * i }}
              >
                <span className="text-xs text-fingro-muted sm:text-sm">
                  {item.label}
                </span>
                <span className="text-xs font-semibold text-fingro-ink sm:text-sm">
                  {item.amount}
                </span>
              </motion.li>
            ))}
          </ul>
        </div>

        <div className="rounded-xl border border-fingro-purple/10 bg-white/50 p-3 sm:p-4">
          <div className="mb-3 flex items-center justify-between">
            <p className="text-[10px] font-bold uppercase tracking-wider text-rose-500 sm:text-xs">
              Liabilities
            </p>
            <span className="text-xs font-bold text-fingro-ink">{totalLiabilities}</span>
          </div>
          <ul className="space-y-2.5">
            {balanceSheet.liabilities.map((item, i) => (
              <motion.li
                key={item.label}
                className="flex items-center justify-between gap-2"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * i }}
              >
                <span className="text-xs text-fingro-muted sm:text-sm">
                  {item.label}
                </span>
                <span className="text-xs font-semibold text-fingro-ink sm:text-sm">
                  {item.amount}
                </span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
