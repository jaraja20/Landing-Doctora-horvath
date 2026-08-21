import { Reveal, Overline } from "./Reveal";

const BG_IMAGE = "https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=1920&auto=format&fit=crop";

export const Origin = ({ t }) => (
  <section className="relative overflow-hidden bg-navydeep" data-testid="origin-section">
    <img src={BG_IMAGE} alt="" aria-hidden="true"
      className="absolute inset-0 w-full h-full object-cover" data-testid="origin-image" />
    <div className="absolute inset-0 bg-navydeep/70" aria-hidden="true" />
    <div className="absolute inset-0 bg-gradient-to-r from-navydeep via-navydeep/85 to-navydeep/25" aria-hidden="true" />
    <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-24 lg:py-36">
      <Reveal><Overline>{t.origin.overline}</Overline></Reveal>
      <Reveal delay={0.08}>
        <h2 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white max-w-2xl" data-testid="origin-title">
          {t.origin.title}
        </h2>
      </Reveal>
      <Reveal delay={0.16}>
        <p className="mt-8 max-w-xl text-base sm:text-lg font-light leading-relaxed text-white/85">{t.origin.p1}</p>
        <p className="mt-4 max-w-xl text-base sm:text-lg font-light leading-relaxed text-white/85">{t.origin.p2}</p>
      </Reveal>
      <Reveal delay={0.24}>
        <blockquote className="mt-10 border-l-2 border-cyan pl-6 font-serif italic text-xl sm:text-2xl leading-snug text-cyanlight max-w-xl" data-testid="origin-quote">
          “{t.origin.quote}”
        </blockquote>
      </Reveal>
      <Reveal delay={0.3}>
        <p className="mt-10 max-w-xl text-base font-light leading-relaxed text-white/65">{t.origin.p3}</p>
      </Reveal>
    </div>
  </section>
);
