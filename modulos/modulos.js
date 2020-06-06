"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const circuferencia_1 = require("./circuferencia");
const retangulo_1 = __importDefault(require("./retangulo"));
console.log('Modulo carregado...');
console.log(retangulo_1.default(5, 8));
console.log(circuferencia_1.areaCircunferencia(5));
const { digaOi } = require('./novo');
console.log(digaOi('Cristian'));
//# sourceMappingURL=modulos.js.map