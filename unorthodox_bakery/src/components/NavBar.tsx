import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";

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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className="w-full bg-[#b6e4d9]/50 backdrop-blur-sm shadow-sm fixed top-0 z-50 border-b border-white/5 max-w-screen overflow-hidden">
        {/* Mobile Layout */}
        <div className="block md:hidden">
          {/* Mobile Header */}
          <div className="flex items-center justify-between px-4 py-3 max-w-7xl mx-auto">
            {/* Brand name */}
            <div className="flex-1 overflow-hidden text-center">
              <ScrollLink
                to="hero"
                smooth={true}
                duration={500}
                offset={-100}
                activeClass="bg-black/10"
                className="font-semibold cursor-pointer hover:text-black/80" // Removed underline
              >
                <h1 className="font-bold tracking-widest text-xs text-center text-black">
                  UNORTHODOX BAKERY
                </h1>
              </ScrollLink>
              {/* Bakery info */}
              <div className="flex justify-center items-center mt-1 overflow-x-auto w-full px-2">
                {bakeryInfos.map((info, index) => (
                  <React.Fragment key={index}>
                    <h2 className="text-xs text-black/80 font-medium tracking-wider whitespace-nowrap">
                      {info.name}
                    </h2>
                    {index < bakeryInfos.length - 1 && (
                      <span className="mx-3 text-black/60 text-lg font-light tracking-widest">
                        —
                      </span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* Mobile menu button - UPDATED */}
            <button
              onClick={toggleMenu}
              className="ml-4 p-2 rounded-lg bg-[#b6e4d9]/50 hover:bg-[#b6e4d9] transition-all duration-300 border-white focus:outline-none focus:ring-2 focus:ring-[#b6e4d9]/50 active:scale-95"
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              <div className="w-5 h-4 flex flex-col justify-between">
                <span
                  className={`h-0.5 w-full bg-black rounded-full transition-all duration-300 ${
                    isMenuOpen ? "rotate-45 translate-y-2" : ""
                  }`}
                />
                <span
                  className={`h-0.5 w-full bg-black rounded-full transition-all duration-300 ${
                    isMenuOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`h-0.5 w-full bg-black rounded-full transition-all duration-300 ${
                    isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
                  }`}
                />
              </div>
            </button>
          </div>

          {/* Mobile Menu Dropdown */}
          <div
            className={`absolute top-full right-4 w-48 overflow-hidden transition-all duration-300 ease-in-out ${
              isMenuOpen
                ? "max-h-48 opacity-100 translate-y-0"
                : "max-h-0 opacity-0 -translate-y-2"
            }`}
          >
            <ul className="bg-[#b6e4d9]/95 backdrop-blur-sm rounded-lg shadow-lg border border-white/75 mt-2">
              {navbarElements.map((element, index) => (
                <li
                  key={index}
                  className="border-b border-white/20 last:border-b-0"
                >
                  <ScrollLink
                    to={element.href}
                    smooth={true}
                    duration={500}
                    offset={-80}
                    spy={true}
                    activeClass="bg-black/10"
                    className="block px-4 py-3 text-sm font-medium text-black hover:bg-black/5 active:bg-black/10 transition-all duration-200 cursor-pointer first:rounded-t-lg last:rounded-b-lg"
                    onClick={closeMenu}
                  >
                    {element.link}
                  </ScrollLink>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:flex items-center justify-between px-6 py-4">
          {/* Navigation links - Left */}
          <div className="flex-shrink-0">
            <ul className="flex space-x-2">
              {navbarElements.map((element, index) => (
                <li key={index}>
                  <ScrollLink
                    to={element.href}
                    smooth={true}
                    duration={500}
                    offset={-100}
                    spy={true}
                    activeClass="bg-white/30 backdrop-blur-sm"
                    className="font-medium text-lg text-black hover:bg-white/20 hover:backdrop-blur-sm focus:bg-white/25 focus:outline-none active:bg-white/30 px-4 py-2 rounded-lg transition-all duration-200 cursor-pointer"
                  >
                    {element.link}
                  </ScrollLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Brand name - Center */}
          <div className="flex-1 flex flex-col items-center">
            <ScrollLink
              to="hero"
              smooth={true}
              duration={500}
              offset={-100}
              className="cursor-pointer" // No underline here either
            >
              <h1 className="font-bold tracking-widest text-xl lg:text-2xl text-center text-black">
                UNORTHODOX BAKERY
              </h1>
            </ScrollLink>
            {/* Bakery info - DESKTOP */}
            <div className="flex justify-center items-center mt-2 w-full max-w-2xl mx-auto">
              {bakeryInfos.map((info, index) => (
                <React.Fragment key={index}>
                  <h2 className="text-sm lg:text-base text-black/80 font-medium tracking-widest">
                    {info.name}
                  </h2>
                  {index < bakeryInfos.length - 1 && (
                    <span className="mx-5 lg:mx-10 text-black/60 text-sm lg:text-base font-light tracking-wider">
                      —
                    </span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Empty space for balance - Right */}
          <div className="flex-shrink-0 w-[280px]"></div>
        </div>
      </nav>

      {/* Spacer to prevent content overlap */}
      <div className="h-20 md:h-24"></div>
    </>
  );
}
