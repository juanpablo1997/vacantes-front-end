function formatearFecha(fechaISO) {
  const fechaOriginal = new Date(fechaISO);

  // Obtener el día, mes y año de la fecha
  const dia = fechaOriginal.getUTCDate();
  const mes = fechaOriginal.toLocaleString("default", { month: "long" }); // Obtiene el nombre del mes
  const año = fechaOriginal.getUTCFullYear();

  // Formatear la fecha como 'Día de Mes de Año'
  const fechaFormateada = `${dia} de ${mes} de ${año}`;

  return fechaFormateada;
}

export default formatearFecha;
