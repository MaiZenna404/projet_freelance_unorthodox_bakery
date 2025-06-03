
{/* Import UI components and styles */ }
import React from "react";
import Footer from "./Footer";
import { Button } from "./ui/button";

export default function Services() {
    return (
      <>
        <div className="w-full overflow-x-hidden min-h-[60vh] pt-[20%]">
          {" "}
          {/* Add this wrapper */}
          <div className="flex flex-col items-start justify-center px-6 max-w-8xl mx-auto mb-[3%]">
            <h2 className="font-bold tracking-widest text-left text-3xl ml-[5%]">
              RÉCEPTIONS & ÉVENEMENTS SPÉCIAUX
            </h2>
            <p className="text-md text-black font-primary tracking-widest text-left max-w-[32rem] ml-[5%] mt-6">
              Vous souhaitez régaler vos convives lors d'un anniversaire, d'un
              mariage, ou tout simplement à l'occasion d'un évènement
              d'entreprise ? <br /> Découvrez notre catalogue traiteur et
              composez votre réception comme vous le souhaitez.
            </p>
            <p className="text-md text-black font-primary tracking-widest text-left max-w-[30rem] ml-[5%] mt-4">
              Passez commande directement dans notre boutique ou via notre
              <span className="font-semibold"> formulaire de contact</span>.
            </p>

            <Button className="ml-[5%] mt-6 text-lg font-medium tracking-wider bg-black text-white hover:bg-black/80 px-8 py-3 rounded-md">
              Voir le Catalogue
            </Button>
          </div>
        </div>
        <Footer />
      </>
    );
}