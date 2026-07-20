# DECISIONES — Rediseño de Nóminas en Yoda

> Documento de criterio para el Bloque 4 (rediseño en Claude Code).
> No es un doc de diseño visual — es el *qué va, por qué y cómo se llama*.
> El diseño se construye DESPUÉS, sobre estas decisiones, con la design skill de Yoda delante.

---

## 0. La tesis (el valor primero, no el diseño)

El dashboard de Nóminas no aporta valor por ser bonito. Aporta valor porque **centraliza en Yoda un flujo que hoy obliga al asesor a saltar entre 4 herramientas**, y le devuelve tiempo.

**Pain point central (medible):**
Hoy, por cada cliente y cada mes, el asesor hace:
exportar de SAGE/A3 → bajar al ordenador → subir a Drive → subir a Yoda → enviar por Gmail uno a uno.
= 5 pasos, 4 herramientas. Es el "Yoda pide en vez de dar" en su forma más pura.

**La cadena de valor que lo sustituye (el corazón del producto):**
`Exportar la nómina → Verificar que cuadra (contra altas/bajas/incidencias del mes) → Enviar en 1 clic (automatizado con Gmail) → todo sin salir de Yoda.`

Regla para todo el rediseño: **si un elemento no sirve a esta cadena o a orientar al asesor hacia ella, es candidato a corte.**

---

## 1. Arquitectura de navegación (cerrado)

- Se respeta la navegación real de Yoda: **Sidebar → Cliente → tab Laboral**.
- Dentro de Laboral NO se toca nada: **Empleados + Nóminas se quedan como están** (están por algo; no reinventamos la rueda).
- El rediseño vive **dentro de Nóminas**, para UN cliente concreto (el cliente ya lo da la navegación, no es un filtro).

---

## 2. Los dos protagonistas (cerrado)

No compiten: se turnan según el día del mes.

| Momento del mes | Protagonista | Qué responde |
|---|---|---|
| Días 1-24 (recoger/preparar) | **Orientación**: calendario + avisos importantes | "¿Dónde estoy en el mes? ¿Qué incidencias afectan al cálculo?" |
| Días 25-28 (envío) | **Flujo centralizado**: exportar → verificar → enviar 1 clic | "Envío sin salir de Yoda ni ir uno a uno" |

El calendario te lleva hasta el momento en que el flujo centralizado te ahorra el peregrinaje. Uno prepara, el otro ejecuta.

---

## 3. Estructura de la pantalla de Nóminas (cerrado)

De arriba a abajo:

1. **Cabecera del cliente** — con el distintivo de *envío automático activo* (es un estado del cliente, no una tarea).
2. **Calendario del mes** — rejilla de días. Marca el día de hoy, las fases en sus días concretos (variables 1-5, impuestos 20, cálculo 21-24, envío 25-28, seg. sociales 29-31). Sin semáforos recargados: solo el color justo para distinguir fase.
3. **"Hoy toca"** — tarjeta fija debajo del calendario (NO clic-en-día). Siempre visible, servida sin que el usuario tenga que explorar.
4. **Avisos importantes** — mini-kanban simple (por hacer / hecho) de ítems discretos: altas, bajas, variables que faltan, finiquitos pendientes. Estos SÍ son ítems que se mueven → kanban tiene sentido aquí.
5. **Flujo de nómina** (el corazón) — exportar → verificar → enviar 1 clic. Es donde se materializa el ahorro de tiempo.

### Por qué kanban en avisos pero calendario en el ciclo
- El **ciclo** de nómina es UN proceso lineal al mes → forma lineal (calendario). Meterlo en kanban = añadir gestión de tablero a quien ya sabe hacer la nómina (lo que rechazó Manoli). Factorial lo confirma: usa estados lineales (Open→In Preparation→Calculation→In Review→Completed), no kanban.
- Los **avisos** son ítems discretos que se resuelven → forma de tablero (por hacer/hecho).
- Esto además respeta la consistencia con el módulo de Contabilidad (que usa kanban To do/In progress/Done) SIN forzar el patrón donde no encaja.
- Defensa en pitch: *"Usé kanban donde hay ítems que se mueven, y calendario donde hay un proceso lineal. No forcé un patrón donde no encajaba."*

