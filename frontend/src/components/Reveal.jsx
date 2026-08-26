import { motion } from "framer-motion";

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
