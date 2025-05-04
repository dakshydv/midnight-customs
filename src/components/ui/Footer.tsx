export function Footer() {
    return <div className="min-h-[400px] flex text-white pb-10 bg-[#262626]">
    <div className="pt-20 w-full flex flex-col md:flex-row justify-around px-4">
      <div className="w-full md:w-32 flex flex-col mb-8 md:mb-0">
        <h1 className="">Quick Links</h1>
        <div className="h-[0.2px] mt-2 bg-neutral-500"></div>
        <div className="mt-4 flex text-neutral-400 gap-2 flex-col">
          <a href="tel:(365) 987-4165">Call</a>
          <a href="mailto:midnightcustoms@gmail.com">Email</a>
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
          <a href="https://www.instagram.com/mdnt_cstms?igsh=dnBvNWZndWo3ZHlw">Instagram</a>
          <a href="https://www.tiktok.com/@midnight.customs.ca">TikTok</a>
          <a href="#home">LinkedIn</a>
        </div>
      </div>
    </div>
  </div>
}