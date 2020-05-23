"use strict";
class Data {
    constructor(dia = 1, mes = 1, ano = 1970) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
    setAno(ano) {
        this.ano = ano;
    }
    getAno() {
        return this.ano;
    }
}
const aniversario = new Data(11, 1, 1999);
aniversario.dia = 4;
console.log(aniversario.dia);
console.log(aniversario);
const casamento = new Data; // n precisa de () quando tem o padrão
console.log(casamento);
class DataEsperta {
    constructor(dia = 1, mes = 1, ano = 1970) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
    setAno(ano) {
        this.ano = ano;
    }
    getAno() {
        return this.ano;
    }
}
const aniversarioEsperto = new DataEsperta(11, 1, 1999);
aniversarioEsperto.dia = 4;
console.log(aniversarioEsperto.dia);
console.log(aniversarioEsperto);
const casamentoe = new DataEsperta; // n precisa de () quando tem o padrão
console.log(casamentoe);
class Carro {
    constructor(marca, modelo, velocidadeMaxima = 200) {
        this.marca = marca;
        this.modelo = modelo;
        this.velocidadeMaxima = velocidadeMaxima;
        this.velocidadeAtual = 0;
    }
    alterarVelocidade(delta) {
        const novaVelocidade = this.velocidadeAtual + delta;
        const velocidadeValida = novaVelocidade >= 0 && novaVelocidade <= this.velocidadeMaxima;
        if (velocidadeValida) {
            this.velocidadeAtual = novaVelocidade;
        }
        else {
            this.velocidadeAtual = delta > 0 ? this.velocidadeMaxima : 0;
        }
        return this.velocidadeAtual;
    }
    acelerar() {
        return this.alterarVelocidade(5);
    }
    frear() {
        return this.alterarVelocidade(-5);
    }
}
const carro2 = new Carro("Ford", "Ka", 150);
Array(50).fill(0).forEach(() => carro2.acelerar());
console.log(carro2.acelerar());
class Ferrari extends Carro {
    constructor(modelo, velocidadeMaxima) {
        super('Ferrari', modelo, velocidadeMaxima);
    }
    acelerar() {
        return this.alterarVelocidade(20);
    }
    frear() {
        return this.alterarVelocidade(-20);
    }
}
const f40 = new Ferrari('F40', 400);
console.log(f40);
console.log(f40.acelerar());
console.log(f40.frear());
//Getters & Setters
class Pessoa {
    constructor() {
        this._idade = 0;
    }
    get idade() {
        return this._idade;
    }
    set idade(valor) {
        if (valor >= 0 && valor <= 120) {
            this._idade = valor;
        }
    }
}
const pessoa1 = new Pessoa;
pessoa1.idade = 10;
console.log(pessoa1);
pessoa1.idade = -10;
console.log(pessoa1);
//Membros estaticos
/**
 * Class produto(nome, preco)
 * Objeto1 Produto(Detergente,10.00)
 * Objeto2 Produto(Caneta,4.00)
 *
 */
//Estaticos
let Matematica = /** @class */ (() => {
    class Matematica {
        static areaCirc(raio) {
            return this.PI * raio * raio; //porém todos os elementos usados na função estatica devem ser estaticos também, se não da erro
        }
    }
    Matematica.PI = 3.1416;
    return Matematica;
})();
console.log(Matematica.areaCirc(4));
//Classe Abstrata
class X {
    w(b) {
        console.log(b);
    }
}
class Calculo {
    constructor() {
        this.resultado = 0;
    }
    getResultado() {
        return this.resultado;
    }
}
class Soma extends Calculo {
    executar(...numeros) {
        this.resultado = numeros.reduce((t, a) => t + a);
    }
}
class Multi extends Calculo {
    executar(...numeros) {
        this.resultado = numeros.reduce((t, a) => t * a);
    }
}
let c1 = new Soma();
c1.executar(1, 2, 432, 41, 2, 7);
console.log(c1.getResultado());
//# sourceMappingURL=class.js.map