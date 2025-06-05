export default function HeroSection() {
  return (
    <>
      {/* Hero Section */}
      <div id="hero" className="flex flex-col items-center justify-center min-h-[60vh] pt-[12%] px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white/25 to-transparent mb-[3%]">
        <h1 className="font-bold tracking-widest w-full text-center text-[10px] xs:text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
          PAINS AU LEVAIN, BON CAFÉ, PLAISIRS SALÉS & SUCRÉS
        </h1>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-black font-primary tracking-widest text-center max-w-4xl mx-auto mt-6 sm:mt-8">
          Une boulangerie artisanale de quartier qui vous accompagne à chaque
          moment de la journée. <br className="hidden sm:block" /> Des produits frais 100% maison, préparés avec
          des ingrédients sourcés localement... <br className="hidden sm:block" /> et beaucoup d'amour
        </p>
      </div>
      {/* End Hero Section */}
    </>
  );
}