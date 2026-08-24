import { Reveal, Overline, SectionTitle } from "@/components/Reveal";
import { Acronym } from "@/components/Acronym";
import { Pricing } from "@/components/Pricing";
import { useLang } from "../App";

export default function Precedent() {
  const { t } = useLang();
  return (
    <main className="bg-white pt-32 lg:pt-40" data-testid="precedent-page">
      <section className="max-w-7xl mx-auto px-6 lg:px-10 pb-20">
        <Reveal><Overline>{t.precedent.overline}</Overline></Reveal>
        <Reveal delay={0.08}>
          <h1 className="mt-4 text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-black" data-testid="precedent-title">
            {t.precedent.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg sm:text-xl font-light leading-relaxed text-black/65">{t.precedent.lead}</p>
        </Reveal>
        <Reveal delay={0.16}>
          <div className="mt-12 border-l-4 border-corp pl-6 max-w-3xl" data-testid="precedent-manifesto">
            <p className="text-2xl sm:text-3xl font-light leading-snug text-black">{t.precedent.manifesto}</p>
          </div>
        </Reveal>
        <Reveal delay={0.22}>
          <h2 className="mt-16 text-2xl sm:text-3xl font-bold tracking-tight text-black">{t.precedent.originTitle}</h2>
          <p className="mt-6 max-w-3xl text-base sm:text-lg font-light leading-relaxed text-black/60">{t.precedent.originP1}</p>
          <p className="mt-4 max-w-3xl text-base sm:text-lg font-light leading-relaxed text-black/60">{t.precedent.originP2}</p>
        </Reveal>
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-10 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.brief.steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.08} className="h-full">
              <div data-testid={`precedent-step-${i + 1}`}
                className="h-full border border-black/10 p-7 hover:border-corp/50 hover:-translate-y-1 transition-all duration-300 bg-white">
                <p className="text-3xl font-bold text-corp">{s.n}</p>
                <h3 className="mt-5 text-lg font-semibold text-black">{s.t}</h3>
                <p className="mt-3 text-sm font-light leading-relaxed text-black/55">{s.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-10">
        <Acronym t={t} />
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-24">
        <SectionTitle overline={t.method.errorsOverline} title={t.method.errorsTitle} id="errors-title" />
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.method.errors.map((e, i) => (
            <Reveal key={e.n} delay={i * 0.08} className="h-full">
              <div data-testid={`precedent-error-${i + 1}`}
                className="h-full border border-black/10 p-7 bg-white hover:border-corp/50 hover:-translate-y-1 transition-all duration-300">
                <p className="text-xs uppercase tracking-[0.2em] font-semibold text-corp">{e.n}</p>
                <h3 className="mt-4 text-base font-semibold leading-snug text-black">{e.t}</h3>
                <p className="mt-3 text-sm font-light leading-relaxed text-black/55">{e.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-[#F5F5F5] py-24" data-testid="scope-section">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <SectionTitle overline={t.precedent.scopeOverline} title={t.precedent.scopeTitle} id="scope-title" />
          <div className="mt-12 flex flex-wrap gap-4">
            {t.precedent.scope.map((s, i) => (
              <Reveal key={s} delay={i * 0.06}>
                <span data-testid={`scope-pill-${i + 1}`}
                  className="inline-block bg-white border border-black/10 rounded-full px-6 py-3.5 text-sm font-medium text-black/75 hover:border-corp hover:text-corp transition-colors duration-300 cursor-default">
                  {s}
                </span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Pricing t={t} />
    </main>
  );
}
