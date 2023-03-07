var gostar_cafe = true;
var trabalha_madrugada = true;

var resposta = gostar_cafe && trabalha_madrugada;

console.log ('O muniz é programdor?', resposta)

var sinal_verde = true;
var nenhum_carro = true;

const prosseguir = sinal_verde && nenhum_carro;

console.log('Eu posso prosseguir?', prosseguir)


var idade_18 = true;
var homem = true;
var brasileiro = true;

var alistamento_militar = idade_18 && homem && brasileiro 

console.log ('Você tem que se apresentar?', alistamento_militar)

//OR
var sabado = false;
var domingo = true;
const folga = sabado || domingo;

console.log ('Está de folga hoje?', folga)


//NOT

var fim_semana = true;

const dia_util = !fim_semana; 

console.log ('É dia util?',dia_util)



var chocolate = true;
var trigo = true;
var manteiga = true;

const tenho_ingredietes =  chocolate && trigo && manteiga;

const preciso_comprar = !tenho_ingredietes;

console.log("Preciso comprar alguma coisa para o sorvete?" , preciso_comprar)