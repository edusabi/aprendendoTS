"use strict";
/////exemplo1 - Uso de colchetes
let frutas = ['Abacaxi', "Laranja", "Maça", "Melancia", "Manga"];
console.log(frutas[2]);
console.log(" ");
/////exemplo2 - Array Object
let frutas2 = ['Abacaxi', "Laranja", "Maça", "Melância", "Manga"];
console.log(frutas2[3]);
console.log(" ");
/////exemplo3 - add string com metodo push
let idiomas = ['Português', "Inglês", "Espanhol", "Françês"];
idiomas.push('Mandarim');
console.log(idiomas);
console.log(" ");
/////exemplo4 - identificar o tamanho do array com length
let idiomas2 = ['Português', "Inglês", "Espanhol", "Françês"];
console.log(idiomas2.length);
console.log(" ");
/////exemplo5 - exemplo de array com spred operator
let listaNumeros = [0, 1, 2, 3, 4, 5];
listaNumeros = [...listaNumeros, 6, 7, 8, 9, 10];
console.log(listaNumeros);
/////exemplo6 - exemplo de array com laço de iteração
let linguagensArray = new Array('JavaScript', "Python", "PHP", "C#");
function funcaoLinguagens(linguagens) {
    for (let i = 0; i < linguagens.length; i++) {
        console.log(linguagensArray[i]);
    }
    ;
}
;
funcaoLinguagens(linguagensArray);
