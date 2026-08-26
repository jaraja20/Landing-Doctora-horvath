import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { Reveal, SectionTitle } from "../Reveal";
import { useLang } from "../../App";

export const PrecedentBrief = () => {
  const { t } = useLang();
  return (
    <section className="bg-white py-24 lg:py-32" data-testid="precedent-brief">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <SectionTitle overline={t.brief.overline} title={t.brief.title} id="brief-title" />
        <Reveal delay={0.1}>
          <p className="mt-8 max-w-2xl text-base sm:text-lg font-light leading-relaxed text-black/60">{t.brief.lead}</p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.brief.steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.08} className="h-full">
              <div data-testid={`brief-step-${i + 1}`}
                className="h-full border border-black/10 p-7 hover:border-corp/50 hover:-translate-y-1 transition-all duration-300 bg-white">
                <p className="text-3xl font-bold text-corp">{s.n}</p>
                <h3 className="mt-5 text-lg font-semibold text-black">{s.t}</h3>
                <p className="mt-3 text-sm font-light leading-relaxed text-black/55">{s.d}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15}>
          <div className="mt-16 border-l-4 border-corp pl-6 max-w-3xl" data-testid="brief-manifesto">
            <p className="text-2xl sm:text-3xl font-light leading-snug text-black">{t.brief.manifesto}</p>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <Link to="/precedent" data-testid="brief-cta"
            className="mt-10 inline-flex items-center gap-1.5 text-sm font-semibold text-corp underline underline-offset-8 decoration-corp/40 hover:decoration-corp transition-all">
            {t.brief.cta} <ArrowUpRight size={15} strokeWidth={2} />
          </Link>
        </Reveal>
      </div>
    </section>
  );
};
