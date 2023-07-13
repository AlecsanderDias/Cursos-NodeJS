import { Router } from "express";
import FavoritoController from "../controllers/favoritoController.js";

const router = Router();

router
    .get("/favoritos", FavoritoController.pegaFavoritos)
    .get("/favoritos/:id", FavoritoController.somenteUmFavorito)
    .post("/favoritos", FavoritoController.criarFavorito)
    .patch("/favoritos/:id", FavoritoController.atualizarFavorito)
    .delete("/favoritos/:id", FavoritoController.deletarFavorito);

export default router;