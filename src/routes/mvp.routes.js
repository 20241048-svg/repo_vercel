
import { Router } from 'express';
import * as ctrl from '../controllers/mvp.conroladores.js';

const router = Router();

// GET
router.get('/', ctrl.obtenerMisVis);

// PUT (actualizar)
router.put('/', ctrl.actualizarMisVis);

export default router;