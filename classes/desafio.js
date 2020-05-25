"use strict";
// Exercício 1 - Classe
class Moto {
    constructor(nome, velocidade = 10) {
        this.nome = nome;
        this.velocidade = velocidade;
    }
    buzinar() {
        console.log('Toooooooooot!');
    }
    acelerar(delta = 0) {
        this.velocidade = this.velocidade + delta;
    }
}
const moto = new Moto('Ducati');
moto.buzinar();
console.log(moto.velocidade);
moto.acelerar(30);
console.log(moto.velocidade);
// Exercício 2 - Herança
class objeto2D {
    constructor(base, altura) {
        this.base = 0;
        this.altura = 0;
        this.areaTotal = 0;
        this.base = base;
        this.altura = altura;
    }
}
class retangulo extends objeto2D {
    constructor(base, altura) {
        super(base, altura);
    }
    area(base = 2, altura = 2) {
        this.areaTotal = base * altura;
        console.log(this.areaTotal);
    }
}
const retanguloTeste = new retangulo(5, 7);
retanguloTeste.base = 5;
retanguloTeste.altura = 7;
console.log(retanguloTeste.area());
// Exercício 3 - Getters & Setters
class pessoa {
    constructor(nome = '') {
        this.primeiroName = nome;
    }
    get nome() {
        return this.primeiroName;
    }
    set nome(newName) {
        this.primeiroName = newName;
    }
}
const estagiario = new pessoa('Cristian');
console.log(estagiario.primeiroName);
estagiario.primeiroName = 'Le';
console.log(estagiario.primeiroName);
estagiario.primeiroName = 'Leonardo';
console.log(estagiario.primeiroName);
//# sourceMappingURL=desafio.js.map