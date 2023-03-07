var a = 7;

function NaoMuda(a){
    a = a + 5;
    console.log("Parâmetro", a);
}

NaoMuda(a);
console.log(a);