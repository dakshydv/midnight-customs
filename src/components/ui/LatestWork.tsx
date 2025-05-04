import { Slideshow } from "./slideshow";

export function LatestWork() {
    return <div id="work" className=" mt-20 bg-white flex-col">
    <h1 className="text-4xl px-4 text-center md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-200 via-slate-700 to-gray-200 text-transparent bg-clip-text">
      Our Latest Work
    </h1>
    <Slideshow />
  </div>
}