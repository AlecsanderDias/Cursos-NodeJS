import { todosOsFavoritos } from "../services/favoritos.js";

class FavoritoController {
    static pegaFavoritos = (req, res) => {
        try {
            const favoritos = todosOsFavoritos();
            res.status(200).json(favoritos);
        } catch (error) {
            res.status(500).json(error.message);
        }
    } 
}

export default FavoritoController;