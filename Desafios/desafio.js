"use strict";
/**
 * Desafio
 * Criar um objeto funcionário com:
 * -Array de string com os nomes do supervisores
 * -função de bater que recebe hora e retorna uma string
 * -> Ponto normal
 * -< Fora do horário
 */
var funcionario = {
    nome: 'Cristian',
    supervisores: ['João', 'Carlos'],
    baterPonto: function (hora) {
        if (hora <= 8) {
            return 'Horário normal';
        }
        return 'Fora do horário';
    }
};
console.log(funcionario.nome);
console.log(funcionario.supervisores);
console.log(funcionario.baterPonto(8));
console.log(funcionario.baterPonto(9));
