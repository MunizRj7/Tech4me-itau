const div = document.getElementById("relogio");

function escrever(){
    const agora = new Date();
    div.innerText = agora.toLocaleTimeString()
}
 
escrever();

setInterval(escrever, 1000);
