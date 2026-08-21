import { Reveal } from "./Reveal";

export const Stats = ({ t }) => (
  <section className="bg-navydeep" data-testid="stats-section">
    <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-20 grid grid-cols-2 lg:grid-cols-4 gap-10 border-y border-white/10">
      {t.stats.map((s, i) => (
        <Reveal key={s.l} delay={i * 0.08}>
          <div data-testid={`stat-${i + 1}`}>
            <p className="font-serif text-5xl sm:text-6xl text-cyan">{s.v}</p>
            <p className="mt-3 text-sm uppercase tracking-[0.15em] text-white/60 font-light">{s.l}</p>
          </div>
        </Reveal>
      ))}
    </div>
  </section>
);
