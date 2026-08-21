import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Overline } from "./Reveal";

export const Acronym = ({ t }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 85%", "end 55%"] });
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const [titleBefore, titleAfter = ""] = t.method.acronym.title.split("PRECEDENT™");

  return (
    <div ref={ref} className="mt-28 relative" data-testid="acronym-block">
      <div className="absolute -top-24 -left-32 w-[28rem] h-[28rem] rounded-full bg-corp/25 blur-[130px] pointer-events-none" aria-hidden="true" />
      <div className="absolute -bottom-16 -right-16 w-96 h-96 rounded-full bg-cyan/15 blur-[120px] pointer-events-none" aria-hidden="true" />

      <motion.div
        initial={{ opacity: 0, y: 48 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="relative bg-white rounded-3xl overflow-hidden shadow-[0_40px_90px_-30px_rgba(24,24,255,0.35)]"
      >
        <motion.span
          aria-hidden="true"
          animate={{ y: [0, -14, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -right-4 -top-10 font-serif text-[13rem] sm:text-[17rem] leading-none text-navy/[0.045] select-none pointer-events-none hidden lg:block z-10"
        >
          ™
        </motion.span>

        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="relative z-10 p-8 sm:p-12 lg:p-16">
            <Overline light>{t.method.acronym.overline}</Overline>
            <h3 className="mt-4 text-3xl sm:text-5xl font-bold tracking-tight text-navy" data-testid="acronym-title">
              {titleBefore}
              <span className="bg-gradient-to-r from-corp via-indigobrand to-cyan bg-clip-text text-transparent">PRECEDENT™</span>
              {titleAfter}
            </h3>

            <div className="mt-12 relative">
              <motion.div
                style={{ scaleY: lineScale }}
                className="absolute left-6 sm:left-7 top-3 bottom-8 w-px bg-gradient-to-b from-corp via-indigobrand to-cyan origin-top"
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
                      className="relative z-10 w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-[#2e2eff] to-indigobrand flex items-center justify-center font-serif text-2xl sm:text-3xl font-bold text-white shadow-[0_12px_32px_-8px_rgba(24,24,255,0.55)] shrink-0 overflow-hidden cursor-default"
                    >
                      {item.l}
                      <span className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/30 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" aria-hidden="true" />
                    </motion.span>
                    <p className="text-lg sm:text-2xl font-light text-navydeep/70 group-hover:text-navydeep group-hover:translate-x-1.5 transition-all duration-300 leading-snug">
                      {item.t}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="mt-12 font-serif text-xl sm:text-2xl leading-snug text-navydeep/90 max-w-md"
              data-testid="acronym-tagline"
            >
              {t.method.acronym.tagline}{" "}
              <span className="italic font-semibold bg-gradient-to-r from-corp via-indigobrand to-cyan bg-clip-text text-transparent">
                {t.method.acronym.taglineAccent}
              </span>
            </motion.p>
          </div>

          <div className="relative min-h-[26rem] lg:min-h-full">
            <motion.img
              src="/assets/gabriela-white.jpg"
              alt="Dra. Gabriela Horvath"
              initial={{ opacity: 0, x: 48 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="absolute inset-0 w-full h-full object-cover object-top"
              data-testid="acronym-image"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/40 to-transparent" aria-hidden="true" />
            <div className="absolute inset-0 bg-gradient-to-t from-white/50 via-transparent to-transparent" aria-hidden="true" />
            <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-transparent lg:hidden" aria-hidden="true" />
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="absolute top-5 right-5 backdrop-blur-md bg-navydeep/70 border border-cyan/40 rounded-full px-5 py-2"
            >
              <p className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-cyan font-semibold">PRECEDENT™</p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
