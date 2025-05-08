"use client";
import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { NextLevel } from "@/components/ui/nextLevel";
import { LatestWork } from "@/components/ui/LatestWork";
import { Testimonials } from "@/components/ui/Testimonials";
import { Services } from "@/components/ui/Services";
import { Contacts } from "@/components/ui/Contacts";
import { GoogleMaps } from "@/components/ui/GoogleMaps";
import { Footer } from "@/components/ui/Footer";
import Form from "@/components/ui/Form";

interface TimeRemaining {
  total: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function useCountdown(targetDate: Date): TimeRemaining {
  const [timeLeft, setTimeLeft] = useState<TimeRemaining>(
    getTimeRemaining(targetDate)
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeLeft(getTimeRemaining(targetDate));
    }, 1000);

    return () => clearInterval(intervalId);
  }, [targetDate]);

  return timeLeft;
}

function getTimeRemaining(targetDate: Date): TimeRemaining {
  const total = targetDate.getTime() - new Date().getTime();
  if (total < 0) {
    return { total: 0, days: 0, hours: 0, minutes: 0, seconds: 0 };
  }
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));
  return { total, days, hours, minutes, seconds };
}

export default function GarageWebsite() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(false);
  const [showMobileAlert, setShowMobileAlert] = useState(false);
  const alertTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const fifteenDaysFromNow = useRef(
    new Date(new Date().getTime() + 15 * 24 * 60 * 60 * 1000)
  );
  const countdown = useCountdown(fifteenDaysFromNow.current);

  const menuItems = [
    { label: "Work", href: "#work" },
    { label: "Reviews", href: "#testimonial" },
    { label: "Services", href: "#services" },
    { label: "Gallery", href: "#work" },
    { label: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;

      if (scrollPosition > windowHeight * 0.9) {
        setShowHeader(true);
      } else {
        setShowHeader(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Show mobile alert after 1 min and repeat if dismissed
  useEffect(() => {
    alertTimeoutRef.current = setTimeout(() => {
      setShowMobileAlert(true);
    }, 15000); // 1 min

    return () => {
      if (alertTimeoutRef.current) {
        clearTimeout(alertTimeoutRef.current);
      }
    };
  }, []);

  const handleDismissAlert = () => {
    setShowMobileAlert(false);
    alertTimeoutRef.current = setTimeout(() => {
      setShowMobileAlert(true);
    }, 60000); // Re-show after 1 min
  };

  // Timer display component for header right side (desktop)
  const TimerDisplay = () => (
    <div className="text-white bg-gradient-to-r from-red-600 to-red-800 rounded px-3 py-1 font-mono text-sm tracking-wide select-none">
      <span>{countdown.days}d</span> <span>{countdown.hours}h</span>{" "}
      <span>{countdown.minutes}m</span> <span>{countdown.seconds}s</span>
    </div>
  );

  // Mobile alert timer banner
  const MobileAlert = () =>
    showMobileAlert ? (
      <div className="fixed top-0 left-0 right-0 bg-red-600 text-white flex items-center justify-between px-4 py-3 text-center font-semibold z-60 shadow-lg animate-slideDown">
        <div className="flex-grow select-none">
          <span className="mr-2 font-bold uppercase tracking-wide">
            Limited Time Discount Ends In:
          </span>
          <span className="font-mono">
            {countdown.days}d {countdown.hours}h {countdown.minutes}m{" "}
            {countdown.seconds}s
          </span>
        </div>
        <button
          onClick={handleDismissAlert}
          aria-label="Dismiss alert"
          className="ml-4 text-white hover:text-gray-300 font-black text-xl leading-none"
        >
          &times;
        </button>
      </div>
    ) : null;

  return (
    <div
      id="home"
      className="relative min-h-full w-screen overscroll-none bg-gray-100"
    >
      {/* Mobile alert */}
      <div className="sm:hidden">{MobileAlert()}</div>

      {/* Scroll-activated Header */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 bg-opacity-90 backdrop-blur-sm border-b border-zinc-200 shadow-lg ${
          showHeader
            ? "transform translate-y-0 opacity-100"
            : "transform -translate-y-full opacity-0"
        }`}
      >
        <div className="[mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)] container mx-auto px-4 py-3 flex items-center justify-between max-w-7xl">
          {/* Center content - remains centered */}
          <div className="flex-1 flex justify-center">
            <span className="bg-gradient-to-r from-gray-300 to-slate-400 text-transparent font-bold text-xl bg-clip-text tracking-wider uppercase select-none">
              Midnight Customs
            </span>
          </div>
          {/* Timer on right for laptops/monitors */}
          <div className="hidden sm:flex sm:flex-shrink-0">
            <TimerDisplay />
          </div>
        </div>
      </header>

      {/* Fixed Background */}
      <div className="fixed overscroll-none top-0 left-0 h-screen z-0 bg-cover bg-center bg-no-repeat bg-scroll min-h-screen w-full object-cover bg-[url('/mobile-home.jpg')] sm:bg-[url('/mobile-home.jpg')]">
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

      <style jsx global>{`
        @keyframes slideDown {
          0% {
            transform: translateY(-100%);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }
        .animate-slideDown {
          animation: slideDown 0.4s ease forwards;
        }
      `}</style>
    </div>
  );
}
