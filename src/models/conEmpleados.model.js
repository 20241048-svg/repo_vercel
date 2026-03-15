import db from "../config/db.js";

export const reporteEmpleado = async (idEmpleado, inicio, fin) => {
  try {

    const [rows] = await db.query(
      "CALL sp_reporte_empleado_completo(?, ?, ?)",
      [Number(idEmpleado), inicio, fin]
    );

    return rows[0] || [];

  } catch (error) {

    console.error("Error ejecutando sp_reporte_empleado_completo:", error);
    throw error;

  }
};