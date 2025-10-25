import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/southpool-logo.png";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <nav className="container mx-auto px-4 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <img src={logo} alt="Southpool Logo" className="h-10 w-auto" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection("home")} className="text-sm font-medium hover:text-primary transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection("about")} className="text-sm font-medium hover:text-primary transition-colors">
              Chi Siamo
            </button>
            <button onClick={() => scrollToSection("services")} className="text-sm font-medium hover:text-primary transition-colors">
              Servizi
            </button>
            <button onClick={() => scrollToSection("contact")} className="text-sm font-medium hover:text-primary transition-colors">
              Contatti
            </button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col gap-4">
              <button onClick={() => scrollToSection("home")} className="text-sm font-medium hover:text-primary transition-colors text-left">
                Home
              </button>
              <button onClick={() => scrollToSection("about")} className="text-sm font-medium hover:text-primary transition-colors text-left">
                Chi Siamo
              </button>
              <button onClick={() => scrollToSection("services")} className="text-sm font-medium hover:text-primary transition-colors text-left">
                Servizi
              </button>
              <button onClick={() => scrollToSection("contact")} className="text-sm font-medium hover:text-primary transition-colors text-left">
                Contatti
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navigation;
