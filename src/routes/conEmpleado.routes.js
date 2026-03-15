import { Router } from 'express';
import * as ctrl from '../controllers/conEmpleados.controladores.js';
import { authenticateToken } from '../middleware/auth.js';  // tu middleware de JWT

const router = Router();

// Ruta protegida (solo usuarios autenticados)
router.get('/empleado/:idEmpleado', authenticateToken, ctrl.obtenerReportePorEmpleado);

export default router;