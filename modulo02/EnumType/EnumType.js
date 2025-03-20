"use strict";
////exemplo1 - Numeric Enums (Enums numéricos)
var Idioma;
(function (Idioma) {
    Idioma[Idioma["Portugues"] = 0] = "Portugues";
    Idioma[Idioma["Ingles"] = 1] = "Ingles";
    Idioma[Idioma["Espanhol"] = 2] = "Espanhol";
    Idioma[Idioma["Frances"] = 3] = "Frances";
})(Idioma || (Idioma = {}));
;
// console.log(Idioma);
////exemplo2 - Como podemos acessar o valor de um Enum com uma chave: (usando o const)
var Dia;
(function (Dia) {
    Dia["Segunda"] = "SEG";
    Dia["Terca"] = "TER";
    Dia["Quarta"] = "QUA";
    Dia["Quinta"] = "QUI";
    Dia["Sexta"] = "SEX";
    Dia["Sabado"] = "SAB";
    Dia["Domingo"] = "DOM";
})(Dia || (Dia = {}));
;
console.log(Dia);
////exemplo3 - Quando usar Enum?
