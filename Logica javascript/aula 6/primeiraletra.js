console.log ("== Setor de RH ==")


function primeiraletra (nome) {
    console.log (" o conteudo da var nome é ",nome)
    var letra = nome .substring(0, 1);
    letra = letra.toLowerCase();
    console.log("A primeira letra é", letra);
}

primeiraletra("Marcelo");
primeiraletra("Carlos");
primeiraletra("Zepa");