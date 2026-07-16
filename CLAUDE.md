# CLAUDE.md

## Qué es esto
Prototipo clickable en UN SOLO index.html (+ data.js) de "Yoda · Nóminas":
el proyecto de nóminas dentro de Yoda, la herramienta interna de gestión
para los gestores laborales de la asesoría (Zinco AI, pymes, España).
Estructura calcada del módulo de contabilidad de Yoda: proyectos → filtro
por cliente → tablero Kanban con lo que tiene que hacer cada gestor.

## Usuarios
- Gestores laborales de la asesoría (María, Pedro, Nerea): llevan una
  cartera de pymes cada uno y trabajan con A3 o SAGE (que NO se sustituyen;
  Yoda orquesta alrededor). Su pregunta: "¿qué ciclo de nómina toca YA y
  qué me ha preparado el agente?"
- Dolores reales (de entrevistas): bajar/subir nóminas a Drive a mano,
  envío manual al cliente, cero avisos de convenios/vencimientos, todo
  llega por email sin estandarizar, control de nóminas en un Excel, FIE
  manual, y Yoda solo servía para reportar lo hecho.

## Reglas técnicas
- HTML + CSS + JS vanilla en index.html. Datos en data.js. SIN frameworks,
  SIN build, SIN npm. Google Fonts (Inter) por CDN, nada más (Chart.js
  solo si se pide un gráfico).
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
- Marca: wordmark de TEXTO "Yoda · Nóminas" (subtítulo "por Zinco AI") en
  el verde de marca, peso 700. NUNCA usar el archivo de logo real de Zinco.
- Español de España, terminología laboral real: IT, parte de confirmación,
  Sistema RED, RLC/RNT, pago delegado, fichero FIE, convenio, finiquito.
- Toda interacción "inteligente" (agente, avisos) usa datos pre-escritos
  de data.js; no hay backend.
- REALISMO OBLIGATORIO: toda feature debe tener un mecanismo real
  defendible (API de datos abiertos del BOE para convenios, carpetas de
  SILTRA para RLC/RNT, Gmail API para envíos, API de a3innuva para A3,
  carpeta vigilada para SAGE, fichero FIE para bajas). El panel "¿Cómo
  funciona?" de la UI y `comoFunciona` en data.js documentan cada una.
  No añadir promesas sin fuente.

## Qué NO hacer
- No añadir pantallas o features fuera de lo que se pida por prompt.
- No usar lorem ipsum ni datos genéricos: nombres, puestos e importes
  realistas y coherentes entre sí (brutos ↔ SS ↔ netos). El cliente
  estrella (Grupo Fuego Lento SL) cuadra al euro.
- No commitear ninguna key ni secreto, jamás.
