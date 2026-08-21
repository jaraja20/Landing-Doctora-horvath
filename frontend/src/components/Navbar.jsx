import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { WHATSAPP_URL } from "../i18n";

export const Navbar = ({ t, lang, setLang }) => {
  const [open, setOpen] = useState(false);
  const links = [
    { href: "#sobre-mi", label: t.nav.about, id: "about" },
    { href: "#metodo", label: t.nav.method, id: "method" },
    { href: "#experiencias", label: t.nav.services, id: "services" },
    { href: "#trayectoria", label: t.nav.journey, id: "journey" },
  ];
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="bg-cyan text-navydeep text-center text-xs sm:text-sm font-medium py-2 px-4" data-testid="announce-bar">
        <a href="#metodo" className="hover:underline underline-offset-4">{t.announce}</a>
      </div>
      <nav className="backdrop-blur-xl bg-navydeep/70 border-b border-white/10" data-testid="main-nav">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
          <a href="#" className="flex items-baseline gap-2" data-testid="nav-logo">
            <span className="font-serif text-xl tracking-wide text-white">HORVATH</span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-cyanlight hidden sm:inline">PRECEDENT™</span>
          </a>
          <div className="hidden lg:flex items-center gap-8">
            {links.map((l) => (
              <a key={l.id} href={l.href} data-testid={`nav-link-${l.id}`}
                className="text-sm text-white/70 hover:text-cyan transition-colors duration-300">{l.label}</a>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center border border-white/20 rounded-full overflow-hidden" data-testid="lang-toggle">
              {["es", "en"].map((l) => (
                <button key={l} onClick={() => setLang(l)} aria-label={`Idioma ${l.toUpperCase()}`}
                  data-testid={`lang-${l}-button`}
                  className={`px-3 py-1.5 text-xs uppercase tracking-widest transition-colors duration-300 ${lang === l ? "bg-cyan text-navydeep font-bold" : "text-white/60 hover:text-white"}`}>
                  {l}
                </button>
              ))}
            </div>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" data-testid="nav-whatsapp-cta" aria-label="WhatsApp"
              className="hidden sm:inline-flex items-center gap-2 bg-cyan text-navydeep text-sm font-semibold rounded-full px-5 py-2 hover:bg-cyanlight transition-colors duration-300">
              {t.nav.cta} <ArrowUpRight size={15} strokeWidth={1.75} />
            </a>
            <button className="lg:hidden text-white" onClick={() => setOpen(!open)} aria-label="Menú" data-testid="mobile-menu-button">
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
        {open && (
          <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} className="lg:hidden border-t border-white/10 bg-navydeep/95 backdrop-blur-xl">
            <div className="px-6 py-4 flex flex-col gap-4">
              {links.map((l) => (
                <a key={l.id} href={l.href} onClick={() => setOpen(false)} data-testid={`mobile-nav-link-${l.id}`}
                  className="text-white/80 hover:text-cyan text-base">{l.label}</a>
              ))}
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" data-testid="mobile-whatsapp-cta"
                className="inline-flex w-fit items-center gap-2 bg-cyan text-navydeep text-sm font-semibold rounded-full px-5 py-2.5">
                {t.nav.cta} <ArrowUpRight size={15} strokeWidth={1.75} />
              </a>
            </div>
          </motion.div>
        )}
      </nav>
    </header>
  );
};
