import React from "react";
import { Link } from "react-router-dom";

interface NavBarProps {
  link: string;
  href?: string;
}

interface BakeryDetails {
  name: string;
}

const navbarElements: NavBarProps[] = [
  { link: "Pro & Event", href: "/" },
  { link: "Contact", href: "/" },
];

// Remove the dashes from the text
const bakeryInfos: BakeryDetails[] = [
  { name: "Bakery" },
  { name: "Pastry" },
  { name: "Coffee" },
  { name: "Deli" },
];

export default function NavBar() {
  return (
    <>
      <nav className="w-full flex items-center bg-white/15 shadow-none p-2 fixed top-0 z-50 backdrop-blur-sm">
        {/* Add Navbar links */}
        <div>
          <ul className="flex flex-row">
            {navbarElements.map((element, index) => (
              <li key={index}>
                <Link
                  to={element.href || "#"}
                  className= "ml-5 font-primary text-xl text-black hover:text-black focus:text-black active:text-black font-medium px-4 py-2 transition-colors"
                >
                  {element.link}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {/* Add brand name */}
        <div className="ml-[18%] flex flex-col items-center">
          <h1 className="font-bold tracking-widest w-full text-center">
            UNORTHODOX BAKERY
          </h1>
          <div className="w-full flex justify-center items-center">
            {bakeryInfos.map((info, index) => (
              <React.Fragment key={index}>
                <h2 className="text-md text-black font-primary tracking-widest">
                  {info.name}
                </h2>
                {index < bakeryInfos.length - 1 && (
                  <span className="mx-12 text-black text-md font-extralight tracking-[0.1em]">
                    —
                  </span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
}
