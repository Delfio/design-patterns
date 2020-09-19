import IProduto from '../produto/IProduto';

export default abstract class Criador {
    public abstract factoryMethod(): IProduto;

    public OperacaoGenereica(): string {
        const produto = this.factoryMethod();

        return `Produto criado pelo criador generico -  ${produto.operacao()}`
    }
}