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
////exemplo2 - String Enums
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
;
function comida(c) {
    return 'Comidas muito apetitosas!';
}
;
console.log(comida("Pizza" /* Comida.Pizza */));
console.log(comida("Churrasco" /* Comida.Churrasco */));
// console.log(comida(5));
////exemplo4 - Quando usar Enum?
var Tarefa;
(function (Tarefa) {
    Tarefa[Tarefa["NaoFeita"] = 0] = "NaoFeita";
    Tarefa[Tarefa["Progress"] = 1] = "Progress";
    Tarefa[Tarefa["Done"] = 2] = "Done";
})(Tarefa || (Tarefa = {}));
;
const concluidaTarefa = {
    id: 1,
    status: Tarefa.NaoFeita,
    descrição: "Parabéns! Tarefa concluída com sucesso!"
};
if (concluidaTarefa.status == Tarefa.Done) {
    console.log("Tarefa concluída!");
}
else if (concluidaTarefa.status == Tarefa.Progress) {
    console.log("Tarefa em progresso!");
}
else {
    console.log("Tarefa Não feita!");
}
;
