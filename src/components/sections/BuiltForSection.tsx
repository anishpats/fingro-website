import { User, Building2, Briefcase, Users } from "lucide-react";
import { assets } from "../../lib/assets";
import { Button } from "../ui/Button";
import { Container } from "../ui/Container";
import { CtaLink } from "../ui/CtaLink";

const segments = [
  {
    id: "individuals",
    icon: User,
    title: "Individuals",
    description:
      "Holistic wealth tracking, AI-driven retirement planning, and personalized investment insights for everyone.",
    cta: "Explore Individual",
    href: "#individuals",
    variant: "light" as const,
    className: "md:col-span-2",
  },
  {
    id: "business-owners",
    icon: Building2,
    title: "Business Owners",
    description:
      "Manage personal wealth and business equity in one unified dashboard.",
    cta: "Learn More",
    href: "#business-owners",
    variant: "purple" as const,
    className: "",
  },
  {
    id: "cpas",
    icon: Briefcase,
    title: "CPAs & Firms",
    description:
      "Real-time data access for seamless tax preparation and proactive planning.",
    cta: "Partner with us",
    href: "#cpas",
    variant: "white" as const,
    className: "",
  },
];

export function BuiltForSection() {
  return (
    <section id="built-for" className="scroll-mt-24 py-24">
      <Container>
        <h2 className="mb-16 text-center text-3xl font-extrabold tracking-tight text-fingro-ink md:text-4xl">
          Built for every financial ambition.
        </h2>

        <div className="mb-6 grid gap-6 md:grid-cols-4">
          {segments.map(
            ({ id, icon: Icon, title, description, cta, href, variant, className }) => (
              <article
                key={title}
                id={id}
                className={`scroll-mt-28 flex flex-col justify-between rounded-2xl p-8 ${className} ${
                  variant === "purple"
                    ? "gradient-primary-btn text-white shadow-xl shadow-fingro-purple/20"
                    : variant === "white"
                      ? "border border-fingro-border/40 bg-white"
                      : "bg-fingro-surface"
                }`}
              >
                <div>
                  <Icon
                    className={`h-5 w-5 ${variant === "purple" ? "text-white" : "text-fingro-ink"}`}
                  />
                  <h3
                    className={`mt-4 text-xl font-bold md:text-2xl ${variant === "purple" ? "text-white" : "text-fingro-ink"}`}
                  >
                    {title}
                  </h3>
                  <p
                    className={`mt-4 text-sm leading-relaxed md:text-base ${
                      variant === "purple"
                        ? "text-fingro-lavender/80"
                        : "text-fingro-muted"
                    }`}
                  >
                    {description}
                  </p>
                </div>
                <CtaLink
                  href={href}
                  arrowSize="sm"
                  className={`mt-8 text-sm font-bold md:text-base ${
                    variant === "purple"
                      ? "text-white hover:text-fingro-lavender"
                      : "text-fingro-purple hover:text-fingro-purple-light"
                  }`}
                >
                  {cta}
                </CtaLink>
              </article>
            ),
          )}
        </div>

        <div
          id="employers"
          className="scroll-mt-28 grid items-center gap-12 rounded-2xl bg-fingro-surface p-8 md:grid-cols-2 md:p-10 lg:gap-16"
        >
          <div>
            <Users className="h-4 w-6 text-fingro-ink" />
            <h3 className="mt-4 text-3xl font-bold text-fingro-ink">Employers</h3>
            <p className="mt-4 text-lg leading-relaxed text-fingro-muted">
              Empower your workforce with modern financial wellness tools and
              401(k) management that actually makes sense.
            </p>
            <Button variant="dark" className="mt-6">
              Launch Benefits Platform
            </Button>
          </div>
          <div className="overflow-hidden rounded-lg border border-fingro-border/10 bg-white p-6 shadow-sm">
            <img
              src={assets.employerTablet}
              alt="Employee using financial wellness app on tablet"
              className="aspect-square w-full rounded object-cover"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
