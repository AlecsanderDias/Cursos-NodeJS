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
    .get("/:id", LivroController.somenteUmLivro)
    .post("/livro", LivroController.criarLivro)
    .patch("/:id", LivroController.atualizarLivro)
    .delete("/:id", LivroController.deletarLivro);

export default router;