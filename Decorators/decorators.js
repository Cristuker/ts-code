"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function logarClasse(construtor) {
    console.log(construtor);
}
function decoratorVazio(_) { }
function logarC(valor) {
    return valor ? logarClasse : decoratorVazio;
}
function decorator(obj) {
    return (_) => {
        console.log(obj.a + '  ' + obj.b);
    };
}
function logarObjeto(construtor) {
    console.log('aqui...');
    return class extends construtor {
        constructor(...args) {
            console.log('antes');
            super(...args);
            console.log('dps');
        }
    };
}
let Eletrodomestico = /** @class */ (() => {
    let Eletrodomestico = class Eletrodomestico {
        constructor() {
            console.log('novo');
        }
    };
    Eletrodomestico = __decorate([
        logarClasse,
        logarC(true),
        decorator({ a: 'teste', b: '123' }),
        logarObjeto,
        imprimivel
    ], Eletrodomestico);
    return Eletrodomestico;
})();
function imprimivel(construtor) {
    construtor.prototype.imprimir = function () {
        console.log(this);
    };
}
new Eletrodomestico().imprimir();
const eletro = new Eletrodomestico();
eletro.imprimir && eletro.imprimir();
// Desafio Decorator perfilAdmin
const usuarioLogado = {
    nome: 'Guilherme Filho',
    email: 'guigui@gmail.com',
    admin: false
};
let ContaCorrente = /** @class */ (() => {
    class ContaCorrente {
        constructor(saldo) {
            this.saldo = saldo;
        }
        sacar(valor) {
            if (valor <= this.saldo) {
                this.saldo -= valor;
                return true;
            }
            else {
                return false;
            }
        }
        getSaldo() {
            return this.saldo;
        }
    }
    __decorate([
        congelar
    ], ContaCorrente.prototype, "sacar", null);
    __decorate([
        congelar
    ], ContaCorrente.prototype, "getSaldo", null);
    return ContaCorrente;
})();
const cc = new ContaCorrente(10023);
cc.sacar(555);
console.log(cc.getSaldo());
console.log(cc.getSaldo());
function congelar(alvo, nomeDaPropriedade, descritor) {
    console.log(alvo);
    console.log(nomeDaPropriedade);
    descritor.writable = false;
}
//# sourceMappingURL=decorators.js.map