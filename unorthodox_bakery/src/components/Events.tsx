
{/* Import UI components and styles */ }
import React from "react";
import { Link as ScrollLink } from "react-scroll";

import { Button } from "./ui/button";

{/* Import Catalogue pdf file */}
import cataloguePDF from "@/assets/catalogue/Unorthodox_bakery_Catalogue_traiteur.pdf";

export default function Services() {
    return (
      <>
        <div
          id="events"
          className="w-full overflow-x-hidden min-h-[60vh] pt-[20%]"
        >
          {" "}
          {/* Add this wrapper */}
          <div className="flex flex-col items-start justify-center px-6 max-w-7xl mx-auto mb-[3%]">
            <h2 className="font-bold tracking-widest text-left text-3xl ml-[5%]">
              RÉCEPTIONS & ÉVENEMENTS SPÉCIAUX
            </h2>
            <p className="text-lg text-black font-primary tracking-widest text-left max-w-[32rem] ml-[5%] mt-6">
              Vous souhaitez régaler vos convives lors d'un anniversaire, d'un
              mariage, ou tout simplement à l'occasion d'un évènement
              d'entreprise ? <br /> Découvrez notre catalogue traiteur et
              composez votre réception comme vous le souhaitez.
            </p>
            <p className="text-lg text-black font-primary tracking-widest text-left max-w-[30rem] ml-[5%] mt-4">
              Passez commande directement dans notre boutique ou via notre{" "}
              <ScrollLink
                to="contacts"
                smooth={true}
                duration={500}
                offset={-100}
                activeClass="bg-black/10"
                className="font-semibold underline cursor-pointer hover:text-black/80"
              >
                formulaire de contact
              </ScrollLink>
              .
            </p>

            <Button className="ml-[5%] mt-6 text-lg font-medium tracking-wider bg-black text-white hover:bg-black/80 px-8 py-3 rounded-md">
              <a href={cataloguePDF} target="_blank" rel="noopener noreferrer">
                Voir le Catalogue
              </a>
            </Button>
          </div>
        </div>
      </>
    );
}