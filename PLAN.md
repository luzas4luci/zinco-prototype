# PLAN.md — Arquitectura del prototipo

Prototipo "Yoda · Nóminas" v2 (post-entrevistas): herramienta interna de
los gestores laborales (un solo `index.html` + `data.js`). Fecha simulada:
11 de julio de 2026.

REGLA DE ORO (v2): toda feature mostrada tiene un mecanismo real detrás
(API del BOE, carpetas de SILTRA, Gmail API, API de a3innuva, carpeta
vigilada para SAGE). El panel "¿Cómo funciona?" del pie lo documenta en
la propia UI. No se promete nada sin fuente.

## Topbar
- Wordmark de texto "Yoda · Nóminas — por Zinco AI".
- Pulso de sincronización con el Sistema RED (dato vivo).
- Botón **Avisos** (con badge) y botón **Bandeja del agente** (con badge).

## Nav de proyectos (como el módulo de contabilidad de Yoda)
- Nóminas (activo) · Contabilidad · Fiscal · Mercantil ("próximamente").

## Subtabs del proyecto (v2)
- **Nóminas** (el foco): cinta del día + Kanban.
- **Seguros sociales**: tabla por cliente — RLC/RNT importado desde la
  carpeta de SILTRA ✓ → enviado al cliente por Gmail ✓/pendiente, con
  envío individual y masivo ("Enviar pendientes (n) por Gmail").

## Cinta del día (v2 — "estás a día 11, ¿qué toca hoy?")
- Línea temporal del mes con los hitos del ciclo (1-5 variables ·
  20 impuestos · 21-24 cálculo · 25-28 envío y pago · 29-31 RLC/RNT),
  marcador HOY y lista "hoy toca".

## Tablero Kanban del ciclo mensual (pieza central)
- Columnas = fases del ciclo: **Variables e incidencias → Cálculo →
  Revisión → Envío al cliente → Cerrada**.
- Tarjetas = empresa cliente × Julio 2026 (9 empresas, 3 gestores).
- Filtros por gestor, cliente, estado (⚠ críticas / en curso /
  ✓ finalizadas) y buscador de texto. Contadores-resumen y línea de valor
  ("incidencias preparadas hoy por el agente").
- Cada tarjeta: sector, empleados, gestor, herramienta (A3/SAGE), semáforo
  SLA por plazo legal, bloqueo con "pelota" (cliente/mutua/SS) y contador
  de incidencias. Botón "Pasar fase →" (sin drag&drop, más fiable en demo).

## Modal de detalle de cliente
- Cifras del mes (bruto / SS empresa / neto) y, en el cliente estrella
  (Grupo Fuego Lento SL), la variación de julio explicada al euro (+4.725 €).
- Checklist estandarizada del ciclo.
- Control de nóminas: incidencias con chip de origen (Email / FIE / RED /
  Convenio) — sustituye el Excel manual.
- Documentos guardados automáticamente en Drive (dolor nº 1 de las notas).
- Botón "Enviar nóminas + resumen al cliente"; si el envío automático está
  disponible y sin usar, se destaca (problema de visibilidad detectado).

## Bandeja del agente (drawer)
- "El agente ha leído el buzón esta noche a las 23:00": correos y ficheros
  FIE ya analizados, con categoría (altas y bajas / variables / envíos) y
  propuesta accionable en 1 clic; la incidencia se añade al control del
  cliente y suma minutos al registro de facturación.

## Avisos (drawer)
- Convenio nuevo publicado, fin de contrato temporal, pago delegado en el
  RLC, caducidad de certificado digital, recurrentes ("los SS de junio se
  envían el lunes" → abre el tab de Seguros sociales) y cambios internos
  del equipo (visibilidad). Cada aviso lleva su CTA.

## Panel "¿Cómo funciona?" (drawer, v2)
- Enlace discreto en el pie. Lista cada promesa con su mecanismo real y
  su fuente (BOE datos abiertos, SILTRA, Gmail API, a3developers, carpeta
  vigilada, FIE) y cierra con "lo que Yoda NO hace" (calcular la nómina).

## Pie
- "Tiempo registrado automáticamente desde el correo y las llamadas":
  nadie reporta a mano (respuesta al problema de adopción de Yoda).
  Los toasts de cada acción suman "+N min registrados".
