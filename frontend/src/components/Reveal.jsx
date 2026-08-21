import { motion } from "framer-motion";

export const Reveal = ({ children, delay = 0, className = "", y = 30 }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.8, delay, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);

export const Overline = ({ children, light = false }) => (
  <p className={`text-xs sm:text-sm uppercase tracking-[0.25em] font-medium ${light ? "text-navy" : "text-cyan"}`}>
    {children}
  </p>
);
