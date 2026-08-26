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
- Sección "Sobre mí" reescrita (21 ago 2026) con info oficial de horvathcare.com/nosotros: Gabriela Horvath, CEO · Directora de Laboratorios Horvath, lead serif oficial, bio en 3 párrafos (ruta, Medigen/COVID, aplicación a project management) + lista de 5 credenciales con íconos (Doctora en Bioquímica, Máster Toxicología, Máster Dirección de Proyectos, Especialista Investigación Clínica Harvard, Perito Corte Suprema de Justicia). Foto bata blanca conservada.
- Nueva sección "El origen del método" (21 ago 2026): el contenido PRECEDENT™ que estaba en Sobre mí, ahora como hero oscuro full-bleed con imagen de laboratorio (Unsplash) + overlay degradado navy desde la izquierda, texto a la izquierda, cita serif cyan — estilo hero de horvathcare.com. Componente: /components/Origin.jsx. Historia familiar actualizada (fundación 1983, pionera en técnicas inmunológicas).
- Sección acrónimo PRECEDENT™ rediseñada estilo flyer oficial (21 ago 2026): panel BLANCO con la foto original de Gabriela (gabriela-white.jpg) fundiéndose con degradados hacia el blanco como el flyer, tiles azul brillante (#1818FF→índigo) con letras serif blancas que entran con springs escalonados, línea conectora con gradiente que se dibuja al hacer scroll, badge PRECEDENT™ navy sobre la foto, ghost "™" flotante, título y tagline con degradado azul→cyan. Componente: /components/Acronym.jsx.
- Links de prensa integrados (21 ago 2026): la trayectoria 2021-2022 ahora refleja su rol real confirmado por las fuentes (Project Manager y representante local de Medigen/Taiwán, primer Fase III del país, EUA DINAVISA 2022, publicación en revista Vaccine). Sección prensa suma "Cobertura completa" con links clicables: ABC Color, Informatepy (entrevista exclusiva), FCM-UNA (publicación en Vaccine), MSPBS (aprobación uso de emergencia). Pendiente: 2 share.google no abrieron (Informatepy "llegada de 2.000 dosis" y uno sin identificar), y un video de Facebook (403).

## Verificación (21 ago 2026)
- Backend /api/ responde OK; frontend 200.
- Screenshots: hero ES/EN, about, método, servicios, stats, trayectoria, CTA final — todas renderizan correctamente.
- Toggle EN cambia todo el copy; botones WhatsApp apuntan a wa.me/595971175353.

## REDISEÑO COMPLETO (24 ago 2026) — según "Horvath Correccion Landing Page.docx"
La versión anterior (oscura navy/cyan) fue REEMPLAZADA por la propuesta de referencia aprobada por Gabriela:
- Tema claro: fondo blanco, azul #1818FF, tipografía Poppins en todo el sitio (serif solo en tiles del acróstico), logo personal GH (SVG) en vez de "HORVATH".
- Multi-página con react-router: / (home), /trayectoria, /precedent. vercel.json ya tiene rewrites SPA.
- Home: hero (copy aprobado "Ciencia, estrategia y humanidad..." + retrato gabriela-white.jpg + badge CEO) → franja de autoridad (20+ años / Dr.+2 maestrías / Harvard / 40+ años legado) → "Más allá del diagnóstico" → 4 áreas de convergencia → timeline horizontal 5 hitos → banda azul "Liderar también es cuidar" → bloque breve PRECEDENT™ (4 pasos Diagnosticar·Estructurar·Ejecutar·Consolidar + manifiesto, sin precios) → Proyectos (Advanced Science Hub / Health Center / Salud Laboral 360° + stat 30.000+ pacientes pandemia, VERIFICADO por la clienta) → Contenido/prensa (4 links reales) → CTA final → footer © 2026.
- Menú desplegable "Proyectos y consultoría": PRECEDENT™ (Conocer el sistema), Consultoría rápida USD 350 (60 MIN — confirmado), Diagnóstico estratégico PRECEDENT™ USD 1.500. Desktop hover + mobile hamburguesa expandible.
- /trayectoria: bio ~90 palabras + inventario completo de credenciales del CV (5 categorías: formación académica, cargos, producción científica, formación ejecutiva, membresías) + galería de casos ejecutados.
- /precedent: origen + manifiesto + 4 pasos + acróstico completo (componente Acronym estilo flyer, reutilizado) + 4 errores + alcance (5 tipos de proyecto) + tickets de consultoría (componente Pricing reutilizado, 60 min).
- Eliminado: "Horvath Global Health Strategy™", announce bar, secciones oscuras viejas, "Trabajemos juntas" (tono voseo profesional), "método validado" → "marco de trabajo propio", Harvard wording corregido (FCR Program).
- Foto mvc-recruit.jpg: formularios de participantes DIFUMINADOS (privacidad, CRÍTICO 4).
- SEO: title, meta description, OG + JSON-LD schema Person.
- Sin LinkedIn por ahora (la clienta no tiene URL confirmada).
- EN: toggle ES/EN completo en las 3 páginas.

- Logos oficiales integrados (25 ago 2026): isotipo GH real (logo-gh.png) en navbar + favicon; sello circular "Dra. Gabriela Horvath" (logo-stamp.png) en footer. Crédito "Hecho por Tekoha Systems" con link a https://www.tekohasystems.com en el footer.

- Ajustes footer/CTA (25 ago 2026): footer y banda "Liderar también es cuidar" ahora en azul navy #000e46 (mismo azul del footer de horvathcare.com). Íconos sociales del footer como botones pill etiquetados (WhatsApp / Instagram / Correo) en blanco. Sello circular agrandado sobre círculo blanco. CTA final "Conversemos..." quedó SOLO con el botón Contactar (íconos sociales removidos de ahí).

- Botón "volver arriba" flotante (aparece al scrollear, círculo blanco con borde azul) + logo oficial de WhatsApp en todos los puntos de contacto (botón Contactar, pill del footer, ítem del menú desplegable) + sección "Conversemos sobre ciencia, salud e innovación" centrada (25 ago 2026).

- Footer refinado (25 ago 2026): sello circular recomponiendo la imagen para que llene todo el círculo blanco (era solo el anillo azul sobre transparencia); redes como links limpios ícono+texto sin píldoras (WhatsApp, Instagram, Correo).

- Correcciones de Gabriela (25 ago 2026): bio de Trayectoria reescrita en primera persona con lead "Ciencia, liderazgo y ejecución para transformar la salud."; membresías solo Harvard Alumni (AACC y ABA removidas — no activas); hito CAF: «Emprendiendo la tradición» seleccionado como mejor proyecto de Paraguay (Diplomado Gobernabilidad e Innovación Pública 2023) en Producción científica + certificado en galería (caf-cert.jpg); blur de mvc-recruit.jpg solo sobre las hojas con bordes suaves; footer vuelve a Asunción · Paraguay.

- Fix mobile (26 ago 2026): franja de autoridad tenía textos colisionando en 2 columnas (faltaba gap entre celdas en mobile) — agregado gap-x/gap-y. Revisión completa mobile de las 3 páginas: timeline, credenciales, acróstico, tickets — todo con separación correcta.

## Backlog priorizado
- P0: Definir precios/modalidad de los 3 servicios con Gabriela.
- P0: Revisión de copy línea por línea con Gabriela.
- P1: Testimonios reales (reincorporar sección LoveMarks cuando existan).
- P1: Más fotos reales de Instagram (equipo, certificado Harvard, TV) si la clienta las provee.
- P2: Formulario de contacto con backend + email (Resend) si se quiere más que WhatsApp.
- P2: Analítica (GA4) y dominio propio.

## Deploy (21 ago 2026)
- Preparado para Vercel: /app/frontend/vercel.json (installCommand yarn install, buildCommand yarn build, output build, rewrite SPA a index.html).
- Build de producción verificado: `yarn build` compila OK.
- Fix ERESOLVE en Vercel (21 ago 2026): date-fns fijado a ^3.6.0 (react-day-picker 8.10.1 no acepta v4) + installCommand yarn en vercel.json. Requiere pushear package.json + yarn.lock + vercel.json actualizados.
- deployment_agent: PASS (sin secretos hardcodeados, sin llamadas al backend — la landing es 100% estática).
- Pasos Vercel: importar repo → Root Directory = `frontend` → framework Create React App (autodetectado) → sin variables de entorno necesarias → Deploy.
- El backend FastAPI NO se deploya: no se usa (todo el contacto es WhatsApp). Si en el futuro se agrega formulario, deployar backend aparte (Railway/Render) y setear REACT_APP_BACKEND_URL en Vercel.

## Credenciales
- Sin autenticación. Landing pública. Ver /app/memory/test_credentials.md.
