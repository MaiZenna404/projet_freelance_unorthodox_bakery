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
      <nav className="w-full bg-white/15 backdrop-blur-sm shadow-sm fixed top-0 z-50 border-b border-white/10">
        {/* Mobile Layout */}
        <div className="block md:hidden">
          {/* Mobile Header */}
          <div className="flex items-center justify-between px-4 py-3">
            {/* Brand name */}
            <div className="flex-1">
              <h1 className="font-bold tracking-wider text-xs text-center text-black">
                UNORTHODOX BAKERY
              </h1>
              {/* Bakery info */}
              <div className="flex justify-center items-center mt-1 overflow-x-auto">
                {bakeryInfos.map((info, index) => (
                  <React.Fragment key={index}>
                    <h2 className="text-xs text-black/80 font-medium tracking-wider whitespace-nowrap">
                      {info.name}
                    </h2>
                    {index < bakeryInfos.length - 1 && (
                      <span className="mx-2 text-black/60 text-xs font-light">
                        —
                      </span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
            
            {/* Mobile menu button */}
            <button
              onClick={toggleMenu}
              className="ml-4 p-2 rounded-lg bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all duration-300 border border-white/30"
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              <div className="w-5 h-4 flex flex-col justify-between">
                <span 
                  className={`h-0.5 w-full bg-black/70 rounded-full transition-all duration-300 ${
                    isMenuOpen ? 'rotate-45 translate-y-1.5' : ''
                  }`}
                />
                <span 
                  className={`h-0.5 w-full bg-black/70 rounded-full transition-all duration-300 ${
                    isMenuOpen ? 'opacity-0' : ''
                  }`}
                />
                <span 
                  className={`h-0.5 w-full bg-black/70 rounded-full transition-all duration-300 ${
                    isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
                  }`}
                />
              </div>
            </button>
          </div>

          {/* Mobile Menu Dropdown */}
          <div 
            className={`absolute top-full right-4 w-48 overflow-hidden transition-all duration-300 ease-in-out ${
              isMenuOpen 
                ? 'max-h-48 opacity-100 translate-y-0' 
                : 'max-h-0 opacity-0 -translate-y-2'
            }`}
          >
            <ul className="bg-white/50 backdrop-blur-sm rounded-lg shadow-lg border border-white/20 mt-2">

              {navbarElements.map((element, index) => (
                <li key={index} className="border-b border-white/20 last:border-b-0">
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
            <h1 className="font-bold tracking-widest text-xl lg:text-2xl text-center text-black">
              UNORTHODOX BAKERY
            </h1>
            <div className="flex justify-center items-center mt-2">
              {bakeryInfos.map((info, index) => (
                <React.Fragment key={index}>
                  <h2 className="text-sm lg:text-base text-black/80 font-medium tracking-widest">
                    {info.name}
                  </h2>
                  {index < bakeryInfos.length - 1 && (
                    <span className="mx-4 lg:mx-8 text-black/60 text-sm lg:text-base font-light tracking-wider">
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