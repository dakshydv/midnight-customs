"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NextLevel } from "@/components/ui/nextLevel";
import { LatestWork } from "@/components/ui/LatestWork";
import { Testimonials } from "@/components/ui/Testimonials";
import { Services } from "@/components/ui/Services";
import { Contacts } from "@/components/ui/Contacts";
import { GoogleMaps } from "@/components/ui/GoogleMaps";
import { Footer } from "@/components/ui/Footer";
import Form from "@/components/ui/Form";

export default function GarageWebsite() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: "Home", href: "#" },
    { label: "Services", href: "#" },
    { label: "Gallery", href: "#" },
    { label: "About Us", href: "#" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <div id="home" className="relative min-h-full w-screen overscroll-none bg-gray-100">
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
        <NextLevel />

        {/* third page */}
        <LatestWork />

        {/* fourth */} 
        <Testimonials />

        {/* fifth */}
        <Services />

        {/* sixth */}
        <Contacts />

        {/* seventh */}
        <div className="min-h-screen bg-white flex items-center justify-center">
          <Form />
        </div>

        {/* eight */}
        <GoogleMaps />

        {/* nine */}
        <Footer />

      </div>

      {/* Content that should appear above the background */}
    </div>
  );
}
