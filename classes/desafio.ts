// Exercício 1 - Classe
class Moto {
    
    public nome: string;
    public velocidade: number;

    constructor(nome:string, velocidade: number = 10){
        this.nome = nome;
        this.velocidade = velocidade;
    }
 
    public buzinar() {
        console.log('Toooooooooot!')
    }
 
    public acelerar(delta: number = 0) {
        this.velocidade = this.velocidade + delta
    }
}
 
const moto = new Moto('Ducati')
moto.buzinar()
console.log(moto.velocidade)
moto.acelerar(30)
console.log(moto.velocidade)
 
// Exercício 2 - Herança
abstract class objeto2D {
    public base: number = 0
    public altura: number = 0;
    public areaTotal: number = 0;

    constructor(base: number, altura: number){
        this.base = base;
        this.altura = altura;
    }

    abstract area(altera:number, base: number): void;
}
 
class retangulo extends objeto2D{
    constructor(base:number, altura:number){
        super(base,altura);
    }

    area(base:number = 2,altura:number = 2):void{ 
        this.areaTotal = base * altura;
        console.log(this.areaTotal);
    }
}


const retanguloTeste = new retangulo(5,7);
retanguloTeste.base = 5
retanguloTeste.altura = 7

console.log(retanguloTeste.area())
 
// Exercício 3 - Getters & Setters
class pessoa {
    public primeiroName:string;

    constructor(nome: string = ''){
        this.primeiroName = nome;
    }

    get nome(): string{
        return this.primeiroName
    }

    set nome(newName: string){
        this.primeiroName = newName;
    }
}
 
const estagiario = new pessoa('Cristian');

console.log(estagiario.primeiroName)
estagiario.primeiroName = 'Le'
console.log(estagiario.primeiroName)
estagiario.primeiroName = 'Leonardo'
console.log(estagiario.primeiroName)