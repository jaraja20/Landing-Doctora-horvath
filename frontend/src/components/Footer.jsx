import { Instagram, Mail } from "lucide-react";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { useLang } from "../App";
import { WHATSAPP_URL, INSTAGRAM_URL, EMAIL } from "../i18n";

const socials = [
  { href: WHATSAPP_URL, label: "WhatsApp", Icon: WhatsAppIcon, id: "whatsapp" },
  { href: INSTAGRAM_URL, label: "Instagram", Icon: Instagram, id: "instagram" },
  { href: `mailto:${EMAIL}`, label: "Correo", Icon: Mail, id: "email" },
];

export const Footer = () => {
  const { t } = useLang();
  return (
    <footer className="bg-navydeep text-white py-16" data-testid="footer">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col sm:flex-row items-center justify-between gap-12">
        <div className="flex items-center gap-5">
          <span className="inline-flex bg-white rounded-full p-2 shrink-0">
            <img src="/assets/logo-stamp.png" alt="Dra. Gabriela Horvath" className="w-20 h-20 sm:w-24 sm:h-24" data-testid="footer-logo" />
          </span>
          <span className="leading-tight">
            <span className="block text-base font-bold text-white">{t.brand.name}</span>
            <span className="block text-xs text-white/60 mt-0.5">{t.brand.role}</span>
          </span>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-4">
          {socials.map(({ href, label, Icon, id }) => (
            <a key={id} href={href} target={id === "email" ? undefined : "_blank"} rel="noopener noreferrer" aria-label={label}
              data-testid={`footer-${id}-link`}
              className="inline-flex items-center gap-2.5 border border-white/25 rounded-full px-5 py-2.5 text-sm font-medium text-white/85 hover:bg-white hover:text-navydeep transition-colors duration-300">
              <Icon size={16} />
              {label}
            </a>
          ))}
        </div>
        <div className="text-center sm:text-right">
          <p className="text-sm text-white/75">{t.footer.location}</p>
          <p className="mt-1 text-xs text-white/45">{t.footer.rights}</p>
          <a href="https://www.tekohasystems.com" target="_blank" rel="noopener noreferrer" data-testid="footer-tekoha-credit"
            className="mt-2 inline-block text-xs text-white/45 hover:text-cyan underline underline-offset-4 decoration-white/20 hover:decoration-cyan transition-colors">
            {t.footer.credit}
          </a>
        </div>
      </div>
    </footer>
  );
};
