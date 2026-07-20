# CLAUDE.md

## Qué es esto
Prototipo clickable en UN SOLO index.html (+ data.js) de "Yoda · Nóminas":
la pantalla de Nóminas de UN cliente dentro de Yoda, la herramienta interna
de gestión de la asesoría (Zinco AI, pymes, España). Vive dentro de la
navegación real de Yoda: Sidebar → Cliente → tab Laboral → Nóminas.
El criterio de producto está cerrado en `DECISIONES.md` (leer antes de tocar).

## Tesis (DECISIONES §0)
El valor no es que sea bonito: centraliza en Yoda un flujo que hoy son 5 pasos
en 4 herramientas (exportar → bajar → subir a Drive → subir a Yoda → enviar
uno a uno). Lo sustituye la cadena **exportar → verificar → enviar 1 clic, sin
salir de Yoda**. Regla de corte: si algo no sirve a esa cadena o a orientar
hacia ella, fuera.

## Usuarios (DECISIONES §6)
- Gestores laborales que trabajan con A3 o SAGE (que NO se sustituyen; Yoda
  orquesta alrededor). Dos perfiles: veterano (Fran/Manoli — necesita "esto
  es lo que toca" sin interpretar, lenguaje llano) y junior (Nerea/Mónica —
  quiere velocidad). Se optimiza para que ambos adopten; en conflicto real se
  desempata hacia el veterano sin penalizar al junior.

## Reglas técnicas
- HTML + CSS + JS vanilla en index.html. Datos en data.js. SIN frameworks,
  SIN build, SIN npm. Google Fonts (Geist, fallback Inter) por CDN.
- Debe funcionar abriendo el archivo con doble click (file://) Y en
  GitHub Pages. Rutas siempre relativas.
- Design tokens = los reales de Yoda (design skill de Yoda, DECISIONES §7).
  Usar SIEMPRE, jamás colores ad-hoc:
  --c-primary:#1C3829; --c-primary-hover:#2a4d3a;
  --c-bg-page:#F5F2EC; --c-bg-card:#FFFFFF; --c-bg-inner:#F7F7F5;
  --c-border:#E2E8F0; --c-text-1:#1C3829; --c-text-2:#64748B;
  --c-text-muted:#94A3B8; --c-badge-ok-bg:#DCFCE7; --c-badge-ok-txt:#166534;
  --c-urgent-bg:#FEE2E2; --c-urgent-txt:#DC2626; --c-amber-bg:#FEF3C7;
  radius 12px (cards) / 8px (botones); tipografía Geist (fallback Inter).
  Un único acento: #1C3829. Sin morados, azules ni otros verdes. Iconos SVG
  stroke fino (estilo lucide), sin fills. Fondo de página siempre crema,
  nunca blanco puro global. (Ojo: los verdes antiguos #3D6740 quedaron
  obsoletos con el rediseño.)
- Español de España, terminología laboral real: IT, parte de confirmación,
  Sistema RED, RLC/RNT, pago delegado, fichero FIE, convenio, finiquito.
- El resultado se nombra, no la tecnología: "Avisos importantes", nunca
  "agente/IA" en la UI (DECISIONES §4).
- Toda interacción usa datos pre-escritos de data.js; no hay backend.
- REALISMO (DECISIONES §5): los supuestos técnicos se muestran funcionando
  pero se nombran como hipótesis en el drawer "Hipótesis de integración"
  (`hipotesis` en data.js): SAGE/A3 → Yoda (carpeta vigilada / API a3innuva),
  Gmail vs Outlook, seguros sociales (misma hipótesis, fuera de alcance).
  Yoda NO calcula la nómina — eso es de A3/SAGE.

## Qué NO hacer
- No añadir pantallas o features fuera de DECISIONES.md (nada de
  insights/payments, nada de subtab de Seguros sociales, ningún contador de
  PM, ninguna mención a "agente/IA").
- No usar lorem ipsum ni datos genéricos: nombres, puestos e importes
  realistas y coherentes. El cálculo de Grupo Fuego Lento SL cuadra al euro
  (40.480 + 2.782 + 875 + 1.368 + 540 − 840 = 45.205 €).
- No commitear ninguna key ni secreto, jamás.
