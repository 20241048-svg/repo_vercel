import db from '../config/db.js';

// ... otras funciones como obtenerEmpleadoValue ...
export const reporteEmpleado = async (id, inicio, fin) => {
  const [rows] = await db.query("SELECT 1 as test");
  return rows;
};