var idade = 18
var sexo = 'm'
var idade_m = 18
var idade_f = 21

const ema_m =  sexo == 'm' && idade >= idade_m;
const ema_f =  sexo == 'f' && idade >= idade_f;

const resposta = ema_m || ema_f;

console.log('você é emancipado?', resposta)


// if(resposta) console.log('você já é emancipado, por que já tem '  + idade +' anos.');

// if(!resposta) console.log('você não é emancipado, por que já tem '  + idade   +' anos.');

var mensagem = "Você ainda não é emancipado, por que só tem " + idade + " anos."

if(resposta) mensagem = "Você já é emancipado, por que já tem " + idade + " anos.";

console.log(mensagem)

