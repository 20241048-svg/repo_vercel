import { Router } from "express";
import {
  obtenerUbicaciones,
  crearUbicacion,
  borrarUbicacion
} from "../controllers/ubi.controladores.js";

const router = Router();

router.get("/", obtenerUbicaciones);

export default router;