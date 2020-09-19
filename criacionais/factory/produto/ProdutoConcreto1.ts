import Iproduto from './IProduto';

export default class ProdutoConcreto1 implements Iproduto {
    private Indentificacao = "Produto - 1"
    private nome: string;
    private preco: number;

    constructor({ nome, preco }: {nome: string, preco: number}) {
        this.nome = nome;
        this.preco = preco;
    }
    
    public getNome() {
        return this.nome
    }

    public getValor() {
        return this.preco
    }

    public operacao() {
        return `{ [${this.Indentificacao} - ] ${this.getNome()} / - ${this.getValor()} }`
    }
}