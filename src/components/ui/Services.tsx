import { FocusCardsDemo } from "./focusCardsDemo";

export function Services() {
  return (
    <div
      id="services"
      className="min-h-screen flex flex-col sm:flex-row items-center justify-center bg-white py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="w-full sm:w-full md:w-1/3 flex flex-col text-center justify-center p-8">
        <h1 className="text-4xl px-4 text-center md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-200 via-slate-700 to-gray-200 text-transparent bg-clip-text">
          Our Services
        </h1>
        <p className="text-lg text-gray-600 max-w-xl mx-auto">
          We offer a wide range of premium car customization services. These
          include full car wraps, headlight and taillight tints, ceramic
          coating, professional car detailing, and paint protection film (PPF).
          We also provide custom stickers, chrome deletes, underglow lighting,
          and basic interior modifications. For those looking to level up their
          ride, we offer rims and spoilers on demand — tailored to your style
          and performance needs
        </p>
      </div>

      <div className="w-full lg:w-2/3 max-w-screen">
        <FocusCardsDemo />
      </div>
    </div>
  );
}
