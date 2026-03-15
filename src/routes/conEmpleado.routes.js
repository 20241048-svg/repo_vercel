import { Router } from 'express';
import * as ctrl from '../controllers/conEmpleados.controladores.js';
import { verificarToken } from '../middlewares/auth.middleware.js';

const router = Router();

//si
// Ruta protegida (solo usuarios autenticados)
router.get('/empleado/:idEmpleado', verificarToken,ctrl.reporteEmpleado);

export default router;



