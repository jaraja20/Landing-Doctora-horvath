import { Reveal, Overline, SectionTitle } from "@/components/Reveal";
import { useLang } from "../App";

export default function Trayectoria() {
  const { t } = useLang();
  return (
    <main className="bg-white pt-32 lg:pt-40" data-testid="trayectoria-page">
      <section className="max-w-7xl mx-auto px-6 lg:px-10 pb-16">
        <Reveal><Overline>{t.traj.overline}</Overline></Reveal>
        <Reveal delay={0.08}>
          <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-black max-w-4xl" data-testid="trayectoria-title">
            {t.traj.title}
          </h1>
          <span className="mt-6 block w-12 h-1 bg-corp" aria-hidden="true" />
        </Reveal>
        <Reveal delay={0.16}>
          <p className="mt-10 max-w-3xl text-xl sm:text-2xl font-semibold uppercase tracking-wide leading-snug text-black" data-testid="trayectoria-bio-lead">
            {t.traj.bioLead}
          </p>
          <p className="mt-6 max-w-3xl text-lg sm:text-xl font-light leading-relaxed text-black/65" data-testid="trayectoria-bio">
            {t.traj.bio1}
          </p>
          <p className="mt-4 max-w-3xl text-lg sm:text-xl font-light leading-relaxed text-black/65">
            {t.traj.bio2}
          </p>
        </Reveal>
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-10 pb-24 flex flex-col gap-16" data-testid="credentials-section">
        {t.traj.categories.map((cat, ci) => (
          <Reveal key={cat.t} delay={0.05}>
            <div data-testid={`credential-category-${ci + 1}`}>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-black">{cat.t}</h2>
              <span className="mt-3 block w-10 h-0.5 bg-corp" aria-hidden="true" />
              <ul className="mt-8 divide-y divide-black/[0.06] border-y border-black/[0.06]">
                {cat.items.map((item, i) => (
                  <li key={item.r} className="py-5 flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-8" data-testid={`credential-${ci + 1}-${i + 1}`}>
                    <span className="sm:w-2/5 shrink-0 font-semibold text-black leading-snug">{item.r}</span>
                    <span className="text-sm font-light leading-relaxed text-black/55">{item.o}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </section>

      <section className="bg-[#F5F5F5] py-24" data-testid="gallery-section">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <SectionTitle overline={t.traj.galleryOverline} title={t.traj.galleryTitle} id="gallery-title" />
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.traj.gallery.map((item, i) => (
              <Reveal key={item.img} delay={(i % 3) * 0.06}>
                <figure data-testid={`gallery-item-${i + 1}`} className="group">
                  <div className="overflow-hidden rounded-md border border-black/10">
                    <img src={item.img} alt={item.cap} loading="lazy"
                      className="w-full aspect-[4/3] object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.03]" />
                  </div>
                  <figcaption className="mt-3 text-xs font-light leading-relaxed text-black/55">{item.cap}</figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
