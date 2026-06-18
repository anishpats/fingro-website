import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { GROX_INSIGHT_MIN_HEIGHT, groxInsights, type DashboardView } from "./dashboardData";

function useTypewriter(text: string, speed = 20, startDelay = 350) {
  const [displayed, setDisplayed] = useState("");
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    setDisplayed("");
    setIsComplete(false);

    let index = 0;
    let intervalId: number | undefined;

    const timeoutId = window.setTimeout(() => {
      intervalId = window.setInterval(() => {
        index += 1;
        setDisplayed(text.slice(0, index));
        if (index >= text.length) {
          if (intervalId) window.clearInterval(intervalId);
          setIsComplete(true);
        }
      }, speed);
    }, startDelay);

    return () => {
      window.clearTimeout(timeoutId);
      if (intervalId) window.clearInterval(intervalId);
    };
  }, [text, speed, startDelay]);

  return { displayed, isComplete };
}

function InsightPanel({ activeView }: { activeView: DashboardView }) {
  const insight = groxInsights[activeView];
  const { displayed, isComplete } = useTypewriter(insight.text);

  return (
    <motion.div
      className={`flex flex-col ${GROX_INSIGHT_MIN_HEIGHT}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <div className="mb-1.5 flex h-5 shrink-0 items-center gap-1.5">
        <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded bg-fingro-purple">
          <Sparkles className="h-2.5 w-2.5 text-white" />
        </div>
        <span className="text-[11px] font-bold text-fingro-purple">GroX Insight</span>
        <span className="ml-auto text-[9px] font-semibold uppercase tracking-wider text-fingro-purple-light">
          {!isComplete && "Analyzing…"}
        </span>
      </div>

      <p className="line-clamp-2 h-8 shrink-0 text-[11px] leading-4 text-fingro-ink">
        {displayed}
        {!isComplete && (
          <span
            className="ml-0.5 inline-block h-3 w-0.5 animate-pulse bg-fingro-purple-light"
            aria-hidden="true"
          />
        )}
      </p>

      <div
        className={`mt-auto flex h-6 shrink-0 items-center gap-1.5 ${
          isComplete ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <button
          type="button"
          className="cursor-pointer rounded bg-fingro-purple px-2.5 py-0.5 text-[10px] font-bold text-white hover:opacity-90"
        >
          {insight.primaryAction}
        </button>
        <button
          type="button"
          className="cursor-pointer rounded px-2.5 py-0.5 text-[10px] font-bold text-fingro-muted hover:text-fingro-purple-light"
        >
          {insight.secondaryAction}
        </button>
      </div>
    </motion.div>
  );
}

interface GroxInsightCardProps {
  activeView: DashboardView;
}

export function GroxInsightCard({ activeView }: GroxInsightCardProps) {
  return (
    <div className="rounded-lg border border-fingro-purple/15 bg-white/70 p-2.5 shadow-md backdrop-blur-md">
      <AnimatePresence mode="wait">
        <InsightPanel key={activeView} activeView={activeView} />
      </AnimatePresence>
    </div>
  );
}