---

## 4. Tabla de decisión — elemento por elemento

| Elemento actual del prototipo | Veredicto | Nombre final + razón |
|---|---|---|
| Kanban de clientes por fase (9 tarjetas) | **CAMBIA DE FORMA** | Pasa a calendario del mes de UN cliente. El kanban de fases desaparece. |
| Cinta/timeline lineal con amarillos/verdes | **CORTA** | La sustituye el calendario. Los semáforos de color recargaban sin aportar. |
| "Bandeja del agente" | **RENOMBRA** | → **"Avisos importantes"**. Nombrar el resultado, no la tecnología. "Agente"/"IA" genera desconfianza en el veterano; el junior no necesita que se lo vendas. |
| "El agente ha preparado X incidencias…" | **CORTA** | Jerga de IA. No sirve a ningún perfil: al veterano le suena marciano, al junior le sobra. |
| Contadores de variables / impuestos / incidencias | **CORTA** | Cifras que calculó el PM, no que pidió el asesor. Ruido, no valor. |
| "Nadie ha tenido que subir ni bajar nada hoy" | **CORTA** | Frase de relleno, no responde a un pain. |
| Checklist del ciclo | **CORTA** | Duda abierta resuelta: el calendario ya comunica la fase; el checklist duplica. |
| Tooltips de jerga (RLC, RNT, SILTRA, convenio…) | **SE QUEDA** | Discretos (subrayado sutil, aparece al hover). Oro para el veterano, invisible para el junior. |
| Control de nóminas / incidencias por cliente | **SE QUEDA** | Es lo que da valor: Yoda dándote algo. Alimenta el "verificar". |
| Envío automático por Gmail | **SE QUEDA + ELEVA** | Es el final de la cadena de valor (el clic que ahorra el envío uno-a-uno). Distintivo en cabecera del cliente. Ver §5 (supuesto técnico). |
| Buscar cliente + incidencia | **SE QUEDA** | Te gustaba; sirve a ambos perfiles. |
| Subtab Seguros Sociales | **FUERA DE ALCANCE (nota)** | Ver §5. Misma hipótesis de integración que nóminas; se resolvería igual. No se construye en este primer prototipo. |
| Módulos insights / payments (de PayFit/Factorial) | **NO SE AÑADE** | Scope creep. Ningún pain de las entrevistas lo pide. Decisión de criterio, no de pereza. |

---

## 5. Supuestos técnicos (mostrar funcionando, nombrar como hipótesis)

Estos se **muestran funcionando en el prototipo** (es un prototipo) pero se **nombran como hipótesis de integración en el pitch**. Es el "lo que no sé aún" = diferenciador, no debilidad.

1. **Enviar en 1 clic por Gmail.** SAGE manda por Outlook; la gestoría usa Gmail. Que el envío automático por Gmail funcione es una hipótesis de integración. Frase de pitch: *"No sé aún dónde está el umbral de integración para que esto funcione con Gmail."*
2. **Exportar de SAGE/A3 directo a Yoda.** Manoli lo pidió literal ("que no se descarguen a tu ordenador, sino directo a Yoda"). Depende de si SAGE/A3 se pueden integrar en Yoda. Pregunta abierta anotada en discovery.
3. **Seguros Sociales.** Es la MISMA hipótesis Gmail/Outlook que el envío de nóminas. Fuera del alcance del primer prototipo, pero se resolvería con la misma integración → *"empecé por nóminas, pero SS escala con el mismo patrón."*

---

## 6. Buyer persona + regla de desempate (criterio transversal)

Dos perfiles con necesidades opuestas en la misma pantalla:

- **Fran / Manoli (veterano, 20-25 años).** Domina el oficio, pero Yoda le chirría (imposición). Riesgo: abandona la herramienta si le estorba. Necesita muchas *queues*, lenguaje llano, "esto es lo que toca" sin interpretar.
- **Nerea / Mónica (junior).** No domina el oficio aún, pero no teme la herramienta. Riesgo: si Yoda es demasiado de manita, le resulta lento. Quiere velocidad y atajos.

