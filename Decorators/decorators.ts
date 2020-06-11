function logarClasse(construtor: Function){
    console.log(construtor)
}

function decoratorVazio(_:Function){}

function logarC(valor: boolean){
    return valor ? logarClasse : decoratorVazio
}

function decorator(obj:{ a: string, b: string }){
    return (_:Function): void => {
        console.log(obj.a + '  ' + obj.b)
    }
}




type Construtor = { new(...args:any[]): {} }


function logarObjeto(construtor: Construtor){
    console.log('aqui...')
    return class extends construtor{
        constructor(...args:any[]){
            console.log('antes')
            super(...args)
            console.log('dps')
        }
    }
}


// new Eletrodomestico()
// new Eletrodomestico()
// new Eletrodomestico()

interface Eletrodomestico{
    imprimir?():void
}

@logarClasse
@logarC(true)
@decorator({ a: 'teste', b:'123' })
@logarObjeto
@imprimivel
class Eletrodomestico{
    constructor(){
        console.log('novo')
    }
}

function imprimivel(construtor: Function){
    construtor.prototype.imprimir = function (){
        console.log(this)
    }
}

(<any> new Eletrodomestico()).imprimir()

const eletro = new Eletrodomestico()
eletro.imprimir && eletro.imprimir();

// Desafio Decorator perfilAdmin

const usuarioLogado = {
    nome: 'Guilherme Filho',
    email: 'guigui@gmail.com',
    admin: false
}

class ContaCorrente {
    private saldo: number;

    constructor(saldo: number){
        this.saldo = saldo;
    }
    @congelar
    sacar(valor: number){
        if(valor <= this.saldo){
            this.saldo -= valor;
            return true;
        }else{
            return false
        }
    }

    @congelar
    getSaldo(){
        return this.saldo;
    }
}

const cc = new ContaCorrente(10023);

cc.sacar(555)

console.log(cc.getSaldo())

console.log(cc.getSaldo())

function congelar(alvo: any, nomeDaPropriedade: string, descritor: PropertyDescriptor){
    console.log(alvo)
    console.log(nomeDaPropriedade)
    descritor.writable = false
}