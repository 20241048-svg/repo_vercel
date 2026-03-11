import { Router } from 'express';
import * as ctrl from '../controllers/preguntasF.controladores.js';

const router = Router();

router.get('/', ctrl.obtenerPreguntas);

export default router;