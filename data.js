// =====================================================================
// data.js — Yoda · Nóminas (rediseño según DECISIONES.md)
// Pantalla de UN cliente: Grupo Fuego Lento SL, dentro de la navegación
// real de Yoda (Sidebar → Cliente → Laboral → Nóminas).
// Fecha simulada de "hoy": viernes 10 de julio de 2026 (calendario real:
// el 1 de julio de 2026 cae en miércoles; el 20, lunes).
// Coherencia al euro: 40.480 (junio) + 2.782 + 875 + 1.368 + 540 − 840
// = 45.205 € (cálculo previo de julio). El pago delegado (861 €) es
// neutro y los 2 días de Sara Peña (−104 €) quedan pendientes para el
// cálculo definitivo (días 21-24): eso es lo que "Verificar" te enseña.
// =====================================================================

window.DATA = {

  hoy: "2026-07-10",
  hoyTexto: "viernes, 10 de julio de 2026",

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
    diaHoy: 10,
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
    "Revisar el cálculo previo de julio: sube 4.725 € por los atrasos del convenio — está explicado partida a partida",
    "Reclamar a Mutua Universal el 2.º parte de confirmación de Antonio Vega (pendiente desde el día 5)",
    "Preparar el finiquito de Jorge Salas — su último día es el miércoles 15"
  ],

  // -------------------------------------------------------------------
  // Avisos importantes — mini-kanban Por hacer / Hecho.
  // Ítems discretos del cliente que se resuelven y se mueven.
  // -------------------------------------------------------------------
  avisos: {
    porHacer: [
      {
        id: "av-1",
        titulo: "Finiquito de Jorge Salas",
        detalle: "Baja voluntaria el 15/07. Calculado: 1.395 € brutos (salario de 15 días, 4 días de vacaciones y pagas extra prorrateadas).",
        plazo: "Vence el 15/07"
      },
      {
        id: "av-2",
        titulo: "2.º parte de confirmación de Antonio Vega",
        detalle: "IT por lumbalgia (día 18 de baja). Mutua Universal aún no envía el parte; sin él no se acredita la prórroga.",
        plazo: "Pendiente desde el 05/07"
      },
      {
        id: "av-3",
        titulo: "Asuntos propios de Sara Peña",
        detalle: "2 días no retribuidos (8 y 9/07) comunicados ayer por email. Se descontarán 104 € brutos en el cálculo definitivo.",
        plazo: "Para el cálculo del 21-24"
      }
    ],
    hecho: [
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
  // Estado a día 10: el cálculo previo está exportado (María lo adelantó
  // por los atrasos del convenio); verificar es el trabajo de hoy; el
  // envío se habilita tras verificar (ventana habitual: 25-28).
  // -------------------------------------------------------------------
  flujo: {
    exportar: {
      titulo: "Exportar desde SAGE",
      hecho: true,
      detalle: "Cálculo previo de julio: 24 nóminas importadas a Yoda hoy a las 08:15 desde la carpeta de SAGE. Nada que bajar ni subir a mano.",
      nota: "Adelantado por los atrasos del convenio — el definitivo se calcula el 21-24.",
      documento: {
        archivo: "Nóminas_Julio2026_GrupoFuegoLentoSL.pdf",
        paginas: 24,
        tamano: "1,8 MB",
        generado: "10/07/2026 · 08:15",
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
        { label: "Jorge Salas devenga solo hasta el 15 de julio", importe: -840, avisoId: "av-1" }
      ],
      total: { label: "Cálculo previo de julio", importe: 45205 },
      comprobaciones: [
        { texto: "Alta de Hugo Pardo reflejada (+1.368 €)", ok: true },
        { texto: "Baja de Jorge Salas prorrateada y finiquito incluido (+540 € / −840 €)", ok: true },
        { texto: "Atrasos y tablas nuevas del convenio aplicados (+3.657 €)", ok: true },
        { texto: "IT de Antonio Vega: pago delegado de 861 € anticipado y recuperado en el RLC — coste neutro", ok: true },
        { texto: "Lucía Gil en pago directo del INSS: julio a 0 € en nómina", ok: true }
      ],
      pendiente: {
        texto: "Asuntos propios de Sara Peña (−104 €): comunicados ayer, entran en el cálculo definitivo del 21-24",
        avisoId: "av-3"
      },
      resumen: "El cálculo previo cuadra al euro: 5 de 5 incidencias reflejadas · 1 nueva anotada para el definitivo.",
      cifras: { bruto: 45205, ssEmpresa: 14420, neto: 35635 }
    },
    enviar: {
      titulo: "Enviar en 1 clic",
      detalle: "24 nóminas + resumen del mes a Carmen Ortega (directora de operaciones), desde tu Gmail. Copia en los Documentos del cliente.",
      nota: "Ventana habitual de envío: del 25 al 28.",
      destinatario: "carmen@grupofuegolento.es"
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
