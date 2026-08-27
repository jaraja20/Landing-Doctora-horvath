import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Reveal, Highlight, CountUp } from "../Reveal";
import { useLang, scrollToId } from "../../App";
import { INTRO_EXIT_EVENT } from "../IntroSplash";

const EASE = [0.16, 1, 0.3, 1];

const lineAnim = (ready, delay) => ({
  initial: { y: "110%" },
  animate: { y: ready ? "0%" : "110%" },
  transition: { duration: 0.9, delay, ease: EASE },
});

export const HomeHero = () => {
  const { t } = useLang();
  const words = t.hero.title.split(" ");
  const split = Math.ceil(words.length / 2);
  const lines = [words.slice(0, split).join(" "), words.slice(split).join(" ")];
  const descriptorParts = t.hero.descriptors.split(" | ");

  // The hero's entrance is choreographed to pick up right where the intro
  // splash leaves off, instead of having already finished animating behind it.
  const [ready, setReady] = useState(() => typeof window !== "undefined" && window.__ghIntroExited);

  useEffect(() => {
    if (ready) return undefined;
    const handler = () => setReady(true);
    window.addEventListener(INTRO_EXIT_EVENT, handler);
    const fallback = setTimeout(() => setReady(true), 4000);
    return () => {
      window.removeEventListener(INTRO_EXIT_EVENT, handler);
      clearTimeout(fallback);
    };
  }, [ready]);

  const enter = (initial, target, transition) => ({
    initial,
    animate: ready ? target : initial,
    transition,
  });

  return (
    <>
      <section className="pt-32 lg:pt-44 pb-20 lg:pb-28 bg-white overflow-hidden" data-testid="hero-section">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          <motion.div
            {...enter(
              { opacity: 0, x: 40, scale: 0.94 },
              { opacity: 1, x: 0, scale: 1 },
              { duration: 1, delay: 0.1, ease: EASE }
            )}
            className="order-1 lg:order-2 relative max-w-md lg:max-w-none mx-auto w-full">
            <div className="absolute -top-4 -right-4 w-full h-full border-2 border-corp/15 rounded-md" aria-hidden="true" />
            <div className="relative w-full aspect-[4/5] rounded-md overflow-hidden">
              <motion.img
                src="/assets/gabriela-frente.jpg" alt="Dra. Gabriela Horvath"
                className="w-full h-full object-cover object-center" data-testid="hero-image"
                {...enter(
                  { scale: 1.12 },
                  { scale: 1 },
                  { duration: 1.6, delay: 0.1, ease: EASE }
                )}
              />
              <motion.p
                className="absolute inset-x-0 bottom-20 sm:bottom-24 px-6 font-serif text-4xl sm:text-5xl font-bold uppercase tracking-wide leading-[1.08] text-white text-center"
                style={{ textShadow: "0 4px 24px rgba(0,0,0,0.5), 0 2px 8px rgba(0,0,0,0.45)" }}
                data-testid="hero-name"
                {...enter(
                  { opacity: 0, y: 16 },
                  { opacity: 1, y: 0 },
                  { duration: 0.7, delay: 0.5, ease: EASE }
                )}
              >
                {t.brand.name}
              </motion.p>
            </div>

            <motion.div
              className="relative z-10 -mt-8 sm:-mt-10 mx-4 sm:mx-8 rounded-xl border border-black/10 bg-white shadow-xl px-6 py-5" data-testid="hero-descriptors-note"
              {...enter(
                { opacity: 0, y: 22, scale: 0.96 },
                { opacity: 1, y: 0, scale: 1 },
                { type: "spring", stiffness: 220, damping: 22, delay: 0.65 }
              )}
            >
              <p className="text-[10px] sm:text-[11px] font-medium uppercase tracking-[0.08em] leading-relaxed text-black/55 text-center">
                {descriptorParts.map((seg, i) => (
                  <span key={seg}>
                    <strong className="font-semibold text-black">{seg}</strong>
                    {i < descriptorParts.length - 1 && <span className="text-black/30 mx-1.5">|</span>}
                  </span>
                ))}
              </p>
            </motion.div>
          </motion.div>

          <div className="order-2 lg:order-1 flex flex-col">
            <motion.p
              {...enter(
                { opacity: 0, y: 14 },
                { opacity: 1, y: 0 },
                { duration: 0.6, delay: 0.2, ease: EASE }
              )}
              className="hidden lg:block order-1 text-xs sm:text-sm uppercase tracking-[0.25em] font-semibold text-corp"
              data-testid="hero-overline">
              {t.hero.overline}
            </motion.p>
            <motion.p
              {...enter(
                { opacity: 0, y: 18 },
                { opacity: 1, y: 0 },
                { duration: 0.7, delay: 0.75, ease: EASE }
              )}
              className="order-1 lg:order-3 lg:mt-7 max-w-lg text-base sm:text-lg font-light leading-relaxed text-black/60 text-center lg:text-left mx-auto lg:mx-0"
              data-testid="hero-subtitle">
              <Highlight text={t.hero.sub} />
            </motion.p>
            <h1 className="order-2 lg:order-2 mt-6 lg:mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.08] text-black text-center lg:text-left" data-testid="hero-title">
              <span className="block overflow-hidden"><motion.span className="block" {...lineAnim(ready, 0.35)}>{lines[0]}</motion.span></span>
              <span className="block overflow-hidden"><motion.span className="block" {...lineAnim(ready, 0.5)}>{lines[1]}</motion.span></span>
            </h1>
            <motion.div
              {...enter(
                { opacity: 0, y: 18 },
                { opacity: 1, y: 0 },
                { duration: 0.7, delay: 0.95, ease: EASE }
              )}
              className="order-3 lg:order-4 mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-6">
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
                <p className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-corp">
                  <CountUp value={s.v} delay={i * 0.08 + 0.15} />
                </p>
                <p className="mt-3 text-xs uppercase tracking-[0.15em] leading-relaxed text-black/50">{s.l}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
};
