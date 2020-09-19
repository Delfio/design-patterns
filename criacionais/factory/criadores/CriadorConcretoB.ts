import Criador from './Criado';
import Product from '../produto/IProduto';
import ProdutoConcreto2 from '../produto/ProdutoConcreto2';

class CriadorConcretoB extends Criador {
    public factoryMethod(): Product {
        return new ProdutoConcreto2({
            nome: 'Produto 2',
            preco: 15
        });
    }
}

export default CriadorConcretoB