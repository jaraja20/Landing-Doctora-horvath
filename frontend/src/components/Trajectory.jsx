import { Reveal, Overline } from "./Reveal";

export const Trajectory = ({ t }) => (
  <section id="trayectoria" className="bg-[#F2F2F2] text-navydeep py-24 lg:py-32" data-testid="trajectory-section">
    <div className="max-w-7xl mx-auto px-6 lg:px-10">
      <Reveal><Overline light>{t.journey.overline}</Overline></Reveal>
      <Reveal delay={0.08}>
        <h2 className="mt-4 text-4xl sm:text-5xl font-bold tracking-tight text-navy max-w-3xl">{t.journey.title}</h2>
      </Reveal>
      <Reveal delay={0.14}>
        <p className="mt-6 max-w-2xl text-base sm:text-lg font-light leading-relaxed text-[#555555]">{t.journey.lead}</p>
      </Reveal>

      <div className="mt-16 grid grid-cols-1 lg:grid-cols-5 gap-14 lg:gap-20 items-start">
        <div className="lg:col-span-2 lg:sticky lg:top-40">
          <Reveal>
            <img src="/assets/photo2.jpg" alt="Dra. Gabriela Horvath con el Tietz Textbook of Clinical Chemistry"
              className="w-full max-h-[70vh] object-cover object-top rounded-md shadow-2xl" data-testid="trajectory-image" />
            <p className="mt-4 text-xs uppercase tracking-[0.2em] text-[#555555]">{t.journey.photoCaption}</p>
          </Reveal>
        </div>
        <div className="lg:col-span-3 relative">
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-navy/15" aria-hidden="true" />
          <div className="flex flex-col gap-14">
            {t.journey.items.map((item, i) => (
              <Reveal key={item.year} delay={0.05} className="relative pl-10">
                <span className="absolute left-0 top-2 w-[15px] h-[15px] rounded-full border-2 border-cyan bg-[#F2F2F2]" aria-hidden="true" />
                <p className="font-serif italic text-lg text-indigobrand">{item.year}</p>
                <h3 className="mt-2 text-xl sm:text-2xl font-semibold tracking-tight text-navy" data-testid={`timeline-item-${i + 1}`}>{item.t}</h3>
                <p className="mt-2 text-base font-light leading-relaxed text-[#555555] max-w-xl">{item.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);
