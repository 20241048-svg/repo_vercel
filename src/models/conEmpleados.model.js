import db from '../config/db.js';

// OBTENER PUESTO Y DEPARTAMENTO
// DE UN EMPLEADO
export const obtenerEmpleadoValue = async (idEmpleado) => {

  const [rows] = await db.query(`
        SELECT 
        Id_Empleado,
        Nombre,
        Apellido_Paterno,
        Apellido_Materno,
        Correo,
        Telefono,
        Id_Puesto,
        Id_Departamento,
        Id_Tipo_Usuario
        FROM empleados
        WHERE Id_Empleado = ?
    `,[Number(idEmpleado)]);

  return rows;
};

export const reporteEmpleado = async (id, inicio, fin) =>{
  const [rows] = await db.query(`CALL sp_reporte_empleado_completo(?, ?, ?)`,
    [id, inicio, fin]
  );

  return rows[0]; // mysql devuelve arrays anidados en procedimientos

};