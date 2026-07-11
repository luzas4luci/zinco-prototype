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
    { id: 10, nombre: "Lucía Gil",         puesto: "Camarera",                        salarioBase: 1560, pluses: 150, irpfPct: 11.9, fechaAlta: "2021-03-15", situacion: "Nacimiento y cuidado de menor" },
    { id: 11, nombre: "Diego Antúnez",     puesto: "Camarero",                        salarioBase: 1560, pluses: 160, irpfPct: 12.0, fechaAlta: "2021-10-04" },
    { id: 12, nombre: "Sara Peña",         puesto: "Camarera",                        salarioBase: 1560, pluses: 140, irpfPct: 11.8, fechaAlta: "2022-06-01" },
    { id: 13, nombre: "Rubén Cano",        puesto: "Camarero",                        salarioBase: 1560, pluses: 155, irpfPct: 11.9, fechaAlta: "2022-09-12" },
    { id: 14, nombre: "Alba Serrano",      puesto: "Camarera",                        salarioBase: 1560, pluses: 145, irpfPct: 11.8, fechaAlta: "2023-05-08" },
    { id: 15, nombre: "Jorge Salas",       puesto: "Camarero",                        salarioBase: 1560, pluses: 150, irpfPct: 11.9, fechaAlta: "2021-02-01", situacion: "Baja voluntaria el 15/07 — finiquito en preparación" },
    { id: 16, nombre: "Andrea Molina",     puesto: "Ayudante de camarera",            salarioBase: 1430, pluses: 95,  irpfPct: 10.5, fechaAlta: "2023-11-20" },
    { id: 17, nombre: "Hugo Pardo",        puesto: "Ayudante de camarero",            salarioBase: 1430, pluses: 90,  irpfPct: 10.5, fechaAlta: "2026-07-04", situacion: "Alta nueva (04/07)" },
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
            { concepto: "Pagas extra prorrateadas pendientes", importe: 312.4 }
          ],
          totalBruto: 1395.4
        }
      }
    ]
  },

  // -------------------------------------------------------------------
  // Nóminas feb–jul (totales de empresa, en €/mes)
  // ssEmpresa ≈ 31,9 % del bruto (CC 23,6 + desempleo 5,5 + FOGASA 0,2
  // + FP 0,7 + AT/EP 1,9). Julio sube por: atrasos del convenio,
  // nuevas tablas (+2,2 %) y 1 alta nueva prorrateada.
  // -------------------------------------------------------------------
  nominas: {
    mesActual: {
      mes: "Julio",
      avancePct: 60,
      etapa: "Cálculo previo listo — pendiente de cierre y envío"
    },
    meses: [
      { mes: "Febrero",   bruto: 41890, ssEmpresa: 13363, neto: 33022, estado: "ok",   estadoTexto: "✓ Cerrada y enviada" },
      { mes: "Marzo",     bruto: 42060, ssEmpresa: 13417, neto: 33156, estado: "ok",   estadoTexto: "✓ Cerrada y enviada" },
      { mes: "Abril",     bruto: 42310, ssEmpresa: 13497, neto: 33353, estado: "ok",   estadoTexto: "✓ Cerrada y enviada" },
      { mes: "Mayo",      bruto: 42020, ssEmpresa: 13404, neto: 33124, estado: "ok",   estadoTexto: "✓ Cerrada y enviada" },
      { mes: "Junio",     bruto: 42150, ssEmpresa: 13446, neto: 33227, estado: "ok",   estadoTexto: "✓ Cerrada y enviada" },
      { mes: "Julio",     bruto: 47230, ssEmpresa: 15066, neto: 37231, estado: "warn", estadoTexto: "⏳ En preparación — cálculo previo listo" }
    ],
    variacionJulio: {
      respectoA: "Junio",
      importe: 5080,
      porcentaje: 12.1,
      resumen: "La nómina de julio sube 5.080 € respecto a junio. Está explicado: no es un error.",
      conceptos: [
        { concepto: "Atrasos del convenio de hostelería (subida 2,2 % con efectos 1 de abril, tablas publicadas en junio) + aplicación de nuevas tablas", importe: 3712 },
        { concepto: "Alta nueva: Hugo Pardo, ayudante de camarero (del 4 al 31 de julio, prorrateado)", importe: 1368 },
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
      detalle: "IT por lumbalgia, día 19 de baja. El 2.º parte de confirmación sigue sin llegar de Mutua Universal. Sin él no se puede acreditar la prórroga.",
      cta: "Reclamar a la mutua"
    },
    {
      id: "t-2",
      prioridad: 2,
      tipo: "fecha",
      vence: "2026-07-15",
      titulo: "Preparar el finiquito de Jorge Salas",
      detalle: "Baja voluntaria con último día el 15/07. Cálculo previo: 1.395,40 € brutos (salario de 15 días + 4 días de vacaciones + extras prorrateadas).",
      cta: "Revisar finiquito"
    },
    {
      id: "t-3",
      prioridad: 3,
      tipo: "baja-ss",
      empleadoId: 15,
      titulo: "Comunicar la baja de Jorge Salas al Sistema RED",
      detalle: "Último día trabajado: 15/07. El plazo legal es de 3 días hábiles desde el cese; la comunicación debe presentarse entre el 16/07 y el 20/07.",
      cta: "Preparar comunicación"
    },
    {
      id: "t-4",
      prioridad: 4,
      tipo: "fecha",
      vence: "2026-07-20",
      titulo: "Comprobar la deducción del pago delegado en el RLC de julio",
      detalle: "861 € anticipados a Antonio Vega por la IT. Verificar que la deducción queda reflejada en la liquidación (RLC) antes de la presentación.",
      cta: "Ver RLC"
    },
    {
      id: "t-5",
      prioridad: 5,
      tipo: "fecha",
      vence: "2026-07-25",
      titulo: "Cerrar la nómina de julio con atrasos del convenio",
      detalle: "Aplicadas las nuevas tablas (+2,2 % desde abril): 3.712 € en atrasos y tablas. Variación total de julio: +5.080 €, explicada y lista para revisar.",
      cta: "Ver cálculo previo"
    }
  ],

  // -------------------------------------------------------------------
  // Feed "Hecho hoy" (tab "Hoy")
  // -------------------------------------------------------------------
  hechoHoy: [
    { hora: "09:12", texto: "Presentado el RLC de junio en el Sistema RED — sin incidencias" },
    { hora: "10:05", texto: "Registrado el parte de confirmación de Lucía Gil (nacimiento y cuidado de menor)" },
    { hora: "11:38", texto: "Generado el cálculo previo de la nómina de julio (variación +5.080 € explicada)" }
  ],

  // -------------------------------------------------------------------
  // Estado global (para la vista Cliente): semáforo + frase humana
  // -------------------------------------------------------------------
  estadoGlobal: {
    nivel: "ambar",
    frase: "Casi todo en orden: hay un papel de la mutua que estamos reclamando por la baja de Antonio. Del resto nos ocupamos nosotros."
  }
};

// Neto calculado siempre a partir del bruto para garantizar coherencia:
// neto = bruto − SS trabajador (6,47 %) − IRPF individual.
// Ej.: María Robles → 2.300 − 148,81 − 358,80 = 1.792,39 €
window.DATA.empleados.forEach(function (e) {
  e.brutoMensual = e.salarioBase + e.pluses;
  e.netoMensual = Math.round(e.brutoMensual * (1 - 0.0647 - e.irpfPct / 100) * 100) / 100;
});
