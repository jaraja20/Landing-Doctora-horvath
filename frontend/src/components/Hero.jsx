import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, ArrowDown } from "lucide-react";
import { WHATSAPP_URL } from "../i18n";

const lineAnim = (delay) => ({
  initial: { y: "110%" },
  animate: { y: "0%" },
  transition: { duration: 1, delay, ease: [0.22, 1, 0.36, 1] },
});

export const Hero = ({ t }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-end overflow-hidden" data-testid="hero-section">
      <motion.div style={{ y: bgY }} className="absolute inset-0 -bottom-24">
        <img src="/assets/photo1.jpg" alt="Dra. Gabriela Horvath en el laboratorio"
          className="w-full h-full object-cover object-top" data-testid="hero-image" />
        <div className="absolute inset-0 bg-navydeep/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-navydeep via-navydeep/30 to-navydeep/60" />
      </motion.div>

      <motion.div style={{ opacity: fade }} className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pb-20 pt-48 w-full">
        <motion.p
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.15 }}
          className="text-xs sm:text-sm uppercase tracking-[0.25em] text-cyanlight font-medium mb-8"
          data-testid="hero-overline">
          {t.hero.overline}
        </motion.p>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tighter leading-[1.02] text-white max-w-5xl" data-testid="hero-title">
          <span className="hero-mask-line"><motion.span className="block" {...lineAnim(0.3)}>{t.hero.line1}</motion.span></span>
          <span className="hero-mask-line"><motion.span className="block font-serif italic font-normal text-cyan" {...lineAnim(0.45)}>{t.hero.line2}</motion.span></span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.85 }}
          className="mt-8 max-w-2xl text-base sm:text-lg font-light leading-relaxed text-white/80"
          data-testid="hero-subtitle">
          {t.hero.sub}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1.05 }}
          className="mt-10 flex flex-wrap items-center gap-4">
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" data-testid="hero-whatsapp-cta" aria-label="WhatsApp"
            className="inline-flex items-center gap-2 bg-cyan text-navydeep font-semibold rounded-full px-7 py-3.5 hover:bg-cyanlight transition-colors duration-300">
            {t.hero.ctaPrimary} <ArrowUpRight size={17} strokeWidth={1.75} />
          </a>
          <a href="#metodo" data-testid="hero-method-cta"
            className="inline-flex items-center gap-2 border border-cyan/60 text-cyan font-medium rounded-full px-7 py-3.5 hover:bg-cyan/10 transition-colors duration-300">
            {t.hero.ctaSecondary} <ArrowDown size={16} strokeWidth={1.75} />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};
