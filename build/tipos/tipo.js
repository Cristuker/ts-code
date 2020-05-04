"use strict";
//string
let nome = 'João';
console.log(nome);
// number
let idade = 27;
idade = 27.6;
console.log(idade);
//boolean
let learn = true;
//tipos explicito
let minhaIdade;
minhaIdade = 25;
console.log(minhaIdade);
//array
let hobbies = ['Cozinhar', 'Jogar'];
console.log(typeof hobbies[0]);
//tupla - array de tipos com cada casa do array com tipo definido
let endereco = ['Rua araguaçu', 900];
console.log(endereco);
console.table(endereco);
// enums
var Cor;
(function (Cor) {
    Cor[Cor["Cinza"] = 0] = "Cinza";
    Cor[Cor["Azul"] = 1] = "Azul";
    Cor[Cor["Verde"] = 2] = "Verde";
    Cor[Cor["Laranja"] = 3] = "Laranja";
    Cor[Cor["Amarelo"] = 4] = "Amarelo";
})(Cor || (Cor = {}));
let MinhaCor = Cor.Cinza;
console.log(MinhaCor);
//any
let carro = 'BMW';
console.log(carro);
carro = { marca: 'bmw', ano: 2020 };
console.log(carro);
//funções
function retornarNome() {
    return nome;
}
console.log(retornarNome());
function oi() {
    console.log('Oi');
}
oi();
function mult(n1, n2) {
    return n1 * n2;
}
console.log(mult(1, 4));
let calculo;
calculo = mult;
console.log(calculo(5, 4));
//objetos
let usuário = {
    nome: 'Cristian',
    idade: 27
};
usuário = { nome: 'carlos', idade: 10 };
console.log(usuário);
let funcionario2 = {
    nome: 'Cristian',
    supervisores: ['João', 'Carlos'],
    baterPonto: function (hora) {
        if (hora <= 8) {
            return 'Horário normal';
        }
        return 'Fora do horário';
    }
};
// unio types
let nota = 10; // minha nota aceita o tipo number string, evitando o any que abre para qualquert tipo
console.log(`Minha nota é ${nota}!`);
nota = '10';
console.log(`Minha nota é ${nota}!`);
//checando tipo
let valor = 30;
// o tipo never, quando a fuynção nunca retorna nada, nunca vai sair da função. Da erro ou entra em looping infinito
function falha(msg) {
    throw new Error(msg);
}
const produto = {
    nome: 'Sabão',
    preco: -1,
    validarProduto() {
        if (!this.nome || this.nome.length === 0) {
            falha('Azedo irmão');
        }
        if (this.preco <= 0) {
            falha('Azedo preço');
        }
    }
};
//produto.validarProduto()
let altura = 12;
//altura = null //da erro
let alturaOpcional = 12;
alturaOpcional = null;
const contato1 = {
    nome: 'Cristian',
    tel1: '128673518',
    tel2: null
};
let teste = null; //a variavel fica com tipo any.
console.log('contato', contato1);
//# sourceMappingURL=tipo.js.map