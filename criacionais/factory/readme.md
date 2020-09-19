# Factory Method
> Método de fábrica ou Construtor virtual.

**ref = https://refactoring.guru/pt-br/design-patterns/factory-method**

## Propósito

O Factory Method é um padrão criacional de projeto que fornece uma interface para criar objetos em uma superclasse, mas permite que as subclasses alterem o tipo de objetos que serão criados.

## Problema

Imagine que você está criando uma aplicação de gerenciamento de logística. A primeira versão da sua aplicação pode lidar apenas com o transporte de caminhões, portanto a maior parte do seu código fica dentro da classe Caminhão.

Depois de um tempo, sua aplicação se torna bastante popular. Todos os dias você recebe dezenas de solicitações de empresas de transporte marítimo para incorporar a logística marítima na aplicação.

<img src="https://refactoring.guru/images/patterns/diagrams/factory-method/problem1-pt-br.png"/>

## Factory na solução

O padrão Factory Method sugere que você substitua chamadas diretas de construção de objetos **(usando o operador new)** por chamadas para um método fábrica especial. Não se preocupe: os objetos ainda são criados através do operador new, mas esse está sendo chamado de dentro do método fábrica. Objetos retornados por um método fábrica geralmente são chamados de produtos.

<img src="https://refactoring.guru/images/patterns/diagrams/factory-method/solution1.png"/>