const prompt = require("prompt-sync")();

var amigos = 0;
var total = 0;

while (amigos < 4) {
    amigos++
    console.log("Amigo", amigos, "quanto quer apostar?");
    var texto = prompt("");
    var aposta = parseFloat(texto);

     total += aposta;

}




console.log("O vencedor vai faturar R$", total)