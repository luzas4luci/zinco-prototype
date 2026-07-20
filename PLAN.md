# PLAN.md — Arquitectura del prototipo

Prototipo "Yoda · Nóminas" (rediseño según `DECISIONES.md`): la pantalla de
Nóminas de **un cliente** dentro de la navegación real de Yoda. Un solo
`index.html` + `data.js`. Fecha simulada: viernes 10 de julio de 2026.

## Tesis (DECISIONES §0)
El valor no es que sea bonito: es que centraliza en Yoda un flujo que hoy son
5 pasos en 4 herramientas (exportar → bajar → subir a Drive → subir a Yoda →
enviar uno a uno). La cadena que lo sustituye: **exportar → verificar →
enviar en 1 clic, sin salir de Yoda**. Regla de corte: si un elemento no sirve
a esa cadena o a orientar hacia ella, fuera.

## Navegación (DECISIONES §1)
Se respeta la de Yoda real: **Sidebar → Cliente → tab Laboral**. Dentro de
Laboral, las dos secciones (Empleados | Nóminas) se mantienen. El rediseño
vive dentro de **Nóminas**, para UN cliente (el cliente lo da la navegación,
no un filtro).

## Estructura de la pantalla (de arriba a abajo)
0. **Shell Yoda**: sidebar 80px verde bosque; cabecera del cliente (card
   verde) con badge de estado y distintivo "Envío automático activo"; fila de
   tabs (Laboral activo); dos cards Empleados | Nóminas (Nóminas activa).
1. **Calendario del mes** — rejilla real de julio 2026, "hoy" marcado (día 10),
   fases pintadas en sus días (variables 1-5, impuestos 20, cálculo 21-24,
   envío 25-28, seguros sociales 29-31). Sustituye a la cinta y al kanban de
   fases. Proceso lineal → forma lineal (DECISIONES §3).
2. **"Hoy toca"** — tarjeta fija bajo el calendario, servida sin explorar
   (desempate hacia el veterano; NO clic-en-día).
3. **Avisos importantes** — mini-kanban Por hacer / Hecho de ítems discretos
   del cliente (altas, bajas, variables). Marcar como hecho mueve la tarjeta.
   Kanban donde hay ítems que se mueven (DECISIONES §3).
4. **Flujo de nómina** — stepper exportar → verificar → enviar. El paso
   **Verificar** se ve: tabla de cuadre viva (junio + conceptos = 45.205 € ✓)
   y cruce contra las incidencias del mes. El envío por Gmail cierra la cadena.
5. **Pie** — enlace discreto "Hipótesis de integración" (drawer con §5).

## Realismo (DECISIONES §5)
Los supuestos técnicos se muestran funcionando pero se nombran como hipótesis
en el drawer: exportar de SAGE/A3 a Yoda (carpeta vigilada / API a3innuva),
envío por Gmail (vs Outlook de SAGE), y seguros sociales (misma hipótesis,
fuera del alcance de este primer prototipo). "Lo que Yoda NO hace": calcular
la nómina — eso es de A3/SAGE.

## Piel visual (DECISIONES §7 + design skill de Yoda)
Tokens reales de Yoda: primario `#1C3829`, fondo crema `#F5F2EC`, cards
blancas radius 12px, borde `#E2E8F0`, tipografía Geist (fallback Inter),
iconos SVG stroke fino, un único acento verde. Sin morados, azules ni otros
verdes.

## Fuera de alcance (anti scope-creep, DECISIONES §4)
Sin módulos de insights/payments, sin subtab de Seguros sociales (misma
hipótesis; se resolvería igual), sin contadores de PM, sin mención a
"agente/IA" en la UI (el resultado se nombra, no la tecnología).
