import rotas from "./rotas/index.js";
import express from "express";

const app = express();

const port = 8000;
rotas(app);

app.listen(port, () => console.log("ouvindo porta!", port));