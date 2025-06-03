import { Link } from "react-router-dom";

// import icons
import Instagram from "@/assets/icons/instagram.svg";
import Mail from "@/assets/icons/mail.svg";
import BusinessHours from "@/assets/icons/opening_hours.svg";
import Location from "@/assets/icons/address.svg";

export default function Footer() {
  return (
    <footer className="w-full bg-white/5 backdrop-blur-sm flex flex-col items-center text-center pt-10 pb-8">
      <div className="w-full flex flex-col items-center gap-8 max-w-4xl mx-auto">
        {/* Social and contact links */}
        <div className="flex flex-row items-center justify-center w-full ml-[8%] gap-4">
          <Link
            to="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black font-primary text-md tracking-widest hover:underline px-4 py-1"
          >
            <img
              src={Instagram}
              alt="Logo instagram"
              className="inline-block mr-2 w-6"
            />
            Instagram
          </Link>
          <div className="h-5 w-px bg-black/30 mx-4"></div>
          <Link
            to="mailto:ub.wagram@gmail.com"
            className="text-black font-primary text-md tracking-widest hover:underline px-4 py-1"
          >
            <img
              src={Mail}
              alt="Adresse Mail"
              className="inline-block mr-2 w-6"
            />
            ub.wagram@gmail.com
          </Link>
        </div>

        {/* Address and hours */}
        <div className="flex flex-row items-center w-full justify-center gap-4 ml-[2%]">
          <p className="text-black font-primary text-md tracking-widest text-center">
            <img
              src={Location}
              alt="Adresse"
              className="inline-block mr-2 w-7"
            />
            169, Avenue de Wagram, 75017 Paris
          </p>
          <div className="h-5 w-px bg-black/30 mx-4"></div>
          <p className="text-black font-primary text-md tracking-widest text-center">
            <img
              src={BusinessHours}
              alt="Heures d'ouverture"
              className="inline-block mr-2 w-10"
            />
            Du lundi au dimanche de 6h00 à 20h00
          </p>
        </div>
      </div>

      {/* Copyrights */}
      <div className="w-full text-black font-primary text-sm tracking-widest text-center mt-10">
        &copy; {new Date().getFullYear()} Unorthodox Bakery. Tous droits
        réservés.
      </div>
    </footer>
  );
}
