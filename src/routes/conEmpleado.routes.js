import { Router } from 'express';
import * as ctrl from '../controllers/conEmpleados.controladores.js';
import { authenticateToken } from '../middleware/auth.js';  

const router = Router();

// Ruta protegida (solo usuarios autenticados)
router.get('/empleado/:idEmpleado', authenticateToken, ctrl.reporteEmpleado);

export default router;
