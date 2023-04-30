import { todosOsLivros, somenteUmLivro, criarLivro, atualizarLivro, deletarLivro } from "../services/livros.js";

class LivroController {
    static pegaTodosLivros = (req, res) => {
        try {
            const livros = todosOsLivros();
            res.status(200).json(livros);
        } catch (error) {
            res.status(500).json(error.message);
        }
    }

    static somenteUmLivro = (req, res) => {
        try {
            const livro = somenteUmLivro(req.params.id);
            res.status(200).json(livro);
        } catch (error) {
            res.status(500).json(error.message);
        }
    }

    static criarLivro = (req, res) => {
        const livro = req.body;
        try {
            criarLivro(livro);
            res.status(201).json("Livro criado com sucesso");
        } catch (error) {
            res.status(500).json(error.message);
        }
    }

    static atualizarLivro = (req, res) => {
        const livro = req.body;
        const id = req.params.id;
        try {
            const livros = atualizarLivro(id, livro);
            res.status(201).json(livros);
        } catch (error) {
            res.status(500).json(error.message);
        }
    }

    static deletarLivro = (req, res) => {
        const livro = req.params.id;
        try {
            const livros = deletarLivro(livro);
            res.status(200).json(livros);
        } catch (error) {
            res.status(500).json(error.message);
        }
    }
}

export default LivroController;