let canal: string = 'Gaveta';
let inscritos: number = 10000;

//canal = inscritos;

console.log(canal);

function soma (a: number, b: number){ //gera problema
    return a +b;
}

console.log(soma(5,6))

let coisa; //não gera problema
coisa = 12; //não gera problema
coisa = 'abc' //não gera problema
//TS faz uma analise de fluxo e sabe o tipo da variavel em todos os pontos

function saudar(isManha: boolean){ // strictNullChecks
    let saudacao: string
    if(isManha){
        saudacao = 'Bom dia'
    }else{
        saudacao = 'É isso'
    }

    return saudacao
}