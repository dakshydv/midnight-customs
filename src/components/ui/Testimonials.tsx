import { InfiniteMovingCardsDemo } from "./infiniteMovingCards";

export function Testimonials() {
    return <div id="testimonials" className="=mt-5 md:mt-32 bg-white">
    <h3 className="text-xl px-4 text-center md:text-3xl font-bold mb-6 bg-gradient-to-r from-gray-200 via-slate-700 to-gray-200 text-transparent bg-clip-text">
      Testimonials
    </h3>
    <h1 className="text-4xl px-4 text-center md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-200 via-slate-700 to-gray-200 text-transparent bg-clip-text">
      Our Customer Reviews
    </h1>
    <InfiniteMovingCardsDemo />
  </div>
}