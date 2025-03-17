/////variavéis
let nome: string = "Luís Eduardo";
console.log(nome);

/////Arrays
let animais: string[] = ['Elefante', "Galinha", "Cobra"];
console.log(animais);

///objetos
let carro: {
    nome: string,
    idade: number,
};

carro = {nome: 'Eduardo', idade: 20 };

console.log(carro);

////function
function multiplicaNumero(num1: number, num2: number){
    return num1 * num2;
};

console.log(multiplicaNumero(5,10));