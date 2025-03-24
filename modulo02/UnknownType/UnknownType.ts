////exemplo1 - Tipo unknown

let valorVariavel: unknown;

valorVariavel = "Olá";
valorVariavel = [];
valorVariavel = 123;
valorVariavel = true;

console.log(valorVariavel);


////exemplo2 - Erro ao tentar atribuir um valor do tipo 'unknown' a outros tipos!

// let valor: unknown;

// let valor1: boolean = valor;
// let valor2: number = valor;
// let valor3: string = valor;
// let valor4: any = valor;


////exemplo3 - diferença entre 'any' vs 'unknown'

let algumaCoisaAny: any;
let algumaCoisaUnknown: unknown;

console.log(algumaCoisaAny.toFixed());

if(typeof algumaCoisaUnknown == 'number'){
    console.log(algumaCoisaUnknown.toFixed());
};