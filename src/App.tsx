import { useEffect } from "react";
import { Header } from "@/components/layout/header/Header";
import { HeroSection } from "@/components/sections/home/HeroSection";
import { ServicesSection } from "@/components/sections/home/ServicesSection";
import { AboutSection } from "@/components/sections/home/AboutSection";
import { TestimonialsSection } from "@/components/sections/home/TestimonialsSection";
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
        <TestimonialsSection />
        <ContactSection />
      </main>
      <footer className="border-t border-white/10 bg-black py-8">
        <div className="container-custom flex flex-col items-center gap-6 text-center text-sm text-white/50 md:flex-row md:justify-between md:text-left">
          <span>© {new Date().getFullYear()} Vista Trading Network. Todos los derechos reservados.</span>
          <div className="flex items-center justify-center gap-6 text-lg text-white/70">
            <a
              href="https://wa.me/+8615012775212"
              className="transition-colors hover:text-brand-500"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <svg viewBox="0 0 32 32" className="h-5 w-5 fill-current" aria-hidden="true">
                <path d="M16 2.667c-7.364 0-13.333 5.969-13.333 13.333 0 2.353.612 4.649 1.774 6.676L2.667 29.333l6.858-1.726A13.292 13.292 0 0 0 16 29.333c7.364 0 13.333-5.969 13.333-13.333S23.364 2.667 16 2.667Zm0 24c-2.057 0-4.062-.538-5.833-1.556l-.416-.24-4.064 1.022 1.083-3.958-.271-.416c-1.083-1.708-1.653-3.677-1.653-5.852 0-6.016 4.901-10.917 10.917-10.917S26.917 10.651 26.917 16.667 22.016 26.667 16 26.667Zm6.098-8.516c-.333-.172-1.964-.968-2.267-1.08-.303-.112-.524-.172-.743.172-.219.333-.857 1.08-1.053 1.299-.197.219-.386.246-.719.074-.333-.172-1.404-.517-2.675-1.648-.989-.883-1.656-1.974-1.853-2.308-.197-.333-.021-.512.15-.683.155-.154.333-.4.5-.6.167-.2.222-.333.333-.555.112-.223.056-.415-.008-.586-.064-.172-.743-1.792-1.02-2.456-.269-.647-.542-.56-.743-.57-.192-.01-.41-.012-.63-.012s-.586.084-.894.415c-.308.333-1.172 1.146-1.172 2.793 0 1.647 1.2 3.237 1.365 3.463.167.223 2.363 3.609 5.727 5.062 3.364 1.453 3.364.969 3.969.908.605-.061 1.964-.8 2.241-1.573.277-.772.277-1.434.194-1.573-.082-.14-.303-.218-.635-.39Z" />
              </svg>
            </a>
            <a
              href="https://www.tiktok.com/@vista.trading.net?is_from_webapp=1&sender_device=pc"
              className="transition-colors hover:text-brand-500"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
            >
              <svg viewBox="0 0 32 32" className="h-5 w-5 fill-current" aria-hidden="true">
                <path d="M21.796 2.667h3.19c.182 3.1 2.618 5.505 5.681 5.682v3.281c-1.99.194-3.807-.44-5.68-1.496v8.155c0 5.486-3.598 9.93-9.442 9.93-5.63 0-9.714-4.27-9.714-9.914 0-5.645 4.084-9.916 9.714-9.916.973 0 1.921.127 2.821.373v3.395a9.066 9.066 0 0 0-2.234-.261c-3.361 0-5.654 2.576-5.654 5.963 0 3.388 2.293 5.963 5.654 5.963 3.1 0 5.381-2.08 5.592-4.991l.024-14.764Z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/vistatradingnetwork?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              className="transition-colors hover:text-brand-500"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <svg viewBox="0 0 32 32" className="h-5 w-5 fill-current" aria-hidden="true">
                <path d="M16 9.333a6.667 6.667 0 1 0 0 13.334 6.667 6.667 0 0 0 0-13.334Zm0 10.934a4.267 4.267 0 1 1 0-8.534 4.267 4.267 0 0 1 0 8.534Zm8.533-11.201a1.556 1.556 0 1 1-3.112 0 1.556 1.556 0 0 1 3.112 0Zm4.4 1.58c-.098-2.073-.567-3.911-2.073-5.406C25.364 3.845 23.527 3.376 21.453 3.279 19.327 3.122 12.673 3.122 10.547 3.279c-2.073.098-3.911.567-5.407 2.061C3.645 6.847 3.176 8.685 3.079 10.758 2.922 12.884 2.922 19.538 3.079 21.664c.098 2.073.567 3.911 2.061 5.406 1.496 1.495 3.234 1.964 5.407 2.061 2.126.158 8.78.158 10.906 0 2.073-.097 3.911-.566 5.406-2.061 1.495-1.495 1.964-3.234 2.061-5.406.158-2.126.158-8.78 0-10.906Zm-2.773 13.26a4.865 4.865 0 0 1-2.745 2.745c-1.903.756-6.426.582-8.415.582s-6.52.168-8.415-.582a4.865 4.865 0 0 1-2.745-2.745c-.756-1.903-.582-6.426-.582-8.415s-.168-6.52.582-8.415a4.865 4.865 0 0 1 2.745-2.745c1.903-.756 6.426-.582 8.415-.582s6.52-.168 8.415.582a4.865 4.865 0 0 1 2.745 2.745c.756 1.903.582 6.426.582 8.415s.168 6.52-.582 8.415Z" />
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
