"use strict";
function saudarOla(pessoa) {
    console.log('Olá, ' + pessoa.nome);
}
function mudarNome(pessoa) {
    pessoa.nome = 'Astrogildo';
}
const cris = {
    nome: 'Cristian',
    idade: 21,
    saudador(sobrenome) {
        console.log('Salve, my name is ' + this.nome + ' ' + sobrenome);
    }
};
saudarOla(cris);
mudarNome(cris);
saudarOla(cris);
//saudarOla({nome: 'roberto', idade: 15, xyz: true }); 
cris.saudador('Juninho da Silva');
//Com class
class Clientes {
    constructor() {
        this.nome = '';
        this.ultimaCompra = new Date;
    }
    saudador(sobrenome) {
        console.log('Fala cszeiro iam ' + this.nome + ' ' + sobrenome);
    }
}
const meuCliente = new Clientes;
meuCliente.nome = 'Jeferson';
saudarOla(meuCliente);
meuCliente.saudador('Fi de zezinho');
console.log(meuCliente.ultimaCompra);
let potencia;
potencia = (base, exp) => {
    //Math.pow(base, exp);
    //base ** exp;
    return Array(exp).fill(base).reduce((t, a) => t * a);
};
console.log(potencia(3, 10));
class ABC {
    a() { }
    b() { }
    c() { }
}
Object.prototype.log = function () {
    console.log(this.toString());
};
const x = 2;
const y = 23;
const z = 5;
console.log(x);
console.log(y);
console.log(z);
x.log();
y.log();
z.log();
const cli = {
    nome: 'Pedro',
    toString() {
        return this.nome;
    },
    age: 12
};
cli.log();
//# sourceMappingURL=interfaces.js.map