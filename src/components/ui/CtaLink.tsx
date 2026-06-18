import { type ReactNode } from "react";
import { ArrowRight } from "lucide-react";

interface CtaLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  arrowSize?: "sm" | "md";
}

const arrowSizes = {
  sm: "h-3.5 w-3.5",
  md: "h-4 w-4",
};

export function CtaLink({
  href,
  children,
  className = "",
  arrowSize = "md",
}: CtaLinkProps) {
  return (
    <a
      href={href}
      className={`group inline-flex cursor-pointer items-center gap-2 transition-colors ${className}`}
    >
      <span className="transition-colors">{children}</span>
      <ArrowRight
        className={`${arrowSizes[arrowSize]} shrink-0 transition-transform duration-200 ease-out group-hover:translate-x-1`}
        aria-hidden="true"
      />
    </a>
  );
}
