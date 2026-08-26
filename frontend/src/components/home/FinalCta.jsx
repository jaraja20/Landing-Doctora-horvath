import { useNavigate, useLocation } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "../Reveal";
import { useLang, scrollToId } from "../../App";

export const FinalCta = () => {
  const { t } = useLang();
  const navigate = useNavigate();
  const location = useLocation();

  const goPricing = () => {
    if (location.pathname !== "/precedent") {
      navigate("/precedent");
      setTimeout(() => scrollToId("#asesorias"), 400);
    } else {
      scrollToId("#asesorias");
    }
  };

  return (
    <section className="bg-white py-24 lg:py-32" data-testid="final-cta-section">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 text-center">
        <Reveal>
          <h2 className="mx-auto text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-black max-w-3xl" data-testid="final-cta-title">
            {t.finalCta.title}
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mx-auto mt-6 max-w-xl text-base sm:text-lg font-light leading-relaxed text-black/60">{t.finalCta.sub}</p>
        </Reveal>
        <Reveal delay={0.18}>
          <div className="mt-12 flex justify-center">
            <button onClick={goPricing} data-testid="final-contact-cta"
              className="inline-flex items-center gap-2.5 bg-corp text-white text-sm font-semibold rounded-full px-8 py-4 hover:bg-black transition-colors duration-300">
              {t.finalCta.button}
              <ArrowUpRight size={16} strokeWidth={2} />
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
