import { Container } from "../ui/Container";

function FooterColumn({
  heading,
  links,
}: {
  heading: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <p className="text-xs font-bold uppercase tracking-widest text-fingro-ink">
        {heading}
      </p>
      <ul className="mt-4 space-y-3">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className="text-sm text-fingro-muted transition-colors hover:text-fingro-purple-light"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 114.126 0 2.063 2.063 0 01-2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

const productLinks = [
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "GroX AI", href: "#grox-ai" },
];

const compareLinks = [
  { label: "vs Claude", href: "#" },
  { label: "vs ChatGPT", href: "#" },
  { label: "vs Perplexity", href: "#" },
  { label: "vs Monarch", href: "#" },
  { label: "vs Spreadsheets", href: "#" },
  { label: "vs Mint", href: "#" },
  { label: "vs YNAB", href: "#" },
  { label: "vs QuickBooks", href: "#" },
];

const forLinks = [
  { label: "Individuals", href: "#individuals" },
  { label: "Business Owners", href: "#business-owners" },
  { label: "CPAs", href: "#cpas" },
  { label: "Employers", href: "#employers" },
];

const resourceLinks = [
  { label: "FAQ", href: "#" },
  { label: "Security", href: "#" },
];

const legalLinks = [
  { label: "Terms of Service", href: "#" },
  { label: "Privacy Policy", href: "#" },
  { label: "Cookie Settings", href: "#" },
  { label: "AI Disclosure", href: "#" },
  { label: "Data Processing Agreement", href: "#" },
];

const bottomBarLinks = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
  { label: "Cookie Settings", href: "#" },
  { label: "Security", href: "#" },
  { label: "Regulatory Disclosure", href: "#" },
];

const socialLinks = [
  {
    label: "X (Twitter)",
    href: "#",
    icon: XIcon,
  },
  {
    label: "LinkedIn",
    href: "#",
    icon: LinkedInIcon,
  },
  {
    label: "GitHub",
    href: "#",
    icon: GitHubIcon,
  },
];

export function Footer() {
  return (
    <footer className="border-t border-fingro-border/10 bg-fingro-surface pt-16">
      <Container>
        <div className="grid gap-10 pb-16 sm:grid-cols-2 lg:grid-cols-5 lg:gap-8">
          <div className="sm:col-span-2 lg:col-span-1">
            <p className="text-xl font-bold text-fingro-ink">Fingro</p>
            <p className="mt-4 text-sm font-medium text-fingro-ink">
              Your Wealth Intelligence Platform.
            </p>
            <p className="mt-2 text-sm leading-relaxed text-fingro-muted">
              AI-powered personal finance for everyone.
            </p>
          </div>

          <FooterColumn heading="Product" links={productLinks} />
          <FooterColumn heading="Compare" links={compareLinks} />
          <FooterColumn heading="For" links={forLinks} />

          <div>
            <FooterColumn heading="Resources" links={resourceLinks} />
            <div className="mt-8">
              <FooterColumn heading="Legal" links={legalLinks} />
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-6 border-t border-fingro-border/10 py-8 md:flex-row md:items-center">
          <p className="text-xs text-fingro-muted">
            © 2026 Fingro.ai. All rights reserved.
          </p>

          <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:gap-8">
            <div className="flex flex-wrap gap-6">
              {bottomBarLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-xs font-medium text-fingro-ink transition-colors hover:text-fingro-purple-light"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-4">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="text-fingro-muted transition-colors hover:text-fingro-purple-light"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
