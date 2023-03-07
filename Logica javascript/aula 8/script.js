const  prompt  = require("prompt-sync")()

for (var contador = 0 ; contador  < 10; contador++){

    var nomeDoOuvinte = prompt("Alo! Qual seu nome?");

    if (contador < 5 ){

        console.log("Parabéns " + nomeDoOuvinte + " ingresso para asssitir o gato de botas")
    }
    else {
        console.log("Infeliz sem pipoca pra você")
    }
    
} 

console.log("Fim da promoção, obrigado a todos que ligaram!")