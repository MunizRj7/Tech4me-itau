const prompt = require("prompt-sync")();

var Sanduiche = prompt("Escolha seu Sanduiche: ");
var total = 0;
var todosAcompanhamentos = [];
var acompanhamento = "";

console.log("Você tem 5 acompanhementos");

do {
    acompanhamento = prompt("acompanhemento: ");
    todosAcompanhamentos.push(acompanhamento);
    total +=2
} while (todosAcompanhamentos.length == 5 || acompanhamento != "concluir");

console.log("O Total de acompanhamentos:", total);
console.log("Pedido completo: ", Sanduiche, todosAcompanhamentos);


