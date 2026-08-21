import { useEffect, useState } from "react";
import Lenis from "lenis";
import "@/App.css";
import { copy } from "@/i18n";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { About } from "@/components/About";
import { Origin } from "@/components/Origin";
import { Method } from "@/components/Method";
import { Offer } from "@/components/Offer";
import { Pricing } from "@/components/Pricing";
import { Stats } from "@/components/Stats";
import { Authority } from "@/components/Authority";
import { Projects } from "@/components/Projects";
import { Audience } from "@/components/Audience";
import { Trajectory } from "@/components/Trajectory";
import { CtaFooter } from "@/components/CtaFooter";

function App() {
  const [lang, setLang] = useState("es");
  const t = copy[lang];

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.09 });
    let rafId;
    const raf = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);
    const onAnchor = (e) => {
      const a = e.target.closest("a[href^='#']");
      if (a) {
        const id = a.getAttribute("href");
        if (id.length > 1 && document.querySelector(id)) {
          e.preventDefault();
          lenis.scrollTo(id, { offset: -90 });
        }
      }
    };
    document.addEventListener("click", onAnchor);
    return () => {
      cancelAnimationFrame(rafId);
      document.removeEventListener("click", onAnchor);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="bg-navydeep min-h-screen" data-testid="landing-page">
      <div className="noise-overlay" aria-hidden="true" />
      <Navbar t={t} lang={lang} setLang={setLang} />
      <main>
        <Hero t={t} />
        <Marquee items={t.marquee} />
        <About t={t} />
        <Origin t={t} />
        <Method t={t} />
        <Offer t={t} />
        <Pricing t={t} />
        <Stats t={t} />
        <Authority t={t} />
        <Projects t={t} />
        <Audience t={t} />
        <Marquee items={t.marquee} slow dark />
        <Trajectory t={t} />
        <CtaFooter t={t} />
      </main>
    </div>
  );
}

export default App;
