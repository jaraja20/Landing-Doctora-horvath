import { ArrowUpRight } from "lucide-react";
import { Reveal, Overline } from "./Reveal";

export const Projects = ({ t }) => (
  <section id="proyectos" className="bg-navydeep py-24 lg:py-32" data-testid="projects-section">
    <div className="max-w-7xl mx-auto px-6 lg:px-10">
      <Reveal><Overline>{t.projects.overline}</Overline></Reveal>
      <Reveal delay={0.08}>
        <h2 className="mt-4 text-4xl sm:text-5xl font-bold tracking-tight text-white max-w-3xl">{t.projects.title}</h2>
      </Reveal>
      <Reveal delay={0.14}>
        <p className="mt-6 max-w-2xl text-base sm:text-lg font-light leading-relaxed text-white/70">{t.projects.lead}</p>
      </Reveal>

      <div className="mt-14 columns-1 sm:columns-2 lg:columns-3 gap-6 [column-fill:balance]">
        {t.projects.items.map((item, i) => (
          <Reveal key={item.img} delay={(i % 3) * 0.06} className="break-inside-avoid mb-8">
            <figure data-testid={`project-${i + 1}`} className="group">
              <div className="overflow-hidden rounded-md border border-white/10">
                <img src={item.img} alt={item.cap} loading="lazy"
                  className="w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]" />
              </div>
              <figcaption className="mt-3 text-xs sm:text-sm font-light leading-relaxed text-white/60">{item.cap}</figcaption>
            </figure>
          </Reveal>
        ))}
      </div>

      <div className="mt-24">
        <Reveal><Overline>{t.projects.pressOverline}</Overline></Reveal>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {t.projects.press.map((p, i) => (
            <Reveal key={p.outlet} delay={i * 0.08}>
              <figure data-testid={`press-${i + 1}`} className="group bg-white rounded-md p-4 h-full flex flex-col">
                <div className="overflow-hidden rounded-sm">
                  <img src={p.img} alt={`${p.outlet} — ${p.headline}`} loading="lazy"
                    className="w-full aspect-[4/3] object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.02]" />
                </div>
                <p className="mt-4 text-[11px] uppercase tracking-[0.25em] font-semibold text-navy">{p.outlet}</p>
                <figcaption className="mt-2 font-serif text-lg leading-snug text-navydeep">{p.headline}</figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.1}>
          <div className="mt-10 flex flex-col gap-4">
            <p className="text-xs uppercase tracking-[0.25em] text-white/50">{t.projects.pressLinksLabel}</p>
            {t.projects.pressLinks.map((l, i) => (
              <a key={l.url} href={l.url} target="_blank" rel="noopener noreferrer" data-testid={`press-link-${i + 1}`}
                className="group inline-flex flex-wrap items-baseline gap-x-3 gap-y-1 text-sm sm:text-base text-white/70 hover:text-cyanlight transition-colors duration-300">
                <ArrowUpRight size={15} strokeWidth={1.75} className="text-cyan shrink-0 translate-y-0.5" />
                <span className="font-semibold text-white">{l.outlet}</span>
                <span className="font-light group-hover:underline underline-offset-4">{l.title}</span>
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </div>
  </section>
);
