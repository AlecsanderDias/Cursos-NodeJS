import Services from "./services.js";

class FavoritosServices extends Services
{
    constructor() {
        super('favoritos.js');
    }
}

export default FavoritosServices;
/*
import fs from "fs";

const pathLivro = `${process.cwd()}/assets/favoritos.js`;

function lerDados() {
    const dados = JSON.parse(fs.readFileSync(pathLivro));
    return dados;
}

function todosOsFavoritos() {
    const favoritos = lerDados();
    return favoritos;
}

export { todosOsFavoritos };
*/