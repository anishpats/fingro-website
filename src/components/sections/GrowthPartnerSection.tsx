import { Layers, Brain, Shield } from "lucide-react";
import { Container } from "../ui/Container";
import { CtaLink } from "../ui/CtaLink";

const features = [
  {
    icon: Layers,
    iconBg: "bg-fingro-lavender",
    title: "Unified Aggregation",
    description:
      "Connect over 10,000+ institutions instantly. We merge your personal life and business assets into one cohesive view.",
  },
  {
    icon: Brain,
    iconBg: "bg-[#d8e3fb]",
    title: "Predictive Guidance",
    description:
      "GroX AI doesn't just show data; it anticipates needs—from tax-loss harvesting to retirement shortfalls.",
  },
  {
    icon: Shield,
    iconBg: "bg-[#ffdbc8]",
    title: "Institutional Security",
    description:
      "Encrypted with the same rigor as the world's leading private banks. Your data is your own, always.",
  },
];

export function GrowthPartnerSection() {
  return (
    <section id="why-fingro" className="scroll-mt-24 bg-fingro-surface py-24">
      <Container>
        <div className="mb-16 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-extrabold tracking-tight text-fingro-ink md:text-4xl">
              Your Growth Partner
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-fingro-muted">
              Traditional banking sees you as a set of transactions. We see you
              as a story of ambition. Fingro acts as the connective tissue
              between your brokerage, bank accounts, and business equity.
            </p>
          </div>
          <CtaLink
            href="#platform"
            className="text-lg font-bold text-fingro-purple hover:text-fingro-purple-light"
          >
            How it works
          </CtaLink>
        </div>

        <div id="features" className="grid gap-8 md:grid-cols-3">
          {features.map(({ icon: Icon, iconBg, title, description }) => (
            <article
              key={title}
              className="rounded-2xl bg-white p-8 shadow-sm transition-shadow hover:shadow-md"
            >
              <div
                className={`mb-4 flex h-12 w-12 items-center justify-center rounded-lg ${iconBg}`}
              >
                <Icon className="h-5 w-5 text-fingro-ink" />
              </div>
              <h3 className="text-xl font-bold text-fingro-ink">{title}</h3>
              <p className="mt-3 text-base leading-relaxed text-fingro-muted">
                {description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
