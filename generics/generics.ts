function echo(objeto: any) {
    return objeto

}

console.log(echo('João').length)
console.log(echo(12))
console.log(echo({ nome: 'cristian', age: 21 }))

//Generics

function echoMelhora<T>(obj: T): T {
    return obj
}

console.log(echoMelhora('João').length);
console.log(echoMelhora<number>(12));
console.log(echoMelhora({ nome: 'cristian', age: 21 }))

//Genrics disponiveis na API

const avalicoes: Array<number> = []
avalicoes.push(3)
console.log(avalicoes)

//arrray

function imprimir<T>(TESTE: T[]) {
    console.log(TESTE)
}

type Person = { nome: string, idade: number }

imprimir([23, 31, 23, 45, 13, , 233])
imprimir<number>([2311, 231, 23, 12, 3])
imprimir<string>(['123', '231'])
imprimir<Person>([{ nome: 'string', idade: 2 }, { nome: 'werfw', idade: 1242 }])
imprimir<{ nome: string, idade: number }>([
    { nome: 'string', idade: 2 }, 
    { nome: 'werfw', idade: 1242 }
])

//tipo generico

const chamaEcho: <T>(dddd: T) => T = echoMelhora

    console.log(chamaEcho<string>('wrewer'))

type Testipo = <T>(data: T) => T;

const teste32:Testipo = echoMelhora

echoMelhora<Object>({nome:'rww',age:1321})

//Classes com generics

abstract class OperacaoBinaria<Type,R>{
    constructor(public operando1: Type, public operando2: Type){}

    abstract executar():R
}

// console.log(new OperacaoBinaria('23',5).executar());
// console.log(new OperacaoBinaria('23',{}).executar());
// console.log(new OperacaoBinaria({},null).executar());
class SomaBinaria extends OperacaoBinaria<number, number>{
    executar():number {
        return this.operando1 + this.operando2;
    }
}

console.log(new SomaBinaria(5,5).executar());

class DiferencaEntreData extends OperacaoBinaria <Data, string>{

    getTime(data: Data): number{

        let { dia, mes, ano } = data
    
        return new Date(`${mes}/${dia}/${ano}`).getTime()    
    }

    executar(): string{
        const t1 = this.getTime(this.operando1)
        const t2 = this.getTime(this.operando2)
    
        const diferenca = Math.abs(t1 - t2)

        const dia = 1000 * 60 * 60 * 24 ;

        return `${Math.ceil(diferenca / dia)} dia(s)`
    }
}

// const d1 = new Data(1,1,2020)
// const d2 = new Data(5,2,2020)
// console.log(new DiferencaEntreData(d1,d2).executar())

//Desafio Classe Fila

class Fila<Item>{
    private fila: Array<Item>;


    constructor(...args:Item[]){
        this.fila = args
    }

    entrar(newValue: Item){
        this.fila.push(newValue)
    }

    proximo(){
        const element = this.fila.shift();
        console.log('Elemento retirado: ' + element);
    }

    imprimir(){
        this.fila.map((item,index) => {
            console.log(`Index - ${index} - Item: ${item}`)
        })
    }
}

const filaString = new Fila<string>();
filaString.entrar('43')
filaString.entrar('sdfa')
filaString.entrar('fdassd')
filaString.entrar('hrdthx')
filaString.proximo()
filaString.imprimir()
