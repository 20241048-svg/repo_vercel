import db from '../config/db.js';

// ... otras funciones como obtenerEmpleadoValue ...
export const reporteEmpleado = async () => {
  const [rows] = await db.query("SELECT 1 as test");
  return rows;
};