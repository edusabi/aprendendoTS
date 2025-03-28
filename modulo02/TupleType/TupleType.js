"use strict";
////exemplo1 - uso simples de tupla
let pessoa;
pessoa = ["Eduardo sabino", "Developer", 20];
// pessoa = [20, "Developer", "Eduardo sabino"]; ///não pode alterar a ordem
console.log(pessoa);
////exemplo2 - acessando o valor da tupla
let pessoa2;
pessoa2 = ["Eduardo sabino", "Developer", 20];
// pessoa = [20, "Developer", "Eduardo sabino"]; ///não pode alterar a ordem
console.log(pessoa2[1]);
////exemplo3 - outra forma de usar tupla (com labels)
let pessoa3 = ["Eduardo sabino", "Developer", 20];
console.log(pessoa3);
////exemplo4 - usando tupla com spread operator 
let listaFrutas = ['Abacaxi', "Laranja", "Maça", "Melância", "Manga"];
console.log(...listaFrutas);
///exemplo5 - lista heterogênea de uma tupla
let listaFrutas2 = [5, true, ...listaFrutas];
console.log(listaFrutas2);
///exemplo6 - Uso de função com tuplas
function listarPessoas(nomes, idades) {
    return [...nomes, ...idades];
}
;
let resultado = listarPessoas(["Luís Eduardo", "Lucas Cauã"], [20, 18]);
console.log(resultado);
function criarPessoa(...nome) {
    return [...nome];
}
;
console.log(criarPessoa("Luís Eduardo", 'Sabino'));
console.log(criarPessoa("Luís Eduardo", 'Sabino', 'da Silva'));
