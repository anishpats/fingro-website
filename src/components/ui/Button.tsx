import { type ButtonHTMLAttributes, type ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "outline" | "inverse" | "dark" | "ghost";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  children: ReactNode;
  icon?: ReactNode;
}

const variants: Record<ButtonVariant, string> = {
  primary:
    "gradient-primary-btn text-white shadow-lg shadow-black/10 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-fingro-purple/25 hover:brightness-110 active:translate-y-0 active:shadow-lg active:brightness-100",
  secondary:
    "border border-transparent bg-fingro-surface text-fingro-ink hover:-translate-y-0.5 hover:border-fingro-purple-light/30 hover:bg-white hover:text-fingro-purple-light hover:shadow-md active:translate-y-0 active:shadow-sm",
  outline:
    "border border-white/20 bg-fingro-purple-light text-white hover:-translate-y-0.5 hover:border-white/40 hover:bg-white/10 hover:shadow-lg hover:shadow-black/10 active:translate-y-0",
  inverse:
    "bg-white text-fingro-purple shadow-lg shadow-black/10 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-black/15 hover:brightness-[1.02] active:translate-y-0 active:shadow-lg",
  dark: "bg-fingro-ink text-fingro-bg hover:-translate-y-0.5 hover:bg-fingro-ink/90 hover:shadow-md active:translate-y-0",
  ghost:
    "bg-transparent text-fingro-muted hover:-translate-y-0.5 hover:bg-fingro-lavender/50 hover:text-fingro-purple-light active:translate-y-0 active:text-fingro-purple",
};

export function Button({
  variant = "primary",
  children,
  icon,
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      type="button"
      className={`group inline-flex cursor-pointer items-center justify-center gap-2 rounded-lg px-6 py-2.5 text-sm font-bold tracking-tight transition-all duration-200 ease-out disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:translate-y-0 ${variants[variant]} ${className}`}
      {...props}
    >
      {icon}
      {children}
    </button>
  );
}
