import { useEffect, useState, createContext, useContext } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Lenis from "lenis";
import "@/App.css";
import { copy } from "@/i18n";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";
import Home from "@/pages/Home";
import Trayectoria from "@/pages/Trayectoria";
import Precedent from "@/pages/Precedent";

export const LangContext = createContext({ t: copy.es, lang: "es", setLang: () => {} });
export const useLang = () => useContext(LangContext);

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    if (window.__lenis) window.__lenis.scrollTo(0, { immediate: true });
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export const scrollToId = (id) => {
  const el = document.querySelector(id);
  if (!el) return;
  if (window.__lenis) window.__lenis.scrollTo(el, { offset: -80 });
  else el.scrollIntoView({ behavior: "smooth" });
};

function App() {
  const [lang, setLang] = useState("es");
  const t = copy[lang];

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.09 });
    window.__lenis = lenis;
    let rafId;
    const raf = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);
    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      window.__lenis = null;
    };
  }, []);

  return (
    <LangContext.Provider value={{ t, lang, setLang }}>
      <BrowserRouter>
        <ScrollToTop />
        <div className="bg-white min-h-screen" data-testid="landing-page">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/trayectoria" element={<Trayectoria />} />
            <Route path="/precedent" element={<Precedent />} />
          </Routes>
          <Footer />
          <BackToTop />
        </div>
      </BrowserRouter>
    </LangContext.Provider>
  );
}

export default App;
