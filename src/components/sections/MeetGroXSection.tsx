import { Container } from "../ui/Container";
import { GroXChatbox } from "./meet-grox/GroXChatbox";

export function MeetGroXSection() {
  return (
    <section id="meet-grox" className="scroll-mt-24 py-20 md:py-24">
      <Container>
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col justify-center text-left">
            <span className="inline-flex w-fit items-center gap-2 rounded-xl bg-fingro-lavender px-3 py-1 text-xs font-bold uppercase tracking-widest text-fingro-purple-accent">
              Meet GroX
            </span>

            <h2 className="mt-5 text-3xl font-extrabold leading-tight tracking-tight text-fingro-ink md:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
              An AI that knows{" "}
              <span className="text-fingro-purple-light">your financial life.</span>
            </h2>

            <p className="mt-5 max-w-lg text-lg leading-relaxed text-fingro-muted">
              GroX reads your full financial picture — accounts, taxes, goals —
              and gives clear, actionable answers. No spreadsheets. No guesswork.
            </p>

            <ul className="mt-6 space-y-3 text-sm text-fingro-muted md:text-base">
              <li className="flex items-start gap-2.5">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-fingro-purple-light" />
                Tax-aware guidance grounded in your real data
              </li>
              <li className="flex items-start gap-2.5">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-fingro-purple-light" />
                One-click summaries your CPA and CFP can act on
              </li>
              <li className="flex items-start gap-2.5">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-fingro-purple-light" />
                Proactive insights before opportunities expire
              </li>
            </ul>
          </div>

          <GroXChatbox />
        </div>
      </Container>
    </section>
  );
}
