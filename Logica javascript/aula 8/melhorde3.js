const prompt = require("prompt-sync")();

const certa = "encadeamento";

for(var i = 0; i < 3; i++ ) {
    console.log("Ouvinte ", i + 1);
    var vidas = 2;
    var resposta ="";
    
    do {
         resposta = prompt("Que nome se dá a um if dentro do outro?"); 

        
        if(resposta == certa) {
            console.log("Parabéns, ganhou a caneca");
        } else {
            vidas--;
        }
    } while(resposta !== certa && vidas == 1);

    if (resposta !== certa) console.log("Desperdiço  sua chance");

}

console.log("Obrigado a todos que participaram");