var nomes = [];

var aluno = {
    nome: "Gabriel",
    modulo:"CSS",
    nota_4:3.5,
    nota_6:5.2,
}

nomes.push(aluno);

aluno = {
    nome: "Vinicius",
    modulo:"CSS",
    nota_4:3.7,
    nota_6:5.0,
}

nomes.push(aluno);

aluno = {
    nome: "Max",
    modulo:"CSS",
    nota_4:5.0,
    nota_6:5.8,
}

nomes.push(aluno);
aluno = {
    nome: "Giovana",
    modulo:"CSS",
    nota_4:5.5,
    nota_6:4.2,
}

nomes.push(aluno);

aluno = {
    nome: "Maria",
    modulo:"CSS",
    nota_4:3.4,
    nota_6:5.0,
}

nomes.push(aluno);

var Medias = [];


for (let i = 0; i < nomes.length; i++) {
    const nome = nomes[i];

   Media(nome.nota_4, nome.nota_6, nome.nome);
  
}

function Media(nota1, nota2, nome){
    var total = nota1 + nota2 / 2;
    Medias.push(total)
}

var organizando = Medias.sort()
var maior = organizando[organizando.length -1];

console.log(maior)

var contadorDeAlunos = 0;

for (let i = 0; i < nomes.length; i++) {
    const nome = nomes[i];
    var notas = nome.nota_4 + nome.nota_6 / 2;
    if(notas < 7){
        contadorDeAlunos++
    }
}

console.log("O total de alunos com a media menor que 7 é:",contadorDeAlunos);


