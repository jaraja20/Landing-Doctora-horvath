import { MessageCircle, Instagram, Mail } from "lucide-react";
import { Reveal } from "../Reveal";
import { useLang } from "../../App";
import { WHATSAPP_URL, INSTAGRAM_URL, EMAIL } from "../../i18n";

export const FinalCta = () => {
  const { t } = useLang();
  return (
    <section className="bg-white py-24 lg:py-32" data-testid="final-cta-section">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <Reveal>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-black max-w-3xl" data-testid="final-cta-title">
            {t.finalCta.title}
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-6 max-w-xl text-base sm:text-lg font-light leading-relaxed text-black/60">{t.finalCta.sub}</p>
        </Reveal>
        <Reveal delay={0.18}>
          <div className="mt-12 flex flex-wrap items-center gap-8">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" data-testid="final-contact-cta" aria-label="WhatsApp"
              className="inline-flex items-center gap-2.5 bg-corp text-white text-sm font-semibold rounded-full px-8 py-4 hover:bg-black transition-colors duration-300">
              <MessageCircle size={17} strokeWidth={1.75} />
              {t.finalCta.button}
            </a>
            <div className="flex items-center gap-5">
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" aria-label="Instagram" data-testid="cta-instagram-link"
                className="text-black/40 hover:text-corp transition-colors"><Instagram size={20} strokeWidth={1.5} /></a>
              <a href={`mailto:${EMAIL}`} aria-label="Email" data-testid="cta-email-link"
                className="text-black/40 hover:text-corp transition-colors"><Mail size={20} strokeWidth={1.5} /></a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
