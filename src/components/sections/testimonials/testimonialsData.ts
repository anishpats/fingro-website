export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
  avatar: string;
  alt: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "jonathan-r",
    quote:
      '"Finally, a financial platform that feels like it belongs in this century. The AI briefs are eerily accurate."',
    name: "Jonathan R.",
    role: "Tech Founder",
    avatar: "/images/testimonials/jonathan-r.jpg",
    alt: "Jonathan R., Tech Founder",
  },
  {
    id: "elena-g",
    quote:
      '"As a CPA, Fingro has revolutionized how I interact with clients. The collaboration features are seamless."',
    name: "Elena G.",
    role: "Senior Partner",
    avatar: "/images/testimonials/elena-g.jpg",
    alt: "Elena G., Senior Partner",
  },
  {
    id: "david-s",
    quote:
      '"Our employees have never been more engaged with their benefits. Financial wellness is the ultimate perk."',
    name: "David S.",
    role: "HR Director",
    avatar: "/images/testimonials/david-s.jpg",
    alt: "David S., HR Director",
  },
  {
    id: "sarah-jenkins",
    quote:
      '"Fingro finally closed the gap between my CPAs reports and my daily brokerage view. The tax-loss harvesting alerts alone paid for the service in the first month."',
    name: "Sarah Jenkins",
    role: "Tech Founder",
    avatar: "/images/testimonials/sarah-jenkins.jpg",
    alt: "Sarah Jenkins, Tech Founder",
  },
  {
    id: "marcus-vane",
    quote:
      '"The clarity I have now is unprecedented. I used to spend hours in spreadsheets every Sunday. Now, GroX AI handles the heavy lifting, allowing me to focus on growth."',
    name: "Marcus Vane",
    role: "Hedge Fund Manager",
    avatar: "/images/testimonials/marcus-vane.jpg",
    alt: "Marcus Vane, Hedge Fund Manager",
  },
  {
    id: "elena-gupta",
    quote:
      '"Aggregation was always a nightmare with my real estate holdings. Fingro pulled everything into one view effortlessly. Institutional-grade tools for personal use."',
    name: "Dr. Elena Gupta",
    role: "Real Estate Investor",
    avatar: "/images/testimonials/elena-gupta.jpg",
    alt: "Dr. Elena Gupta, Real Estate Investor",
  },
];
