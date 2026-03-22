import { Router } from 'express';
import * as ctrl from '../controllers/contacto.controladores.js';
import { verificarToken } from '../middlewares/auth.middleware.js';

const router = Router();

//si
// Ruta protegida (solo usuarios autenticados)
router.get('/' ,verificarToken, ctrl.getContactoController);
router.put('/:_id', verificarToken, ctrl.updateContactoController);

export default router;

