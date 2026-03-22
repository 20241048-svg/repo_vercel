import { Router } from "express";
import * as ctrl from "../controllers/ubicaciones.controlador.js";
//import { verificarToken } from "../middlewares/auth.middleware.js";

const router = Router();

router.get("/", ctrl.getUbicacionesController);
router.get("/:id",  ctrl.getUbicacionByIdController);
router.post("/",  ctrl.createUbicacionController);
router.put("/:id",ctrl.updateUbicacionController);
router.delete("/:id", ctrl.deleteUbicacionController);

export default router;