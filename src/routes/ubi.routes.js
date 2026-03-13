import { Router } from "express";
import {
  obtenerUbicaciones
} from "../controllers/ubi.controladores.js";

const router = Router();

router.get("/", obtenerUbicaciones);

export default router;
//nose 