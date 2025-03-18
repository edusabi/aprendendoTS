////exemplo1 - uso simples de tupla
let pessoa: [string, string, number];
pessoa = ["Eduardo sabino", "Developer", 20];
// pessoa = [20, "Developer", "Eduardo sabino"]; ///não pode alterar a ordem

console.log(pessoa);

////exemplo2 - acessando o valor da tupla
let pessoa2: [string, string, number];
pessoa2 = ["Eduardo sabino", "Developer", 20];
// pessoa = [20, "Developer", "Eduardo sabino"]; ///não pode alterar a ordem

console.log(pessoa2[1]);

////exemplo3 - outra forma de usar tupla (com labels)
let pessoa3: [nome: string, posicao: string, idade: number] = ["Eduardo sabino", "Developer", 20];
console.log(pessoa3)


////exemplo4 - usando tupla com spread operator 
let listaFrutas: [string, ...string[]] = ['Abacaxi', "Laranja", "Maça", "Melância", "Manga"];
console.log(...listaFrutas)