//Funções
const promocaopar = function(valor) {
 return (valor * 30) / 100;
};

const promocaoImpar = function(valor) {
    return (valor * 35) / 100;
};

//promoção
const hoje = new Date();
const minuto = hoje.getMinutes();

var fn;

if(minuto % 2 == 0 ) fn = promocaopar;
else fn = promocaoImpar;

//chamada 
let valor = 15.0;
let desconto = fn(valor);
let total = valor - desconto; 
console.log("O desconto é: ", desconto);
console.log("Total a pagar: ", total);