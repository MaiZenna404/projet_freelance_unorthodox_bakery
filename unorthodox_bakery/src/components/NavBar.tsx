import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import Logo from "../assets/logo/Logo_transparent.png";

interface NavBarProps {
  link: string;
  href: string;
}

interface BakeryDetails {
  name: string;
}

const navbarElements: NavBarProps[] = [
  { link: "Event", href: "events" },
  { link: "Pro", href: "pro" },
  { link: "Contact", href: "contacts" },
];

const bakeryInfos: BakeryDetails[] = [
  { name: "Bakery" },
  { name: "Pastry" },
  { name: "Coffee" },
  { name: "Deli" },
];

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      {/* Main navbar - slightly reduced vertical padding */}
      <nav
        className="w-screen backdrop-blur-md fixed top-0 left-0 right-0 z-[1000] border-b border-white/5 bg-[#b6e4d9]/80 py-3 md:py-4 shadow-[0_1px_2px_rgba(0,0,0,0.05)]"
        style={{ position: "fixed", transform: "none" }}
      >
        {/* Mobile Layout - centered logo version */}
        <div className="block md:hidden w-full">
          <div className="flex items-center justify-between px-5 py-1.5 w-full mx-auto">
            {/* Mobile menu button */}
            <button
              onClick={toggleMenu}
              className="p-2.5 rounded-lg bg-white/20 hover:bg-white/30 transition-all duration-200 focus:outline-none active:scale-95"
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              <div className="w-5 h-4 flex flex-col justify-between">
                <span
                  className={`h-0.5 w-full bg-black/70 rounded-full transition-all duration-200 ${
                    isMenuOpen ? "rotate-45 translate-y-1.5" : ""
                  }`}
                />
                <span
                  className={`h-0.5 w-full bg-black/70 rounded-full transition-all duration-200 ${
                    isMenuOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`h-0.5 w-full bg-black/70 rounded-full transition-all duration-200 ${
                    isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
                  }`}
                />
              </div>
            </button>

            {/* Centered Logo */}
            <div className="flex-1 flex justify-center items-center">
              <div className="flex flex-col items-center">
                <img
                  src={Logo}
                  alt="Unorthodox Bakery Logo"
                  className="w-12 h-12 object-contain"
                />

                {/* Bakery info - keep this below the logo */}
                <div className="flex justify-center items-center mt-1 overflow-x-auto w-full px-2">
                  {bakeryInfos.map((info, index) => (
                    <React.Fragment key={index}>
                      <h2 className="text-xs text-black/70 font-medium tracking-wide whitespace-nowrap">
                        {info.name}
                      </h2>
                      {index < bakeryInfos.length - 1 && (
                        <span className="mx-1.5 text-black/50 text-[10px] font-light">
                          —
                        </span>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>

            {/* Empty div for layout balance */}
            <div className="w-10"></div>
          </div>

          {/* Mobile Menu Dropdown */}
          <div
            className={`absolute top-full left-0 right-0 mx-4 overflow-hidden transition-all duration-300 ${
              isMenuOpen
                ? "max-h-60 opacity-100 translate-y-0"
                : "max-h-0 opacity-0 -translate-y-2"
            }`}
          >
            <div className="bg-[#b6e4d9]/90 backdrop-blur-md mt-1 rounded-lg shadow-md border border-white/30">
              <ul className="py-2">
                {navbarElements.map((element, index) => (
                  <li key={index} className="px-2">
                    <ScrollLink
                      to={element.href}
                      duration={500}
                      offset={-100}
                      spy={true}
                      activeClass="bg-white/30"
                      className="flex items-center px-4 py-3 text-sm font-medium text-black/90 hover:bg-white/20 rounded-lg transition-all duration-200"
                      onClick={closeMenu}
                    >
                      {/* Icon based on menu item */}
                      <span className="w-5 h-5 mr-3 opacity-70 flex items-center justify-center">
                        {element.link === "Event" && (
                          <svg
                            className="w-4 h-4"
                            stroke="currentColor"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                            />
                          </svg>
                        )}
                        {element.link === "Pro" && (
                          <svg
                            className="w-4 h-4"
                            stroke="currentColor"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            />
                          </svg>
                        )}
                        {element.link === "Contact" && (
                          <svg
                            className="w-4 h-4"
                            stroke="currentColor"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            />
                          </svg>
                        )}
                      </span>
                      {element.link}
                    </ScrollLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Desktop Layout - ensure full width */}
        <div className="hidden md:flex w-full items-center justify-center">
          <div className="relative flex items-center justify-between px-7 py-1.5 w-full mx-auto">
            {/* Logo - Left side */}
            <div className="lg:pl-[5%] flex-shrink-0 w-[250px] flex items-center justify-start align-bottom">
              <img
                src={Logo}
                alt="Unorthodox Bakery Logo"
                className="w-16 h-16 object-contain duration-300 hover:scale-105"
              />
            </div>

            {/* Brand name - Center */}
            <div className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center">
              <ScrollLink
                to="hero"
                smooth={true}
                duration={500}
                offset={-100}
                className="cursor-pointer"
              >
                <h1 className="font-bold tracking-widest text-lg lg:text-xl text-center text-black whitespace-nowrap">
                  UNORTHODOX BAKERY
                </h1>
              </ScrollLink>

              {/* Bakery info - slightly reduced spacing */}
              {/* Desktop view - increased text size */}
              <div className="flex justify-center items-center mt-2">
                {bakeryInfos.map((info, index) => (
                  <React.Fragment key={index}>
                    <h2 className="text-sm lg:text-base lg:mx-5.5 text-black/80 font-medium tracking-widest">
                      {info.name}
                    </h2>
                    {index < bakeryInfos.length - 1 && (
                      <span className="mx-4 lg:mx-6 text-black/60 text-sm font-light">
                        —
                      </span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* Navigation links - Right */}
            <div className="flex-shrink-0 w-[200px] flex justify-end lg:pr-[5%]">
              <ul className="flex space-x-1.5">
                {navbarElements.map((element, index) => (
                  <li key={index}>
                    <ScrollLink
                      to={element.href}
                      duration={300}
                      offset={-100}
                      spy={true}
                      smooth={true}
                      ignoreCancelEvents={true}
                      spyThrottle={500}
                      activeClass="bg-white/30 shadow-sm"
                      className="font-medium text-base lg:text-[20px] text-black/90 hover:bg-white/20 px-4 py-2.5 rounded-lg transition-all duration-200 cursor-pointer block"
                    >
                      {element.link}
                    </ScrollLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </nav>

      {/* Overlay for closing mobile menu */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/5 backdrop-blur-sm md:hidden"
          onClick={closeMenu}
        />
      )}

      {/* Adjusted spacer to match new navbar height */}
      <div className="h-[72px] md:h-[84px]"></div>
    </>
  );
}
