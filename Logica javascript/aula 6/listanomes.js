console.log ("== Setor de RH ==")

console.log("Lista de nomes e sobrenomes", "\n");

function nomesobrenome(nome, sobrenome, jafoientrevistado) {
    

    console.log("Canditado -> Nome",nome );
    console.log("sobrenome:",sobrenome, "\n" );
    
    if (jafoientrevistado) console.log("já foi entrevistado antes", "\n");
    else console.log ("Ainda aguarda  a entrevista")
}

nomesobrenome("João", "Silva", true);
nomesobrenome("José", "Amaral", true);
nomesobrenome("Gonçavels", "Miguel", false);