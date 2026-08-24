import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { Reveal, SectionTitle } from "../Reveal";
import { useLang } from "../../App";

export const TimelineHome = () => {
  const { t } = useLang();
  return (
    <section className="bg-[#F5F5F5] py-24 lg:py-32" data-testid="timeline-section">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <SectionTitle overline={t.timelineSum.overline} title={t.timelineSum.title} id="timeline-title" />

        <div className="mt-16 relative hidden lg:block">
          <div className="absolute top-[5px] left-0 right-0 h-px bg-black/15" aria-hidden="true" />
          <div className="grid grid-cols-5 gap-8">
            {t.timelineSum.items.map((item, i) => (
              <Reveal key={item.t} delay={i * 0.08}>
                <div data-testid={`timeline-item-${i + 1}`}>
                  <span className="block w-3 h-3 rounded-full bg-corp" aria-hidden="true" />
                  <h3 className="mt-5 text-sm font-semibold leading-snug text-black">{item.t}</h3>
                  <p className="mt-2 text-xs font-light leading-relaxed text-black/55">{item.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-12 lg:hidden relative pl-6">
          <div className="absolute left-[5px] top-2 bottom-2 w-px bg-black/15" aria-hidden="true" />
          <div className="flex flex-col gap-10">
            {t.timelineSum.items.map((item, i) => (
              <Reveal key={item.t} delay={i * 0.05}>
                <div className="relative" data-testid={`timeline-item-mobile-${i + 1}`}>
                  <span className="absolute -left-6 top-1.5 w-3 h-3 rounded-full bg-corp" aria-hidden="true" />
                  <h3 className="text-base font-semibold leading-snug text-black">{item.t}</h3>
                  <p className="mt-1.5 text-sm font-light leading-relaxed text-black/55">{item.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={0.2}>
          <Link to="/trayectoria" data-testid="timeline-full-link"
            className="mt-14 inline-flex items-center gap-1.5 text-sm font-semibold text-corp underline underline-offset-8 decoration-corp/40 hover:decoration-corp transition-all">
            {t.timelineSum.cta} <ArrowUpRight size={15} strokeWidth={2} />
          </Link>
        </Reveal>
      </div>
    </section>
  );
};
