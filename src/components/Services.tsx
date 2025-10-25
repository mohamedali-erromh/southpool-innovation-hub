import acousticZoning from "@/assets/acoustic-zoning.jpg";
import impactAssessment from "@/assets/impact-assessment.jpg";
import workplaceNoise from "@/assets/workplace-noise.jpg";
import buildingAcoustics from "@/assets/building-acoustics.jpg";
import asphaltNoise from "@/assets/asphalt-noise.jpg";
import noiseBarriers from "@/assets/noise-barriers.jpg";
import researchDev from "@/assets/research-dev.jpg";
import vibrations from "@/assets/vibrations.jpg";

const Services = () => {
  const services = [
    {
      image: acousticZoning,
      title: "ZONIZZAZIONE ACUSTICA",
      description: "Redazione di Piani Comunali di Classificazione Acustica (PCCA) a supporto delle attività di pianificazione urbanistica dei Comuni."
    },
    {
      image: impactAssessment,
      title: "VALUTAZIONI DI IMPATTO ACUSTICO",
      description: "Relazioni previsionali di clima acustico per grandi opere infrastrutturali (eoliche, ferroviarie, stradali, portuali e aeroportuali)."
    },
    {
      image: workplaceNoise,
      title: "RUMORE NEI LUOGHI DI LAVORO",
      description: "Misure di rumore ai fini della valutazione dell'esposizione dei lavoratori secondo le norme UNI EN ISO 9612 e UNI 9432."
    },
    {
      image: buildingAcoustics,
      title: "ACUSTICA EDILIZIA",
      description: "Progettazione di partizioni edilizie in conformità al D.P.C.M. 5-12-1997 - Requisiti acustici passivi degli edifici."
    },
    {
      image: asphaltNoise,
      title: "RUMORE DA ASFALTO",
      description: "Misura delle prestazioni acustiche delle pavimentazioni stradali in contesti urbani, extra-urbani e autostradali, secondo i metodi CPX, SPB e CPB."
    },
    {
      image: noiseBarriers,
      title: "BARRIERE ANTIRUMORE",
      description: "Misura delle prestazioni di riflessione e trasmissione sonora delle barriere antirumore stradali secondo la norma UNI EN 1793."
    },
    {
      image: researchDev,
      title: "RICERCA E SVILUPPO",
      description: "Sviluppo di materiali innovativi e sistemi di monitoraggio del rumore stradale basati su tecniche di machine learning."
    },
    {
      image: vibrations,
      title: "VIBRAZIONI",
      description: "Misura e monitoraggio delle vibrazioni mediante accelerometri triassiali secondo la norma UNI 9614:2017."
    }
  ];

  return (
    <section id="services" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">I Nostri Servizi</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Offriamo una gamma completa di servizi specializzati in acustica ambientale, industriale e ricerca sui materiali
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border"
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-primary">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
