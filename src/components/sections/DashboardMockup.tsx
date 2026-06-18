import { useState } from "react";
import { Sparkles } from "lucide-react";
import { dashboardTabs } from "./dashboard-mockup/dashboardData";
import { SmartCardCarousel } from "./dashboard-mockup/SmartCardCarousel";
import { GroxInsightCard } from "./dashboard-mockup/GroxInsightCard";

export function DashboardMockup() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeView = dashboardTabs[activeIndex].id;

  return (
    <div className="relative h-full">
      <div className="pointer-events-none absolute -right-20 -top-20 h-96 w-96 rounded-xl bg-fingro-purple/10 blur-[50px]" />
      <div className="pointer-events-none absolute -bottom-20 -left-20 h-72 w-72 rounded-xl bg-blue-200/20 blur-[40px]" />

      <div className="relative flex h-full min-h-[inherit] cursor-default flex-col overflow-hidden rounded-3xl border border-white/50 bg-white/75 p-4 shadow-[0_32px_64px_-16px_rgba(25,28,29,0.12)] backdrop-blur-xl sm:p-6">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-fingro-purple/[0.04] via-transparent to-blue-100/20" />

        <div className="relative mb-4 flex shrink-0 items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-fingro-purple-light shadow-sm">
              <Sparkles className="h-5 w-5 text-white" />
            </div>
            <div>
              <p className="text-sm font-bold text-fingro-ink">Good morning</p>
              <p className="text-xs text-fingro-muted">Here&apos;s your brief.</p>
            </div>
          </div>
          <div className="flex gap-1">
            <span className="h-1.5 w-1.5 rounded-full bg-fingro-muted/40" />
            <span className="h-1.5 w-1.5 rounded-full bg-fingro-muted/40" />
            <span className="h-1.5 w-1.5 rounded-full bg-fingro-muted/40" />
          </div>
        </div>

        <div className="relative mb-4 shrink-0">
          <SmartCardCarousel
            activeIndex={activeIndex}
            onActiveIndexChange={setActiveIndex}
          />
        </div>

        <div className="relative mt-auto shrink-0">
          <GroxInsightCard activeView={activeView} />
        </div>
      </div>
    </div>
  );
}
