import heroImage from "@/assets/hero-lab.jpg";
import logo from "@/assets/southpool-logo.png";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[600px] lg:min-h-[700px] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-accent/80" />
      </div>
      
      <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center text-white">
        <div className="flex justify-center mb-8 animate-fade-in">
          <img src={logo} alt="Southpool Logo" className="h-24 md:h-32 lg:h-40 w-auto" />
        </div>
        <p className="text-xl md:text-2xl lg:text-3xl mb-8 max-w-3xl mx-auto animate-fade-in-delay">
          Ricerca e Sviluppo per Materiali Innovativi e Acustica Ambientale
        </p>
        <p className="text-base md:text-lg max-w-2xl mx-auto opacity-95">
          Soluzioni avanzate per la caratterizzazione dei materiali, l'acustica industriale e la protezione ambientale
        </p>
      </div>
    </section>
  );
};

export default Hero;
