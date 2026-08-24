import { Reveal, SectionTitle } from "../Reveal";
import { useLang } from "../../App";

export const BeyondAreas = () => {
  const { t } = useLang();
  return (
    <>
      <section className="bg-white py-24 lg:py-32" data-testid="beyond-section">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <Reveal>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-black" data-testid="beyond-title">{t.beyond.title}</h2>
            <p className="mt-8 text-lg sm:text-xl font-light leading-relaxed text-black/70">{t.beyond.col1}</p>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="text-base sm:text-lg font-light leading-relaxed text-black/60">{t.beyond.col2}</p>
            <div className="mt-8 border-l-4 border-corp pl-6" data-testid="beyond-highlight">
              <p className="text-xl sm:text-2xl font-semibold leading-snug text-black">{t.beyond.highlight}</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="areas" className="bg-white pb-24 lg:pb-32 scroll-mt-24" data-testid="areas-section">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <SectionTitle overline={t.areas.overline} title={t.areas.title} id="areas-title" />
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.areas.items.map((item, i) => (
              <Reveal key={item.n} delay={i * 0.08} className="h-full">
                <div data-testid={`area-card-${i + 1}`}
                  className="h-full border border-black/10 p-7 hover:border-corp/50 hover:-translate-y-1 transition-all duration-300 bg-white">
                  <p className="text-3xl font-bold text-corp">{item.n}</p>
                  <h3 className="mt-5 text-lg font-semibold leading-snug text-black">{item.t}</h3>
                  <p className="mt-3 text-sm font-light leading-relaxed text-black/55">{item.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
