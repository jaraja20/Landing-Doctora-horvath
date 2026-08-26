import { Reveal } from "../Reveal";
import { useLang } from "../../App";

export const PurposeBand = () => {
  const { t } = useLang();
  return (
    <section className="bg-navydeep text-white py-24 lg:py-32" data-testid="purpose-section">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        <Reveal>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight" data-testid="purpose-title">{t.purpose.title}</h2>
          <p className="mt-8 text-base sm:text-lg font-light leading-relaxed text-white/85 max-w-xl">{t.purpose.text}</p>
          <p className="mt-10 text-2xl sm:text-3xl font-light italic text-white/90" data-testid="purpose-tag">{t.purpose.tag}</p>
        </Reveal>
        <Reveal delay={0.15}>
          <img src="/assets/gallery/team-lab.jpg" alt="Equipo de Laboratorios Horvath"
            className="w-full rounded-md object-cover max-h-[420px]" data-testid="purpose-image" />
        </Reveal>
      </div>
    </section>
  );
};
