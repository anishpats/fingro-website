import { motion } from "framer-motion";
import { buildConnectorPath, type Point } from "./pathConnectorUtils";

interface PathConnectorProps {
  points: Point[];
  width: number;
  height: number;
}

export function PathConnector({ points, width, height }: PathConnectorProps) {
  if (points.length < 3 || width === 0 || height === 0) return null;

  const pathD = buildConnectorPath(points);

  return (
    <svg
      className="pointer-events-none absolute inset-0 z-0 hidden md:block"
      width={width}
      height={height}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="path-clarity-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#5300b7" />
          <stop offset="50%" stopColor="#6d28d9" />
          <stop offset="100%" stopColor="#5300b7" />
        </linearGradient>
        <filter id="path-clarity-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <path
        d={pathD}
        fill="none"
        stroke="#e2d4f7"
        strokeWidth={2.5}
        strokeLinecap="round"
      />

      <motion.path
        d={pathD}
        fill="none"
        stroke="url(#path-clarity-gradient)"
        strokeWidth={2.5}
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.75, ease: "easeInOut", delay: 0.2 }}
      />

      <motion.circle
        r={5}
        fill="#6d28d9"
        filter="url(#path-clarity-glow)"
        initial={{ offsetDistance: "0%", opacity: 0 }}
        whileInView={{ opacity: 1 }}
        animate={{ offsetDistance: ["0%", "100%"] }}
        transition={{
          opacity: { duration: 0.2, delay: 0.75 },
          offsetDistance: {
            duration: 2.8,
            repeat: Infinity,
            ease: "linear",
            delay: 0.85,
          },
        }}
        style={{
          offsetPath: `path('${pathD}')`,
          offsetRotate: "0deg",
        }}
      />
    </svg>
  );
}
