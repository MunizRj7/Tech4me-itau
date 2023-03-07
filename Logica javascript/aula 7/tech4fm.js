const prompt = require("prompt-sync")();

console.log ("===Radio Tech4FM===")

const logo = "Tech4FM e show";

var ligadenovo = true;

while (ligadenovo) {

    var sorteado = Math.random();
    sorteado = Math.floor(sorteado * 14) + 1;
    console.log("O numero sorteado é...", sorteado)
    
    var resposta = prompt("Não diga alô, diga " + logo + "!" );
    
    if (resposta == logo) {
        console.log ("Parabéns, ganhou a camiseta!")    
        ligadenovo = false;
    } else console.log("Que pena, frase errada...");

}

console.log("Fim do concurso");



