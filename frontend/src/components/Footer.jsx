import { Linkedin, Facebook, Instagram, ArrowUpRight } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useLang, scrollToId } from "../App";
import { LINKEDIN_URL, FACEBOOK_URL, INSTAGRAM_URL, HORVATH_CARE } from "../i18n";

const socials = [
  { href: LINKEDIN_URL, label: "LinkedIn", Icon: Linkedin, id: "linkedin" },
  { href: FACEBOOK_URL, label: "Facebook", Icon: Facebook, id: "facebook" },
  { href: INSTAGRAM_URL, label: "Instagram", Icon: Instagram, id: "instagram" },
];

const linkClass = "text-sm text-white/75 hover:text-cyan transition-colors duration-300";

export const Footer = () => {
  const { t } = useLang();
  const navigate = useNavigate();
  const location = useLocation();

  const goPricing = () => {
    if (location.pathname !== "/precedent") {
      navigate("/precedent");
      setTimeout(() => scrollToId("#asesorias"), 400);
    } else {
      scrollToId("#asesorias");
    }
  };

  const goPress = () => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => scrollToId("#contenido"), 400);
    } else {
      scrollToId("#contenido");
    }
  };

  return (
    <footer className="bg-navydeep text-white py-16 lg:py-20" data-testid="footer">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-center gap-8">
          {socials.map(({ href, label, Icon, id }) => (
            <a key={id} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
              data-testid={`footer-${id}-link`}
              className="inline-flex items-center gap-2 text-sm font-medium text-white/75 hover:text-cyan transition-colors duration-300">
              <Icon size={17} strokeWidth={1.75} />
              {label}
            </a>
          ))}
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">
          <div className="grid grid-cols-2 gap-10 text-center md:text-left">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] font-semibold text-white/45">{t.footer.servicesTitle}</p>
              <ul className="mt-5 flex flex-col gap-3">
                <li>
                  <Link to="/precedent" data-testid="footer-link-precedent" className={linkClass}>
                    {t.footer.services.precedent}
                  </Link>
                </li>
                <li>
                  <a href={HORVATH_CARE} target="_blank" rel="noopener noreferrer" data-testid="footer-link-laboral" className={linkClass}>
                    {t.footer.services.laboral}
                  </a>
                </li>
                <li>
                  <a href={HORVATH_CARE} target="_blank" rel="noopener noreferrer" data-testid="footer-link-diagnostico" className={linkClass}>
                    {t.footer.services.diagnostico}
                  </a>
                </li>
                <li>
                  <a href={HORVATH_CARE} target="_blank" rel="noopener noreferrer" data-testid="footer-link-hub" className={linkClass}>
                    {t.footer.services.hub}
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] font-semibold text-white/45">{t.footer.infoTitle}</p>
              <ul className="mt-5 flex flex-col gap-3">
                <li>
                  <Link to="/trayectoria" data-testid="footer-link-trayectoria" className={linkClass}>
                    {t.footer.info.trayectoria}
                  </Link>
                </li>
                <li>
                  <button onClick={goPress} data-testid="footer-link-prensa" className={linkClass}>
                    {t.footer.info.prensa}
                  </button>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center md:text-left md:border-l md:border-white/10 md:pl-16">
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight" data-testid="footer-closing-title">{t.footer.closing.title}</h3>
            <p className="mt-3 text-sm sm:text-base text-white/70 max-w-md mx-auto md:mx-0">{t.footer.closing.text}</p>
            <button onClick={goPricing} data-testid="footer-closing-cta"
              className="mt-7 inline-flex items-center gap-2 bg-white text-navydeep text-sm font-semibold rounded-full px-7 py-3.5 hover:bg-cyan transition-colors duration-300">
              {t.footer.closing.button} <ArrowUpRight size={16} strokeWidth={2} />
            </button>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <img src="/assets/logo-stamp.png" alt="Dra. Gabriela Horvath" className="w-12 h-12 rounded-full ring-1 ring-white/15" data-testid="footer-logo" />
            <p className="text-xs text-white/60">{t.footer.location}</p>
          </div>
          <p className="text-xs text-white/45">{t.footer.rights}</p>
          <a href="https://www.tekohasystems.com" target="_blank" rel="noopener noreferrer" data-testid="footer-tekoha-credit"
            className="text-xs text-white/45 hover:text-cyan underline underline-offset-4 decoration-white/20 hover:decoration-cyan transition-colors">
            {t.footer.credit}
          </a>
        </div>
      </div>
    </footer>
  );
};
