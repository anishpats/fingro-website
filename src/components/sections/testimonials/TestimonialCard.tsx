import type { Testimonial } from "./testimonialsData";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  const { quote, name, role, avatar, alt } = testimonial;

  return (
    <article className="flex h-full flex-col gap-4 rounded-lg bg-fingro-surface p-8">
      <p className="flex-1 text-base leading-relaxed text-fingro-ink">{quote}</p>

      <div className="flex items-center gap-3 pt-4">
        <img
          src={avatar}
          alt={alt}
          className="h-10 w-10 shrink-0 rounded-xl object-cover"
        />
        <div>
          <p className="text-sm font-bold text-fingro-ink">{name}</p>
          <p className="text-xs text-fingro-muted">{role}</p>
        </div>
      </div>
    </article>
  );
}
