import db from '../config/db.js';

// ... otras funciones como obtenerEmpleadoValue ...

export const reporteEmpleado = async (id, inicio, fin) => {
  try {
    const [rows] = await db.query(
      `CALL sp_reporte_empleado_completo(?, ?, ?)`,
      [Number(id), inicio, fin]
    );

    // En MySQL, los procedimientos almacenados devuelven un array de arrays
    // rows[0] suele ser el resultado principal
    return rows[0] || []; // Devuelve array vacío si no hay resultados

  } catch (error) {
    console.error("Error ejecutando sp_reporte_empleado_completo:", error);
    throw error; // Propagamos el error al controlador para que lo maneje
  }
};