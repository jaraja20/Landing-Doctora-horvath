import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Reveal, Highlight } from "../Reveal";
import { useLang, scrollToId } from "../../App";

const lineAnim = (delay) => ({
  initial: { y: "110%" },
  animate: { y: "0%" },
  transition: { duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] },
});

export const HomeHero = () => {
  const { t } = useLang();
  const words = t.hero.title.split(" ");
  const split = Math.ceil(words.length / 2);
  const lines = [words.slice(0, split).join(" "), words.slice(split).join(" ")];

  return (
    <>
      <section className="pt-32 lg:pt-44 pb-20 lg:pb-28 bg-white overflow-hidden" data-testid="hero-section">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.9, delay: 0.15, ease: "easeOut" }}
            className="order-1 lg:order-2 relative max-w-md lg:max-w-none mx-auto w-full">
            <div className="absolute -top-4 -right-4 w-full h-full border-2 border-corp/15 rounded-md" aria-hidden="true" />
            <div className="relative w-full aspect-[4/5] rounded-md overflow-hidden">
              <img src="/assets/gabriela-frente.jpg" alt="Dra. Gabriela Horvath"
                className="w-full h-full object-cover object-center" data-testid="hero-image" />
              <div className="absolute inset-x-0 bottom-0 pt-16 pb-6 px-5 sm:px-7 bg-gradient-to-t from-navydeep/95 via-navydeep/55 to-transparent">
                <p className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.2em] text-cyanlight" data-testid="hero-role-badge">
                  {t.hero.badge}
                </p>
                <p className="mt-2 text-2xl sm:text-3xl font-bold uppercase tracking-tight leading-[1.05] text-white" data-testid="hero-name">
                  {t.brand.name}
                </p>
                <p className="mt-3 text-[10px] sm:text-[11px] font-medium uppercase tracking-[0.1em] leading-relaxed text-white/70" data-testid="hero-descriptors">
                  {t.hero.descriptors}
                </p>
              </div>
            </div>
          </motion.div>

          <div className="order-2 lg:order-1">
            <motion.p
              initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xs sm:text-sm uppercase tracking-[0.25em] font-semibold text-corp"
              data-testid="hero-overline">
              {t.hero.overline}
            </motion.p>
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.08] text-black" data-testid="hero-title">
              <span className="block overflow-hidden"><motion.span className="block" {...lineAnim(0.25)}>{lines[0]}</motion.span></span>
              <span className="block overflow-hidden"><motion.span className="block" {...lineAnim(0.4)}>{lines[1]}</motion.span></span>
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.65 }}
              className="mt-7 max-w-lg text-base sm:text-lg font-light leading-relaxed text-black/60"
              data-testid="hero-subtitle">
              <Highlight text={t.hero.sub} />
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.85 }}
              className="mt-10 flex flex-wrap items-center gap-6">
              <Link to="/trayectoria" data-testid="hero-cta-trajectory"
                className="inline-flex items-center gap-2 bg-corp text-white text-sm font-semibold rounded-full px-7 py-3.5 hover:bg-black transition-colors duration-300">
                {t.hero.cta1}
              </Link>
              <button onClick={() => scrollToId("#areas")} data-testid="hero-cta-areas"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-corp underline underline-offset-8 decoration-corp/40 hover:decoration-corp transition-all">
                {t.hero.cta2} <ArrowUpRight size={15} strokeWidth={2} />
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="border-y border-black/[0.06] bg-white" data-testid="authority-strip">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-2 lg:gap-0 lg:divide-x divide-black/[0.06]">
          {t.authority.map((s, i) => (
            <Reveal key={s.l} delay={i * 0.08} className="py-10 lg:py-14 lg:px-8 lg:first:pl-0">
              <div data-testid={`authority-${i + 1}`}>
                <p className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-corp">{s.v}</p>
                <p className="mt-3 text-xs uppercase tracking-[0.15em] leading-relaxed text-black/50">{s.l}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
};
