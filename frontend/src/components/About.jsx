import { FlaskConical, Atom, Layers, Activity, ShieldCheck } from "lucide-react";
import { Reveal, Overline } from "./Reveal";

const icons = [FlaskConical, Atom, Layers, Activity, ShieldCheck];

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
          <h2 className="mt-4 text-4xl sm:text-5xl font-bold tracking-tight text-navy" data-testid="about-title">{t.about.title}</h2>
          <p className="mt-3 text-base sm:text-lg font-semibold text-indigobrand" data-testid="about-subtitle">{t.about.subtitle}</p>
        </Reveal>
        <Reveal delay={0.14}>
          <p className="mt-6 font-serif italic text-xl sm:text-2xl leading-snug text-navy" data-testid="about-lead">{t.about.lead}</p>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-6 text-base font-light leading-relaxed text-[#555555]">{t.about.p1}</p>
          <p className="mt-4 text-base font-light leading-relaxed text-[#555555]">{t.about.p2}</p>
          <p className="mt-4 text-base font-light leading-relaxed text-[#555555]">{t.about.p3}</p>
        </Reveal>
        <Reveal delay={0.28}>
          <ul className="mt-9 flex flex-col gap-4">
            {t.about.credentials.map((c, i) => {
              const Icon = icons[i % icons.length];
              return (
                <li key={c} className="flex items-center gap-4" data-testid={`credential-${i + 1}`}>
                  <span className="w-11 h-11 rounded-xl bg-white border border-navy/10 shadow-sm flex items-center justify-center shrink-0">
                    <Icon size={18} strokeWidth={1.5} className="text-indigobrand" />
                  </span>
                  <span className="text-sm sm:text-base font-medium text-navydeep">{c}</span>
                </li>
              );
            })}
          </ul>
        </Reveal>
      </div>
    </div>
  </section>
);
