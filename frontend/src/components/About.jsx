import { Reveal, Overline } from "./Reveal";

export const About = ({ t }) => (
  <section id="sobre-mi" className="bg-[#F2F2F2] text-navydeep py-24 lg:py-32" data-testid="about-section">
    <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-24 items-center">
      <Reveal className="relative">
        <div className="absolute -top-6 -left-6 w-40 h-40 rounded-full bg-cyan/25 blur-2xl" aria-hidden="true" />
        <div className="absolute -bottom-8 -right-8 w-56 h-56 rounded-full bg-indigobrand/15 blur-3xl" aria-hidden="true" />
        <img src="/assets/photo3.jpg" alt="Dra. Gabriela Horvath con bata de Laboratorios Horvath"
          className="relative w-full max-h-[78vh] object-cover object-top rounded-md shadow-2xl" data-testid="about-image" />
      </Reveal>
      <div>
        <Reveal><Overline light>{t.about.overline}</Overline></Reveal>
        <Reveal delay={0.08}>
          <h2 className="mt-4 text-4xl sm:text-5xl font-bold tracking-tight text-navy">{t.about.title}</h2>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="mt-6 text-base sm:text-lg font-light leading-relaxed text-[#555555]">{t.about.p1}</p>
          <p className="mt-4 text-base sm:text-lg font-light leading-relaxed text-[#555555]">{t.about.p2}</p>
        </Reveal>
        <Reveal delay={0.22}>
          <blockquote className="mt-8 border-l-2 border-cyan pl-6 font-serif italic text-xl sm:text-2xl text-navy" data-testid="about-quote">
            “{t.about.quote}”
          </blockquote>
        </Reveal>
        <Reveal delay={0.28}>
          <p className="mt-6 text-base font-light leading-relaxed text-[#555555]">{t.about.p3}</p>
        </Reveal>
        <Reveal delay={0.34}>
          <div className="mt-8 flex flex-wrap gap-3">
            {t.about.tags.map((tag) => (
              <span key={tag} className="text-xs uppercase tracking-widest border border-navy/20 text-navy rounded-full px-4 py-2">{tag}</span>
            ))}
          </div>
        </Reveal>
      </div>
    </div>
  </section>
);
