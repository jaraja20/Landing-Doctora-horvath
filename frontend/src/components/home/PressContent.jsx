import { ArrowUpRight } from "lucide-react";
import { Reveal, SectionTitle } from "../Reveal";
import { useLang } from "../../App";

export const PressContent = () => {
  const { t } = useLang();
  return (
    <section id="contenido" className="bg-[#F5F5F5] py-24 lg:py-32 scroll-mt-24" data-testid="content-section">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <SectionTitle overline={t.content.overline} title={t.content.title} id="content-title" />
        <Reveal delay={0.1}>
          <p className="mt-8 max-w-2xl text-base sm:text-lg font-light leading-relaxed text-black/60">{t.content.lead}</p>
        </Reveal>
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.content.items.map((item, i) => (
            <Reveal key={item.url} delay={i * 0.08} className="h-full">
              <div data-testid={`press-card-${i + 1}`}
                className="h-full flex flex-col bg-white border border-black/10 p-7 hover:border-corp/50 hover:-translate-y-1 transition-all duration-300">
                <p className="text-xs uppercase tracking-[0.2em] font-semibold text-corp">{item.outlet}</p>
                <h3 className="mt-4 text-base font-semibold leading-snug text-black flex-1">{item.title}</h3>
                <a href={item.url} target="_blank" rel="noopener noreferrer" data-testid={`press-link-${i + 1}`}
                  className="group mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-corp underline underline-offset-8 decoration-corp/40 hover:decoration-corp transition-all w-fit">
                  {t.content.cta}
                  <ArrowUpRight size={14} strokeWidth={2} className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
