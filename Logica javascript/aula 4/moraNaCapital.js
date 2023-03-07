const prompt = require("prompt-sync")();

const estados = prompt("Digite seu estado: ")

switch (estados) {
    case "rj":
    case "RJ":
        console.log("Rio de Janeiro");
    break;
    case "sp":
    case "SP":    
    console.log("São Paulo");
    break;
    case "es":
    case "ES":
    console.log("Espírito Santo");
    break;
    case "mg":
    case "MG":
    console.log("Minas Gerais");
    break;
    default: console.log("Você não definiu o estado!")
}

