function multiplicar(fator, fator2) {
    var multi = fator * fator2;
    return multi;
}

var resposta = multiplicar(2, 2);

console.log(resposta);

function somarousubtrair (parcela, parcela2, querosomar) {
    if(querosomar) return parcela + parcela2;

    return parcela - parcela2;

}

var resposta = somarousubtrair(2, 2, true );
console.log("querosomar = true", resposta);

resposta = somarousubtrair(2, 2, false);
console.log("querosomar - false", resposta);