import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp } from "lucide-react";

export const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goTop = () => {
    if (window.__lenis) window.__lenis.scrollTo(0);
    else window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.7, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.7, y: 12 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          onClick={goTop}
          aria-label="Volver arriba"
          title="Volver arriba"
          data-testid="back-to-top"
          className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-white border border-corp/30 text-corp shadow-[0_10px_30px_-10px_rgba(24,24,255,0.4)] flex items-center justify-center hover:bg-corp hover:text-white transition-colors duration-300"
        >
          <ChevronUp size={20} strokeWidth={2} />
        </motion.button>
      )}
    </AnimatePresence>
  );
};
