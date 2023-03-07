const frase = "Vamos criar uma função para transformar a primeira letra de cada palavra da frase maiuscula ";

function capitalize(origem) {
    const palavras = origem.split(" ");

    var nova = "";
    for (var i = 0; i < palavras.length; i++) {
        const palavra = palavras[i];
        const s = palavra.substring(0, 1).toUpperCase()+ palavra.substring(1);
        nova += " " + palavra.toUpperCase();
        
    }
}

var texto = capitalize (frase);

console.log(texto)

