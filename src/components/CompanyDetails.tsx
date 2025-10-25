import { Building2, MapPin, Hash, FileText, TrendingUp, Users } from "lucide-react";

const CompanyDetails = () => {
  const details = [
    { icon: Building2, label: "Ragione Sociale", value: "SOUTHPOOL S.R.L." },
    { icon: MapPin, label: "Sede Legale", value: "Via Cosmo Mollica Alagona, SNC - 95121 Catania (CT)" },
    { icon: Hash, label: "Partita IVA", value: "05984660877" },
    { icon: FileText, label: "Codice Fiscale", value: "05984660877" },
    { icon: Hash, label: "REA", value: "CT 454345" },
    { icon: FileText, label: "Codice ATECO", value: "72.19.09" },
    { icon: TrendingUp, label: "Fatturato 2023", value: "€66.800" },
    { icon: TrendingUp, label: "Utile 2023", value: "€37.800" },
  ];

  return (
    <section id="company" className="py-16 lg:py-24 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Dati Aziendali</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Informazioni complete sulla società
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="bg-card rounded-lg shadow-sm border p-8 mb-8">
            <h3 className="text-2xl font-bold mb-6">Attività Principale</h3>
            <p className="text-lg text-muted-foreground mb-4">
              Ricerca e sviluppo sperimentale nel campo delle altre scienze naturali e dell'ingegneria
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <FileText className="w-4 h-4" />
              <span>Codice ATECO: 72.19.09</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {details.map((detail, index) => {
              const Icon = detail.icon;
              return (
                <div 
                  key={index}
                  className="bg-card rounded-lg p-6 shadow-sm border hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">{detail.label}</p>
                      <p className="font-semibold">{detail.value}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="bg-card rounded-lg shadow-sm border p-8 mt-8">
            <h3 className="text-xl font-bold mb-4">Forma Giuridica</h3>
            <p className="text-muted-foreground mb-4">Società a Responsabilità Limitata</p>
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-primary" />
                <span>Anno di Fondazione: 03/02/2023</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-secondary" />
                <span>Stato Attività: Attiva</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-accent" />
                <span>Camera di Commercio: CT</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyDetails;
