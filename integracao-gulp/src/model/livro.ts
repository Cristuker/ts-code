import vendavel from './vendavel';

export default class Livro implements vendavel{
    constructor(public nome: string, public readonly preco: number, public readonly desconto: number){

    }

    precoComDesconto(){
        return this.preco * (-1 * this.desconto)
    }
}