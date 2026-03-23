import * as mvp from "../models/mvp.model.js";
// obtener
export const obtenerMisVis = async (req, res) => {
    try {
        const [rows] = await mvp.obtenerMisVis();

        res.json({
            message: "Datos obtenidos correctamente",
            data: rows
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error al obtener datos" });
    }
};

// actualizar
export const actualizarMisVis = async (req, res) => {
    try {
        const { tipo, contenido } = req.body;

        await db.query(
            "UPDATE misvis SET contenido = ? WHERE tipo = ?",
            [contenido, tipo]
        );

        res.json({
            message: "Actualizado correctamente"
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error al actualizar" });
    }
};