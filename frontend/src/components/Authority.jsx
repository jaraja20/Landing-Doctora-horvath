import { Check } from "lucide-react";
import { Reveal, Overline } from "./Reveal";

export const Authority = ({ t }) => (
  <section className="bg-navydeep py-24 lg:py-32" data-testid="authority-section">
    <div className="max-w-7xl mx-auto px-6 lg:px-10">
      <Reveal><Overline>{t.authority.overline}</Overline></Reveal>
      <Reveal delay={0.08}>
        <h2 className="mt-4 text-4xl sm:text-5xl font-bold tracking-tight text-white max-w-3xl" data-testid="authority-title">{t.authority.title}</h2>
      </Reveal>
      <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-7">
        {t.authority.items.map((item, i) => (
          <Reveal key={i} delay={(i % 3) * 0.06}>
            <div data-testid={`authority-item-${i + 1}`} className="flex items-start gap-3">
              <Check size={18} strokeWidth={1.75} className="text-cyan shrink-0 mt-1" />
              <p className="text-sm sm:text-base font-light leading-relaxed text-white/75">{item}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
