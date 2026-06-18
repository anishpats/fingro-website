import { Star } from "lucide-react";
import { Container } from "../ui/Container";
import { TestimonialsCarousel } from "./testimonials/TestimonialsCarousel";

function StarRating() {
  return (
    <div className="flex justify-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className="h-5 w-5 fill-fingro-purple-light text-fingro-purple-light"
        />
      ))}
    </div>
  );
}

export function TestimonialsSection() {
  return (
    <section id="love" className="scroll-mt-24 py-24">
      <Container>
        <div className="mx-auto mb-16 flex max-w-2xl flex-col items-center gap-4">
          <h2 className="text-center text-3xl font-extrabold tracking-tight text-fingro-ink md:text-4xl">
            Proven Success Across Every Stage of Wealth.
          </h2>
          <StarRating />
        </div>

        <TestimonialsCarousel />
      </Container>
    </section>
  );
}