**Regla de desempate:** Se optimiza para que AMBOS adopten (el 90% de la pantalla sirve a los dos a la vez). Cuando hay conflicto real, se desempata hacia el veterano (más riesgo de abandono) **sin penalizar la velocidad del junior** — que casi siempre coincide, porque "no exigir interpretación" también es más rápido.

**Matiz de negocio:** en un roll-up, los Fran/Manoli son población que decrece con cada gestoría modernizada. No se construye la pantalla entera alrededor del veterano; solo se desempata hacia él en los pocos puntos de conflicto.

Los únicos 3 puntos donde el desempate cambia algo (el resto es neutral entre perfiles):
1. "Hoy toca" fijo, no clic-en-día (Fran no explora).
2. Tooltips de jerga discretos pero presentes (Fran los necesita, Nerea ni los ve).
3. Nombre "Avisos importantes", no "agente/IA" (crítico para Fran, indiferente para Nerea).

---

## 7. Piel visual (para el Bloque 4, no antes)

Migrar a los tokens reales de Yoda (la design skill es innegociable en consistencia):
- Verde bosque `#1C3829` (primario, sidebar, tab activo, botón primario).
- Fondo crema `#F5F2EC` (nunca blanco puro global).
- Cards blancas, radius 12px, borde `#E2E8F0`, sombra sutil.
- Tipografía **Geist** (fallback Inter).
- Un único acento: `#1C3829`. Sin otros verdes, morados ni azules.
- Iconos stroke fino (estilo lucide).

---

## 8. Cómo se mide el valor (para stakeholders / pitch)

- **North Star:** empresas gestionadas por asesor (no horas ahorradas).
- **Guardarraíl:** tasa de error en nóminas.
- **Umbral de adopción antes de escalar a ingeniería:** ≥70% de aperturas diarias durante el cierre mensual.

---

## 9. Prompts para Claude Code (Bloque 4)

> Copiar este archivo al repo `zinco-prototype` primero. Luego pegar estos prompts en orden.

### Prompt 1 — Arranque (pedir plan antes de código)
```
Lee DECISIONES.md entero antes de tocar nada. Es el criterio de producto
cerrado para rediseñar la pantalla de Nóminas de Yoda. No propongas cambios
de alcance ni añadas features que no estén ahí.

Contexto del repo: prototipo en HTML/JS vanilla, sin frameworks, con data.js
para los datos de demo. Trabajamos sobre el index.html y data.js existentes.

Antes de escribir código, devuélveme un plan de implementación por secciones
(cabecera cliente → calendario → hoy toca → avisos importantes → flujo de
nómina) y espera mi OK. No generes nada hasta que confirme el plan.

Aplica la design skill de Yoda (tokens reales: #1C3829, crema #F5F2EC, Geist).
Si no la tienes cargada, dímelo antes de empezar.
```

### Prompt 2 — Construir por partes (tras aprobar el plan)
```
Empieza solo por el calendario del mes + "hoy toca" fijo debajo.
Usa los datos reales de data.js (ciclo julio, hoy = día 11, fases en sus
días concretos). Cuando lo vea funcionando, seguimos con avisos y flujo.
```

### Prompt 3 — Guardar para el paso "verificar" (el que se queda a medias fácil)
```
En el paso "verificar", que se VEA la verificación: mostrar el cálculo
cuadrando contra las altas/bajas/incidencias del cliente, no solo un botón
"Verificar". Es el paso que más valor comunica (Yoda verificando por ti).
```

**Por qué en este orden:** plan antes que código (evita 800 líneas que no encajan), scope creep prohibido explícito (las tools de código tienden a "mejorar" lo no pedido), piel real anclada desde el minuto uno (no vuelve al verde viejo #3D6740), y construcción sección a sección (ves y corriges en vez de auditar un bloque enorme).
