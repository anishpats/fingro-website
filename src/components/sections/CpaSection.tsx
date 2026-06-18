import { useEffect, useRef, useState, type ReactNode } from "react";
import { motion, useInView } from "framer-motion";
import { FileText, Lock, Settings, Wallet } from "lucide-react";
import { assets } from "../../lib/assets";
import { Container } from "../ui/Container";

const TOGGLE_SEQUENCE: [boolean, boolean, boolean][] = [
  [true, true, false],
  [true, true, true],
  [true, false, false],
  [false, true, false],
  [true, true, false],
];

function AccessToggle({ enabled }: { enabled: boolean }) {
  return (
    <motion.div
      className="relative h-5 w-10 rounded-full"
      animate={{ backgroundColor: enabled ? "#6d28d9" : "#ccc3d7" }}
      transition={{ duration: 0.25 }}
      aria-hidden="true"
    >
      <motion.div
        className="absolute top-1 left-1 h-3 w-3 rounded-full bg-white shadow-sm"
        animate={{ x: enabled ? 16 : 0 }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      />
    </motion.div>
  );
}

interface AccessRowProps {
  icon: ReactNode;
  title: string;
  access: string;
  enabled: boolean;
}

function AccessRow({ icon, title, access, enabled }: AccessRowProps) {
  return (
    <motion.div
      className="flex items-center justify-between"
      animate={{ opacity: enabled ? 1 : 0.5 }}
      transition={{ duration: 0.25 }}
    >
      <div className="flex items-center gap-3">
        <div className="flex h-8 w-8 items-center justify-center rounded-sm bg-[#e7e8e9] text-fingro-muted">
          {icon}
        </div>
        <div>
          <p className="text-sm font-bold text-fingro-ink">{title}</p>
          <p className="text-[10px] leading-[15px] text-fingro-muted">{access}</p>
        </div>
      </div>
      <AccessToggle enabled={enabled} />
    </motion.div>
  );
}

function AdvisorAccessCard() {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { amount: 0.4 });
  const [toggleStates, setToggleStates] = useState<[boolean, boolean, boolean]>(
    TOGGLE_SEQUENCE[0],
  );

  useEffect(() => {
    if (!isInView) return;

    let step = 0;
    const interval = window.setInterval(() => {
      step = (step + 1) % TOGGLE_SEQUENCE.length;
      setToggleStates(TOGGLE_SEQUENCE[step]);
    }, 1600);

    return () => window.clearInterval(interval);
  }, [isInView]);

  return (
    <div
      ref={cardRef}
      className="mx-auto w-full max-w-md overflow-hidden rounded-lg border border-fingro-border/50 bg-white shadow-xl"
    >
      <div className="flex items-center justify-between bg-fingro-purple px-6 py-4">
        <p className="text-sm font-bold text-white">Advisor Access Control</p>
        <motion.div
          animate={{ rotate: isInView ? 360 : 0 }}
          transition={{
            duration: 6,
            repeat: isInView ? Infinity : 0,
            ease: "linear",
          }}
        >
          <Settings className="h-3.5 w-3.5 text-white" aria-hidden="true" />
        </motion.div>
      </div>

      <div className="space-y-6 p-6">
        <AccessRow
          icon={<FileText className="h-3 w-3" strokeWidth={2.5} />}
          title="Tax Documents"
          access="Full Access"
          enabled={toggleStates[0]}
        />
        <AccessRow
          icon={<Wallet className="h-3 w-3" strokeWidth={2.5} />}
          title="Bank Transactions"
          access="Read-only"
          enabled={toggleStates[1]}
        />
        <AccessRow
          icon={<Lock className="h-3.5 w-3" strokeWidth={2.5} />}
          title="Direct Asset Management"
          access="Restricted"
          enabled={toggleStates[2]}
        />

        <button
          type="button"
          className="w-full rounded border-2 border-dashed border-[#ccc3d7] px-2 py-3.5 text-xs font-bold text-fingro-muted transition-colors hover:border-fingro-purple-light hover:text-fingro-purple-light"
        >
          + Invite New Advisor
        </button>
      </div>
    </div>
  );
}

export function CpaSection() {
  return (
    <section className="pb-24">
      <Container>
        <div className="relative overflow-hidden rounded-[32px] bg-fingro-lavender px-8 py-16 md:px-20 md:py-24">
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-fingro-purple/5 to-transparent" />

          <div className="relative grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="text-4xl font-extrabold leading-tight tracking-tight text-fingro-purple-dark md:text-5xl">
                Works with your CPA
                <br />
                and CFP.
              </h2>
              <p className="mt-8 text-lg leading-relaxed text-fingro-purple-accent md:text-xl">
                Fingro isn&apos;t here to replace your trusted advisors.
                We&apos;re here to empower them. Grant selective access to your
                dashboard so your professionals can provide advice based on
                real-time data, not last year&apos;s spreadsheets.
              </p>

              <div className="mt-8 flex items-center gap-6">
                <img
                  src={assets.cpaHeadshot}
                  alt="Marcus Thorne, CFP"
                  className="h-20 w-20 rounded-2xl border-2 border-white object-cover shadow-lg"
                />
                <div>
                  <p className="text-lg font-bold text-fingro-purple-dark">
                    &ldquo;Fingro saved me 10 hours a month in data entry.&rdquo;
                  </p>
                  <p className="mt-1 text-sm text-fingro-purple-accent">
                    Marcus Thorne, CFP®
                  </p>
                </div>
              </div>
            </div>

            <AdvisorAccessCard />
          </div>
        </div>
      </Container>
    </section>
  );
}
