const bolas = ["⚽", "⚾", "🏀"];
console.log("Antes", bolas)
function muda(jogo) {
  jogo[1] = "🏈";
  console.log("fn", jogo)
}
muda(bolas);
console.log("externo", bolas);