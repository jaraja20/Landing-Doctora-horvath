import { useEffect, useRef, useState } from "react";
import { motion, useInView, animate } from "framer-motion";

// Resalta en semibold los fragmentos marcados como **texto** dentro de un string de i18n.
// Uso: nombres de institución, credenciales o cifras. Regla: máx. 3 resaltados por párrafo.
export const Highlight = ({ text }) => {
  const parts = String(text).split(/\*\*(.+?)\*\*/g);
  return parts.map((part, i) =>
    i % 2 === 1 ? (
      <strong key={i} className="font-semibold text-black">{part}</strong>
    ) : (
      part
    )
  );
};

export const Reveal = ({ children, delay = 0, className = "", y = 30 }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.7, delay, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);

const groupDigits = (n, sep) => (sep ? n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, sep) : String(n));

// Anima una cifra tipo "20+", "40+" o "30.000+" desde 0 hasta su valor real
// cuando entra en pantalla. Conserva prefijo/sufijo y el separador de miles
// original. Textos sin dígitos (p. ej. "Harvard") se muestran tal cual.
export const CountUp = ({ value, duration = 1.6, delay = 0, className = "" }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const match = String(value).match(/^(\D*)([\d.,]+)(\D*)$/);
  const [display, setDisplay] = useState(match ? `${match[1]}0${match[3]}` : value);

  useEffect(() => {
    if (!inView || !match) return undefined;
    const [, prefix, numStr, suffix] = match;
    const sep = numStr.match(/[.,]/)?.[0] || null;
    const target = parseInt(numStr.replace(/[.,]/g, ""), 10);
    const controls = animate(0, target, {
      duration,
      delay,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(`${prefix}${groupDigits(Math.round(v), sep)}${suffix}`),
    });
    return () => controls.stop();
  }, [inView]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
};

export const Overline = ({ children }) => (
  <p className="text-xs sm:text-sm uppercase tracking-[0.25em] font-semibold text-corp">{children}</p>
);

export const SectionTitle = ({ overline, title, id }) => (
  <Reveal>
    {overline && <Overline>{overline}</Overline>}
    <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-black max-w-3xl" data-testid={id}>
      {title}
    </h2>
    <span className="mt-5 block w-12 h-1 bg-corp" aria-hidden="true" />
  </Reveal>
);
