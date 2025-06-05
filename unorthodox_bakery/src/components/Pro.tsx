{
  /* Import UI components and styles */
}
import React from "react";
import { Link as ScrollLink } from "react-scroll";

export default function Pro() {
  return (
    <>
      <div id="pro" className="w-full overflow-x-hidden min-h-[60vh] pt-[18%]">
        {" "}
        {/* Add this wrapper */}
        <div className="flex flex-col items-end justify-center px-6 max-w-7xl mx-auto mb-[3%]">
          <h2 className="font-bold tracking-widest text-right text-3xl mr-[5%]">
            HÔTELS & RESTAURANTS
          </h2>
          <p className="text-lg text-black font-primary tracking-widest text-right max-w-[34rem] mr-[5%] mt-6">
            Hôteliers, restaurateurs, offrez à vos clients le meilleur de la
            boulangerie en vous fournissant chez Unorthodox Bakery, et
            bénéficiez de tarifs avantageux.
          </p>
          <p className="text-lg text-black font-primary tracking-widest text-right max-w-[36rem] mr-[5%] mt-4 mb-16">
            Et si vous connaissez déjà nos produits, mais que vous souhaitez un
            pain sur-mesure, venez nous voir en boutique pour nous en parler ou
            contactez-nous via le{" "}
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
            . <br /> Nous mettrons tout en œuvre pour satisfaire vos envies.
          </p>
        </div>
      </div>
    </>
  );
}
