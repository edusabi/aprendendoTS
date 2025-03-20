////exemplo1 - Numeric Enums (Enums numéricos)
enum Idioma{
    Portugues,
    Ingles,
    Espanhol,
    Frances
};

// console.log(Idioma);
 
////exemplo2 - String Enums
enum Dia{
    Segunda = "SEG",
    Terca = "TER",
    Quarta = "QUA",
    Quinta = "QUI",
    Sexta = "SEX",
    Sabado = "SAB",
    Domingo = "DOM"
};

// console.log(Dia);

////exemplo3 - Como podemos acessar o valor de um Enum com uma chave: (usando o const)
// const enum Comida{
//     Pizza,
//     Hamburguer,
//     Massa,
//     Torta,
//     Churrasco
// };

// function comida(c: Comida){
//     return 'Comidas muito apetitosas!';
// };

// console.log(comida(Comida.Pizza));
// console.log(comida(Comida.Churrasco));
// console.log(comida(5));

///Como corrigir o erro

const enum Comida{
    Pizza = "Pizza",
    Hamburguer = "Hamburguer",
    Massa = "Massa",
    Torta = "Torta",
    Churrasco = "Churrasco"
};

function comida(c: Comida){
    return 'Comidas muito apetitosas!';
};

console.log(comida(Comida.Pizza));
console.log(comida(Comida.Churrasco));
// console.log(comida(5));


////exemplo4 - Quando usar Enum?
enum Tarefa {
    NaoFeita,
    Progress,
    Done
};

const concluidaTarefa = {
    id: 1,
    status: Tarefa.NaoFeita,
    descrição: "Parabéns! Tarefa concluída com sucesso!"
};

if(concluidaTarefa.status == Tarefa.Done){
    console.log("Tarefa concluída!");
}else if(concluidaTarefa.status == Tarefa.Progress){
    console.log("Tarefa em progresso!");
}else{
    console.log("Tarefa Não feita!");
};