////exemplo1 - Tipo void - funções
function logError(errorMessage: string): void {
    console.log(errorMessage);
    // return errorMessage;
};

logError("Deu erro ai ein!!");


////exemplo2 - Tipo void - funções

const logErrorExample2 = (errorMessage: string): void => {
    console.log(errorMessage);
};

logErrorExample2("Deu erro ai de novo ein!!");

////exemplo3 - Tipo void em variaveis
let letExemploVoid: void;

// letExemploVoid = 1;
// letExemploVoid = null;
letExemploVoid = undefined;

console.log(letExemploVoid);