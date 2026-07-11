# PLAN.md — Arquitectura del prototipo

Resumen de la arquitectura del dashboard laboral de Zinco AI
(un solo `index.html` + `data.js`).

## Topbar (común a todo)
- Wordmark de texto "Zinco · Laboral".
- Selector de empresa: "Grupo Fuego Lento SL — Hostelería · 24 empleados".
- Toggle de vista: **Asesor / Cliente**.

## Vista ASESOR (principal) — 4 tabs
1. **Hoy**: bandeja de tareas priorizada por SLA (plazos legales) +
   feed "Hecho hoy".
2. **ITs**: cards de incapacidades temporales con timeline y modal
   de detalle.
3. **Nóminas**: KPIs, gráfico de evolución de 6 meses, variación del
   mes explicada y lista de nóminas con estados.
4. **Altas y Bajas**: movimientos de plantilla con badge de SLA.

## Vista CLIENTE (CEO pyme) — una sola pantalla
- Semáforo global con frase humana ("¿está todo bien?").
- Coste del mes explicado en 1 línea.
- ITs contadas en lenguaje llano, sin jerga laboral.

## Chat AI flotante
- Disponible en ambas vistas.
- 3 preguntas sugeridas como punto de entrada.
- Usa siempre respuestas pre-escritas.
