import { Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-primary text-primary-foreground py-12 lg:py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">SOUTHPOOL S.R.L.</h3>
            <p className="opacity-90 mb-4">
              Ricerca e sviluppo sperimentale nel campo delle scienze naturali e dell'ingegneria
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contatti</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                <p className="opacity-90">
                  Via Cosmo Mollica Alagona, SNC<br />
                  95121 Catania (CT)<br />
                  Sicilia, Italia
                </p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Informazioni</h4>
            <div className="space-y-2 opacity-90">
              <p>P.IVA: 05984660877</p>
              <p>C.F.: 05984660877</p>
              <p>REA: CT 454345</p>
              <p>ATECO: 72.19.09</p>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center">
          <p className="opacity-90">
            © {new Date().getFullYear()} Southpool S.r.l. - Tutti i diritti riservati
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
