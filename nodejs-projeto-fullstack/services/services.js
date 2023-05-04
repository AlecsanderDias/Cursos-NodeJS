import fs from "fs";

class Services {

    constructor(nomeDoArquivo) {
        this.nomeDoArquivo = nomeDoArquivo;
        this.caminhoDoArquivo = `${process.cwd()}/assets/${this.nomeDoArquivo}`;
    }

    lerDados() {
        const dados = JSON.parse(fs.readFileSync(this.caminhoDoArquivo));
        return dados;
    }

    escreverDados(arrayDados) {
        fs.writeFileSync(this.caminhoDoArquivo, JSON.stringify(arrayDados));
    }

    selecionaTodos() {
        const todosOsDados = this.lerDados();
        return todosOsDados;
    }

    selecionaUm(id) {
        const todosOsDados = this.lerDados(this.caminhoDoArquivo);
        const resultado = todosOsDados.filter(dado => dado.id == Number(id));
        return resultado;
    }

    criaUm(novoLivro) {
        const listaLivros = this.lerDados(pathLivro);
        const filtraLivros = listaLivros.filter(livro => livro.id === novoLivro.id || livro.nome === novoLivro.nome);
        if (filtraLivros.length > 0) {
            throw new Error("Já existe um livro com esse nome ou id!");
        } else this.escreverDados([...listaLivros, novoLivro]);
    }


    deletaUm(id) {
        const listaLivros = this.lerDados(pathLivro);
        const livro = listaLivros.filter(livro => livro.id == Number(id));
        if (livro.length > 0) {
            let indiceLivro = listaLivros.indexOf(livro);
            listaLivros.splice(indiceLivro, 1);
        }
        this.escreverDados(listaLivros);
        return listaLivros;
    }

    atualizaUm(id, dadosLivro) {
        const listaLivros = this.lerDados(this.caminhoDoArquivo);
        let possuiId = false;
        listaLivros.forEach(livro => {
            if ((livro.nome === dadosLivro.nome) && (livro.nome.length == dadosLivro.nome.length)) {
                throw new Error("Já existe um livro com esse nome!");
            }
            if (livro.id === Number(id)) {
                livro.nome = dadosLivro.nome;
                possuiId = true;
            }
        });
        if (!possuiId) {
            throw new Error("Não existe livro com esse Id");
        }
        this.escreverDados(listaLivros);
        return listaLivros;
    }
}

export default Services;