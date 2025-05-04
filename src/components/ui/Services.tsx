import { FocusCardsDemo } from "./focusCardsDemo";

export function Services() {
    return <div id="services" className="min-h-screen flex flex-col sm:flex-row items-center justify-center bg-white py-12 px-4 sm:px-6 lg:px-8">
    <div className="flex-1 flex min-w-[30vw] flex-col text-center justify-center p-8">
      <h1 className="text-4xl px-4 text-center md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-200 via-slate-700 to-gray-200 text-transparent bg-clip-text">
        Our Services
      </h1>
      <p className="text-lg text-gray-600 max-w-xl">
      From routine maintenance to complex repairs, we handle it all with precision and care.
      Our skilled technicians ensure your vehicle runs smoothly, safely, and efficiently.
      </p>
    </div>

    <FocusCardsDemo />
  </div>
}