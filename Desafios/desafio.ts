/**
 * Desafio
 * Criar um objeto funcionário com: 
 * -Array de string com os nomes do supervisores
 * -função de bater que recebe hora e retorna uma string
 * -> Ponto normal
 * -< Fora do horário
 */

 let funcionario:{nome: string, supervisores: [string,string], baterPonto:(hora: number) => string} = {
     nome: 'Cristian',
     supervisores:['João','Carlos'],
     baterPonto: function (hora: number): string {
         if(hora <= 8){
             return 'Horário normal'
         }
         return 'Fora do horário'
     }
 }

console.log(funcionario.nome)
console.log(funcionario.supervisores)
console.log(funcionario.baterPonto(8))