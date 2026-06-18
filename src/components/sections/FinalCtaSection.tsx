import { Button } from "../ui/Button";
import { Container } from "../ui/Container";

export function FinalCtaSection() {
  return (
    <section id="pricing" className="scroll-mt-24 pb-24">
      <Container>
        <div className="relative overflow-hidden rounded-lg p-12 shadow-xl gradient-primary md:p-16">
          <div className="pointer-events-none absolute -right-48 -top-48 h-96 w-96 rounded-xl bg-white/10 blur-[50px]" />
          <div className="pointer-events-none absolute -bottom-32 -left-32 h-64 w-64 rounded-xl bg-white/5 blur-[40px]" />

          <div className="relative text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-white md:text-5xl">
              Ready to compound your wealth?
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-white/90 md:text-xl">
              Join 15,000+ high-net-worth individuals who rely on GroX for their
              daily financial intelligence.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-6">
              <Button variant="inverse" className="px-10 py-5 text-lg font-extrabold">
                Start Building Wealth
              </Button>
              <Button variant="outline" className="px-10 py-5 text-lg">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
