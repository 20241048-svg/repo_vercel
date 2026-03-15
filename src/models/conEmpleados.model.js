import db from '../config/db.js';

export const obtenerAsistenciasPorEmpleadoRango = async ({ idEmpleado, fechaInicio, fechaFin }) => {
  const [rows] = await db.query(
    `SELECT 
       fecha,
       hora_entrada AS entrada,
       hora_salida AS salida,
       horas_trabajadas AS horas,
       horas_extra,
       tipo
     FROM asistencias
     WHERE Id_Empleado = ?
       AND fecha BETWEEN ? AND ?
     ORDER BY fecha ASC`,
    [idEmpleado, fechaInicio, fechaFin]
  );

  return rows;
};