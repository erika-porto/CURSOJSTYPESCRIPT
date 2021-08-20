/*eslint-disable*/

//tipos basicos (aqui ocorre inferência de tipos), eu coloco apenas quando ele inferir tipo n , significa que o typescript não conseguiu inferir um valor , ai eu coloca.

let nome:string= 'Luiz'; //qualquer tipo de string
let idade:number=30; //10,1.57,-5
let adulto:boolean=true; //true or false
let simbolo:symbol=Symbol('qualquer-symbol');
// let big:bigint=10n;

//todo-Arrays
let arrayDeNumeros: Array<number> = [1 , 2 , 3]; //1 maneira
let arrayDeNumeros1: number[] =  [1 , 2 , 3];  //2 maneira
let arrayDeStrings: Array<string> = ['a', 'b']; //1 maneira
let arrayDeStrings2: string[] =  ['a', 'b'];  //2 maneira

//todo-objetos
let pessoa: {nome:string, idade:number, adulto?: boolean} = {
    idade:30,
    nome:'Luiz'
};

//todo-funções
//1 maneira
function soma(x:number,y:number):number{
    return x+y;
}

//2 maneira
const soma2: (x: number, y: number) => number = (x,y) => x+y;


