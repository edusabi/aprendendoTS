///exemplo1 - Tipo any
let a: any = 20;
let b: any = ["Edu"];

let c = a + b;

console.log(c); ///isso não deve acontecer

///exemplo2 - Quando o tipo any é inferido implicitamente
// let frase;
// frase = "Oi pessoal!";

// console.log(frase);

///exemplo3 - Quando usar o tipo any??
const formulario: {[campoFormulario: string]: any } = {
    nome: "Edu",
    sobrenome: "Sabino",
    idade: 34
};

console.log(formulario);
