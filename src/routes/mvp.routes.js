import express from 'express';
import { obtenerMisVis, actualizarMisVis } from '../controllers/misvis.controller.js';

const router = express.Router();

// GET
router.get('/', obtenerMisVis);

// PUT (actualizar)
router.put('/', actualizarMisVis);

export default router;