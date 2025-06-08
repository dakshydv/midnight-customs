import { Slideshow } from "./slideshow";
import * as motion from 'motion/react-client'

export function LatestWork() {
  return (
    <div id="work" className=" mt-20 bg-white flex-col">
      <motion.h1 
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="text-4xl px-4 text-center md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-200 via-slate-700 to-gray-200 text-transparent bg-clip-text">
        Our Latest Work
      </motion.h1>
      <Slideshow />
    </div>
  );
}
