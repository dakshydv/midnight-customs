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
      "I took my car in for a brake replacement and was pleasantly surprised by how transparent the team was. They even showed me the worn parts before proceeding. Great experience!",
    name: "Sarah M., Mississauga, ON",
    title: "Excellent service and very honest staff!",
  },
  {
    quote:
      "Most garages overcharge, but here I got a full oil change and tire rotation at a great price. Will definitely be coming back.",
    name: "Jason L., Scarborough, ON",
    title: "Affordable and quick turnaround!",
  },
  {
    quote: "I had a weird noise coming from my engine. The mechanics diagnosed it in no time and fixed it the same day. Super grateful!",
    name: "Amrita S., North York, ON",
    title: "Friendly staff who really know their stuff.",
  },
  {
    quote:
      "The garage is well-maintained, and the staff are courteous and efficient. No hidden fees, just straight-up good service.",
    name: "David K., Etobicoke, ON",
    title: "Clean, professional, and reliable.",
  },
  {
    quote:
      "I’ve been to a few places around Toronto, but this one stands out. Great customer care and affordable prices.",
    name: "Liam R., Downtown Toronto, ON",
    title: "Best garage experience in years.",
  },
];
