"use strict";
function echo(objeto) {
    return objeto;
}
console.log(echo('João').length);
console.log(echo(12));
console.log(echo({ nome: 'cristian', age: 21 }));
//Generics
function echoMelhora(obj) {
    return obj;
}
console.log(echoMelhora('João').length);
console.log(echoMelhora(12));
console.log(echoMelhora({ nome: 'cristian', age: 21 }));
//Genrics disponiveis na API
const avalicoes = [];
avalicoes.push(3);
console.log(avalicoes);
//arrray
function imprimir(TESTE) {
    console.log(TESTE);
}
imprimir([23, 31, 23, 45, 13, , 233]);
imprimir([2311, 231, 23, 12, 3]);
imprimir(['123', '231']);
imprimir([{ nome: 'string', idade: 2 }, { nome: 'werfw', idade: 1242 }]);
imprimir([
    { nome: 'string', idade: 2 },
    { nome: 'werfw', idade: 1242 }
]);
//tipo generico
const chamaEcho = echoMelhora;
console.log(chamaEcho('wrewer'));
const teste32 = echoMelhora;
echoMelhora({ nome: 'rww', age: 1321 });
//Classes com generics
class OperacaoBinaria {
    constructor(operando1, operando2) {
        this.operando1 = operando1;
        this.operando2 = operando2;
    }
}
// console.log(new OperacaoBinaria('23',5).executar());
// console.log(new OperacaoBinaria('23',{}).executar());
// console.log(new OperacaoBinaria({},null).executar());
class SomaBinaria extends OperacaoBinaria {
    executar() {
        return this.operando1 + this.operando2;
    }
}
console.log(new SomaBinaria(5, 5).executar());
class DiferencaEntreData extends OperacaoBinaria {
    getTime(data) {
        let { dia, mes, ano } = data;
        return new Date(`${mes}/${dia}/${ano}`).getTime();
    }
    executar() {
        const t1 = this.getTime(this.operando1);
        const t2 = this.getTime(this.operando2);
        const diferenca = Math.abs(t1 - t2);
        const dia = 1000 * 60 * 60 * 24;
        return `${Math.ceil(diferenca / dia)} dia(s)`;
    }
}
// const d1 = new Data(1,1,2020)
// const d2 = new Data(5,2,2020)
// console.log(new DiferencaEntreData(d1,d2).executar())
//Desafio Classe Fila
class Fila {
    constructor(...args) {
        this.fila = args;
    }
    entrar(newValue) {
        this.fila.push(newValue);
    }
    proximo() {
        const element = this.fila.shift();
        console.log('Elemento retirado: ' + element);
    }
    imprimir() {
        this.fila.map((item, index) => {
            console.log(`Index - ${index} - Item: ${item}`);
        });
    }
}
const filaString = new Fila();
filaString.entrar('43');
filaString.entrar('sdfa');
filaString.entrar('fdassd');
filaString.entrar('hrdthx');
filaString.proximo();
filaString.imprimir();
//# sourceMappingURL=generics.js.map