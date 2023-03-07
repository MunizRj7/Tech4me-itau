function bolsa (ticker, valor, qtdecompra){
    console.log("Ações de" + ticker);
    return valor * qtdecompra;
}

var gasto = bolsa("PETR4", 26.6, 100);
console.log("Você pagará", gasto ,"para sua corretora");

gasto = bolsa ("ITSA4", 8.56, 10);
console.log("Você pagará", gasto ,"para sua corretora");

gasto = bolsa("MGLU3", 4.39, 500 );
console.log("Você pagará", gasto ,"para sua corretora");