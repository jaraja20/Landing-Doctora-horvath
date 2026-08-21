import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { WHATSAPP_URL } from "../i18n";

const waLink = (msg) => `${WHATSAPP_URL}?text=${encodeURIComponent(msg)}`;

export const Pricing = ({ t }) => (
  <section id="asesorias" className="bg-white text-black py-24 lg:py-32 font-display" data-testid="pricing-section">
    <div className="max-w-6xl mx-auto px-6 lg:px-10">
      <Reveal>
        <div className="flex items-stretch gap-5">
          <span className="w-1 bg-corp shrink-0" aria-hidden="true" />
          <div>
            <p className="text-xs sm:text-sm uppercase tracking-[0.25em] font-semibold text-corp">{t.pricing.overline}</p>
            <h2 className="mt-2 text-4xl sm:text-5xl font-bold tracking-tight" data-testid="pricing-title">{t.pricing.title}</h2>
          </div>
        </div>
      </Reveal>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-stretch">
        {t.pricing.tickets.map((ticket, i) => {
          const featured = i === 1;
          return (
            <Reveal key={ticket.title} delay={i * 0.12} className={`h-full ${featured ? "order-first md:order-none" : ""}`}>
              <div data-testid={`ticket-${i + 1}`}
                className={`relative h-full flex flex-col bg-white p-8 sm:p-10 ${featured ? "border-2 border-corp shadow-[0_30px_60px_-20px_rgba(24,24,255,0.28)]" : "border border-black/15"}`}>
                {featured && (
                  <span className="absolute -top-4 left-8 bg-corp text-white text-xs font-bold uppercase tracking-[0.2em] px-4 py-2" data-testid="ticket-badge">
                    {t.pricing.badge}
                  </span>
                )}
                <h3 className={`font-bold tracking-tight ${featured ? "text-2xl sm:text-3xl" : "text-xl sm:text-2xl"}`}>{ticket.title}</h3>
                <p className={`mt-6 font-bold leading-none ${featured ? "text-5xl sm:text-6xl text-corp" : "text-4xl sm:text-5xl"}`} data-testid={`ticket-price-${i + 1}`}>{ticket.price}</p>
                {ticket.note && <p className="mt-3 text-xs leading-relaxed text-black/55 max-w-xs" data-testid="ticket-note">{ticket.note}</p>}
                <p className="mt-4 text-sm uppercase tracking-[0.15em] text-black/60">{ticket.duration}</p>
                <p className="mt-6 text-sm sm:text-base leading-relaxed text-black/70">{ticket.desc}</p>
                <p className="mt-8 text-xs uppercase tracking-[0.2em] font-semibold text-black/50">{ticket.includesLabel}</p>
                <ul className="mt-4 flex flex-col gap-3 flex-1">
                  {ticket.includes.map((inc) => (
                    <li key={inc} className="flex items-start gap-3 text-sm sm:text-base text-black/80">
                      <span className="w-4 h-px bg-corp mt-[0.65em] shrink-0" aria-hidden="true" />
                      {inc}
                    </li>
                  ))}
                </ul>
                <a href={waLink(ticket.wa)} target="_blank" rel="noopener noreferrer" data-testid={`ticket-cta-${i + 1}`} aria-label={ticket.cta}
                  className={`mt-10 inline-flex items-center justify-center gap-2 font-bold text-sm uppercase tracking-[0.15em] px-8 py-4 transition-colors duration-300 ${featured ? "bg-corp text-white hover:bg-black" : "border border-black text-black hover:bg-black hover:text-white"}`}>
                  {ticket.cta} <ArrowUpRight size={16} strokeWidth={2} />
                </a>
              </div>
            </Reveal>
          );
        })}
      </div>
    </div>
  </section>
);
