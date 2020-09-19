import Criador from './Criado';
import Product from '../produto/IProduto';
import ProdutoConcreto1 from '../produto/ProdutoConcreto1';

class CriadorConcretoA extends Criador {
    public factoryMethod(): Product {
        return new ProdutoConcreto1({
            nome: 'produto teste123',
            preco: 25.55
        });
    }
}

export default CriadorConcretoA