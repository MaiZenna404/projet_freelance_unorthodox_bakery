import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="w-full bg-white/5 backdrop-blur-sm flex align-center text-center pt-10 pb-8">
      {/* Footer content */}
      <div className="w-full flex flex-col justify-center items-center gap-6">
        {/* Social and contact links */}
        <div className="flex flex-col items-center justify-center w-full max-w-4xl mx-auto">
          <Link
            to="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black font-primary text-md tracking-widest hover:underline px-4 py-1"
          >
            Instagram
          </Link>
          <Link
            to="mailto:ub.wagram@gmail.com"
            className="text-black font-primary text-md tracking-widest hover:underline px-4 py-1"
          >
            ub.wagram@gmail.com
          </Link>
        </div>

        {/* Address and hours */}
        <div className="flex flex-row items-center w-full max-w-4xl mx-auto gap-2">
          <p className="text-black font-primary text-md tracking-widest text-center ml-[20%]">
            169, Avenue de Wagram, 75017 Paris
          </p>
          <div className="h-5 w-px bg-black/30 mx-4"></div>
          <p className="text-black font-primary text-md tracking-widest text-center">
            Ouvert tous les jours du lundi au dimanche de 6h00 à 20h00
          </p>
        </div>
      </div>
    </footer>
  );
}
