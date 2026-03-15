import { Router } from "express";
import {conEmpleado } from "../controllers/conEmpleados.controladores.js";
import { authenticateToken } from "../middleware/auth.js";

const router = Router();

// Reporte de asistencias por empleado
router.get("/empleado/:idEmpleado", authenticateToken, conEmpleado);

export default router;