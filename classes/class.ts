class Data {
    //public
    public dia: number
    public mes: number
    private ano: number

    constructor(dia: number = 1, mes: number = 1, ano: number = 1970) {
        this.dia = dia
        this.mes = mes
        this.ano = ano
    }

    setAno(ano: number) {
        this.ano = ano;
    }

    getAno() {
        return this.ano
    }

}

const aniversario = new Data(11, 1, 1999)
aniversario.dia = 4;
console.log(aniversario.dia);
console.log(aniversario)

const casamento = new Data // n precisa de () quando tem o padrão
console.log(casamento)


class DataEsperta {

    constructor(public dia: number = 1, public mes: number = 1, public ano: number = 1970) {
        this.dia = dia
        this.mes = mes
        this.ano = ano
    }

    setAno(ano: number) {
        this.ano = ano;
    }

    getAno() {
        return this.ano
    }

}

const aniversarioEsperto = new DataEsperta(11, 1, 1999)
aniversarioEsperto.dia = 4;
console.log(aniversarioEsperto.dia);
console.log(aniversarioEsperto)

const casamentoe = new DataEsperta // n precisa de () quando tem o padrão
console.log(casamentoe);

class Carro {
    private velocidadeAtual: number = 0;

    constructor(public marca: string, public modelo: string, private velocidadeMaxima = 200) {

    }

    protected alterarVelocidade(delta: number): number {//Quando protected o metodo pode ser acessado por herança, quando private pode apenas ser usado

        const novaVelocidade: number = this.velocidadeAtual + delta;
        const velocidadeValida = novaVelocidade >= 0 && novaVelocidade <= this.velocidadeMaxima;

        if (velocidadeValida) {
            this.velocidadeAtual = novaVelocidade;
        } else {
            this.velocidadeAtual = delta > 0 ? this.velocidadeMaxima : 0;

        }

        return this.velocidadeAtual;
    }

    public acelerar(): number {
        return this.alterarVelocidade(5);
    }

    public frear(): number {
        return this.alterarVelocidade(-5);
    }
}


const carro2 = new Carro("Ford", "Ka", 150);

Array(50).fill(0).forEach(() => carro2.acelerar())
console.log(carro2.acelerar())

class Ferrari extends Carro {

    constructor(modelo: string, velocidadeMaxima: number) {
        super('Ferrari', modelo, velocidadeMaxima)
    }

    public acelerar(): number {
        return this.alterarVelocidade(20);
    }

    public frear(): number {
        return this.alterarVelocidade(-20);
    }
}

const f40 = new Ferrari('F40', 400)
console.log(f40)
console.log(f40.acelerar())
console.log(f40.frear())

//Getters & Setters
class Pessoa {
    private _idade: number = 0;

    get idade(): number {
        return this._idade;
    }

    set idade(valor: number) {
        if (valor >= 0 && valor <= 120) {
            this._idade = valor
        }
    }
}

const pessoa1 = new Pessoa

pessoa1.idade = 10
console.log(pessoa1)
pessoa1.idade = -10
console.log(pessoa1)

//Membros estaticos
/**
 * Class produto(nome, preco)
 * Objeto1 Produto(Detergente,10.00)
 * Objeto2 Produto(Caneta,4.00)
 * 
 */


//Estaticos

class Matematica {
    static PI: number = 3.1416

    static areaCirc(raio: number): number {// quando estatico não existe necessidade de criart uma estanbcia da classe,
        return this.PI * raio * raio;//porém todos os elementos usados na função estatica devem ser estaticos também, se não da erro
    }
}

console.log(Matematica.areaCirc(4));

//Classe Abstrata

abstract class X{
    abstract y(a: number): number
    
    w(b: number): void{
        console.log(b)
    }
}


abstract class Calculo {
    protected resultado:number = 0;

    abstract executar(...numero: number[]):void

    getResultado(): number{
        return this.resultado;
    }
}

class Soma extends Calculo{
    executar(...numeros:number[]):void{
        this.resultado = numeros.reduce((t,a) => t+a)
    }
}

class Multi extends Calculo{
    executar(...numeros:number[]):void{
        this.resultado = numeros.reduce((t,a) => t*a)
    }
}

let c1 = new Soma()
c1.executar(1,2,432,41,2,7)
console.log(c1.getResultado())

//Singleton -> Quando vocêr quer ter apenas uma instancia da classe. 

class Unico{
    private static instance: Unico = new Unico;
    private constructor(){}

    static getInstance(): Unico{
        return Unico.instance;
    }

    agora(){
        return new Date;
    }
}

//const errado = new Unico();

console.log(Unico.getInstance().agora())

//Atributos somente leitura -> Write one time only

class Aviao{

    public readonly modelo: string;

    constructor(modelo: string, public readonly prefixo: string){
        this.modelo = modelo

    }


}

const testAe = new Aviao("asd","qwe");

//testAe.modelo = 'aaa'; //Ao tentar atribuir novamente gera um erro.