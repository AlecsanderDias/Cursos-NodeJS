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
    const listaLivros = lerDados(pathLivro);
    let possuiId = false;
    listaLivros.forEach(livro => {
        if ((livro.nome === dadosLivro.nome) && (livro.nome.length == dadosLivro.nome.length)) {
            throw new Error("Já existe um livro com esse nome!");
        }
        if (livro.id === id) {
            livro.nome = dadosLivro.nome;
            possuiId = true;
        }
    });
    if (!possuiId) {
        throw new Error("Não existe livro com esse Id");
    }
    fs.writeFileSync(pathLivro, JSON.stringify(listaLivros));
    return listaLivros;
}

function deletarLivro(id) {
    const listaLivros = lerDados(pathLivro);
    const livro = listaLivros.filter(livro => livro.id == id);
    if (livro.length > 0) {
        let indiceLivro = listaLivros.indexOf(livro);
        listaLivros.splice(indiceLivro,1);
    }
    fs.writeFileSync(pathLivro, JSON.stringify(listaLivros));
    return listaLivros;
}

export { todosOsLivros, somenteUmLivro, criarLivro, atualizarLivro, deletarLivro };