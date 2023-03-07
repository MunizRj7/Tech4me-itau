const prompt = require("prompt-sync")();

console.log ("compre chocolate comigo!");

var valor = prompt("Digte o valor: ");

var sem_centavos = Math.trunc (valor);

console.log ("você pagara apenas R$: ", sem_centavos);


