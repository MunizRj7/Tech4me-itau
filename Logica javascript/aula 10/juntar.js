const lista = ["joão victor", "Karine", "Laisa", "Maxwell", "Moacir", "Rafael", "Rebeca", "Thays"];

const texto = lista.join("|");

console.log(texto)

//fazendo nosso proprio join
var acumuladora="";

for (var i=0; i<lista.length; i++){
    const item = lista[i];

    if(i == lista.length - 1) acumuladora += item;
    else acumuladora += item + "|";
    
}

console.log(acumuladora)

