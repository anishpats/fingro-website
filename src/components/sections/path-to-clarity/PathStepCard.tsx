import { type LucideIcon } from "lucide-react";
import { type RefObject } from "react";
import { motion } from "framer-motion";

export interface PathStep {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface PathStepCardProps {
  step: PathStep;
  index: number;
  iconRef?: RefObject<HTMLDivElement | null>;
}

export function PathStepCard({
  step: { icon: Icon, title, description },
  index,
  iconRef,
}: PathStepCardProps) {
  return (
    <motion.div
      className="relative z-10 flex flex-col items-center text-center will-change-transform"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{
        duration: 0.45,
        delay: 0.15 + index * 0.1,
        ease: "easeOut",
      }}
    >
      <div
        ref={iconRef}
        className="flex h-24 w-24 items-center justify-center rounded-xl border border-fingro-border/20 bg-white shadow-sm"
      >
        <Icon className="h-7 w-7 text-fingro-purple-light" />
      </div>
      <h3 className="mt-5 text-xl font-bold text-fingro-ink">{title}</h3>
      <p className="mt-2 max-w-xs text-base leading-relaxed text-fingro-muted">
        {description}
      </p>
    </motion.div>
  );
}
