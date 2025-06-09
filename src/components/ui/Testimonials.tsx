import { InfiniteMovingCardsDemo } from "./infiniteMovingCards";
import * as motion from 'motion/react-client'

export function Testimonials() {
  return (
    <div id="testimonials" className="mt-20 md:mt-32 bg-white">
      <motion.h3
      initial={{ opacity: 0, filter: 'blur(10px)', scale: 0.85 }}
      whileInView={{ opacity: 1, filter: 'blur(0px)', scale: 1 }}
      transition={{ duration: 0.9 }}
      viewport={{ once: true }}
      className="text-xl px-4 text-center md:text-3xl font-bold mb-6 bg-gradient-to-r from-gray-200 via-slate-700 to-gray-200 text-transparent bg-clip-text">
        Testimonials
      </motion.h3>
      <motion.h1 
      initial={{ opacity: 0, filter: 'blur(10px)', scale: 0.85 }}
      whileInView={{ opacity: 1, filter: 'blur(0px)', scale: 1 }}
      transition={{ duration: 0.9 }}
      viewport={{ once: true }}
      className="text-4xl px-4 text-center md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-200 via-slate-700 to-gray-200 text-transparent bg-clip-text">
        Our Customer Reviews
      </motion.h1>
      <InfiniteMovingCardsDemo />
    </div>
  );
}
