const div = document.getElementById("relogio");

var ini;
var id;

function iniciar(){
    ini = new Date()
   id =  setInterval(aumento, 1000)
}

function aumento(){
    const diff = new Date() - ini;
    const hora = new Date(diff);
    hora.setHours(hora.getHours() + 3);
    div.innerText = hora.toLocaleTimeString();
}
const btninicar = document.getElementById("iniciar");
btninicar.addEventListener('click', iniciar);

const resetar = () => {
    div.innerText = "00:00:00"
}
const btnResetar = document.getElementById("resetar");
btnResetar.addEventListener("click", resetar)

const btnParar = document.getElementById("parar");
btnParar.addEventListener("click", parar)



const parar = () => {
    clearInterval(id);
}