import { Router } from 'express';
import * as ctrl from '../controllers/conEmpleados.controladoresjs';

const router = Router();

//si
// Ruta protegida (solo usuarios autenticados)
router.get('/empleado/:idEmpleado', ctrl.reporteEmpleado);

export default router;



