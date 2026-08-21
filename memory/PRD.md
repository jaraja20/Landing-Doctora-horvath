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
- Hero kinético con reveal línea por línea + parallax scroll (foto real de laboratorio). Titular oficial: "Los proyectos en salud no fracasan por falta de ciencia. Fracasan por falta de estructura."
- Marquee con los 4 pilares (Estructurar • Alinear • Ejecutar • Consolidar).
- Sobre mí (foto bata blanca + cita serif + tags de credenciales: Máster Dir. Ejecutiva de Proyectos, Harvard, MSc Toxicología España).
- Método PRECEDENT™: 4 pilares numerados 01-04 + desglose del acrónimo P-R-E-C-E-D-E-N-T (9 letras, del PDF oficial) + "se aplica en" + 4 errores.
- ¿Qué ofrecemos? (6 tarjetas) + Experiencias (3 servicios, CTA "Consultar →" a WhatsApp).
- Stats: +40 años, 80% mujeres, Fase III, Harvard.
- Autoridad demostrada: 12 logros del PDF oficial (CT-COV-31/34, +1.000 participantes, AUE, ensayo Solidarity OMS, laboratorio aeropuerto, GCP-ICH, Fundación Tesãi, etc.).
- Para quién es (pills de audiencia).
- Trayectoria (timeline sticky con foto libro Harvard).
- CTA final cyan + footer con WhatsApp/Instagram/mail.
- SEO básico: title, meta description, OG tags, favicon SVG "H".
- data-testid en todos los elementos interactivos.
- Contenido alineado al PDF oficial "HORVATH GLOBAL HEALTH STRATEGY" (21 ago 2026): taglines, historia de origen MVC, acrónimo, logros, credenciales.
- Sección "Asesorías estratégicas" con 2 tickets con precio (brief de la doctora, 21 ago 2026): Conversación Estratégica USD 350 / Evaluación de Viabilidad USD 1.500 (destacada, "Recomendado"). Identidad propia de la sección: Poppins, azul #1818FF, fondo blanco. CTAs a WhatsApp con mensaje prellenado por ticket.
- Autoridad demostrada ampliada a 15 hitos (21 ago 2026): único lab en exportar muestras humanas a −180°C, pliego DINAVISA, único en procesar stem cells, primer estudio Fase III publicado en Paraguay (Medigen/FCM-UNA).
- Sección "Proyectos" (21 ago 2026): galería editorial masonry con 9 fotos reales (kickoff MVC Fase III FCM-UNA×Medigen, reclutamiento 1.000 participantes, vocería Fundación Tesãi/Itaipú, delegación Corea del Sur, reactivos in vitro, tanque de nitrógeno Marken −180°C, puesto COVID aeropuerto Silvio Pettirossi, equipo 80% mujeres, lab alta complejidad) + franja "En los medios" con recortes reales de La Nación, Última Hora y ABC Color. Fotos en /frontend/public/assets/gallery/.
- NOTA: 1 foto del RAR salió corrupta (0 bytes): "Mejor proyecto por la caf por Py.jpeg" — pedir reenvío si se quiere usar.
- Sección acrónimo PRECEDENT™ rediseñada estilo flyer oficial (21 ago 2026): tiles azul brillante (#1818FF→índigo) con letras serif blancas que entran con springs escalonados, línea conectora con gradiente que se dibuja al hacer scroll, foto de Gabriela con marco glow + badge PRECEDENT™ + parallax, ghost "™" flotante, glows de fondo, título y tagline con "PRECEDENT™" / "Integra el sistema completo" en degradado azul→cyan. Componente: /components/Acronym.jsx.
- Links de prensa integrados (21 ago 2026): la trayectoria 2021-2022 ahora refleja su rol real confirmado por las fuentes (Project Manager y representante local de Medigen/Taiwán, primer Fase III del país, EUA DINAVISA 2022, publicación en revista Vaccine). Sección prensa suma "Cobertura completa" con links clicables: ABC Color, Informatepy (entrevista exclusiva), FCM-UNA (publicación en Vaccine), MSPBS (aprobación uso de emergencia). Pendiente: 2 share.google no abrieron (Informatepy "llegada de 2.000 dosis" y uno sin identificar), y un video de Facebook (403).

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

## Deploy (21 ago 2026)
- Preparado para Vercel: /app/frontend/vercel.json (buildCommand yarn build, output build, rewrite SPA a index.html).
- Build de producción verificado: `yarn build` compila OK en ~26s.
- deployment_agent: PASS (sin secretos hardcodeados, sin llamadas al backend — la landing es 100% estática).
- Pasos Vercel: importar repo → Root Directory = `frontend` → framework Create React App (autodetectado) → sin variables de entorno necesarias → Deploy.
- El backend FastAPI NO se deploya: no se usa (todo el contacto es WhatsApp). Si en el futuro se agrega formulario, deployar backend aparte (Railway/Render) y setear REACT_APP_BACKEND_URL en Vercel.

## Credenciales
- Sin autenticación. Landing pública. Ver /app/memory/test_credentials.md.
