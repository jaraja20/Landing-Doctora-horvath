import { Reveal, Overline } from "./Reveal";
import { Acronym } from "./Acronym";

export const Method = ({ t }) => (
  <section id="metodo" className="bg-navydeep py-24 lg:py-32" data-testid="method-section">
    <div className="max-w-7xl mx-auto px-6 lg:px-10">
      <Reveal><Overline>{t.method.overline}</Overline></Reveal>
      <Reveal delay={0.08}>
        <h2 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white max-w-3xl">{t.method.title}</h2>
      </Reveal>
      <Reveal delay={0.16}>
        <p className="mt-6 max-w-2xl text-base sm:text-lg font-light leading-relaxed text-white/70">{t.method.intro}</p>
      </Reveal>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
        {t.method.pillars.map((p, i) => (
          <Reveal key={p.n} delay={i * 0.08} className="group border-t border-cyan/20 pt-8" >
            <div data-testid={`pillar-${p.n}`} className="transition-transform duration-300 group-hover:-translate-y-1">
              <span className="font-serif text-6xl sm:text-7xl text-cyan/80">{p.n}</span>
              <h3 className="mt-4 text-2xl sm:text-3xl font-medium tracking-tight text-white">{p.t}</h3>
              <p className="mt-3 text-base font-light leading-relaxed text-white/65 max-w-md">{p.d}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <Acronym t={t} />

      <Reveal delay={0.1} className="mt-16 border border-cyan/20 rounded-md p-8 lg:p-10 bg-white/[0.02]">
        <p className="text-sm uppercase tracking-[0.2em] text-cyan font-medium">{t.method.appliesLabel}</p>
        <p className="mt-3 text-base sm:text-lg font-light leading-relaxed text-white/75" data-testid="method-applies">{t.method.applies}</p>
      </Reveal>

      <div className="mt-24">
        <Reveal><Overline>{t.method.errorsOverline}</Overline></Reveal>
        <Reveal delay={0.08}>
          <h3 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-white">{t.method.errorsTitle}</h3>
        </Reveal>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.method.errors.map((e, i) => (
            <Reveal key={e.n} delay={i * 0.08}>
              <div data-testid={`error-card-${i + 1}`}
                className="h-full border border-white/10 rounded-md p-6 hover:border-cyan/40 hover:-translate-y-1 transition-all duration-300 bg-white/[0.02]">
                <p className="text-xs uppercase tracking-[0.2em] text-pinkbrand/90 font-medium">{e.n}</p>
                <h4 className="mt-3 text-lg font-semibold text-white leading-snug">{e.t}</h4>
                <p className="mt-2 text-sm font-light leading-relaxed text-white/60">{e.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  </section>
);
