import fs from "fs";
const pathLivro = `${process.cwd()}/assets/livro.js`;

function lerDados(pathLivro) {
    const dados = JSON.parse(fs.readFileSync(pathLivro));
    return dados;
}

function todosOsLivros() {
    return lerDados(pathLivro);
}

function somenteUmLivro(id) {
    const livro = lerDados(pathLivro);
    const resultado = livro.filter(livro => livro.id == id);
    return resultado;
}

function criarLivro(novoLivro) {
    const listaLivros = lerDados(pathLivro);
    const filtraLivros = listaLivros.filter(livro => livro.id === novoLivro.id || livro.nome === novoLivro.nome);
    if (filtraLivros.length > 0) {
        throw new Error("Já existe um livro com esse nome ou id!");
    } else fs.writeFileSync(pathLivro, JSON.stringify([...listaLivros, novoLivro]));
}

function atualizarLivro(id, dadosLivro) {
    
}

function deletarLivro(id) {
    
}

export { todosOsLivros, somenteUmLivro, criarLivro, atualizarLivro, deletarLivro };