import FavoritosServices from "../services/favoritos.js";
const favoritosServices = new FavoritosServices();

class FavoritoController {
    static pegaFavoritos = (req, res) => {
        try {
            const favoritos = favoritosServices.selecionaTodos();
            // const favoritos = todosOsFavoritos();
            res.status(200).json(favoritos);
        } catch (error) {
            res.status(500).json(error.message);
        }
    }
    static somenteUmFavorito = (req, res) => {
        try {
            const favorito = favoritosServices.selecionaUm(req.params.id);
            res.status(200).json(favorito);
        } catch (error) {
            res.status(500).json(error.message);
        }
    }

    static criarFavorito = (req, res) => {
        const favorito = req.body;
        try {
            // criarfavorito(favorito);
            favoritosServices.criaUm(favorito);
            res.status(201).json("favorito criado com sucesso");
        } catch (error) {
            res.status(500).json(error.message);
        }
    }

    static atualizarFavorito = (req, res) => {
        const favorito = req.body;
        const id = req.params.id;
        try {
            // const favoritos = atualizarfavorito(id, favorito);
            const favoritos = favoritosServices.atualizaUm(id, favorito);
            res.status(201).json(favoritos);
        } catch (error) {
            res.status(500).json(error.message);
        }
    }

    static deletarFavorito = (req, res) => {
        const favorito = req.params.id;
        try {
            // const favoritos = deletarfavorito(favorito);
            const favoritos = favoritosServices.deletaUm(favorito);
            res.status(200).json(favoritos);
        } catch (error) {
            res.status(500).json(error.message);
        }
    }
}

export default FavoritoController;