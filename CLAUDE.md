# CLAUDE.md

## Qué es esto
Prototipo clickable en UN SOLO index.html (+ data.js) de un dashboard
laboral para Zinco AI (asesoría estratégica para pymes, España).
Dos vistas con toggle: ASESOR laboral (principal) y CLIENTE (CEO pyme).
Construido para una entrevista de AI Product Manager.

## Usuarios
- Asesor laboral Zinco: lleva ~40 empresas; necesita bandeja priorizada
  por plazos legales, no un ERP. Su pregunta: "¿qué toca YA?"
- CEO de pyme hostelera (24 empleados): no sabe de laboral; su pregunta:
  "¿está todo bien o me tengo que preocupar?"

## Reglas técnicas
- HTML + CSS + JS vanilla en index.html. Datos en data.js. SIN frameworks,
  SIN build, SIN npm. Chart.js y Google Fonts (Inter) por CDN, nada más.
- Debe funcionar abriendo el archivo con doble click (file://) Y en
  GitHub Pages. Rutas siempre relativas.
- Design tokens (usar SIEMPRE, jamás colores ad-hoc):
  --zinco-green:#3D6740; --zinco-green-dark:#2C4A2E;
  --zinco-green-tint:#E9F0EA; --bg-page:#F7F8F7; --bg-card:#FFFFFF;
  --ok:#3D6740; --warn:#B45309; --warn-bg:#FEF3C7;
  --alert:#B91C1C; --alert-bg:#FEE2E2;
  --text:#1B1F1B; --text-soft:#5F6B60; --line:#E4E8E4;
  --radius:14px; --font:'Inter',system-ui,sans-serif;
  Estilo: cards blancas sobre fondo casi-blanco, sombras suaves, números
  grandes con etiquetas pequeñas en gris, estados con icono + texto
  ("✓ Comunicada a SS"), densidad media con aire, mobile-friendly.
- Marca: wordmark de TEXTO "Zinco · Laboral" en el verde de marca,
  peso 700. NUNCA usar el archivo de logo real de Zinco.
- Español de España, terminología laboral real: IT, parte de confirmación,
  Sistema RED, RLC, pago delegado, convenio de hostelería, finiquito.
- El chat usa siempre respuestas pre-escritas.

## Qué NO hacer
- No añadir pantallas o features fuera de lo que se pida por prompt.
- No usar lorem ipsum ni datos genéricos: nombres, puestos e importes
  realistas de hostelería, coherentes entre sí (brutos ↔ SS ↔ netos).
- No commitear ninguna key ni secreto, jamás.
