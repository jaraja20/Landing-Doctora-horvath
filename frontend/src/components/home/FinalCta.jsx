import { Reveal } from "../Reveal";
import { useLang } from "../../App";
import { WHATSAPP_URL } from "../../i18n";
import { WhatsAppIcon } from "../WhatsAppIcon";

export const FinalCta = () => {
  const { t } = useLang();
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
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" data-testid="final-contact-cta" aria-label="WhatsApp"
              className="inline-flex items-center gap-2.5 bg-corp text-white text-sm font-semibold rounded-full px-8 py-4 hover:bg-black transition-colors duration-300">
              <WhatsAppIcon size={17} />
              {t.finalCta.button}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
