//string
let nome: string = 'João'
console.log(nome)

// number
let idade: number = 27
idade = 27.6
console.log(idade)

//boolean
let learn: boolean = true;

//tipos explicito
let minhaIdade : number;
minhaIdade = 25;
console.log(minhaIdade)
 
//array
let hobbies: any[] = ['Cozinhar','Jogar']
console.log(typeof hobbies[0])

//tupla - array de tipos com cada casa do array com tipo definido

let endereco: [string, number] = ['Rua araguaçu', 900]
console.log(endereco)
console.table(endereco)

// enums

enum Cor {
    Cinza,
    Azul,
    Verde,
    Laranja,
    Amarelo
}

let MinhaCor: Cor = Cor.Cinza

console.log(MinhaCor)

//any
let carro: any = 'BMW'

console.log(carro);

carro = { marca: 'bmw', ano: 2020};

console.log(carro);

//funções
function retornarNome():string {
    return nome
}
console.log(retornarNome());

function oi(): void {
    console.log('Oi');
}

oi()

function mult(n1: number,n2: number): number {
    return n1 * n2;
}

console.log(mult(1,4));

let calculo: (n1: number ,n2: number) => number;

calculo = mult

console.log(calculo(5,4));

//objetos

let usuário:{ nome: string, idade: number } = {
    nome:'Cristian',
    idade: 27
}

usuário = {nome:'carlos', idade:10 }

console.log(usuário)

// tipos personalizados
/**
 * Criando tipo personalizado, para evitar replicar a declaração a todo momento
 *
 */
type Funcionario = {
    nome: string, 
    supervisores: [string,string], 
    baterPonto:(hora: number) => string
   }

let funcionario2: Funcionario = {
    nome: 'Cristian',
    supervisores:['João','Carlos'],
    baterPonto: function (hora: number): string {
        if(hora <= 8){
            return 'Horário normal'
        }
        return 'Fora do horário'
    }
}

// unio types

let nota: number | string = 10; // minha nota aceita o tipo number string, evitando o any que abre para qualquert tipo
console.log(`Minha nota é ${nota}!`);

nota = '10'
console.log(`Minha nota é ${nota}!`);

//checando tipo
let valor = 30

// o tipo never, quando a fuynção nunca retorna nada, nunca vai sair da função. Da erro ou entra em looping infinito

function falha(msg: string): never {
    throw new Error(msg);
}

const produto = {
    nome: 'Sabão',
    preco: -1,
    validarProduto () {
        if(!this.nome || this.nome.length === 0){
            falha('Azedo irmão')
        }
        if(this.preco <= 0){
            falha('Azedo preço')
        }
    }
}

//produto.validarProduto()

let altura = 12;
//altura = null //da erro

let alturaOpcional: null | number = 12;
alturaOpcional = null;

type Contato ={
    nome: string,
    tel1: string,
    tel2: string | null,
}

const contato1: Contato = {
    nome:'Cristian',
    tel1: '128673518',
    tel2: null
}

let teste:null = null //a variavel fica com tipo any.

console.log('contato', contato1);
