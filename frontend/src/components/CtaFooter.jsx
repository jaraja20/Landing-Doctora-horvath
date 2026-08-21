import { ArrowUpRight, Instagram, Mail, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { Reveal } from "./Reveal";
import { WHATSAPP_URL, INSTAGRAM_URL, EMAIL } from "../i18n";

export const CtaFooter = ({ t }) => (
  <>
    <section className="bg-cyan text-navydeep py-24 lg:py-32" data-testid="final-cta-section">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <Reveal>
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tighter leading-[1.02] max-w-4xl" data-testid="final-cta-title">
            {t.cta.title}
          </h2>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="mt-8 max-w-2xl text-base sm:text-lg leading-relaxed text-navydeep/80">{t.cta.sub}</p>
        </Reveal>
        <Reveal delay={0.2}>
          <motion.a
            href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
            data-testid="final-whatsapp-cta" aria-label="WhatsApp"
            whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}
            className="mt-12 inline-flex items-center gap-3 bg-navydeep text-white font-semibold rounded-full px-9 py-4 text-lg hover:bg-navy transition-colors duration-300">
            <MessageCircle size={20} strokeWidth={1.75} />
            {t.cta.button}
            <ArrowUpRight size={18} strokeWidth={1.75} />
          </motion.a>
        </Reveal>
      </div>
    </section>

    <footer className="bg-navydeep border-t border-white/10 py-16" data-testid="footer">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col items-center text-center gap-8">
        <div>
          <p className="font-serif text-2xl tracking-wide text-white">HORVATH</p>
          <p className="mt-1 text-[11px] uppercase tracking-[0.3em] text-cyanlight">{t.footer.brand}</p>
        </div>
        <div className="flex items-center gap-6">
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" data-testid="footer-whatsapp-link"
            className="text-white/60 hover:text-cyan transition-colors duration-300"><MessageCircle size={20} strokeWidth={1.5} /></a>
          <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" aria-label="Instagram" data-testid="footer-instagram-link"
            className="text-white/60 hover:text-cyan transition-colors duration-300"><Instagram size={20} strokeWidth={1.5} /></a>
          <a href={`mailto:${EMAIL}`} aria-label="Email" data-testid="footer-email-link"
            className="text-white/60 hover:text-cyan transition-colors duration-300"><Mail size={20} strokeWidth={1.5} /></a>
        </div>
        <p className="text-xs text-white/40 font-light tracking-wide">{t.footer.rights}</p>
      </div>
    </footer>
  </>
);
