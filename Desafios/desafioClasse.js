"use strict";
/*
Desafio Produto
Atributods: nome, preço e desconto
criar construtor
obs 1: desconto é opcionalk
criar produtos
*/
class Produto {
    constructor(nome, preco, desconto = 0) {
        this.nome = nome;
        this.preco = preco;
        this.desconto = desconto;
    }
    resumo() {
        return `
        Nome do produto: ${this.nome}
        Valor do produto: R$${Math.trunc(this.precoComDesconto(this.desconto))}
        Desconto:${this.desconto * 100}% off
        `;
    }
    precoComDesconto(desconto) {
        return this.preco - (desconto * this.preco);
    }
}
const produto1 = new Produto("Notebook", 2000);
console.log(produto1.resumo());
const produto2 = new Produto("PS4", 4000, 0.10);
console.log(produto2.resumo());
//# sourceMappingURL=desafioClasse.js.map