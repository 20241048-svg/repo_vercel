export const reporteEmpleado = async (req, res) => {
    try {
        const { idEmpleado } = req.params;
        const { inicio, fin } = req.query;

        if (!idEmpleado || !validar.esEnteroPositivo(idEmpleado)) {
            return res.status(400).json({
                message: "El parámetro 'idEmpleado' debe ser un número entero positivo",
            });
        }

        let reporte = [];

        if (inicio && fin) {
            // Validar fechas solo si existen
            const fechaRegex = /^\d{4}-\d{2}-\d{2}$/;
            if (!fechaRegex.test(inicio) || !fechaRegex.test(fin)) {
                return res.status(400).json({
                    message: "Formato de fecha inválido. Usa YYYY-MM-DD",
                });
            }
            if (new Date(inicio) > new Date(fin)) {
                return res.status(400).json({
                    message: "La fecha de inicio no puede ser mayor a la fecha fin",
                });
            }

            // Llamar al modelo para obtener el reporte completo
            reporte = await asistenciasModelo.reporteEmpleado(idEmpleado, inicio, fin);

        } else {
            // Si no hay fechas, solo devuelve info básica del empleado
            reporte = await asistenciasModelo.reporteEmpleado(idEmpleado, null, null);
        }

        res.status(200).json({
            message: reporte.length > 0
                ? "Datos del empleado obtenidos correctamente"
                : "No se encontraron registros",
            idEmpleado: Number(idEmpleado),
            inicio: inicio || null,
            fin: fin || null,
            total: reporte.length,
            data: reporte
        });

    } catch (error) {
        console.error("Error en reporteEmpleado:", error);
        res.status(500).json({
            message: "Error al generar el reporte del empleado",
            error: error.message
        });
    }
};