"use strict";
let canal = 'Gaveta';
let inscritos = 10000;
//canal = inscritos;
console.log(canal);
function soma(a, b) {
    return a + b;
}
console.log(soma(5, 6));
let coisa; //não gera problema
coisa = 12; //não gera problema
coisa = 'abc'; //não gera problema
//TS faz uma analise de fluxo e sabe o tipo da variavel em todos os pontos
function saudar(isManha) {
    let saudacao;
    if (isManha) {
        saudacao = 'Bom dia';
    }
    else {
        saudacao = 'É isso';
    }
    return saudacao;
}
//# sourceMappingURL=compilador.js.map