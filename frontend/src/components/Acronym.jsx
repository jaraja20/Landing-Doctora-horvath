import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Overline } from "./Reveal";

export const Acronym = ({ t }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 85%", "end 55%"] });
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const photoY = useTransform(scrollYProgress, [0, 1], [50, -30]);
  const [titleBefore, titleAfter = ""] = t.method.acronym.title.split("PRECEDENT™");

  return (
    <div ref={ref} className="mt-28 relative" data-testid="acronym-block">
      <div className="absolute -top-24 -left-32 w-[28rem] h-[28rem] rounded-full bg-corp/20 blur-[130px] pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-cyan/10 blur-[120px] pointer-events-none" aria-hidden="true" />
      <motion.span
        aria-hidden="true"
        animate={{ y: [0, -14, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -right-6 -top-8 font-serif text-[13rem] sm:text-[17rem] leading-none text-white/[0.035] select-none pointer-events-none hidden lg:block"
      >
        ™
      </motion.span>

      <Overline>{t.method.acronym.overline}</Overline>
      <motion.h3
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="mt-4 text-3xl sm:text-5xl font-bold tracking-tight text-white"
        data-testid="acronym-title"
      >
        {titleBefore}
        <span className="bg-gradient-to-r from-[#3b3bff] via-cyan to-cyanlight bg-clip-text text-transparent">PRECEDENT™</span>
        {titleAfter}
      </motion.h3>

      <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-start">
        <div className="relative">
          <motion.div
            style={{ scaleY: lineScale }}
            className="absolute left-6 sm:left-7 top-3 bottom-8 w-px bg-gradient-to-b from-corp via-cyan to-corp origin-top"
            aria-hidden="true"
          />
          <div className="flex flex-col gap-4 sm:gap-5">
            {t.method.acronym.letters.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -28 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.05, ease: "easeOut" }}
                className="group relative flex items-center gap-5 sm:gap-7"
                data-testid={`acronym-letter-${i}`}
              >
                <motion.span
                  initial={{ scale: 0, rotate: -14 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ type: "spring", stiffness: 280, damping: 17, delay: 0.12 + i * 0.05 }}
                  whileHover={{ scale: 1.12, rotate: 4 }}
                  className="relative z-10 w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-[#2e2eff] to-indigobrand flex items-center justify-center font-serif text-2xl sm:text-3xl font-bold text-white shadow-[0_12px_32px_-8px_rgba(24,24,255,0.65)] shrink-0 overflow-hidden cursor-default"
                >
                  {item.l}
                  <span className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/30 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" aria-hidden="true" />
                </motion.span>
                <p className="text-lg sm:text-2xl font-light text-white/70 group-hover:text-white group-hover:translate-x-1.5 transition-all duration-300 leading-snug">
                  {item.t}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div style={{ y: photoY }} className="lg:sticky lg:top-32">
          <motion.div
            initial={{ opacity: 0, y: 44 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="relative"
          >
            <div className="absolute -inset-2.5 rounded-2xl bg-gradient-to-br from-corp/70 via-cyan/40 to-transparent blur-[6px]" aria-hidden="true" />
            <img
              src="/assets/photo2.jpg"
              alt="Dra. Gabriela Horvath"
              className="relative w-full max-h-[70vh] object-cover object-top rounded-2xl border border-white/15"
              data-testid="acronym-image"
            />
            <div className="absolute top-5 left-5 backdrop-blur-md bg-navydeep/60 border border-cyan/30 rounded-full px-5 py-2">
              <p className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-cyan font-semibold">PRECEDENT™</p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.p
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mt-16 lg:mt-20 text-center font-serif text-2xl sm:text-4xl leading-snug text-white/90 max-w-3xl mx-auto"
        data-testid="acronym-tagline"
      >
        {t.method.acronym.tagline}{" "}
        <span className="italic bg-gradient-to-r from-[#3b3bff] via-cyan to-cyanlight bg-clip-text text-transparent">
          {t.method.acronym.taglineAccent}
        </span>
      </motion.p>
    </div>
  );
};
