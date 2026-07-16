// =====================================================================
// data.js — Única fuente de verdad del prototipo Yoda · Nóminas
// Herramienta interna para los gestores laborales de la asesoría.
// Fecha simulada de "hoy": viernes 11 de julio de 2026.
// Cartera demo: 9 empresas cliente repartidas entre 3 gestores.
// Cliente estrella (detalle al euro): Grupo Fuego Lento SL — sus cifras
// vienen del cálculo real por empleado (bruto − SS − IRPF) y cuadran:
// 45.205 € bruto = 42.423 € nóminas + 2.782 € atrasos del convenio.
// El resto de clientes usa totales agregados coherentes
// (SS empresa ≈ 31,9 % del bruto; neto ≈ 78,8 % del bruto).
// =====================================================================

window.DATA = {

  hoy: "2026-07-11",
  hoyTexto: "viernes, 11 de julio de 2026",
  ciclo: "Julio 2026",

  sincronizacion: "Sistema RED · sincronizado hoy a las 08:02",

  // El argumento de adopción: Yoda trabaja para el gestor, no al revés.
  valor: {
    incidenciasPreparadasHoy: 9,
    minutosAhorradosHoy: 35,
    docsGuardadosDrive: 27,
    registroAuto: "Tiempo registrado automáticamente desde el correo y las llamadas — hoy nadie ha tenido que reportar nada a mano."
  },

  // -------------------------------------------------------------------
  // Calendario del ciclo mensual: "estás a día 11, ¿qué toca hoy?"
  // (petición de las entrevistas: visualización por día del mes)
  // -------------------------------------------------------------------
  calendarioMes: {
    diaHoy: 11,
    diasMes: 31,
    hitos: [
      { desde: 1,  hasta: 5,  label: "Variables e incidencias", tipo: "variables",
        tip: "Días 1-5: recoger todo lo que cambia la nómina del mes (horas extra, bajas, altas, anticipos)." },
      { desde: 20, hasta: 20, label: "Impuestos", tipo: "impuestos",
        tip: "Día 20: presentación del modelo 111 del 2.º trimestre (retenciones de IRPF de las nóminas)." },
      { desde: 21, hasta: 24, label: "Cálculo y revisión", tipo: "calculo",
        tip: "Días 21-24: cálculo de las nóminas en A3/SAGE y revisión del gestor." },
      { desde: 25, hasta: 28, label: "Envío y pago", tipo: "envio",
        tip: "Días 25-28: envío de nóminas y resumen a cada cliente, y pago a los trabajadores." },
      { desde: 29, hasta: 31, label: "Seguros sociales", tipo: "rlc",
        tip: "Días 29-31: presentación de los RLC/RNT del mes por SILTRA (plazo hasta fin de mes)." }
    ],
    hoyToca: [
      "Reclamar las variables bloqueadas de Taberna El Roble y Academia Lumen — sin ellas no arranca el cálculo",
      "Revisar el cálculo previo de Grupo Fuego Lento (variación +4.725 €, explicada)",
      "Enviar los seguros sociales de junio pendientes (4 clientes) — recordatorio del lunes"
    ]
  },

  // Proyectos de Yoda (como el módulo de contabilidad que sirvió de
  // referencia). Solo Nóminas está activo en este prototipo.
  proyectos: [
    { id: "nominas",      nombre: "Nóminas",      activo: true },
    { id: "contabilidad", nombre: "Contabilidad", activo: false },
    { id: "fiscal",       nombre: "Fiscal",       activo: false },
    { id: "mercantil",    nombre: "Mercantil",    activo: false }
  ],

  gestores: [
    { id: "maria", nombre: "María",  iniciales: "MA" },
    { id: "pedro", nombre: "Pedro",  iniciales: "PE" },
    { id: "nerea", nombre: "Nerea",  iniciales: "NE" }
  ],

  // Fases del ciclo mensual de nómina (columnas del Kanban).
  // La descripción alimenta el tooltip ⓘ de cada columna.
  fases: [
    { id: "variables", nombre: "Variables e incidencias",
      descripcion: "Recoger todo lo que cambia la nómina de este mes: horas extra, bajas médicas, altas de personal, anticipos, días sin sueldo… Hasta que no está todo, no se puede calcular." },
    { id: "calculo",   nombre: "Cálculo",
      descripcion: "Generar las nóminas del mes en el programa (A3 o SAGE) aplicando esas variables e incidencias." },
    { id: "revision",  nombre: "Revisión",
      descripcion: "El gestor comprueba que el resultado cuadra (y que las subidas o bajadas del mes tienen explicación) antes de enviar nada al cliente." },
    { id: "envio",     nombre: "Envío al cliente",
      descripcion: "Mandar las nóminas y el resumen del mes a la empresa, y archivarlas en su carpeta de Drive.",
      vacio: "La ventana de envío abre el día 25" },
    { id: "cerrada",   nombre: "Cerrada",
      descripcion: "Mes terminado: nóminas enviadas y seguros sociales presentados a la Seguridad Social.",
      vacio: "Nada cerrado todavía — lo normal a día 11" }
  ],

  // Glosario para tooltips: términos de jerga → explicación en llano.
  // index.html los subraya allá donde aparezcan en los textos.
  glosario: {
    "Sistema RED": "La plataforma online de la Seguridad Social donde se comunican altas, bajas y liquidaciones.",
    "RED": "La plataforma online de la Seguridad Social donde se comunican altas, bajas y liquidaciones.",
    "FIE": "Fichero INSS-Empresas: el archivo diario de la Seguridad Social con las bajas, altas y partes médicos de los trabajadores. Antes había que cruzarlo a mano con cada cliente.",
    "RLC": "Recibo de Liquidación de Cotizaciones: los “seguros sociales” que la empresa paga cada mes a la Seguridad Social.",
    "RNT": "Relación Nominal de Trabajadores: el listado que acompaña a la liquidación mensual de seguros sociales.",
    "IT": "Incapacidad Temporal: la baja médica de un trabajador.",
    "pago delegado": "La empresa adelanta al trabajador el dinero de su baja en la nómina y después lo recupera descontándolo de los seguros sociales.",
    "pago directo": "La prestación la paga directamente el INSS al trabajador, no la empresa.",
    "INSS": "Instituto Nacional de la Seguridad Social: el organismo que paga las prestaciones (bajas, maternidad…).",
    "finiquito": "Lo que se paga al trabajador al terminar su contrato: días trabajados, vacaciones pendientes y pagas extra prorrateadas.",
    "atrasos": "Diferencias de salario que se deben a los trabajadores cuando el convenio sube con efecto retroactivo.",
    "convenio": "Convenio colectivo: el acuerdo del sector que fija los salarios mínimos y las condiciones de trabajo.",
    "base de cotización": "La cifra de sueldo sobre la que se calculan las cuotas de la Seguridad Social y las prestaciones.",
    "seguros sociales": "Las cuotas que la empresa paga cada mes a la Seguridad Social por sus trabajadores.",
    "pelota": "De quién depende que esto avance ahora mismo: el cliente, la mutua, la Seguridad Social o el gestor.",
    "SILTRA": "El programa oficial de la Seguridad Social para enviar y recibir los ficheros de cotización (RLC/RNT). Deja los documentos en carpetas locales que Yoda puede vigilar.",
    "TGSS": "Tesorería General de la Seguridad Social: el organismo que recauda las cuotas y devuelve los recibos de liquidación.",
    "modelo 111": "La declaración de las retenciones de IRPF de las nóminas, que se presenta a Hacienda cada trimestre (o cada mes en empresas grandes)."
  },

  // -------------------------------------------------------------------
  // Cartera de clientes. Cada tarjeta del Kanban = cliente × Julio 2026.
  //  sla: "ok" | "warn" | "alert" (semáforo por plazo legal)
  //  bloqueo: de quién es la pelota cuando el ciclo no puede avanzar
  //  envioAuto: si el envío de nóminas al cliente está configurado
  //  incidencias: el "control de nóminas" que antes era un Excel a mano
  // -------------------------------------------------------------------
  clientes: [
    {
      id: "fuego-lento",
      nombre: "Grupo Fuego Lento SL",
      sector: "Hostelería",
      empleados: 24,
      gestorId: "maria",
      herramienta: "SAGE",
      fase: "revision",
      sla: "warn",
      slaTexto: "Cálculo previo adelantado por los atrasos del convenio — revisar y cerrar antes del 25/07",
      plazo: "2026-07-25",
      bloqueo: null,
      envioAuto: true,
      envioAutoConocido: true,
      cifras: { bruto: 45205, ssEmpresa: 14420, neto: 35635 },
      variacion: {
        respectoA: "Junio",
        importe: 4725,
        porcentaje: 11.7,
        resumen: "La nómina de julio sube 4.725 € respecto a junio. Está explicado: no es un error.",
        conceptos: [
          { concepto: "Atrasos del convenio de hostelería: subida del 2,2 % con efectos 1 de abril", importe: 2782 },
          { concepto: "Aplicación de las nuevas tablas del convenio en la nómina de julio", importe: 875 },
          { concepto: "Alta nueva: Hugo Pardo, ayudante de camarero (del 4 al 31 de julio, prorrateado)", importe: 1368 },
          { concepto: "Finiquito de Jorge Salas: vacaciones no disfrutadas y pagas extra prorrateadas", importe: 540 },
          { concepto: "Jorge Salas devenga solo hasta el 15 de julio (baja voluntaria)", importe: -840 },
          { concepto: "Pago delegado de la IT de Antonio Vega — anticipado y recuperado en el RLC (coste neutro)", importe: 861, neutro: true }
        ]
      },
      incidencias: [
        { texto: "IT de Antonio Vega (lumbalgia, día 19) — pago delegado activo: 861 € anticipados", origen: "fie", fecha: "2026-06-23" },
        { texto: "Lucía Gil en descanso por nacimiento y cuidado de menor — pago directo del INSS", origen: "red", fecha: "2026-06-02" },
        { texto: "Alta de Hugo Pardo el 04/07 — prorrateo de 1.368 € en julio", origen: "email", fecha: "2026-07-03" },
        { texto: "Baja voluntaria de Jorge Salas el 15/07 — finiquito de 1.395 € en preparación", origen: "email", fecha: "2026-06-30" },
        { texto: "Atrasos del convenio de hostelería (+2,2 % desde abril): 2.782 €", origen: "convenio", fecha: "2026-07-08" }
      ],
      checklist: [
        { label: "Variables e incidencias recogidas", done: true },
        { label: "Incidencias aplicadas al cálculo (IT, alta, finiquito, atrasos)", done: true },
        { label: "Cálculo previo generado — variación +4.725 € explicada", done: true },
        { label: "Revisión del gestor", done: false },
        { label: "Envío de nóminas y resumen al cliente", done: false },
        { label: "RLC de julio con deducción del pago delegado (861 €)", done: false }
      ]
    },
    {
      id: "taberna-roble",
      nombre: "Taberna El Roble SL",
      sector: "Hostelería",
      empleados: 9,
      gestorId: "pedro",
      herramienta: "SAGE",
      fase: "variables",
      sla: "warn",
      slaTexto: "Variables sin cerrar — el cálculo no puede empezar",
      plazo: "2026-07-24",
      bloqueo: { texto: "Esperando las horas extra de junio del cliente", pelota: "Cliente", desde: "2026-07-08", dias: 3 },
      envioAuto: false,
      envioAutoConocido: false,
      cifras: { bruto: 15480, ssEmpresa: 4938, neto: 12198 },
      incidencias: [
        { texto: "Comunicado nacimiento y cuidado de menor de Aitana Robles — pago directo del INSS solicitado", origen: "email", fecha: "2026-07-09" }
      ],
      checklist: [
        { label: "Variables e incidencias recogidas", done: false },
        { label: "Cálculo de nóminas", done: false },
        { label: "Revisión del gestor", done: false },
        { label: "Envío de nóminas y resumen al cliente", done: false },
        { label: "Seguros sociales (RLC/RNT)", done: false }
      ]
    },
    {
      id: "sonrisalud",
      nombre: "Clínica Dental Sonrisalud SL",
      sector: "Sanidad privada",
      empleados: 12,
      gestorId: "nerea",
      herramienta: "A3",
      fase: "calculo",
      sla: "ok",
      slaTexto: "Cálculo previo adelantado para cuadrar la IT de Marta Ruiz — cierre en plazo (24/07)",
      plazo: "2026-07-24",
      bloqueo: null,
      envioAuto: true,
      envioAutoConocido: false,
      cifras: { bruto: 23400, ssEmpresa: 7465, neto: 18439 },
      incidencias: [
        { texto: "IT por contingencia común de Marta Ruiz desde el 07/07 — detectada en el FIE y cruzada con la plantilla", origen: "fie", fecha: "2026-07-07" }
      ],
      checklist: [
        { label: "Variables e incidencias recogidas", done: true },
        { label: "Cálculo de nóminas", done: false },
        { label: "Revisión del gestor", done: false },
        { label: "Envío de nóminas y resumen al cliente", done: false },
        { label: "Seguros sociales (RLC/RNT)", done: false }
      ]
    },
    {
      id: "vega-norte",
      nombre: "Construcciones Vega Norte SL",
      sector: "Construcción",
      empleados: 18,
      gestorId: "pedro",
      herramienta: "A3",
      fase: "variables",
      sla: "alert",
      slaTexto: "Nuevas tablas del convenio de construcción (BOCM 08/07) — recalcular antes de cerrar",
      plazo: "2026-07-23",
      bloqueo: null,
      envioAuto: false,
      envioAutoConocido: false,
      cifras: { bruto: 38700, ssEmpresa: 12345, neto: 30496 },
      incidencias: [
        { texto: "Nuevas tablas del convenio de construcción de Madrid — atrasos desde enero pendientes de calcular", origen: "convenio", fecha: "2026-07-08" },
        { texto: "Solicitud de alta de un peón para el lunes 20/07 — formulario preparado por el agente", origen: "email", fecha: "2026-07-10" }
      ],
      checklist: [
        { label: "Variables e incidencias recogidas", done: false },
        { label: "Recalcular con las nuevas tablas del convenio", done: false },
        { label: "Cálculo de nóminas", done: false },
        { label: "Revisión del gestor", done: false },
        { label: "Envío de nóminas y resumen al cliente", done: false },
        { label: "Seguros sociales (RLC/RNT)", done: false }
      ]
    },
    {
      id: "horno-ana",
      nombre: "Panadería Horno de Ana SL",
      sector: "Comercio de alimentación",
      empleados: 6,
      gestorId: "maria",
      herramienta: "SAGE",
      fase: "calculo",
      sla: "ok",
      slaTexto: "Adelantada: el cliente paga anticipos el día 15 y pide el cálculo antes",
      plazo: "2026-07-28",
      bloqueo: null,
      envioAuto: true,
      envioAutoConocido: true,
      cifras: { bruto: 9480, ssEmpresa: 3024, neto: 7470 },
      incidencias: [],
      checklist: [
        { label: "Variables e incidencias recogidas", done: true },
        { label: "Cálculo de nóminas (anticipos del día 15)", done: false },
        { label: "Revisión del gestor", done: false },
        { label: "Envío de nóminas y resumen al cliente", done: false },
        { label: "Seguros sociales (RLC/RNT)", done: false }
      ]
    },
    {
      id: "talleres-marquez",
      nombre: "Talleres Márquez SL",
      sector: "Automoción",
      empleados: 11,
      gestorId: "nerea",
      herramienta: "A3",
      fase: "variables",
      sla: "ok",
      slaTexto: "Variables completas — a la espera de la ventana de cálculo (día 21)",
      plazo: "2026-07-28",
      bloqueo: null,
      envioAuto: true,
      envioAutoConocido: false,
      cifras: { bruto: 21780, ssEmpresa: 6948, neto: 17163 },
      incidencias: [
        { texto: "Anticipo de 400 € a Iván Cuesta descontado en la nómina de julio", origen: "email", fecha: "2026-07-02" }
      ],
      checklist: [
        { label: "Variables e incidencias recogidas", done: true },
        { label: "Cálculo de nóminas", done: false },
        { label: "Revisión del gestor", done: false },
        { label: "Envío de nóminas y resumen al cliente", done: false },
        { label: "Seguros sociales (RLC/RNT)", done: false }
      ]
    },
    {
      id: "riofrio",
      nombre: "Distribuciones Riofrío SL",
      sector: "Logística",
      empleados: 15,
      gestorId: "pedro",
      herramienta: "SAGE",
      fase: "variables",
      sla: "warn",
      slaTexto: "El contrato de Iker Sanz termina el 26/07 — decidir prórroga antes de calcular",
      plazo: "2026-07-26",
      bloqueo: null,
      envioAuto: true,
      envioAutoConocido: true,
      cifras: { bruto: 28350, ssEmpresa: 9044, neto: 22340 },
      incidencias: [
        { texto: "El contrato temporal de Iker Sanz termina el 26/07 — decidir prórroga o cese", origen: "aviso", fecha: "2026-07-11" }
      ],
      checklist: [
        { label: "Variables e incidencias recogidas", done: false },
        { label: "Cálculo de nóminas", done: false },
        { label: "Revisión del gestor", done: false },
        { label: "Envío de nóminas y resumen al cliente", done: false },
        { label: "Seguros sociales (RLC/RNT)", done: false }
      ]
    },
    {
      id: "petalos",
      nombre: "Floristería Pétalos SL",
      sector: "Comercio",
      empleados: 4,
      gestorId: "maria",
      herramienta: "A3",
      fase: "variables",
      sla: "ok",
      slaTexto: "Sin incidencias en julio — lista para la ventana de cálculo",
      plazo: "2026-07-28",
      bloqueo: null,
      envioAuto: true,
      envioAutoConocido: true,
      cifras: { bruto: 6080, ssEmpresa: 1940, neto: 4791 },
      incidencias: [],
      checklist: [
        { label: "Variables e incidencias recogidas", done: true },
        { label: "Cálculo de nóminas", done: false },
        { label: "Revisión del gestor", done: false },
        { label: "Envío de nóminas y resumen al cliente", done: false },
        { label: "Seguros sociales (RLC/RNT)", done: false }
      ]
    },
    {
      id: "academia-lumen",
      nombre: "Academia Lumen SL",
      sector: "Educación",
      empleados: 8,
      gestorId: "nerea",
      herramienta: "A3",
      fase: "variables",
      sla: "warn",
      slaTexto: "Pendiente confirmar el plus de formación de julio",
      plazo: "2026-07-24",
      bloqueo: { texto: "Esperando confirmación del plus de formación", pelota: "Cliente", desde: "2026-07-09", dias: 2 },
      envioAuto: false,
      envioAutoConocido: false,
      cifras: { bruto: 14080, ssEmpresa: 4492, neto: 11095 },
      incidencias: [
        { texto: "Reducción de jornada de Paula Íñiguez al 80 % desde el 01/07 (cuidado de menor)", origen: "email", fecha: "2026-06-26" }
      ],
      checklist: [
        { label: "Variables e incidencias recogidas", done: false },
        { label: "Cálculo de nóminas", done: false },
        { label: "Revisión del gestor", done: false },
        { label: "Envío de nóminas y resumen al cliente", done: false },
        { label: "Seguros sociales (RLC/RNT)", done: false }
      ]
    }
  ],

  // -------------------------------------------------------------------
  // Seguros sociales de junio (se envían al cliente en julio).
  // El dolor nº 1 de las entrevistas: SILTRA los deja en una carpeta
  // local (Yoda la vigila) y el envío se hace por Gmail API, no Outlook.
  // -------------------------------------------------------------------
  segurosSociales: {
    periodo: "Junio 2026",
    nota: "Los RLC/RNT llegan solos desde la carpeta de SILTRA. El envío sale por tu Gmail, con el recibo adjunto.",
    clientes: [
      { clienteId: "fuego-lento",     recibido: "2026-07-08", enviado: "2026-07-09" },
      { clienteId: "taberna-roble",   recibido: "2026-07-08", enviado: null },
      { clienteId: "sonrisalud",      recibido: "2026-07-08", enviado: null },
      { clienteId: "vega-norte",      recibido: "2026-07-09", enviado: null },
      { clienteId: "horno-ana",       recibido: "2026-07-08", enviado: "2026-07-09" },
      { clienteId: "talleres-marquez",recibido: "2026-07-08", enviado: null },
      { clienteId: "riofrio",         recibido: "2026-07-08", enviado: "2026-07-08" },
      { clienteId: "petalos",         recibido: "2026-07-08", enviado: "2026-07-09" },
      { clienteId: "academia-lumen",  recibido: null,          enviado: null,
        notaFila: "Pendiente de respuesta de la TGSS" }
    ]
  },

  // -------------------------------------------------------------------
  // Panel "¿Cómo funciona?": el mecanismo REAL detrás de cada promesa.
  // Nada de humo: cada línea es defendible con su fuente.
  // -------------------------------------------------------------------
  comoFunciona: [
    {
      titulo: "Avisos de convenios",
      mecanismo: "Un proceso diario consulta el sumario del BOE por su API de datos abiertos (XML/JSON) y el registro REGCON, filtrando los convenios de los sectores de tu cartera. Existe incluso un MCP del BOE que Claude puede usar directamente.",
      fuente: "boe.es/datosabiertos · expinterweb.mites.gob.es/regcon"
    },
    {
      titulo: "Seguros sociales que llegan solos",
      mecanismo: "SILTRA guarda los RLC/RNT que devuelve la TGSS en carpetas locales documentadas (XDCR/RLC y XDCR/RNT). Yoda vigila esas carpetas e importa cada documento al cliente que corresponde.",
      fuente: "Estructura de directorios del manual oficial de SILTRA (seg-social.es)"
    },
    {
      titulo: "Envío por Gmail (no Outlook)",
      mecanismo: "Lo que SAGE hace con Outlook (MAPI), Yoda lo hace con la API oficial de Gmail: OAuth de Google Workspace y envío en nombre del gestor, con las nóminas o el RLC adjuntos.",
      fuente: "Gmail API (developers.google.com/gmail)"
    },
    {
      titulo: "Conexión con A3",
      mecanismo: "a3innuva Nómina tiene API REST oficial (portal a3developers, integración Conectia): empleados, nóminas y costes se sincronizan sin exportar nada a mano.",
      fuente: "a3developers.wolterskluwer.es"
    },
    {
      titulo: "Conexión con SAGE",
      mecanismo: "SAGE Despachos no tiene API pública, así que el patrón es otro: exportas los PDF a una carpeta sincronizada con Drive y Yoda la vigila, clasifica cada documento y lo archiva en la carpeta del cliente. Nunca más bajar y volver a subir.",
      fuente: "Carpeta vigilada + Drive for Desktop (patrón estándar)"
    },
    {
      titulo: "Bajas detectadas sin buscar (FIE)",
      mecanismo: "El Sistema RED publica cada día el fichero FIE (INSS-Empresas) con bajas, altas y partes médicos. Yoda lo cruza con tu cartera: trabajador, base de cotización y convenio ya vienen resueltos.",
      fuente: "Fichero FIE del Sistema RED (también accesible vía SILTRA)"
    },
    {
      titulo: "Bandeja del agente",
      mecanismo: "Cada noche a las 23:00 un agente (Claude) lee el buzón de Gmail por API, clasifica los correos — altas y bajas, verificaciones, impuestos — y deja la propuesta preparada. Tú solo confirmas, con enlace al email original.",
      fuente: "Gmail API + Claude (Zinco ya trabaja con Claude)"
    },
    {
      titulo: "Facturación sin teclear",
      mecanismo: "Cada acción en Yoda ya sabe el cliente y el tiempo empleado; junto con el correo y el calendario alimenta la facturación sola. Se acabó reportar en 5 herramientas (Excel, Yoda, Slack, Gmail, Adbook).",
      fuente: "Registro de actividad de Yoda + Gmail API + Google Calendar API"
    },
    {
      titulo: "Lo que Yoda NO hace",
      mecanismo: "No calcula la nómina. Eso lo hacen A3 y SAGE, que llevan la normativa al día y no se sustituyen. Yoda orquesta todo lo demás alrededor: recoger, avisar, enviar, archivar y registrar.",
      fuente: "Decisión de alcance — asumida a propósito"
    }
  ],

  // -------------------------------------------------------------------
  // Bandeja del agente: correos y ficheros ya analizados por Yoda.
  // Cada propuesta se acepta con 1 clic y crea la incidencia en el
  // control de nóminas del cliente (antes: copiar a mano a un Excel).
  // -------------------------------------------------------------------
  bandejaAgente: [
    {
      id: "a-1",
      categoria: "Variables",
      origen: "email",
      origenTexto: "Email de Carmen (Grupo Fuego Lento) · hoy 09:41",
      asunto: "Sara Peña, 2 días de asuntos propios",
      analisis: "Sara Peña (camarera) ha disfrutado 2 días de asuntos propios no retribuidos los días 8 y 9 de julio.",
      clienteId: "fuego-lento",
      propuesta: "Añadir la incidencia al control de nóminas de julio: descuento de 2 días (−104 € brutos).",
      incidencia: { texto: "Sara Peña: 2 días de asuntos propios no retribuidos (8-9/07) — descuento de 104 € brutos", origen: "email" },
      cta: "Añadir al control"
    },
    {
      id: "a-2",
      categoria: "Altas y bajas",
      origen: "fie",
      origenTexto: "Fichero FIE · descargado hoy 08:05",
      asunto: "2 movimientos nuevos en el FIE",
      analisis: "Prórroga de la IT de Antonio Vega (Grupo Fuego Lento) y nueva IT de Marta Ruiz (Clínica Sonrisalud). Ya están cruzados con tus clientes: no hay que buscar trabajador, base de cotización ni convenio.",
      clienteId: "sonrisalud",
      propuesta: "Importar los 2 movimientos y actualizar el control de nóminas de cada cliente.",
      incidencia: { texto: "Prórroga de la IT de Marta Ruiz confirmada en el FIE — base de cotización verificada", origen: "fie" },
      cta: "Importar del FIE"
    },
    {
      id: "a-3",
      categoria: "Altas y bajas",
      origen: "email",
      origenTexto: "Email de Construcciones Vega Norte · ayer 18:22",
      asunto: "Alta de un peón para el lunes 20/07",
      analisis: "Solicitan el alta de Andrei Popescu, peón, contrato fijo de obra, desde el 20/07. El agente ha rellenado el formulario de alta con los datos del email.",
      clienteId: "vega-norte",
      propuesta: "Revisar el formulario auto-rellenado y dejar preparada la comunicación al Sistema RED.",
      incidencia: { texto: "Alta de Andrei Popescu (peón) el 20/07 — formulario revisado, pendiente de comunicar al RED", origen: "email" },
      cta: "Revisar formulario"
    },
    {
      id: "a-4",
      categoria: "Altas y bajas",
      origen: "email",
      origenTexto: "Email de Taberna El Roble · hoy 10:15",
      asunto: "Nacimiento y cuidado de menor de Aitana Robles",
      analisis: "Comunican el nacimiento del hijo de Aitana Robles (camarera). El agente ha preparado la comunicación al Sistema RED y la solicitud de pago directo del INSS.",
      clienteId: "taberna-roble",
      propuesta: "Confirmar la comunicación a la Seguridad Social y la solicitud de pago directo.",
      incidencia: { texto: "Descanso por nacimiento y cuidado de menor de Aitana Robles — comunicado al RED y pago directo solicitado", origen: "email" },
      cta: "Confirmar trámite"
    },
    {
      id: "a-5",
      categoria: "Envíos",
      origen: "email",
      origenTexto: "Email de Panadería Horno de Ana · hoy 11:02",
      asunto: "¿Me mandas las nóminas de junio?",
      analisis: "El cliente pide las nóminas de junio. Están guardadas en su carpeta de Drive y el envío automático está configurado: se pueden mandar con el resumen en un clic.",
      clienteId: "horno-ana",
      propuesta: "Enviar las nóminas de junio + resumen directamente desde Yoda.",
      incidencia: { texto: "Nóminas de junio reenviadas al cliente con resumen (solicitud por email)", origen: "email" },
      cta: "Enviar nóminas"
    }
  ],

  // -------------------------------------------------------------------
  // Avisos: lo que antes nadie avisaba ("avisos avisos avisos!!!").
  // -------------------------------------------------------------------
  avisos: [
    {
      id: "av-1",
      tipo: "convenio",
      nivel: "alert",
      titulo: "Nuevas tablas del convenio de construcción de Madrid",
      detalle: "Publicadas en el BOCM el 08/07 con atrasos desde enero. Afecta a Construcciones Vega Norte (18 empleados).",
      cta: "Recalcular con las nuevas tablas",
      clienteId: "vega-norte"
    },
    {
      id: "av-2",
      tipo: "contrato",
      nivel: "warn",
      titulo: "Fin de contrato temporal en 15 días",
      detalle: "El contrato de Iker Sanz (Distribuciones Riofrío) termina el 26/07. Hay que decidir prórroga o cese y preparar la comunicación.",
      cta: "Preparar prórroga o cese",
      clienteId: "riofrio"
    },
    {
      id: "av-3",
      tipo: "rlc",
      nivel: "warn",
      titulo: "Verificar el pago delegado en el RLC de julio",
      detalle: "861 € anticipados a Antonio Vega (Grupo Fuego Lento) por su IT. La deducción debe quedar reflejada antes de presentar la liquidación.",
      cta: "Ver el borrador del RLC",
      clienteId: "fuego-lento"
    },
    {
      id: "av-4",
      tipo: "caducidad",
      nivel: "warn",
      titulo: "Certificado digital a punto de caducar",
      detalle: "El certificado de Talleres Márquez caduca el 04/08. Sin él no se pueden presentar los seguros sociales de agosto.",
      cta: "Iniciar renovación",
      clienteId: "talleres-marquez"
    },
    {
      id: "av-5",
      tipo: "recurrente",
      nivel: "warn",
      titulo: "Recurrente: los seguros sociales de junio se envían el lunes",
      detalle: "Quedan 4 clientes sin enviar. Los RLC/RNT ya están importados desde SILTRA; el envío sale por tu Gmail en un clic.",
      cta: "Ir a Seguros sociales",
      accion: "tab-ss"
    },
    {
      id: "av-6",
      tipo: "interno",
      nivel: "info",
      titulo: "Cambios en el equipo: Claudia se incorpora al área laboral",
      detalle: "Desde el lunes 14, Claudia se une al equipo. Nadie más tiene que enterarse por casualidad: Yoda avisa de los cambios internos.",
      cta: "Ver quién lleva cada cliente"
    }
  ]
};
