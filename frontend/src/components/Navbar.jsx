import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X, ArrowUpRight, Network, MessageCircle, ClipboardCheck } from "lucide-react";
import { GhLogo } from "./GhLogo";
import { useLang, scrollToId } from "../App";
import { WHATSAPP_URL, wa } from "../i18n";

const icons = { network: Network, chat: MessageCircle, check: ClipboardCheck };

const DropdownCard = ({ items, onClose, mobile = false }) => (
  <div className={mobile ? "flex flex-col gap-2 pl-3 border-l-2 border-corp/20" : "flex flex-col p-3"}>
    {items.map((item) => {
      const Icon = icons[item.icon];
      const inner = (
        <div className="group flex items-start gap-4 rounded-lg p-3 hover:bg-corp/5 transition-colors duration-200">
          <span className="mt-0.5 w-9 h-9 rounded-lg border border-corp/25 flex items-center justify-center shrink-0">
            <Icon size={16} strokeWidth={1.75} className="text-corp" />
          </span>
          <span className="flex-1 min-w-0">
            <span className="flex items-baseline justify-between gap-3">
              <span className="text-sm font-semibold text-black">{item.title}</span>
              {item.price && <span className="text-sm font-bold text-corp shrink-0">{item.price}</span>}
            </span>
            <span className="mt-1 block text-xs leading-relaxed text-black/55">{item.desc}</span>
            <span className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-corp">
              {item.cta} <ArrowUpRight size={12} strokeWidth={2} className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </span>
        </div>
      );
      return item.to ? (
        <Link key={item.title} to={item.to} onClick={onClose} data-testid={`dropdown-${item.title.toLowerCase().replace(/[^a-z0-9]/g, "-")}`}>{inner}</Link>
      ) : (
        <a key={item.title} href={wa(item.wa)} target="_blank" rel="noopener noreferrer" onClick={onClose} data-testid={`dropdown-${item.title.toLowerCase().replace(/[^a-z0-9]/g, "-")}`}>{inner}</a>
      );
    })}
  </div>
);

export const Navbar = () => {
  const { t, lang, setLang } = useLang();
  const [open, setOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileDrop, setMobileDrop] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const goContent = () => {
    setMobileOpen(false);
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => scrollToId("#contenido"), 400);
    } else scrollToId("#contenido");
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white/90 backdrop-blur-lg border-b border-black/[0.06]" data-testid="main-nav">
      <nav className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between gap-6">
        <Link to="/" className="flex items-center gap-3 shrink-0" data-testid="nav-logo" onClick={() => setMobileOpen(false)}>
          <GhLogo size={42} />
          <span className="hidden sm:block leading-tight">
            <span className="block text-sm font-bold text-black">{t.brand.name}</span>
            <span className="block text-[11px] text-black/50">{t.brand.role}</span>
          </span>
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          <Link to="/" data-testid="nav-link-home" className="text-sm font-medium text-black/70 hover:text-corp transition-colors">{t.nav.home}</Link>
          <Link to="/trayectoria" data-testid="nav-link-trajectory" className="text-sm font-medium text-black/70 hover:text-corp transition-colors">{t.nav.trajectory}</Link>
          <div className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
            <button data-testid="nav-dropdown-button" aria-expanded={open}
              className="flex items-center gap-1.5 text-sm font-medium text-black/70 hover:text-corp transition-colors py-2">
              {t.nav.dropdown}
              <ChevronDown size={14} strokeWidth={2} className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
            </button>
            <AnimatePresence>
              {open && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.18 }}
                  className="absolute left-1/2 -translate-x-1/2 top-full w-[26rem] bg-white rounded-xl border border-black/[0.08] shadow-[0_24px_60px_-20px_rgba(24,24,255,0.25)]"
                  data-testid="nav-dropdown-menu"
                >
                  <DropdownCard items={t.dropdown} onClose={() => setOpen(false)} />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <button onClick={goContent} data-testid="nav-link-content" className="text-sm font-medium text-black/70 hover:text-corp transition-colors">{t.nav.content}</button>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center border border-black/15 rounded-full overflow-hidden" data-testid="lang-toggle">
            {["es", "en"].map((l) => (
              <button key={l} onClick={() => setLang(l)} aria-label={`Idioma ${l.toUpperCase()}`} data-testid={`lang-${l}-button`}
                className={`px-3 py-1.5 text-xs uppercase tracking-widest transition-colors duration-300 ${lang === l ? "bg-corp text-white font-bold" : "text-black/50 hover:text-black"}`}>
                {l}
              </button>
            ))}
          </div>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" data-testid="nav-contact-cta" aria-label="WhatsApp"
            className="hidden sm:inline-flex items-center border border-corp text-corp text-sm font-semibold rounded-full px-5 py-2.5 hover:bg-corp hover:text-white transition-colors duration-300">
            {t.nav.contact}
          </a>
          <button className="lg:hidden text-black" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Menú" data-testid="mobile-menu-button">
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-black/[0.06] bg-white overflow-hidden">
            <div className="px-6 py-5 flex flex-col gap-4">
              <Link to="/" onClick={() => setMobileOpen(false)} data-testid="mobile-nav-home" className="text-base font-medium text-black/80">{t.nav.home}</Link>
              <Link to="/trayectoria" onClick={() => setMobileOpen(false)} data-testid="mobile-nav-trajectory" className="text-base font-medium text-black/80">{t.nav.trajectory}</Link>
              <div>
                <button onClick={() => setMobileDrop(!mobileDrop)} data-testid="mobile-dropdown-button"
                  className="flex items-center gap-2 text-base font-medium text-black/80" aria-expanded={mobileDrop}>
                  {t.nav.dropdown}
                  <ChevronDown size={16} className={`transition-transform duration-200 ${mobileDrop ? "rotate-180" : ""}`} />
                </button>
                {mobileDrop && (
                  <div className="mt-3">
                    <DropdownCard items={t.dropdown} onClose={() => setMobileOpen(false)} mobile />
                  </div>
                )}
              </div>
              <button onClick={goContent} data-testid="mobile-nav-content" className="text-left text-base font-medium text-black/80">{t.nav.content}</button>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" data-testid="mobile-contact-cta"
                className="inline-flex w-fit items-center border border-corp text-corp text-sm font-semibold rounded-full px-5 py-2.5">
                {t.nav.contact}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
