import { GitBranch, Landmark, Play, Shield, TrendingUp } from "lucide-react";
import { Button } from "../ui/Button";
import { Container } from "../ui/Container";
import { DashboardMockup } from "./DashboardMockup";
import { DASHBOARD_SHELL_MIN_HEIGHT } from "./dashboard-mockup/dashboardData";

const trustItems = [
  { icon: Shield, label: "Protect" },
  { icon: TrendingUp, label: "Plan" },
  { icon: Landmark, label: "Profit" },
  { icon: GitBranch, label: "Pass on" },
];

export function HeroSection() {
  return (
    <section
      id="grox-ai"
      className="scroll-mt-20 overflow-hidden pb-12 pt-5 md:pb-14 md:pt-7"
    >
      <Container>
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="flex min-w-0 flex-1 flex-col justify-center gap-6 lg:max-w-xl lg:gap-7 lg:py-2">
            <div className="inline-flex w-fit items-center gap-2 rounded-xl bg-fingro-lavender px-3 py-1">
              <span className="h-2 w-2 rounded-full bg-fingro-purple-accent" />
              <span className="text-xs font-bold uppercase tracking-widest text-fingro-purple-accent">
                The Wealth Lever
              </span>
            </div>

            <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-fingro-ink md:text-5xl lg:text-[3.25rem] lg:leading-[1.05] lg:tracking-[-0.05em]">
              Wealth is a function of two levers:{" "}
              <span className="text-fingro-purple-light">
                Asset Growth & Tax Minimization
              </span>
            </h1>

            <p className="max-w-lg text-lg leading-relaxed text-fingro-muted md:text-xl">
              Stop letting wealth Leak. Fingro compounds your growth and
              minimizes your tax drag in one connected view.
            </p>

            <div className="flex flex-wrap gap-3 sm:gap-4">
              <Button className="px-8 py-4 text-lg shadow-xl hover:shadow-2xl">
                Start Your Wealth Picture
              </Button>
              <Button
                variant="secondary"
                className="px-8 py-4 text-lg"
                icon={
                  <Play className="h-4 w-4 fill-current transition-transform duration-200 group-hover:translate-x-0.5" />
                }
              >
                See the Framework
              </Button>
            </div>

            <div className="mt-8 flex h-8 shrink-0 items-center gap-6 overflow-x-auto sm:gap-8 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {trustItems.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2.5">
                  <Icon
                    className="h-6 w-6 shrink-0 text-fingro-purple-light"
                    strokeWidth={2}
                  />
                  <span className="whitespace-nowrap text-lg font-medium text-fingro-purple-light">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className={`relative w-full ${DASHBOARD_SHELL_MIN_HEIGHT}`}>
            <DashboardMockup />
          </div>
        </div>
      </Container>
    </section>
  );
}
