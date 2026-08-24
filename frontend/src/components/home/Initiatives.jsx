import { ArrowUpRight } from "lucide-react";
import { Reveal, SectionTitle } from "../Reveal";
import { useLang } from "../../App";
import { HORVATH_CARE } from "../../i18n";

export const Initiatives = () => {
  const { t } = useLang();
  return (
    <section className="bg-white pb-24 lg:pb-32" data-testid="initiatives-section">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <SectionTitle overline={t.initiatives.overline} title={t.initiatives.title} id="initiatives-title" />
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
          {t.initiatives.items.map((item, i) => (
            <Reveal key={item.t} delay={i * 0.08} className="h-full">
              <div data-testid={`initiative-card-${i + 1}`}
                className="h-full flex flex-col border border-black/10 p-8 hover:border-corp/50 hover:-translate-y-1 transition-all duration-300 bg-white">
                <h3 className="text-xl font-bold leading-snug text-corp">{item.t}</h3>
                <p className="mt-4 text-sm font-light leading-relaxed text-black/55 flex-1">{item.d}</p>
                <a href={HORVATH_CARE} target="_blank" rel="noopener noreferrer" data-testid={`initiative-link-${i + 1}`}
                  className="group mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-corp underline underline-offset-8 decoration-corp/40 hover:decoration-corp transition-all w-fit">
                  {t.initiatives.cta}
                  <ArrowUpRight size={15} strokeWidth={2} className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15}>
          <div className="mt-14 border border-black/10 p-8 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-10" data-testid="pandemic-stat">
            <p className="text-4xl sm:text-5xl font-bold tracking-tight text-corp shrink-0">{t.initiatives.pandemic.v}</p>
            <p className="text-sm font-light leading-relaxed text-black/60 max-w-xl">{t.initiatives.pandemic.l}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
