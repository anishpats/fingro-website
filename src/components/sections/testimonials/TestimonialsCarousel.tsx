import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useIsMobile } from "../../../hooks/useIsMobile";
import { TestimonialCard } from "./TestimonialCard";
import { testimonials } from "./testimonialsData";

const AUTO_PLAY_MS = 6000;

function getVisibleItems(page: number, perPage: number) {
  const start = page * perPage;
  const items = [];

  for (let i = 0; i < perPage; i++) {
    items.push(testimonials[(start + i) % testimonials.length]);
  }

  return items;
}

export function TestimonialsCarousel() {
  const isMobile = useIsMobile();
  const perPage = isMobile ? 1 : 3;
  const totalPages = Math.ceil(testimonials.length / perPage);

  const [page, setPage] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    setPage(0);
  }, [perPage]);

  const goTo = useCallback(
    (next: number) => {
      setPage((next + totalPages) % totalPages);
    },
    [totalPages],
  );

  const goNext = useCallback(() => goTo(page + 1), [goTo, page]);
  const goPrev = useCallback(() => goTo(page - 1), [goTo, page]);

  useEffect(() => {
    if (isPaused || totalPages <= 1) return;

    const timer = window.setInterval(goNext, AUTO_PLAY_MS);
    return () => window.clearInterval(timer);
  }, [goNext, isPaused, totalPages]);

  const visibleItems = getVisibleItems(page, perPage);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="overflow-hidden">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={`${page}-${perPage}`}
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -32 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className={`grid gap-8 ${isMobile ? "grid-cols-1" : "md:grid-cols-3"}`}
          >
            {visibleItems.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {totalPages > 1 && (
        <>
          <button
            type="button"
            onClick={goPrev}
            aria-label="Previous testimonials"
            className="absolute -left-2 top-1/2 flex h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-fingro-border/30 bg-white text-fingro-muted shadow-sm transition-all hover:-translate-y-1/2 hover:border-fingro-purple-light/40 hover:text-fingro-purple-light hover:shadow-md md:-left-5"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <button
            type="button"
            onClick={goNext}
            aria-label="Next testimonials"
            className="absolute -right-2 top-1/2 flex h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-fingro-border/30 bg-white text-fingro-muted shadow-sm transition-all hover:-translate-y-1/2 hover:border-fingro-purple-light/40 hover:text-fingro-purple-light hover:shadow-md md:-right-5"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          <div className="mt-8 flex justify-center gap-2">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => goTo(index)}
                aria-label={`Go to testimonial slide ${index + 1}`}
                aria-current={page === index}
                className={`h-2.5 cursor-pointer rounded-full transition-all duration-200 ${
                  page === index
                    ? "w-8 bg-fingro-purple-light"
                    : "w-2.5 bg-fingro-border hover:bg-fingro-purple-light/50"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
