# PRD — Landing Dra. Gabriela Horvath (PRECEDENT™)

## Problem statement original
"Tengo que hacer una landing page para una doctora que ofrece servicios de project manager, si instagram es https://www.instagram.com/dra_gabrielahorvath/, podes sacar info de sus publicaciones, que tienen varias fotos, hice un pequeno html como modelo. La clienta me dijo que le gustaba esta pagina como se estructuraba https://ruthvera.com/, para poder replicar o inspirarse"

## Decisiones del usuario (21 ago 2026)
- Testimonios (LoveMarks): sección OCULTA (no inventar testimonios).
- Precios de servicios: SIN precio, CTA "Consultar" a WhatsApp.
- Contacto: botón WhatsApp → +595 971 175353 (wa.me/595971175353). Sin formulario.
- Fotos: 3 reales extraídas del HTML modelo (lab/microscopio, bata blanca, libro Harvard) en /frontend/public/assets/.
- Idiomas: Español + Inglés (toggle ES/EN funcional).
- Tono: sobrio/premium según brandbook (navy #001871, navy deep #000c3d, cyan #3CCBDA, Onest + Source Serif 4).

## Arquitectura
- Frontend: React (CRA/craco), Tailwind, framer-motion, lenis (smooth scroll). Sin dependencia de backend para el contenido.
- Backend: FastAPI template intacto (solo health check /api/). MongoDB disponible si se agrega formulario después.
- i18n: diccionario completo ES/EN en /app/frontend/src/i18n.js.

## Personas
- Dueña: Dra. Gabriela Horvath — Health Systems Strategist, CEO Laboratorios Horvath.
- Visitantes: farmacéuticas, biotech, diagnóstico in vitro, inversores en salud.

## Implementado (21 ago 2026)
- Hero kinético con reveal línea por línea + parallax scroll (foto real de laboratorio).
- Marquee con los 4 pilares (Estructurar • Alinear • Ejecutar • Consolidar).
- Sobre mí (foto bata blanca + cita serif + tags).
- Método PRECEDENT™ (4 pilares numerados 01-04 + "se aplica en" + 4 errores).
- ¿Qué ofrecemos? (6 tarjetas) + Experiencias (3 servicios, CTA "Consultar →" a WhatsApp).
- Stats: +40 años, 80% mujeres, Fase III, Harvard.
- Para quién es (pills de audiencia).
- Trayectoria (timeline sticky con foto libro Harvard).
- CTA final cyan + footer con WhatsApp/Instagram/mail.
- SEO básico: title, meta description, OG tags, favicon SVG "H".
- data-testid en todos los elementos interactivos.

## Verificación (21 ago 2026)
- Backend /api/ responde OK; frontend 200.
- Screenshots: hero ES/EN, about, método, servicios, stats, trayectoria, CTA final — todas renderizan correctamente.
- Toggle EN cambia todo el copy; botones WhatsApp apuntan a wa.me/595971175353.

## Backlog priorizado
- P0: Definir precios/modalidad de los 3 servicios con Gabriela.
- P0: Revisión de copy línea por línea con Gabriela.
- P1: Testimonios reales (reincorporar sección LoveMarks cuando existan).
- P1: Más fotos reales de Instagram (equipo, certificado Harvard, TV) si la clienta las provee.
- P2: Formulario de contacto con backend + email (Resend) si se quiere más que WhatsApp.
- P2: Analítica (GA4) y dominio propio.

## Credenciales
- Sin autenticación. Landing pública. Ver /app/memory/test_credentials.md.
