import CriadorConcreto1 from './criadores/CriadorConcretoA';
import CriadorConcreto2 from './criadores/CriadorConcretoB';
import Criador from './criadores/Criado';

function ExecutadorDeCriadores(criador: Criador) {
    console.log('Cliente: Não estou ciente da classe do criador, mas ainda sim funciona.');
    console.log(criador.OperacaoGenereica());
}

console.log("'APP: startando execução da aplicação'")

console.log("'Criado concreto 1: ' ");
ExecutadorDeCriadores(new CriadorConcreto1());

console.log('');
console.log("'Criado concreto 2: ' ");

ExecutadorDeCriadores(new CriadorConcreto2())

