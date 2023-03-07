const lista = ["Karine", "Laisa", "Maxwell", "Moacir", "Rafael", "Rebeca"];

const nome = "Moacir"

const posicao = lista.indexOf(nome);
//console.log(nome, "encontrada na pos", posicao)

const encontrados = [];

for(var i = 0; i < lista.length; i++){
    const item = lista[i]

//segundo caso, multiplas ocorrencias
if(item.substring(0, 1) == "R") encontrados.push(item);
 


/* Primeiro caso, a condição é cahve
    if(item == nome){
        console.log(nome, "encontrado na pos", i);
        break;
    }*/
}

console.log(encontrados)