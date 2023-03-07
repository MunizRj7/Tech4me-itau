const prompt = require("prompt-sync")();

const nome = prompt("Candidato, digite seu nome: ");

const p = nome.substring(0, 1);

var dia = "";

const vogall = p == "a"||  p == "e" || p == "i" || p == "o" || p == "u";

if (vogall) dia = "Segunda-feira"; 
else dia = "Terça-feira";

console.log ("Sua entrevista será dia:", dia)