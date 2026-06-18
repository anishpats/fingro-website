import { useCallback, useEffect, useRef, useState } from "react";
import { Sparkles } from "lucide-react";
import { GroXResponseWidget } from "./GroXResponseWidgets";
import { QueryMenu } from "./QueryMenu";
import { groxWelcomeMessage, type GroXQuery, type WidgetType } from "./meetGroxData";

type ChatPhase = "idle" | "typing" | "responding";

const TYPING_DELAY_MS = 1100;

function useTypewriter(text: string, active: boolean, speed = 16) {
  const [displayed, setDisplayed] = useState("");
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (!active) {
      setDisplayed("");
      setIsComplete(false);
      return;
    }

    setDisplayed("");
    setIsComplete(false);

    let index = 0;
    const intervalId = window.setInterval(() => {
      index += 1;
      setDisplayed(text.slice(0, index));
      if (index >= text.length) {
        window.clearInterval(intervalId);
        setIsComplete(true);
      }
    }, speed);

    return () => window.clearInterval(intervalId);
  }, [text, active, speed]);

  return { displayed, isComplete };
}

function GroXAvatar() {
  return (
    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-fingro-purple">
      <Sparkles className="h-3.5 w-3.5 text-white" />
    </div>
  );
}

function WelcomeBubble() {
  return (
    <div className="flex max-w-[90%] items-start gap-2">
      <GroXAvatar />
      <div className="rounded-2xl rounded-tl-sm border border-fingro-purple/10 bg-white px-3.5 py-2.5 text-sm leading-relaxed text-fingro-ink shadow-sm">
        {groxWelcomeMessage}
      </div>
    </div>
  );
}

function UserBubble({ text }: { text: string }) {
  return (
    <div className="flex justify-end">
      <div className="max-w-[85%] rounded-2xl rounded-tr-sm bg-fingro-purple px-3.5 py-2.5 text-sm leading-relaxed text-white">
        {text}
      </div>
    </div>
  );
}

function TypingBubble() {
  return (
    <div className="flex max-w-[90%] items-start gap-2">
      <GroXAvatar />
      <div className="rounded-2xl rounded-tl-sm border border-fingro-purple/10 bg-white px-4 py-3 shadow-sm">
        <span className="flex items-center gap-1 text-sm text-fingro-muted">
          <span className="animate-pulse">typing</span>
          <span className="flex gap-0.5">
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className="inline-block h-1 w-1 animate-bounce rounded-full bg-fingro-purple-light"
                style={{ animationDelay: `${i * 150}ms` }}
              />
            ))}
          </span>
        </span>
      </div>
    </div>
  );
}

function GroXResponseBubble({
  text,
  widget,
  animate,
}: {
  text: string;
  widget: WidgetType;
  animate: boolean;
}) {
  const { displayed, isComplete } = useTypewriter(text, animate);

  return (
    <div className="flex max-w-[95%] items-start gap-2">
      <GroXAvatar />
      <div className="min-w-0 flex-1 rounded-2xl rounded-tl-sm border border-fingro-purple/10 bg-white px-3.5 py-2.5 shadow-sm">
        <p className="text-sm leading-relaxed text-fingro-ink">
          {animate ? displayed : text}
          {animate && !isComplete && (
            <span className="ml-0.5 inline-block h-3.5 w-0.5 animate-pulse bg-fingro-purple-light" />
          )}
        </p>
        {(!animate || isComplete) && <GroXResponseWidget type={widget} />}
      </div>
    </div>
  );
}

export function GroXChatbox() {
  const [activeQuery, setActiveQuery] = useState<GroXQuery | null>(null);
  const [phase, setPhase] = useState<ChatPhase>("idle");
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = useCallback(() => {
    const el = scrollRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [activeQuery, phase, scrollToBottom]);

  useEffect(() => {
    if (phase !== "typing") return;
    const id = window.setTimeout(() => setPhase("responding"), TYPING_DELAY_MS);
    return () => window.clearTimeout(id);
  }, [phase, activeQuery]);

  const handleQuery = (query: GroXQuery) => {
    if (phase === "typing") return;
    setActiveQuery(query);
    setPhase("typing");
  };

  const isBusy = phase === "typing";

  return (
    <div className="flex flex-col">
      <div className="overflow-hidden rounded-2xl border border-fingro-border/40 bg-white/75 shadow-[0_16px_40px_-12px_rgba(25,28,29,0.1)] backdrop-blur-sm">
        <div className="flex items-center gap-2.5 border-b border-fingro-border/30 px-4 py-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-fingro-purple-light">
            <Sparkles className="h-4 w-4 text-white" />
          </div>
          <div>
            <p className="text-sm font-bold text-fingro-ink">GroX</p>
            <p className="text-[11px] text-fingro-muted">Your AI wealth assistant</p>
          </div>
          <span className="ml-auto flex items-center gap-1.5 text-[10px] font-semibold text-emerald-600">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            Online
          </span>
        </div>

        <div
          ref={scrollRef}
          className="flex min-h-[500px] flex-col gap-4 overflow-y-auto p-4"
        >
          <WelcomeBubble />

          {activeQuery && (
            <>
              <UserBubble text={activeQuery.label} />
              {phase === "typing" && <TypingBubble />}
              {phase === "responding" && (
                <GroXResponseBubble
                  key={activeQuery.id}
                  text={activeQuery.response}
                  widget={activeQuery.widget}
                  animate
                />
              )}
            </>
          )}
        </div>
      </div>

      <div className="mt-4">
        <QueryMenu
          onSelect={handleQuery}
          disabled={isBusy}
          activeQueryId={activeQuery?.id ?? null}
        />
      </div>
    </div>
  );
}
