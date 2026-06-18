import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { Button } from "../ui/Button";
import { Container } from "../ui/Container";

const navLinks = [
  { label: "Why Fingro", href: "#why-fingro" },
  { label: "Platform", href: "#platform" },
  { label: "Features", href: "#features" },
  { label: "GroX AI", href: "#grox-ai" },
  { label: "Pricing", href: "#pricing" },
  { label: "Love 💜", href: "#love" },
] as const;

const forDropdownLinks = [
  { label: "Individuals", href: "#individuals" },
  { label: "Business Owners", href: "#business-owners" },
  { label: "CPAs", href: "#cpas" },
  { label: "Employers", href: "#employers" },
] as const;

const navLinkClass =
  "whitespace-nowrap text-sm font-medium tracking-tight text-fingro-muted transition-colors hover:text-fingro-purple-light xl:text-base";

export function Navbar() {
  const [forOpen, setForOpen] = useState(false);
  const forRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (forRef.current && !forRef.current.contains(event.target as Node)) {
        setForOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-fingro-border/20 bg-fingro-surface">
      <Container>
        <nav className="flex h-20 items-center justify-between gap-4">
          <a
            href="#"
            className="shrink-0 text-2xl font-extrabold text-fingro-purple-muted transition-colors hover:text-fingro-purple-light"
          >
            Fingro
          </a>

          <ul className="hidden items-center gap-6 xl:gap-8 lg:flex">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className={navLinkClass}>
                  {link.label}
                </a>
              </li>
            ))}

            <li
              ref={forRef}
              className="relative"
              onMouseEnter={() => setForOpen(true)}
              onMouseLeave={() => setForOpen(false)}
            >
              <button
                type="button"
                onClick={() => setForOpen((open) => !open)}
                className={`inline-flex items-center gap-1 ${navLinkClass} ${forOpen ? "text-fingro-purple-light" : ""}`}
                aria-expanded={forOpen}
                aria-haspopup="true"
              >
                For
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${forOpen ? "rotate-180" : ""}`}
                />
              </button>

              {forOpen && (
                <div className="absolute left-1/2 top-full z-50 min-w-[200px] -translate-x-1/2 pt-3">
                  <ul className="overflow-hidden rounded-xl border border-fingro-border/30 bg-white py-2 shadow-lg">
                    {forDropdownLinks.map((item) => (
                      <li key={item.label}>
                        <a
                          href={item.href}
                          onClick={() => setForOpen(false)}
                          className="block px-4 py-2.5 text-sm font-medium text-fingro-muted transition-colors hover:bg-fingro-lavender/40 hover:text-fingro-purple-light"
                        >
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          </ul>

          <div className="flex shrink-0 items-center gap-4">
            <Button variant="ghost" className="hidden sm:inline-flex">
              Sign In
            </Button>
            <Button className="px-6 py-2.5 text-sm">Open Account</Button>
          </div>
        </nav>
      </Container>
    </header>
  );
}
