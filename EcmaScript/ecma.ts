//let e const

var seraquepode = 'pode'
console.log(seraquepode);

const dizer = () => console.log("kk eae men")

dizer();

function normalComThis(){
    //console.log(this);
}

normalComThis();
console.log(this)

function attrDe(inicio: number = 3){
    console.log(inicio);
}

attrDe()
attrDe(5)
//spread e rest
//...

const number = [10,12,123,-5,5234,4123,544,54,11,-34]

const turmaA: string[] = ['João','carlos','josé'];
const turmaB: string[] = ['jota',...turmaA,'ana',]

console.log(Math.max(...number))//os valores do array foram espalhados nos parametros da função
console.log(turmaB)

function retornarArray(a:string,...numbers: number[]): number[]{
    console.log(a)
    return numbers
}

console.log(retornarArray('carro',1,2,3,4,5,67,7,45,67,5652,43.3,434,3));

//Rest & Spreat (Tupla)

const tupla:[number, string, boolean] = [1,'Cris',true];

function Tupla(a:number,b: string, c: boolean):void{
    console.log(`A:${a} B:${b} C:${c}`)
}

Tupla(...tupla)

function tupla2(...params:[number,string,boolean]): void{
    console.log(`2 ${params[0]} ${params[1]} ${params[2]}`)
}

tupla2(...tupla)

const carro1:[string,number] = ['Motor Rpidao',2020]