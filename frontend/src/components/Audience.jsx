import { Reveal, Overline } from "./Reveal";

export const Audience = ({ t }) => (
  <section className="bg-navydeep py-24 lg:py-32" data-testid="audience-section">
    <div className="max-w-7xl mx-auto px-6 lg:px-10">
      <Reveal><Overline>{t.audience.overline}</Overline></Reveal>
      <Reveal delay={0.08}>
        <h2 className="mt-4 text-4xl sm:text-5xl font-bold tracking-tight text-white max-w-3xl">{t.audience.title}</h2>
      </Reveal>
      <Reveal delay={0.14}>
        <p className="mt-6 font-serif italic text-xl sm:text-2xl text-cyanlight/90 max-w-2xl">{t.audience.lead}</p>
      </Reveal>
      <div className="mt-12 flex flex-wrap gap-4">
        {t.audience.pills.map((pill, i) => (
          <Reveal key={pill} delay={i * 0.06}>
            <span data-testid={`audience-pill-${i + 1}`}
              className="inline-block border border-white/20 rounded-full px-6 py-3.5 text-sm sm:text-base font-light text-white/80 hover:border-cyan hover:text-cyan transition-colors duration-300 cursor-default">
              {pill}
            </span>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
