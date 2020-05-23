/*
Desafio Produto
Atributods: nome, preço e desconto
criar construtor
obs 1: desconto é opcionalk
criar produtos
*/

class Produto{

    public nome: string;
    public preco: number;
    public desconto:number;

    constructor(nome: string, preco: number , desconto: number = 0){
        this.nome = nome;
        this.preco = preco;
        this.desconto = desconto
    }

    public resumo(): string{
        return `
        Nome do produto: ${this.nome}
        Valor do produto: R$${ Math.trunc(this.precoComDesconto(this.desconto)) }
        Desconto:${this.desconto * 100}% off
        `
    }

    public precoComDesconto(desconto: number): number{
        return this.preco - (desconto * this.preco);
    }

}

const produto1 = new Produto("Notebook",2000)
console.log(produto1.resumo());

const produto2 = new Produto("PS4", 4000, 0.10);
console.log(produto2.resumo())

