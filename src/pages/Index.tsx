import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import CompanyDetails from "@/components/CompanyDetails";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        <Hero />
        <About />
        <Services />
        <CompanyDetails />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
