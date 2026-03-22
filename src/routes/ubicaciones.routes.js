import { Router } from "express";
import * as ctrl from "../controllers/ubicaciones.controlador.js";
import { verificarToken } from "../middlewares/auth.middleware.js";

const router = Router();

router.get("/", verificarToken, ctrl.getUbicacionesController);
router.get("/:id", verificarToken, ctrl.getUbicacionByIdController);
router.post("/", verificarToken, ctrl.createUbicacionController);
router.put("/:id", verificarToken, ctrl.updateUbicacionController);
router.delete("/:id", verificarToken, ctrl.deleteUbicacionController);

export default router;