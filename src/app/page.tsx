"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { FocusCardsDemo } from "@/components/ui/focusCardsDemo";
import { Slideshow } from "@/components/ui/slideshow";
import { InfiniteMovingCardsDemo } from "@/components/ui/infiniteMovingCards";
import Image from "next/image";

export default function GarageWebsite() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: "Home", href: "#" },
    { label: "Services", href: "#" },
    { label: "Gallery", href: "#" },
    { label: "About Us", href: "#" },
    { label: "Contact", href: "#" },
  ];

  return (
    <div className="relative min-h-full w-screen overscroll-none bg-gray-100">
      {/* Fixed Background */}
      <div className="fixed overscroll-none top-0 left-0 h-screen z-0 bg-cover bg-center bg-no-repeat bg-scroll min-h-screen w-full object-cover bg-[url('/mobile-home.jpg')] sm:bg-[url('/desktop-home2.jpg')]">
        <div className="h-full">
          {/* navbar */}
          <div className="h-20 px-4 w-full justify-between flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative z-50"
            >
              {isMenuOpen ? (
                <X
                  strokeWidth={2.2}
                  className="hover:cursor-pointer"
                  size={32}
                  color="white"
                />
              ) : (
                <Menu
                  strokeWidth={2.2}
                  className="hover:cursor-pointer"
                  size={32}
                  color="white"
                />
              )}
            </button>
          </div>

          {/* Dark Overlay */}
          <div
            className={`fixed inset-0 bg-black transition-opacity duration-300 ease-in-out z-30 
            ${isMenuOpen ? "opacity-70" : "opacity-0 pointer-events-none"}`}
          />

          {/* Slide-in Menu */}
          <div
            className={`fixed top-0 left-0 h-full bg-transparent transition-all sm:bg-gray-900 duration-500 ease-in-out z-40
            ${isMenuOpen ? "w-full md:w-1/2 lg:w-1/3" : "w-0"}`}
          >
            {/* Menu Content - positioned to the right side of the menu bar */}
            <div className="h-full flex flex-col justify-center items-end pr-12">
              <nav className="w-full max-w-xs">
                <ul className="space-y-6">
                  {menuItems.map((item, index) => (
                    <li
                      key={index}
                      className="text-right overflow-hidden"
                      style={{
                        opacity: isMenuOpen ? 1 : 0,
                        transform: isMenuOpen
                          ? "translateX(0)"
                          : "translateX(-50px)",
                        transition: `opacity 0.5s ease ${
                          0.3 + index * 0.1
                        }s, transform 0.5s ease ${0.3 + index * 0.1}s`,
                      }}
                    >
                      <a
                        href={item.href}
                        className="text-white text-2xl font-medium hover:text-gray-300 transition-colors duration-200"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* main html */}
      <div className="relative bg-white">
        {/* hero section */}
        {/* <div className="h-screen bg-transparent"></div> */}
        {/* second page */}
        <div className="min-h-screen flex flex-col sm:flex-row items-center justify-center mt-[100vh] bg-white py-12 px-4 sm:px-6 lg:px-8">
          <div className="flex-1 flex flex-col text-center justify-center p-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Take Your Car to the Next Level
            </h1>
            <p className="text-lg text-gray-600 max-w-xl">
              From sleek detailing to precision performance upgrades, we
              transform your car into a masterpiece. At our salon, your vehicle
              gets the care, style, and power it deserves—because exceptional
              cars deserve exceptional treatment.
            </p>
          </div>

          {/* Right Image Section */}
          <div className="flex-1 flex items-center justify-center p-4">
            <div className="w-full h-full flex items-center justify-center">
              
              <Image
              src={'https://images.unsplash.com/photo-1506671753197-8d137cc5d53c?q=80&w=2658&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
              alt="Featured Content"
              width={400}
              height={400}
              layout="responsive"
              />
            </div>
          </div>
        </div>

        {/* third page */}
        <div className=" mt-20 bg-white flex-col">
          <h1 className="text-4xl px-4 text-center md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-200 via-slate-700 to-gray-200 text-transparent bg-clip-text">
            Our Latest Work
          </h1>
          <Slideshow />
        </div>

        {/* fourth */} 
        <div className="=mt-5 md:mt-32 bg-white">
          <h3 className="text-xl px-4 text-center md:text-3xl font-bold mb-6 bg-gradient-to-r from-gray-200 via-slate-700 to-gray-200 text-transparent bg-clip-text">
            Testimonials
          </h3>
          <h1 className="text-4xl px-4 text-center md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-200 via-slate-700 to-gray-200 text-transparent bg-clip-text">
            Our Customer Reviews
          </h1>
          <InfiniteMovingCardsDemo />
        </div>

        {/* fifth */}
        <div className="min-h-screen flex flex-col sm:flex-row items-center justify-center bg-white py-12 px-4 sm:px-6 lg:px-8">
          <div className="flex-1 flex min-w-[30vw] flex-col text-center justify-center p-8">
            {/* <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Our Services
            </h1> */}
            <h1 className="text-4xl px-4 text-center md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-200 via-slate-700 to-gray-200 text-transparent bg-clip-text">
              Our Services
            </h1>
            <p className="text-lg text-gray-600 max-w-xl">
            From routine maintenance to complex repairs, we handle it all with precision and care.
            Our skilled technicians ensure your vehicle runs smoothly, safely, and efficiently.
            </p>
          </div>

          {/* Right Image Section */}
          <FocusCardsDemo />
        </div>

        {/* sixth */}
        {/* <div className="min-h-screen flex items-center justify-center border-t-2 border-black">
          <div className="w-[95vw] bg-[linear-gradient(180deg,#fafafa,#f5f5f5)] border-zinc-200 border-1 flex max-w-[1200px] rounded-xl md:h-[500px] gap-2 h-[1200px] ">
            <div className="w-full  rounded-l-xl 
            ">
              <h1 className="group text-4xl mt-6 px-4 text-center md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-200 via-slate-700 to-gray-200 text-transparent bg-clip-text">
                Midnight Customs
              </h1>
              <div className=" px-4 mx-12">
                <div className="mt-4">
                  <h3 className="text-2xl font-bold">Call Us</h3>
                  <h1 className="text-3xl font-extrabold">+1 (365) 987-4165</h1>
                </div>
                <div className="mt-12">
                  <h3 className="text-2xl font-bold">Email Us</h3>
                  <h1 className="text-3xl font-extrabold">midnightcustoms@gmail.com</h1>
                </div>
                <div className="mt-12">
                  <h3 className="text-2xl font-bold">Address</h3>
                  <h1 className="text-3xl font-extrabold">365 Healey Rd #15, Bolton, ON L7E 5C1</h1>
                </div>
              </div>
            </div>
            <div className="w-full">
              <Image
              src={"https://images.unsplash.com/photo-1618418721668-0d1f72aa4bab?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
              alt="Details"
              width={200}
              height={300}
              layout="responsive"
              />
            </div>
          </div>
        </div> */}

        <div className="min-h-screen flex items-center justify-center ">
          <div className="w-full max-w-[1200px] bg-[linear-gradient(180deg,#fafafa,#f5f5f5)] border-zinc-200 border rounded-xl mx-4 my-8">
            {/* Flex container that changes direction on mobile */}
            <div className="flex flex-col md:flex-row md:h-[500px]">
              
              {/* Image section - now on the left */}
              <div className="w-full md:w-1/2 h-[300px] md:h-full order-2 md:order-1">
                <div className="h-full w-full relative rounded-b-xl md:rounded-r-none md:rounded-l-xl overflow-hidden">
                  <Image
                    src={"https://images.unsplash.com/photo-1589134723101-5abd32593adf?q=80&w=2664&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
                    alt="Midnight Customs Garage"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-b-xl md:rounded-r-none md:rounded-l-xl"
                  />
                </div>
              </div>
      
                {/* Details section - now on the right */}
              <div className="w-full md:w-1/2 p-4 md:p-6 order-1 md:order-2">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-center bg-gradient-to-r from-gray-200 via-slate-700 to-gray-200 text-transparent bg-clip-text">
                  Midnight Customs
                </h1>
                
                <div className="space-y-8 md:mt-6 md:px-4">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold">Call Us</h3>
                    <a className="text-2xl md:text-3xl font-extrabold" href="tel:(365) 987-4165">+1 (365) 987-4165</a>
                  </div>
                  
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold">Email Us</h3>
                    <a className="text-2xl md:text-3xl font-extrabold break-words" href="mailto:midnightcustoms@gmail.com">midnightcustoms@gmail.com</a>
                  </div>
                  
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold">Address</h3>
                    <a className="text-xl md:text-2xl lg:text-3xl font-extrabold" target="_blank" href="https://maps.app.goo.gl/Usw19Lxx2RztaGWLA?g_st=com.google.maps.preview.copy">365 Healey Rd #15, Bolton, ON L7E 5C1</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Content that should appear above the background */}
    </div>
  );
}
