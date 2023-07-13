import { Router } from "express";
import LivroController from "../controllers/livroController.js";

const router = Router();

router
    .get("/", (req, res) => {
        try {
            res.status(200).send("Olá tá funcionando!");
        } catch (error) {
            res.status(500).send(error.message)
        }
    })
    .get("/livros", LivroController.pegaTodosLivros)
    .get("/livros/:id", LivroController.somenteUmLivro)
    .post("/livros", LivroController.criarLivro)
    .patch("/livros/:id", LivroController.atualizarLivro)
    .delete("/livros/:id", LivroController.deletarLivro);

export default router;