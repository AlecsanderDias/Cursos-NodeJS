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

    criaUm(novoItem) {
        const listaItems = this.lerDados(this.caminhoDoArquivo);
        const filtraItems = listaItems.filter(item => item.id === novoItem.id || item.nome === novoItem.nome);
        if (filtraItems.length > 0) {
            throw new Error("Já existe um item com esse nome ou id!");
        } else this.escreverDados([...listaItems, novoItem]);
    }


    deletaUm(id) {
        const listaItems = this.lerDados(this.caminhoDoArquivo);
        const item = listaItems.filter(item => item.id == Number(id));
        if (item.length > 0) {
            let indiceItem = listaItems.findIndex(item => item.id == id);
            listaItems.splice(indiceItem, 1);
        }
        this.escreverDados(listaItems);
        return listaItems;
    }

    atualizaUm(id, dadosItem) {
        const listaItems = this.lerDados(this.caminhoDoArquivo);
        let possuiId = false;
        listaItems.forEach(item => {
            if ((item.nome === dadosItem.nome) && (item.nome.length == dadosItem.nome.length)) {
                throw new Error("Já existe um item com esse nome!");
            }
            if (item.id === Number(id)) {
                item.nome = dadosItem.nome;
                possuiId = true;
            }
        });
        if (!possuiId) {
            throw new Error("Não existe item com esse Id");
        }
        this.escreverDados(listaItems);
        return listaItems;
    }
}

export default Services;