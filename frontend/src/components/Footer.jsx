import { Instagram, Mail, MessageCircle } from "lucide-react";
import { GhLogo } from "./GhLogo";
import { useLang } from "../App";
import { WHATSAPP_URL, INSTAGRAM_URL, EMAIL } from "../i18n";

export const Footer = () => {
  const { t } = useLang();
  return (
    <footer className="bg-white border-t border-black/[0.06] py-14" data-testid="footer">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col sm:flex-row items-center sm:items-start justify-between gap-10">
        <div className="flex items-center gap-3">
          <GhLogo size={46} />
          <span className="leading-tight">
            <span className="block text-sm font-bold text-black">{t.brand.name}</span>
            <span className="block text-[11px] text-black/50">{t.brand.role}</span>
          </span>
        </div>
        <div className="flex items-center gap-6">
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" data-testid="footer-whatsapp-link"
            className="text-black/40 hover:text-corp transition-colors"><MessageCircle size={19} strokeWidth={1.5} /></a>
          <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" aria-label="Instagram" data-testid="footer-instagram-link"
            className="text-black/40 hover:text-corp transition-colors"><Instagram size={19} strokeWidth={1.5} /></a>
          <a href={`mailto:${EMAIL}`} aria-label="Email" data-testid="footer-email-link"
            className="text-black/40 hover:text-corp transition-colors"><Mail size={19} strokeWidth={1.5} /></a>
        </div>
        <div className="text-center sm:text-right">
          <p className="text-sm text-black/60">{t.footer.location}</p>
          <p className="mt-1 text-xs text-black/40">{t.footer.rights}</p>
        </div>
      </div>
    </footer>
  );
};
