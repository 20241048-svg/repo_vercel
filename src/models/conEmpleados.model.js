import db from '../config/db.js';

export const reporteEmpleado = async (id, inicio, fin) => {
  const [rows] = await db.query(
    `CALL sp_reporte_empleado_completo(?, ?, ?)`,
    [Number(id), inicio, fin]
  );

  return rows[0] || [];
};