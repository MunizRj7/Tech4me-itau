const prompt = require("prompt-sync")();

const produtos = ["morango", 6, "creme", 8, "chocolate", 3];

produtos.push("Chocomenta", 4);

var escolha = prompt("Digite o numero do sorvete: ");

var indice = parseInt(escolha);

console.log("Sabor", produtos[indice], "quantidade estoque", produtos[indice + 1]);