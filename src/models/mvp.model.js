import db from "../config/db.js"; 

// ================= OBTENER =================
// (trae todo, normalmente será 1 solo registro)
export const obtenerMisVis = async () => {
    try {
        const [rows] = await db.query("SELECT * FROM misvis LIMIT 1");
        return rows[0]; // solo un objeto
    } catch (error) {
        console.error("Error en obtenerMisVis:", error);
        throw error;
    }
};

// ================= ACTUALIZAR =================
export const actualizarMisVis = async (data) => {
    try {
        const {
            mision,
            vision,
            info,
            imag_mision,
            img_vision,
            imainfo
        } = data;

        const [result] = await db.query(
            `UPDATE misvis SET 
                mision = ?, 
                vision = ?, 
                info = ?, 
                imag_mision = ?, 
                img_vision = ?, 
                imainfo = ?
             WHERE id = 1`, 
            [
                mision,
                vision,
                info,
                imag_mision,
                img_vision,
                imainfo
            ]
        );

        return result.affectedRows;
    } catch (error) {
        console.error("Error en actualizarMisVis:", error);
        throw error;
    }
};