"use client"

export function Footer() {
  return (
    <div className="min-h-[400px] flex flex-col text-white pb-10 bg-[#262626]">
      <div className="pt-20 w-full flex flex-col md:flex-row justify-around px-4">
        <div className="w-full md:w-32 flex flex-col mb-8 md:mb-0">
          <h1 className="">Quick Links</h1>
          <div className="h-[0.2px] mt-2 bg-neutral-500"></div>
          <div className="mt-4 flex text-neutral-400 gap-2 flex-col">
            <a href="tel:(365) 987-4165">Call</a>
            <a href="mailto:customs.midnightclub@gmail.com">Email</a>
            <a href="#home">Get Connected</a>
          </div>
        </div>
        <div className="w-full md:w-auto flex flex-col mb-8 md:mb-0">
          <h1 className="">About Us</h1>
          <div className="h-[0.2px] mt-2 bg-neutral-500"></div>
          <div className="mt-4 flex text-neutral-400 gap-2 flex-col">
            <span>Address: 365 Healey Rd #15, Bolton, ON L7E 5C1</span>
            <a href="#testimonials">Reviews</a>
            <a href="#testimonials">Our Team</a>
          </div>
        </div>
        <div className="w-full md:w-32 flex flex-col">
          <h1 className="">Follow Us On</h1>
          <div className="h-[0.2px] mt-2 bg-neutral-500"></div>
          <div className="mt-4 flex text-neutral-400 gap-2 flex-col">
            <a href="https://www.instagram.com/mdnt_cstms?igsh=dnBvNWZndWo3ZHlw" target="_blank" rel="noreferrer">
              Instagram
            </a>
            <a href="https://www.tiktok.com/@mdnt_cstms" target="_blank" rel="noreferrer">
              TikTok
            </a>
            <a href="https://www.linkedin.com/in/midnight-customs-938196364/">LinkedIn</a>
          </div>
        </div>
      </div>

      {/* Email Subscription Section */}
      <div className="mt-12 px-4 w-full max-w-3xl mx-auto">
        <h2 className="text-xl font-medium text-center">Subscribe for Discounts and Updates</h2>
        <div className="h-[0.2px] mt-2 bg-neutral-500 w-full max-w-md mx-auto"></div>
        <p className="text-neutral-400 text-center mt-4 mb-6">Stay up to date with our latest Offers and Events</p>

        <form onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row gap-3 w-full max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email address"
            className="flex-1 px-4 py-2 rounded-md bg-neutral-800 text-white border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-neutral-500"
            required
          />
          <button
            type="submit"
            className="px-6 py-2 bg-white text-[#262626] font-medium rounded-md hover:bg-neutral-200 transition-colors"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  )
}
