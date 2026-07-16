# PLAN.md — Arquitectura del prototipo

Prototipo "Yoda · Nóminas": herramienta interna de los gestores laborales
(un solo `index.html` + `data.js`). Fecha simulada: 11 de julio de 2026.

## Topbar
- Wordmark de texto "Yoda · Nóminas — por Zinco AI".
- Pulso de sincronización con el Sistema RED (dato vivo).
- Botón **Avisos** (con badge) y botón **Bandeja del agente** (con badge).

## Nav de proyectos (como el módulo de contabilidad de Yoda)
- Nóminas (activo) · Contabilidad · Fiscal · Mercantil ("próximamente").

## Tablero Kanban del ciclo mensual (pieza central)
- Columnas = fases del ciclo: **Variables e incidencias → Cálculo →
  Revisión → Envío al cliente → Cerrada**.
- Tarjetas = empresa cliente × Julio 2026 (9 empresas, 3 gestores).
- Filtros por gestor y por cliente. Contadores-resumen y línea de valor
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
- Correos y ficheros FIE ya analizados por el agente, con propuesta
  accionable en 1 clic: la incidencia se añade al control del cliente.

## Avisos (drawer)
- Convenio nuevo publicado, fin de contrato temporal, pago delegado en el
  RLC, caducidad de certificado digital. Cada aviso abre el cliente afectado.

## Pie
- "Tiempo registrado automáticamente desde el correo y las llamadas":
  nadie reporta a mano (respuesta al problema de adopción de Yoda).
