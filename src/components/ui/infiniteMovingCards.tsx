"use client";
import { InfiniteMovingCards } from "./MovingCards";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[20rem] rounded-md flex flex-col antialiased bg-white  dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "Very Friendly staff and services are above and beyond. From wrapping to detailing, their every work have perfection. Best prices in the town and wide selection of vinyl. Highly recommended.",
    name: "Simral Gill, Toronto, ON",
    title: "Exceptional Service with Friendly Staff and Great Prices",
  },
  {
    quote:
      "Gurjot provided exceptional customer service and went above and beyond to ensure a positive experience. His dedication to providing excellent service is commendable.",
    name: "Sehaj Sekhon, Toronto, ON",
    title: "Outstanding Customer Service by Gurjot",
  },
  {
    quote:
      "Midnight Customs delivers top-notch work! Great service and exceptional attention to detail.",
    name: "Amrita S., North York, ON",
    title: "Friendly staff who really know their stuff.",
  },
  {
    quote:
      "The garage is well-maintained, and the staff are courteous and efficient. No hidden fees, just straight-up good service.",
    name: "Garv Dudy, Toronto, ON",
    title: "Top-Quality Work with Impeccable Attention to Detail",
  },
  {
    quote:
      "I’ve been to a few places around Toronto, but this one stands out. Great customer care and affordable prices.",
    name: "Liam R., Downtown Toronto, ON",
    title: "Best garage experience in years.",
  },
];
