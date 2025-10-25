import { useEffect } from "react";
import { Header } from "@/components/layout/header/Header";
import { HeroSection } from "@/components/sections/home/HeroSection";
import { ServicesSection } from "@/components/sections/home/ServicesSection";
import { AboutSection } from "@/components/sections/home/AboutSection";
import { ContactSection } from "@/components/sections/home/ContactSection";

function App() {
  useEffect(() => {
    document.body.classList.add("antialiased");
    return () => document.body.classList.remove("antialiased");
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#030303] text-white">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <ContactSection />
      </main>
      <footer className="border-t border-white/10 bg-black py-8">
        <div className="container-custom flex flex-col items-center justify-between gap-4 text-sm text-white/50 md:flex-row">
          <span>© {new Date().getFullYear()} VTN. Todos los derechos reservados.</span>
          <div className="flex gap-4">
            <a href="#nosotros" className="hover:text-brand-500">
              Nosotros
            </a>
            <a href="#servicios" className="hover:text-brand-500">
              Servicios
            </a>
            <a href="#contacto" className="hover:text-brand-500">
              Contacto
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
