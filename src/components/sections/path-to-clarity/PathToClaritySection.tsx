import { useMemo, useRef } from "react";
import { Landmark, Lightbulb, Target } from "lucide-react";
import { motion } from "framer-motion";
import { Container } from "../../ui/Container";
import { useIsMobile } from "../../../hooks/useIsMobile";
import { PathConnector } from "./PathConnector";
import { PathStepCard, type PathStep } from "./PathStepCard";
import { useIconPositions } from "./pathConnectorUtils";

const steps: PathStep[] = [
  {
    icon: Landmark,
    title: "Connect",
    description:
      "Securely link your existing accounts and assets in minutes using bank-grade encryption.",
  },
  {
    icon: Lightbulb,
    title: "Learn",
    description:
      "GroX AI analyzes your spending, investments, and tax patterns to understand your unique profile.",
  },
  {
    icon: Target,
    title: "Clarity",
    description:
      "Receive a unified view of your net worth with proactive, actionable advice delivered daily.",
  },
];

export function PathToClaritySection() {
  const isMobile = useIsMobile();
  const gridRef = useRef<HTMLDivElement>(null);
  const iconRef0 = useRef<HTMLDivElement>(null);
  const iconRef1 = useRef<HTMLDivElement>(null);
  const iconRef2 = useRef<HTMLDivElement>(null);
  const iconRefs = useMemo(
    () => [iconRef0, iconRef1, iconRef2],
    [iconRef0, iconRef1, iconRef2],
  );

  const { points, width, height } = useIconPositions(
    gridRef,
    iconRefs,
    !isMobile,
  );

  return (
    <section id="platform" className="scroll-mt-24 bg-fingro-surface py-24">
      <Container>
        <motion.div
          className="mb-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-fingro-ink">
            The Path to Clarity
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-fingro-muted">
            Our streamlined process ensures your wealth is effortless,
            automated, and insightful.
          </p>
        </motion.div>

        <div
          ref={gridRef}
          className="relative grid gap-12 md:grid-cols-3 md:gap-8"
        >
          {!isMobile && (
            <PathConnector points={points} width={width} height={height} />
          )}

          {steps.map((step, index) => (
            <PathStepCard
              key={step.title}
              step={step}
              index={index}
              iconRef={iconRefs[index]}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
