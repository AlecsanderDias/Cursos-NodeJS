import express from "express";
import rotaLivros from "./rotas/livro.js";

const app = express();

const port = 8000;

app.use(express.json(), rotaLivros);

app.listen(port, () => console.log("ouvindo porta!", port));