// =====================================================================
// data.js — Única fuente de verdad del prototipo Zinco · Laboral
// Empresa demo: Grupo Fuego Lento SL (hostelería, Madrid, 24 empleados)
// Fecha simulada de "hoy": viernes 11 de julio de 2026
// Coherencia salarial: neto = bruto − SS trabajador (6,47%) − IRPF (%
// individual). El neto se calcula al cargar para que siempre cuadre.
// =====================================================================

window.DATA = {

  hoy: "2026-07-11",
  hoyTexto: "viernes, 11 de julio de 2026",

  empresa: {
    nombre: "Grupo Fuego Lento SL",
    sector: "Hostelería",
    provincia: "Madrid",
    empleados: 24,
    convenio: "Convenio colectivo de hostelería de la Comunidad de Madrid",
    etiquetaSelector: "Grupo Fuego Lento SL — Hostelería · 24 empleados"
  },

  // Señal de dato vivo: el valor no es mostrar el dato, es que nadie lo tecleó
  sincronizacion: "Sistema RED · sincronizado hoy a las 08:02",

  // Cartera del asesor (lleva ~40 empresas; esta demo entra en una)
  cartera: { empresas: 40, tareasHoy: 11, urgentes: 3 },

  // El argumento del dashboard: tiempo devuelto a lo que importa
  valor: {
    asesor: { tramitesAuto: 14, horasSemana: 4.5 },
    cliente: { gestionesMes: 23, horasMes: 6 }
  },

  // -------------------------------------------------------------------
  // Plantilla completa (24). salarioBase + pluses = bruto mensual actual
  // (tablas del convenio ya actualizadas, subida del 2,2 % desde julio).
  // irpfPct: retención individual estimada.
  // -------------------------------------------------------------------
  empleados: [
    { id: 1,  nombre: "Carmen Ortega",     puesto: "Directora de operaciones",        salarioBase: 3150, pluses: 420, irpfPct: 18.5, fechaAlta: "2019-03-01" },
    { id: 2,  nombre: "Javier Sanz",       puesto: "Jefe de cocina",                  salarioBase: 2480, pluses: 390, irpfPct: 16.8, fechaAlta: "2019-05-15" },
    { id: 3,  nombre: "Nuria Campos",      puesto: "Segunda de cocina",               salarioBase: 1980, pluses: 240, irpfPct: 14.9, fechaAlta: "2020-02-10" },
    { id: 4,  nombre: "Antonio Vega",      puesto: "Cocinero",                        salarioBase: 1720, pluses: 210, irpfPct: 13.2, fechaAlta: "2020-09-01", situacion: "IT — lumbalgia (día 19)" },
    { id: 5,  nombre: "Iván Morales",      puesto: "Cocinero",                        salarioBase: 1700, pluses: 190, irpfPct: 13.0, fechaAlta: "2021-06-21" },
    { id: 6,  nombre: "Pablo Ferrer",      puesto: "Parrillero",                      salarioBase: 1760, pluses: 230, irpfPct: 13.4, fechaAlta: "2020-11-02" },
    { id: 7,  nombre: "Sergio Lara",       puesto: "Ayudante de cocina",              salarioBase: 1450, pluses: 120, irpfPct: 10.8, fechaAlta: "2022-04-04" },
    { id: 8,  nombre: "Fátima El Idrissi", puesto: "Ayudante de cocina",              salarioBase: 1450, pluses: 110, irpfPct: 10.7, fechaAlta: "2023-01-16" },
    { id: 9,  nombre: "María Robles",      puesto: "Responsable de sala",             salarioBase: 2050, pluses: 250, irpfPct: 15.6, fechaAlta: "2019-07-08" },
    { id: 10, nombre: "Lucía Gil",         puesto: "Camarera",                        salarioBase: 1560, pluses: 150, irpfPct: 11.9, fechaAlta: "2021-03-15", situacion: "Nacimiento y cuidado de menor", brutoJulio: 0 },
    { id: 11, nombre: "Diego Antúnez",     puesto: "Camarero",                        salarioBase: 1560, pluses: 160, irpfPct: 12.0, fechaAlta: "2021-10-04" },
    { id: 12, nombre: "Sara Peña",         puesto: "Camarera",                        salarioBase: 1560, pluses: 140, irpfPct: 11.8, fechaAlta: "2022-06-01" },
    { id: 13, nombre: "Rubén Cano",        puesto: "Camarero",                        salarioBase: 1560, pluses: 155, irpfPct: 11.9, fechaAlta: "2022-09-12" },
    { id: 14, nombre: "Alba Serrano",      puesto: "Camarera",                        salarioBase: 1560, pluses: 145, irpfPct: 11.8, fechaAlta: "2023-05-08" },
    { id: 15, nombre: "Jorge Salas",       puesto: "Camarero",                        salarioBase: 1560, pluses: 150, irpfPct: 11.9, fechaAlta: "2021-02-01", situacion: "Baja voluntaria el 15/07 — finiquito en preparación", brutoJulio: 1395 },
    { id: 16, nombre: "Andrea Molina",     puesto: "Ayudante de camarera",            salarioBase: 1430, pluses: 95,  irpfPct: 10.5, fechaAlta: "2023-11-20" },
    { id: 17, nombre: "Hugo Pardo",        puesto: "Ayudante de camarero",            salarioBase: 1430, pluses: 90,  irpfPct: 10.5, fechaAlta: "2026-07-04", situacion: "Alta nueva (04/07)", brutoJulio: 1368 },
    { id: 18, nombre: "Marcos Río",        puesto: "Barman",                          salarioBase: 1680, pluses: 210, irpfPct: 13.0, fechaAlta: "2020-07-13" },
    { id: 19, nombre: "Raúl Estévez",      puesto: "Encargado de barra",              salarioBase: 1860, pluses: 220, irpfPct: 14.2, fechaAlta: "2019-11-04" },
    { id: 20, nombre: "Teresa Blanco",     puesto: "Hostess — recepción de sala",     salarioBase: 1520, pluses: 110, irpfPct: 11.5, fechaAlta: "2022-03-07" },
    { id: 21, nombre: "Elena Vidal",       puesto: "Administrativa",                  salarioBase: 1750, pluses: 130, irpfPct: 13.3, fechaAlta: "2020-01-13" },
    { id: 22, nombre: "Pilar Doménech",    puesto: "Personal de limpieza",            salarioBase: 1390, pluses: 60,  irpfPct: 9.8,  fechaAlta: "2021-09-06" },
    { id: 23, nombre: "Omar Haddad",       puesto: "Friegaplatos",                    salarioBase: 1390, pluses: 50,  irpfPct: 9.7,  fechaAlta: "2023-02-27" },
    { id: 24, nombre: "Cristina Novo",     puesto: "Camarera (fin de semana, 60 %)",  salarioBase: 940,  pluses: 85,  irpfPct: 7.4,  fechaAlta: "2024-04-19" }
  ],

  // -------------------------------------------------------------------
  // ITs activas
  // -------------------------------------------------------------------
  its: [
    {
      id: "it-1",
      empleadoId: 4,
      empleado: "Antonio Vega",
      puesto: "Cocinero",
      tipo: "IT por contingencia común",
      diagnostico: "Lumbalgia",
      inicio: "2026-06-23",
      diaDeBaja: 19,
      partePendienteDesde: "2026-07-05",
      estado: "ambar",
      estadoTexto: "⚠ Parte de confirmación pendiente de la mutua desde hace 6 días",
      mutua: "Mutua Universal",
      pagoDelegado: true,
      previsionReincorporacion: "2026-07-21",
      pelota: "Mutua",
      origen: "⚡ Baja detectada automáticamente en el Sistema RED — nadie tuvo que comunicarla",
      hitos: [
        { label: "Parte recibido", done: true, fecha: "2026-06-23" },
        { label: "Comunicado a SS", done: true, fecha: "2026-06-24" },
        { label: "Pago delegado activo", done: true, fecha: "2026-07-08" },
        { label: "Previsión de reincorporación", done: false, fecha: "2026-07-21" }
      ],
      zincoAhora: "Hemos reclamado hoy a Mutua Universal el 2.º parte de confirmación (segunda reclamación por escrito). Si no llega antes del lunes 13, escalamos por teléfono con el gestor de la mutua. El pago delegado ya está activo, así que Antonio sigue cobrando con normalidad y la empresa recupera el anticipo en el RLC.",
      timeline: [
        { fecha: "2026-06-23", texto: "Parte de baja emitido (lumbalgia)", ok: true },
        { fecha: "2026-06-24", texto: "Baja comunicada al Sistema RED", ok: true },
        { fecha: "2026-06-30", texto: "1.er parte de confirmación recibido y registrado", ok: true },
        { fecha: "2026-07-05", texto: "2.º parte de confirmación NO recibido — pendiente de la mutua", ok: false },
        { fecha: "2026-07-08", texto: "Desde el día 16: pago delegado activado (861 € anticipados en nómina de julio)", ok: true }
      ],
      accionSugerida: "Reclamar a la mutua el 2.º parte de confirmación"
    },
    {
      id: "it-2",
      empleadoId: 10,
      empleado: "Lucía Gil",
      puesto: "Camarera",
      tipo: "Nacimiento y cuidado de menor",
      diagnostico: null,
      inicio: "2026-06-02",
      finPrevisto: "2026-09-21",
      semanas: 16,
      estado: "ok",
      estadoTexto: "✓ Todo en orden — pago directo del INSS tramitado",
      previsionReincorporacion: "2026-09-21",
      pelota: "SS",
      origen: "Comunicada por la empresa desde el portal y tramitada por Zinco el mismo día",
      hitos: [
        { label: "Parte recibido", done: true, fecha: "2026-06-02" },
        { label: "Comunicado a SS", done: true, fecha: "2026-06-03" },
        { label: "Pago directo INSS activo", done: true, fecha: "2026-06-05" },
        { label: "Previsión de reincorporación", done: false, fecha: "2026-09-21" }
      ],
      zincoAhora: "Nada pendiente por tu parte: el pago directo del INSS está activo y confirmado. Haremos seguimiento del fin del descanso (21/09) y prepararemos la reincorporación de Lucía con 15 días de antelación.",
      timeline: [
        { fecha: "2026-06-02", texto: "Inicio del descanso por nacimiento y cuidado de menor", ok: true },
        { fecha: "2026-06-03", texto: "Comunicada a la Seguridad Social (Sistema RED)", ok: true },
        { fecha: "2026-06-05", texto: "Pago directo del INSS solicitado y confirmado", ok: true },
        { fecha: "2026-09-21", texto: "Fin previsto (16 semanas)", ok: null }
      ],
      accionSugerida: null
    }
  ],

  // -------------------------------------------------------------------
  // Movimientos: altas y bajas recientes
  // -------------------------------------------------------------------
  movimientos: {
    altas: [
      {
        empleadoId: 17,
        empleado: "Hugo Pardo",
        puesto: "Ayudante de camarero",
        contrato: "Indefinido a tiempo completo",
        solicitud: "2026-07-03T21:40",
        comunicadaRED: "2026-07-04T06:55",
        slaHoras: 9,
        estado: "ok",
        estadoTexto: "✓ Comunicada al Sistema RED en 9 h (recibida viernes noche, tramitada sábado)"
      }
    ],
    bajas: [
      {
        empleadoId: 15,
        empleado: "Jorge Salas",
        puesto: "Camarero",
        tipo: "Baja voluntaria",
        preaviso: "2026-06-30",
        ultimoDia: "2026-07-15",
        estado: "warn",
        estadoTexto: "⏳ Finiquito en preparación — vence el 15/07",
        finiquito: {
          estado: "En preparación",
          conceptos: [
            { concepto: "Salario del 1 al 15 de julio", importe: 855.0 },
            { concepto: "Vacaciones no disfrutadas (4 días)", importe: 228.0 },
            { concepto: "Pagas extra prorrateadas pendientes", importe: 312.0 }
          ],
          totalBruto: 1395.0
        }
      }
    ]
  },

  // -------------------------------------------------------------------
  // Nóminas feb–jul (totales de empresa, en €/mes)
  // ssEmpresa ≈ 31,9 % del bruto (CC 23,6 + desempleo 5,5 + FOGASA 0,2
  // + FP 0,7 + AT/EP 1,9). Junio baja porque Lucía pasa a pago directo
  // del INSS. Julio (45.205) = suma de nóminas por empleado (42.423)
  // + atrasos del convenio (2.782): cuadra con la lista de la tab.
  // -------------------------------------------------------------------
  nominas: {
    mesActual: {
      mes: "Julio",
      avancePct: 60,
      etapa: "Cálculo previo listo — pendiente de cierre y envío",
      fechaPrevista: "2026-07-28"
    },
    meses: [
      { mes: "Febrero",   bruto: 41890, ssEmpresa: 13363, neto: 33022, estado: "ok",   estadoTexto: "✓ Cerrada y enviada" },
      { mes: "Marzo",     bruto: 42060, ssEmpresa: 13417, neto: 33156, estado: "ok",   estadoTexto: "✓ Cerrada y enviada" },
      { mes: "Abril",     bruto: 42310, ssEmpresa: 13497, neto: 33353, estado: "ok",   estadoTexto: "✓ Cerrada y enviada" },
      { mes: "Mayo",      bruto: 42020, ssEmpresa: 13404, neto: 33124, estado: "ok",   estadoTexto: "✓ Cerrada y enviada" },
      { mes: "Junio",     bruto: 40480, ssEmpresa: 12913, neto: 31910, estado: "ok",   estadoTexto: "✓ Cerrada y enviada — Lucía Gil pasa a pago directo del INSS" },
      { mes: "Julio",     bruto: 45205, ssEmpresa: 14420, neto: 35635, estado: "warn", estadoTexto: "⏳ En preparación — cálculo previo listo" }
    ],
    // La variación cuadra al euro: 2.782 + 875 + 1.368 + 540 − 840 = 4.725
    // = 45.205 (julio) − 40.480 (junio). El pago delegado no suma: es neutro.
    variacionJulio: {
      respectoA: "Junio",
      importe: 4725,
      porcentaje: 11.7,
      resumen: "La nómina de julio sube 4.725 € respecto a junio. Está explicado: no es un error.",
      conceptos: [
        { concepto: "Atrasos del convenio de hostelería: subida del 2,2 % con efectos 1 de abril, tablas publicadas en junio", importe: 2782 },
        { concepto: "Aplicación de las nuevas tablas del convenio en la nómina de julio", importe: 875 },
        { concepto: "Alta nueva: Hugo Pardo, ayudante de camarero (del 4 al 31 de julio, prorrateado)", importe: 1368 },
        { concepto: "Finiquito de Jorge Salas: vacaciones no disfrutadas y pagas extra prorrateadas", importe: 540 },
        { concepto: "Jorge Salas devenga solo hasta el 15 de julio (baja voluntaria)", importe: -840 },
        { concepto: "Pago delegado de la IT de Antonio Vega — anticipado en nómina y recuperado en el RLC (coste neutro para la empresa)", importe: 861, neutro: true }
      ]
    }
  },

  // -------------------------------------------------------------------
  // Bandeja del asesor (tab "Hoy") — lista "Requiere acción".
  // SIN semáforo hardcodeado: el nivel (rojo/ámbar/verde) lo calcula
  // index.html desde estos datos con las reglas de negocio:
  //   · tipo "it-parte": ámbar si el parte lleva > 5 días pendiente
  //   · tipo "baja-ss": rojo si el plazo legal de 3 días hábiles para
  //     comunicar la baja a la SS está a menos de 1 día
  //   · tipo "fecha": genérico por proximidad del vencimiento
  // -------------------------------------------------------------------
  bandeja: [
    {
      id: "t-1",
      prioridad: 1,
      tipo: "it-parte",
      ref: "it-1",
      titulo: "Reclamar a la mutua el parte de confirmación de Antonio Vega",
      alHacer: "Enviada 2.ª reclamación a Mutua Universal por el parte de Antonio Vega",
      detalle: "IT por lumbalgia, día 19 de baja. El 2.º parte de confirmación sigue sin llegar de Mutua Universal. Sin él no se puede acreditar la prórroga.",
      cta: "Reclamar a la mutua"
    },
    {
      id: "t-2",
      prioridad: 2,
      tipo: "fecha",
      vence: "2026-07-15",
      titulo: "Preparar el finiquito de Jorge Salas",
      alHacer: "Finiquito de Jorge Salas revisado y validado (1.395 €)",
      detalle: "Baja voluntaria con último día el 15/07. Cálculo previo: 1.395 € brutos (salario de 15 días + 4 días de vacaciones + extras prorrateadas).",
      cta: "Revisar finiquito"
    },
    {
      id: "t-3",
      prioridad: 3,
      tipo: "baja-ss",
      empleadoId: 15,
      titulo: "Comunicar la baja de Jorge Salas al Sistema RED",
      alHacer: "Preparada la comunicación de la baja de Jorge Salas (se presenta el 16/07)",
      detalle: "Último día trabajado: 15/07. El plazo legal es de 3 días hábiles desde el cese; la comunicación debe presentarse entre el 16/07 y el 20/07.",
      cta: "Preparar comunicación"
    },
    {
      id: "t-4",
      prioridad: 4,
      tipo: "fecha",
      vence: "2026-07-20",
      titulo: "Comprobar la deducción del pago delegado en el RLC de julio",
      alHacer: "Verificada la deducción del pago delegado (861 €) en el borrador del RLC",
      detalle: "861 € anticipados a Antonio Vega por la IT. Verificar que la deducción queda reflejada en la liquidación (RLC) antes de la presentación.",
      cta: "Ver RLC"
    },
    {
      id: "t-5",
      prioridad: 5,
      tipo: "fecha",
      vence: "2026-07-25",
      titulo: "Cerrar la nómina de julio con atrasos del convenio",
      alHacer: "Nómina de julio revisada y lista para cierre",
      detalle: "Aplicadas las nuevas tablas (+2,2 % desde abril): 3.657 € entre atrasos y nuevas tablas. Variación total de julio: +4.725 €, explicada y lista para revisar.",
      cta: "Ver cálculo previo"
    }
  ],

  // -------------------------------------------------------------------
  // Feed "Hecho hoy" (tab "Hoy")
  // -------------------------------------------------------------------
  hechoHoy: [
    { hora: "09:12", texto: "Presentado el RLC de junio en el Sistema RED — sin incidencias", auto: true },
    { hora: "10:05", texto: "Registrado el parte de confirmación de Lucía Gil (nacimiento y cuidado de menor)", auto: true },
    { hora: "11:38", texto: "Generado el cálculo previo de la nómina de julio (variación +4.725 € explicada)", auto: true },
    { hora: "11:41", texto: "Cálculo previo archivado en la carpeta de Grupo Fuego Lento y compartido con Carmen — 0 ficheros movidos a mano", auto: true },
    { hora: "12:10", texto: "Llamada con Carmen (directora de operaciones): planificación de plantilla para agosto" }
  ],

  // -------------------------------------------------------------------
  // Chat (respuestas SIEMPRE pre-escritas, coherentes con estos datos)
  // -------------------------------------------------------------------
  chat: {
    titulo: "Pregunta a Zinco",
    saludo: "Hola 👋 Soy el asistente de Zinco · Laboral. Pregunta lo que quieras o elige una sugerencia:",
    sugeridas: [
      {
        q: "¿Cuánto me cuesta el equipo este mes?",
        a: "En julio el equipo cuesta 59.625 € en total: 45.205 € de sueldos y 14.420 € de Seguridad Social a cargo de la empresa. Son 6.232 € más que en junio por la subida del convenio (con atrasos desde abril) y la incorporación de Hugo; está revisado, no hay error.",
        fuente: { label: "Ver el desglose en Nóminas", tab: "nominas" }
      },
      {
        q: "¿Cómo va la baja de Antonio?",
        a: "Antonio (cocina) sigue de baja por lumbalgia; hoy es su día 19. Falta un documento de la mutua que ya estamos reclamando y no afecta a su cobro. Previsión de vuelta: 21 de julio.",
        fuente: { label: "Ver la baja en ITs", tab: "its" }
      },
      {
        q: "¿Qué pasa si contrato un camarero más en agosto?",
        a: "Un camarero a jornada completa por convenio ronda los 1.710 € brutos al mes, unos 2.250 € de coste total con la Seguridad Social. Si te decides, pásanos sus datos y comunicamos el alta al Sistema RED el mismo día, como hicimos con Hugo.",
        fuente: { label: "Ver los salarios en Nóminas", tab: "nominas" }
      }
    ],
    respuestaLibre: "Esa no la tengo a mano. La consulto con tu asesor y te respondemos en menos de 24 horas por aquí. Si corre prisa, llámanos y lo vemos al momento."
  },

  // -------------------------------------------------------------------
  // Tab "Análisis" — tabla de recomendaciones del proceso de selección.
  // Sale del shadowing a 7 asesores laborales (9 pain points).
  // Regla de oro: máximo UNA línea por celda; el detalle va en el pitch
  // hablado. 3 grupos con header de color: ya / vision / abierta.
  // -------------------------------------------------------------------
  analisis: {
    sub: "9 pain points del shadowing a 7 asesores — qué hago con cada uno y cómo lo mido",
    encabezado: [
      { label: "Métrica que persigo", texto: "minutos de asesor por cliente/mes. Todo lo de abajo son inputs de eso." },
      { label: "Lo que el cliente nota", texto: "cero sorpresas — el plazo no se pasa, la nómina llega, el número está a D+5." }
    ],
    bloques: [
      {
        tono: "ya",
        titulo: "Lo que hago ya",
        filas: [
          { pain: "4 · FIE / bajas",        queHago: "Yoda cruza el fichero contra la cartera. El asesor solo confirma.", medicion: "Minutos por baja. N=10, cronómetro." },
          { pain: "5+6+7 · Ficheros a mano", queHago: "Quito el paso. Y dos de estos ya existen — nadie lo sabía.",        medicion: "Ficheros movidos a mano → 0" },
          { pain: "9 · No saben que pueden", queHago: "Doc + 30 min. Coste cero.",                                          medicion: "% asesores con envío automático" }
        ]
      },
      {
        tono: "vision",
        titulo: "La visión — no lo construyo el lunes",
        filas: [
          { pain: "1+2 · Email y plazos", queHago: "<span class=\"nada\">Nada aún.</span> Es la visión: Yoda va al Gmail, no al revés.", medicion: "Plazos incumplidos/mes (futuro)" }
        ]
      },
      {
        tono: "abierta",
        titulo: "Pregunta abierta",
        filas: [
          { pain: "3 · Convenios", queHago: "<span class=\"nada\">Nada.</span> No sé de dónde sale el dato.", medicion: "—" }
        ]
      }
    ]
  }
};

// Neto calculado siempre a partir del bruto para garantizar coherencia:
// neto = bruto − SS trabajador (6,47 %) − IRPF individual.
// Ej.: María Robles → 2.300 − 148,81 − 358,80 = 1.792,39 €
// brutoJulio solo existe en los casos especiales (pago directo INSS,
// prorrateo de alta, media mensualidad + finiquito); para el resto es
// el bruto contractual del mes.
window.DATA.empleados.forEach(function (e) {
  e.brutoMensual = e.salarioBase + e.pluses;
  e.netoMensual = Math.round(e.brutoMensual * (1 - 0.0647 - e.irpfPct / 100) * 100) / 100;
  if (e.brutoJulio === undefined) e.brutoJulio = e.brutoMensual;
  e.netoJulio = Math.round(e.brutoJulio * (1 - 0.0647 - e.irpfPct / 100) * 100) / 100;
});
