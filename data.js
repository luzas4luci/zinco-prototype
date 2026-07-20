// =====================================================================
// data.js — Yoda · Nóminas (rediseño según DECISIONES.md)
// Pantalla de UN cliente: Grupo Fuego Lento SL, dentro de la navegación
// real de Yoda (Sidebar → Cliente → Laboral → Nóminas).
// Fecha simulada de "hoy": lunes 27 de julio de 2026 — día de envío
// (calendario real: el 1 de julio de 2026 cae en miércoles; el 27, lunes).
// Coherencia al euro (cálculo definitivo): 40.480 (junio) + 2.782 + 875
// + 1.368 + 540 − 840 − 104 = 45.101 €. El pago delegado (861 €) es neutro
// (se recupera en el RLC). Los 2 días de Sara Peña (−104 €) ya entran en el
// definitivo: eso es lo que "Verificar" te enseña, cuadrando 6 de 6.
// =====================================================================

window.DATA = {

  hoy: "2026-07-27",
  hoyTexto: "lunes, 27 de julio de 2026",

  cliente: {
    nombre: "Grupo Fuego Lento SL",
    sector: "Hostelería",
    provincia: "Madrid",
    empleados: 24,
    estado: "Activo",
    gestora: "María",
    inicialesGestora: "MA",
    herramienta: "SAGE",
    envioAuto: true,
    convenio: "Convenio colectivo de hostelería de la Comunidad de Madrid"
  },

  // -------------------------------------------------------------------
  // Calendario del ciclo (julio 2026 real). primerDiaSemana: 1 = lunes;
  // el 1 de julio de 2026 es miércoles → 3.
  // -------------------------------------------------------------------
  calendario: {
    mes: "Julio 2026",
    diasMes: 31,
    primerDiaSemana: 3,
    diaHoy: 27,
    fases: [
      { desde: 1,  hasta: 5,  id: "variables", label: "Variables e incidencias",
        tip: "Días 1-5: recoger todo lo que cambia la nómina del mes (horas extra, bajas, altas, anticipos)." },
      { desde: 20, hasta: 20, id: "impuestos", label: "Impuestos",
        tip: "Día 20: presentación del modelo 111 del 2.º trimestre (retenciones de IRPF de las nóminas)." },
      { desde: 21, hasta: 24, id: "calculo",   label: "Cálculo y revisión",
        tip: "Días 21-24: cálculo definitivo de las nóminas en SAGE y revisión de la gestora." },
      { desde: 25, hasta: 28, id: "envio",     label: "Envío y pago",
        tip: "Días 25-28: envío de nóminas y resumen al cliente, y pago a los trabajadores." },
      { desde: 29, hasta: 31, id: "rlc",       label: "Seguros sociales",
        tip: "Días 29-31: presentación de los RLC/RNT del mes por SILTRA (plazo hasta fin de mes)." }
    ]
  },

  // -------------------------------------------------------------------
  // "Hoy toca" — tarjeta fija bajo el calendario. Servido, sin explorar.
  // -------------------------------------------------------------------
  hoyToca: [
    "Enviar las nóminas de julio a Grupo Fuego Lento — el cálculo está cerrado y cuadra",
    "Presentar los seguros sociales de junio (RLC/RNT) antes del viernes 31",
    "Ordenar las transferencias de pago a los 24 trabajadores"
  ],

  // -------------------------------------------------------------------
  // Avisos importantes — mini-kanban Por hacer / Hecho.
  // Ítems discretos del cliente que se resuelven y se mueven.
  // -------------------------------------------------------------------
  avisos: {
    porHacer: [
      {
        id: "av-7",
        titulo: "Seguros sociales de junio",
        detalle: "Presentar el RLC/RNT de junio por SILTRA antes del viernes 31/07. Ya está preparado; falta enviar.",
        plazo: "Vence el 31/07"
      },
      {
        id: "av-8",
        titulo: "Transferencias de pago",
        detalle: "Ordenar las transferencias de la nómina de julio a los 24 trabajadores tras el envío al cliente.",
        plazo: "Ventana de pago 25-28"
      }
    ],
    hecho: [
      {
        id: "av-1",
        titulo: "Finiquito de Jorge Salas",
        detalle: "Baja voluntaria; último día 15/07. Finiquito de 1.395 € brutos calculado y pagado (15 días + 4 de vacaciones + extras)."
      },
      {
        id: "av-3",
        titulo: "Asuntos propios de Sara Peña",
        detalle: "2 días no retribuidos (8 y 9/07) incorporados al cálculo definitivo: −104 € brutos."
      },
      {
        id: "av-2",
        titulo: "2.º parte de confirmación de Antonio Vega",
        detalle: "IT por lumbalgia: 2.º parte recibido de Mutua Universal; la baja continúa y el pago delegado sigue en el RLC."
      },
      {
        id: "av-4",
        titulo: "Alta de Hugo Pardo",
        detalle: "Comunicada al Sistema RED el 04/07. Prorrateo de 1.368 € aplicado al cálculo de julio."
      },
      {
        id: "av-5",
        titulo: "Pago directo del INSS de Lucía Gil",
        detalle: "Nacimiento y cuidado de menor: tramitado. Julio a 0 € en nómina; cobra directamente del INSS."
      },
      {
        id: "av-6",
        titulo: "Nuevas tablas del convenio de hostelería",
        detalle: "Subida del 2,2 % con efectos 1 de abril, aplicada: 2.782 € de atrasos + 875 € en las tablas de julio."
      }
    ]
  },

  // -------------------------------------------------------------------
  // Flujo de nómina — exportar → verificar → enviar (el corazón).
  // Estado a día 27 (ventana de envío): el cálculo definitivo está cerrado
  // y verificado; hoy toca enviar las nóminas a la empresa.
  // -------------------------------------------------------------------
  flujo: {
    exportar: {
      titulo: "Exportar desde SAGE",
      hecho: true,
      detalle: "Cálculo definitivo de julio: 24 nóminas importadas a Yoda desde la carpeta de SAGE. Nada que bajar ni subir a mano.",
      nota: "Cálculo cerrado tras la revisión del 21-24.",
      documento: {
        archivo: "Nóminas_Julio2026_GrupoFuegoLentoSL.pdf",
        paginas: 24,
        tamano: "1,8 MB",
        generado: "24/07/2026 · 17:40",
        ruta: "Documentos › Grupo Fuego Lento SL › Nóminas › 2026-07",
        extra: "+ 1 resumen del mes, listo para adjuntar al envío"
      }
    },
    verificar: {
      titulo: "Verificar el cálculo",
      base: { label: "Nómina de junio (cerrada)", importe: 40480 },
      conceptos: [
        { label: "Atrasos del convenio de hostelería (+2,2 % desde el 1 de abril)", importe: 2782, avisoId: "av-6" },
        { label: "Nuevas tablas del convenio aplicadas a julio", importe: 875, avisoId: "av-6" },
        { label: "Alta de Hugo Pardo — del 4 al 31 de julio, prorrateado", importe: 1368, avisoId: "av-4" },
        { label: "Finiquito de Jorge Salas: vacaciones y extras prorrateadas", importe: 540, avisoId: "av-1" },
        { label: "Jorge Salas devenga solo hasta el 15 de julio", importe: -840, avisoId: "av-1" },
        { label: "Asuntos propios de Sara Peña (2 días no retribuidos)", importe: -104, avisoId: "av-3" }
      ],
      total: { label: "Cálculo definitivo de julio", importe: 45101 },
      comprobaciones: [
        { texto: "Alta de Hugo Pardo reflejada (+1.368 €)", ok: true },
        { texto: "Baja de Jorge Salas prorrateada y finiquito incluido (+540 € / −840 €)", ok: true },
        { texto: "Atrasos y tablas nuevas del convenio aplicados (+3.657 €)", ok: true },
        { texto: "IT de Antonio Vega: pago delegado de 861 € anticipado y recuperado en el RLC — coste neutro", ok: true },
        { texto: "Lucía Gil en pago directo del INSS: julio a 0 € en nómina", ok: true },
        { texto: "Asuntos propios de Sara Peña reflejados (−104 €)", ok: true }
      ],
      resumen: "El cálculo definitivo cuadra al euro: 6 de 6 incidencias reflejadas.",
      cifras: { bruto: 45101, ssEmpresa: 14387, neto: 35556 }
    },
    enviar: {
      titulo: "Enviar en 1 clic",
      detalle: "24 nóminas + resumen del mes a Carmen Ortega (directora de operaciones), desde tu Gmail. Copia en los Documentos del cliente.",
      nota: "Hoy es el día de envío (ventana 25-28).",
      destinatario: "carmen@grupofuegolento.es",
      asunto: "Nóminas de julio 2026 — Grupo Fuego Lento SL",
      cuerpo: "Hola Carmen,\n\nAdjunto las nóminas de julio y el resumen del mes.\n\nEl cálculo está cerrado y cuadra con las altas, bajas e incidencias registradas: alta de Hugo Pardo, baja y finiquito de Jorge Salas, IT de Antonio Vega, los 2 días de Sara Peña y los atrasos del convenio.\n\nCualquier cosa, aquí estoy.\n\nUn saludo,\nMaría",
      adjuntos: ["Nóminas_Julio2026_GrupoFuegoLentoSL.pdf", "Resumen_Julio2026_GrupoFuegoLentoSL.pdf"]
    }
  },

  // -------------------------------------------------------------------
  // Hipótesis de integración (DECISIONES §5) — enlace discreto en el pie.
  // Se muestran funcionando; se nombran como hipótesis en el pitch.
  // -------------------------------------------------------------------
  hipotesis: [
    {
      titulo: "Exportar de SAGE/A3 directo a Yoda",
      texto: "SAGE Despachos no tiene API pública: el prototipo asume una carpeta vigilada (SAGE exporta el PDF, Yoda lo ingiere y clasifica). Con A3 sí existe API oficial (a3innuva · Conectia). Pregunta abierta del discovery: dónde está el umbral real de integración."
    },
    {
      titulo: "Enviar por Gmail en 1 clic",
      texto: "SAGE envía por Outlook (MAPI) y la gestoría usa Gmail. El prototipo asume envío por la API de Gmail con la cuenta del gestor. No sé aún dónde está el umbral de integración para que esto funcione con Gmail."
    },
    {
      titulo: "Seguros sociales",
      texto: "Es la misma hipótesis Gmail/Outlook que el envío de nóminas. Fuera del alcance de este primer prototipo: empecé por nóminas, pero seguros sociales escala con el mismo patrón."
    }
  ],

  // -------------------------------------------------------------------
  // Glosario para tooltips (se queda: oro para el veterano, invisible
  // para el junior). Subrayado sutil, definición al hover.
  // -------------------------------------------------------------------
  glosario: {
    "Sistema RED": "La plataforma online de la Seguridad Social donde se comunican altas, bajas y liquidaciones.",
    "RED": "La plataforma online de la Seguridad Social donde se comunican altas, bajas y liquidaciones.",
    "RLC": "Recibo de Liquidación de Cotizaciones: los “seguros sociales” que la empresa paga cada mes a la Seguridad Social.",
    "RNT": "Relación Nominal de Trabajadores: el listado que acompaña a la liquidación mensual de seguros sociales.",
    "IT": "Incapacidad Temporal: la baja médica de un trabajador.",
    "pago delegado": "La empresa adelanta al trabajador el dinero de su baja en la nómina y después lo recupera descontándolo de los seguros sociales.",
    "pago directo": "La prestación la paga directamente el INSS al trabajador, no la empresa.",
    "INSS": "Instituto Nacional de la Seguridad Social: el organismo que paga las prestaciones (bajas, maternidad…).",
    "finiquito": "Lo que se paga al trabajador al terminar su contrato: días trabajados, vacaciones pendientes y pagas extra prorrateadas.",
    "atrasos": "Diferencias de salario que se deben a los trabajadores cuando el convenio sube con efecto retroactivo.",
    "convenio": "Convenio colectivo: el acuerdo del sector que fija los salarios mínimos y las condiciones de trabajo.",
    "seguros sociales": "Las cuotas que la empresa paga cada mes a la Seguridad Social por sus trabajadores.",
    "SILTRA": "El programa oficial de la Seguridad Social para enviar y recibir los ficheros de cotización (RLC/RNT).",
    "modelo 111": "La declaración de las retenciones de IRPF de las nóminas, que se presenta a Hacienda cada trimestre.",
    "prorrateado": "Repartido en proporción a los días trabajados del mes."
  }
};
