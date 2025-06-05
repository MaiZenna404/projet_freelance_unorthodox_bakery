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
      <nav className="w-full bg-[#b6e4d9]/80 backdrop-blur-md shadow-lg fixed top-0 z-50 border-b border-white/10">
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
                className="block w-full font-semibold cursor-pointer hover:text-black/80 hover:scale-105 transition-all duration-200"
              >
                <h1 className="font-bold tracking-tight text-[9px] text-center text-black">
                  UNORTHODOX BAKERY
                </h1>
              </ScrollLink>

              {/* Bakery info mobile - version compacte */}
              <div className="flex justify-center items-center mt-0.5 overflow-x-auto w-full px-2">
                {bakeryInfos.map((info, index) => (
                  <React.Fragment key={index}>
                    <h2 className="text-[9px] text-black/70 font-medium tracking-wide whitespace-nowrap">
                      {info.name}
                    </h2>
                    {index < bakeryInfos.length - 1 && (
                      <span className="mx-1 text-black/50 text-[8px] font-light">
                        •
                      </span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* Mobile menu button - Version simplifiée */}
            <button
              onClick={toggleMenu}
              className="ml-4 p-2 rounded-md hover:bg-white/20 transition-colors duration-200 focus:outline-none active:scale-95"
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              <div className="w-5 h-4 flex flex-col justify-between">
                <span
                  className={`h-0.5 w-full bg-black/80 rounded-full transition-all duration-200 ${
                    isMenuOpen ? "rotate-45 translate-y-1.5" : ""
                  }`}
                />
                <span
                  className={`h-0.5 w-full bg-black/80 rounded-full transition-all duration-200 ${
                    isMenuOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`h-0.5 w-full bg-black/80 rounded-full transition-all duration-200 ${
                    isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
                  }`}
                />
              </div>
            </button>
          </div>

          {/* Mobile Menu Dropdown - Version Discrète */}
          <div
            className={`absolute top-full right-4 w-44 overflow-hidden transition-all duration-300 ease-out ${
              isMenuOpen
                ? "max-h-40 opacity-100 translate-y-0"
                : "max-h-0 opacity-0 -translate-y-2"
            }`}
          >
            <div className="bg-[#b6e4d9]/90 backdrop-blur-sm mt-1 rounded-lg shadow-md border border-white/30">
              <ul className="py-1">
                {navbarElements.map((element, index) => (
                  <li key={index}>
                    <ScrollLink
                      to={element.href}
                      duration={500}
                      offset={-120}
                      spy={true}
                      activeClass="bg-white/15"
                      className="block px-4 py-2.5 text-sm font-medium text-black/90 hover:bg-white/25 hover:text-black rounded-md transition-all duration-200 cursor-pointer"
                      onClick={closeMenu}
                    >
                      {element.link}
                    </ScrollLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Desktop Layout - Inchangé mais amélioré */}
        <div className="hidden md:flex items-center justify-between px-6 py-4">
          {/* Navigation links - Left */}
          <div className="flex-shrink-0">
            <ul className="flex space-x-2">
              {navbarElements.map((element, index) => (
                <li key={index}>
                  <ScrollLink
                    to={element.href}
                    duration={300}
                    spy={true}
                    activeClass="bg-white/30 backdrop-blur-sm shadow-sm"
                    className="font-medium text-lg text-black hover:bg-white/20 hover:backdrop-blur-sm hover:shadow-sm focus:bg-white/25 focus:outline-none active:bg-white/30 px-5 py-3 rounded-xl transition-all duration-300 cursor-pointer"
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
              className="block w-full text-center cursor-pointer hover:scale-105 transition-transform duration-300"
            >
              <h1 className="font-bold tracking-widest text-xl lg:text-2xl text-center text-black">
                UNORTHODOX BAKERY
              </h1>
            </ScrollLink>

            {/* Bakery info - DESKTOP */}
            <div className="flex justify-center items-center mt-3 w-full max-w-2xl mx-auto">
              {bakeryInfos.map((info, index) => (
                <React.Fragment key={index}>
                  <h2 className="text-sm mx-1.5 lg:text-base text-black/80 font-medium tracking-widest hover:text-black transition-colors duration-200">
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

      {/* Overlay discret pour fermer le menu sur mobile */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-40 md:hidden"
          onClick={closeMenu}
        />
      )}

      {/* Spacer to prevent content overlap */}
      <div className="h-20 md:h-28"></div>
    </>
  );
}