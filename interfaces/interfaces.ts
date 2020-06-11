
interface Humano {
    nome: string, 
    idade?: number,
    [prop: string]: any,
    saudador(sobrenome: string): void
}

function saudarOla(pessoa: Humano) {
    console.log( 'Olá, ' + pessoa.nome);
}

function mudarNome(pessoa:Humano) {
    pessoa.nome = 'Astrogildo';
}

const cris: Humano = {
    nome: 'Cristian',
    idade: 21,
    saudador(sobrenome: string){
        console.log('Salve, my name is '+ this.nome + ' ' + sobrenome)
    }
}

saudarOla(cris);
mudarNome(cris);
saudarOla(cris);
//saudarOla({nome: 'roberto', idade: 15, xyz: true }); 
cris.saudador('Juninho da Silva');

//Com class

class Clientes implements Humano{
     nome: string = '';
     ultimaCompra: Date = new Date;
     saudador(sobrenome: string) {
         console.log('Fala cszeiro iam ' + this.nome + ' ' + sobrenome)
     }
}

const meuCliente = new Clientes
meuCliente.nome = 'Jeferson'
saudarOla(meuCliente);
meuCliente.saudador('Fi de zezinho')
console.log(meuCliente.ultimaCompra)

interface FuncaoCalculo {
    (a: number, b: number): number
}

let potencia: FuncaoCalculo

potencia = (base: number, exp: number): number => {
    //Math.pow(base, exp);
    //base ** exp;
    return Array(exp).fill(base).reduce((t, a) => t*a)
}

console.log(potencia(3,10));

//Herança

interface A {
    a():void
}

interface B {
    b():void
}

interface ABC extends A, B{
    c(): void
}

class ABC implements ABC {
    a(): void {}
    b(): void {}
    c(): void {}
}

interface Object{
    log(): void
}

Object.prototype.log = function() {
    console.log(this.toString())
}

const x = 2
const y = 23
const z = 5

console.log(x)
console.log(y)
console.log(z)

x.log()
y.log()
z.log()

const cli = {
    nome: 'Pedro', 
    toString() { 
        return this.nome
    },
    age:12
}

cli.log()