import rotasLivro from "./livro.js";
import rotasFavoritos from "./favoritos.js";
import express from "express";
import cors from "cors";

const routes = (app) => {
    app.use(express.json(), cors({origin: "*"}), rotasFavoritos, rotasLivro );
}

export default routes;