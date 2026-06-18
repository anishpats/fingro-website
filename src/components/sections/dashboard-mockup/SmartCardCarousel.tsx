import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  CAROUSEL_VIEW_HEIGHT,
  dashboardTabs,
  type DashboardView,
} from "./dashboardData";
import { NetWorthView } from "./views/NetWorthView";
import { MonthlyIncomeView } from "./views/MonthlyIncomeView";
import { PortfolioView } from "./views/PortfolioView";
import { BalanceSheetView } from "./views/BalanceSheetView";

const AUTO_INTERVAL_MS = 8000;

const fadeVariants = {
  enter: { opacity: 0 },
  center: { opacity: 1 },
  exit: { opacity: 0 },
};

function ViewContent({ view }: { view: DashboardView }) {
  switch (view) {
    case "income":
      return <MonthlyIncomeView />;
    case "portfolio":
      return <PortfolioView />;
    case "balance":
      return <BalanceSheetView />;
    default:
      return <NetWorthView />;
  }
}

interface SmartCardCarouselProps {
  activeIndex: number;
  onActiveIndexChange: (index: number) => void;
}

export function SmartCardCarousel({
  activeIndex,
  onActiveIndexChange,
}: SmartCardCarouselProps) {
  const [isPaused, setIsPaused] = useState(false);
  const activeTab = dashboardTabs[activeIndex];

  const goToIndex = useCallback(
    (index: number) => {
      onActiveIndexChange(index);
    },
    [onActiveIndexChange],
  );

  const advance = useCallback(() => {
    onActiveIndexChange((activeIndex + 1) % dashboardTabs.length);
  }, [activeIndex, onActiveIndexChange]);

  useEffect(() => {
    if (isPaused) return;
    const id = window.setInterval(advance, AUTO_INTERVAL_MS);
    return () => window.clearInterval(id);
  }, [isPaused, advance, activeIndex]);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
    >
      <div className="mb-3 flex flex-wrap gap-1.5">
        {dashboardTabs.map((tab, i) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => goToIndex(i)}
            className={`cursor-pointer rounded-lg px-3 py-1.5 text-[11px] font-semibold sm:text-xs ${
              i === activeIndex
                ? "bg-fingro-purple text-white"
                : "text-fingro-muted hover:text-fingro-purple-light"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className={`relative overflow-hidden ${CAROUSEL_VIEW_HEIGHT}`}>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab.id}
            variants={fadeVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className={`absolute inset-0 flex flex-col overflow-hidden rounded-2xl border border-white/60 bg-white/55 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] backdrop-blur-md sm:p-5 ${CAROUSEL_VIEW_HEIGHT}`}
          >
            <ViewContent view={activeTab.id} />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-3 flex h-1.5 justify-center gap-1.5">
        {dashboardTabs.map((tab, i) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => goToIndex(i)}
            aria-label={`Go to ${tab.label}`}
            className="cursor-pointer p-1"
          >
            <span
              className={`block h-1.5 w-1.5 rounded-full ${
                i === activeIndex
                  ? "bg-fingro-purple-light"
                  : "bg-fingro-muted/30"
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
