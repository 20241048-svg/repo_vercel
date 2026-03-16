import db from "../config/db.js"; 

// Obtener información de contacto
export const getContacto = async () => {
  const [rows] = await db.query("SELECT * FROM contacto LIMIT 1");
  return rows[0]; 
};

// Actualizar información de contacto
export const updateContacto = async (data) => {
  const { dias, horario, telefono, whatsapp, correo, direccion, red1, red2, red3 } = data;
  const [result] = await db.query(
    `UPDATE contacto SET dias=?, horario=?, telefono=?, whatsapp=?, correo=?, direccion=?, red1=?, red2=?, red3=? WHERE id = 1`,
    [dias, horario, telefono, whatsapp, correo, direccion, red1, red2, red3]
  );
  return result.affectedRows > 0;
};