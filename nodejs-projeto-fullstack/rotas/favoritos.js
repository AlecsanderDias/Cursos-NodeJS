import { Router } from "express";
import FavoritoController from "../controllers/favoritoController.js";

const router = Router();

router
    .get("/favoritos", FavoritoController.pegaFavoritos);

export default router;