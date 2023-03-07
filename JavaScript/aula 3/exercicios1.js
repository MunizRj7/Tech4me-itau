const lista = [
    {
        aluno: "Zépa",
        montadora: "Volkswagen",
        modelo: "Taos",
        cor: "Chumbo",
      },
      {
        aluno: "Karine",
        montadora: "BMW",
        modelo: "X1",
        cor: "Azul",
      },     
      {
        aluno: "Carlos",
        montadora: "Nissan",
        modelo: "Nissan Kicks",
        cor: "Platinado",
      },
      {
        aluno: "Maxwell",
        montadora: "Tesla",
        modelo: "Model S",
        cor: "branco",
      },
      {
        aluno: "christian",
        montadora: "tesla",
        modelo: "model S",
        cor: "cinza claro",
      },
      {aluno: "Gian",
  montadora: "Renault",
  modelo: "Joy",
  cor: "Prata",
},
{
    aluno: "Vinicius",
    montadora: "Toyota",
    modelo: "Supra",
    cor: "laranja",
  },  
    ]      

const callback = function (carro) {
    console.log("Montadora:", carro.montadora);
};

//lista.forEach(callback);

const cb = function(item){
    return item.cor;
};

const listanova = lista.map(cb);

console.log(listanova)