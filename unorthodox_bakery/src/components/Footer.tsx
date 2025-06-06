import { Link } from "react-router-dom";

// import icons
import Instagram from "@/assets/icons/instagram.svg";
import Mail from "@/assets/icons/mail.svg";
import BusinessHours from "@/assets/icons/opening_hours.svg";
import Location from "@/assets/icons/address.svg";

export default function Footer() {
  return (
    <footer className="w-full bg-white/5 backdrop-blur-sm flex flex-col items-center text-center pt-8 pb-6 md:pt-10 md:pb-8">
      <div className="w-full flex flex-col items-center gap-6 md:gap-8 max-w-4xl mx-auto px-4">
        {/* Social and contact links */}
        <div className="flex flex-col md:flex-row items-center justify-center w-full gap-4">
          <Link
            to="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black font-primary text-sm md:text-md tracking-widest hover:underline px-4 py-2 rounded-lg transition-colors hover:bg-black/5 w-full md:w-auto"
          >
            <img
              src={Instagram}
              alt="Logo instagram"
              className="inline-block mr-2 w-5 md:w-6"
            />
            Instagram
          </Link>

          {/* Divider - hidden on mobile, visible on md+ */}
          <div className="hidden md:block h-5 w-px bg-black/30 mx-4"></div>

          {/* Horizontal divider for mobile only */}
          <div className="h-px w-1/2 bg-black/20 my-1 md:hidden"></div>

          <Link
            to="mailto:ub.wagram@gmail.com"
            className="text-black font-primary text-sm md:text-md tracking-widest hover:underline px-4 py-2 rounded-lg transition-colors hover:bg-black/5 w-full md:w-auto"
          >
            <img
              src={Mail}
              alt="Adresse Mail"
              className="inline-block mr-2 w-5 md:w-6"
            />
            ub.wagram@gmail.com
          </Link>
        </div>
    
        {/* End Social and contact links */}

        {/* Horizontal divider for mobile only */}
        <div className="h-px w-1/2 bg-black/20 my-1 md:hidden"></div>

        {/* Address and hours */}
        <div className="flex flex-col md:flex-row items-center w-full justify-center gap-4">
          <p className="text-black font-primary text-sm md:text-md tracking-widest text-center px-4 py-2">
            <img
              src={Location}
              alt="Adresse"
              className="inline-block mr-2 w-5 md:w-7"
            />
            169, Avenue de Wagram, 75017 Paris
          </p>

          {/* Divider - hidden on mobile, visible on md+ */}
          <div className="hidden md:block h-5 w-px bg-black/30 mx-4"></div>

          {/* Horizontal divider for mobile only */}
          <div className="h-px w-1/2 bg-black/20 my-1 md:hidden"></div>

          <p className="text-black font-primary text-sm md:text-md tracking-widest text-center px-4 py-2">
            <img
              src={BusinessHours}
              alt="Heures d'ouverture"
              className="inline-block mr-2 w-7 md:w-10"
            />
            Du lundi au dimanche de 6h00 à 20h00
          </p>
        </div>
      </div>

      {/* Copyrights */}
      <div className="w-full text-black font-primary text-xs md:text-sm tracking-widest text-center mt-6 md:mt-10 px-4">
        &copy; {new Date().getFullYear()} Unorthodox Bakery. Tous droits
        réservés.
      </div>
    </footer>
  );
}
