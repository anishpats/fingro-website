import { ShieldCheck } from "lucide-react";
import { Container } from "../ui/Container";

const badges = ["SOC2", "ISO27001", "GDPR"];

export function SecurityBanner() {
  return (
    <section className="bg-fingro-ink py-12">
      <Container>
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          <div className="flex items-center gap-6">
            <ShieldCheck className="h-10 w-8 shrink-0 text-white" />
            <div>
              <h3 className="text-2xl font-bold text-white">
                Institutional Grade Security
              </h3>
              <p className="mt-1 text-base text-slate-400">
                SOC2 Type II, GDPR compliant, and audited by tier-one security
                firms monthly.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            {badges.map((badge) => (
              <span
                key={badge}
                className="rounded border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-extrabold uppercase tracking-widest text-white"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
