import { ArrowUpRight } from "lucide-react";
import { Reveal, Overline } from "./Reveal";
import { WHATSAPP_URL } from "../i18n";

export const Offer = ({ t }) => (
  <section className="bg-navy py-24 lg:py-32 border-y border-white/10" data-testid="offer-section">
    <div className="max-w-7xl mx-auto px-6 lg:px-10">
      <Reveal><Overline>{t.offer.overline}</Overline></Reveal>
      <Reveal delay={0.08}>
        <h2 className="mt-4 text-4xl sm:text-5xl font-bold tracking-tight text-white max-w-3xl">{t.offer.title}</h2>
      </Reveal>
      <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {t.offer.items.map((item, i) => (
          <Reveal key={item.t} delay={(i % 3) * 0.08}>
            <div data-testid={`offer-card-${i + 1}`}
              className="h-full border border-white/10 rounded-md p-7 bg-navydeep/40 hover:border-cyan/40 hover:-translate-y-1 transition-all duration-300">
              <h3 className="text-xl font-semibold text-white leading-snug">{item.t}</h3>
              <p className="mt-3 text-sm font-light leading-relaxed text-white/65">{item.d}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="mt-28" id="experiencias">
        <Reveal><Overline>{t.services.overline}</Overline></Reveal>
        <Reveal delay={0.08}>
          <h2 className="mt-4 text-4xl sm:text-5xl font-bold tracking-tight text-white max-w-3xl">{t.services.title}</h2>
        </Reveal>
        <Reveal delay={0.14}>
          <p className="mt-6 max-w-2xl text-base sm:text-lg font-light leading-relaxed text-white/70">{t.services.intro}</p>
        </Reveal>
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
          {t.services.items.map((s, i) => (
            <Reveal key={s.t} delay={i * 0.1} className="h-full">
              <div data-testid={`service-card-${i + 1}`}
                className="h-full flex flex-col border border-cyan/25 rounded-md p-8 bg-navydeep hover:border-cyan/60 hover:-translate-y-1 transition-all duration-300">
                <span className="text-xs uppercase tracking-[0.25em] text-cyan font-semibold">{s.tag}</span>
                <h3 className="mt-4 text-2xl font-semibold text-white tracking-tight">{s.t}</h3>
                <p className="mt-4 text-sm sm:text-base font-light leading-relaxed text-white/65 flex-1">{s.d}</p>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" data-testid={`service-cta-${i + 1}`} aria-label={`${t.services.cta} ${s.t}`}
                  className="group mt-8 inline-flex items-center gap-2 text-cyan font-medium hover:text-cyanlight transition-colors duration-300">
                  {t.services.cta}
                  <ArrowUpRight size={16} strokeWidth={1.75} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  </section>
);
