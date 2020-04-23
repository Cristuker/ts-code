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