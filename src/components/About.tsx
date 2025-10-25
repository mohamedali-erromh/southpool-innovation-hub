import { Microscope, FileText, FlaskConical, TrendingUp } from "lucide-react";

const About = () => {
  const activities = [
    {
      icon: Microscope,
      title: "Ricerca Applicata",
      description: "Sviluppo di prodotti e processi produttivi, pre-industrializzazione e industrializzazione, metodi e strumentazione per misure chimico-fisiche"
    },
    {
      icon: FileText,
      title: "Brevetti e Trasferimento Tecnologico",
      description: "Redazione e deposito brevetti, valorizzazione, negoziazione e trasferimento di proprietà e/o licenze di brevetti"
    },
    {
      icon: FlaskConical,
      title: "Sviluppo Materiali",
      description: "Studio, progettazione, sviluppo industriale, produzione e promozione commerciale di materiali, additivi e materiali compositi"
    },
    {
      icon: TrendingUp,
      title: "Consulenza Tecnico-Scientifica",
      description: "Consulenza tecnico-scientifica e imprenditoriale nel campo dei materiali e manufatti, produzione e valutazione delle condizioni ambientali"
    }
  ];

  return (
    <section id="about" className="py-16 lg:py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Chi Siamo</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Southpool S.r.l. è una società specializzata nella ricerca e sviluppo sperimentale nel campo delle scienze naturali e dell'ingegneria
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-12">
          {activities.map((activity, index) => {
            const Icon = activity.icon;
            return (
              <div 
                key={index}
                className="bg-card rounded-lg p-6 shadow-sm hover:shadow-lg transition-all duration-300 border"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{activity.title}</h3>
                    <p className="text-muted-foreground">{activity.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-card rounded-lg p-8 shadow-sm border">
          <h3 className="text-2xl font-bold mb-4">La Nostra Missione</h3>
          <p className="text-muted-foreground mb-4">
            Partecipiamo a consorzi e/o raggruppamenti d'imprese, anche temporanei, e agiamo in qualità di subappaltatori in progetti di ricerca industriale e sviluppo precompetitivo in reti d'imprese e centri di ricerca, nonché in raggruppamenti temporanei d'impresa, finanziati da bandi pubblici.
          </p>
          <p className="text-muted-foreground">
            Le nostre attività comprendono l'ottimizzazione e sviluppo di processi produttivi e industriali, metodologie di controllo/monitoraggio della produzione e ambientale e loro applicazione, attraverso modelli e misure chimico-fisiche.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
