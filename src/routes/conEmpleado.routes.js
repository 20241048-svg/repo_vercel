import { Router } from 'express';
import * as ctrl from '../controllers/conEmpleados.controladores.js';
import { authenticateToken } from '../middleware/auth.js';  

const router = Router();

//si
// Ruta protegida (solo usuarios autenticados)
router.get('/empleado/:idEmpleado', ctrl.reporteEmpleado);

export default router;



