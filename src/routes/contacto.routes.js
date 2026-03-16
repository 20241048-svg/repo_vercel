import express from "express";
import { getContactoController, updateContactoController } from "../controllers/contactoController.js";
import { verificarToken } from "../middlewares/authMiddleware.js"; // Middleware de autenticación JWT

const router = express.Router();

// Todas las rutas requieren que el usuario esté autenticado
router.get("/", verificarToken, getContactoController);
router.put("/", verificarToken, updateContactoController);

export default router;