const aluno = {
    nome:"laisa",
    sobrenome:"Duarte",
    nomeCompleto: function nomeCompleto(nome, sobrenome){
        return nome + " " + sobrenome;
    },
};

console.log(aluno.nome)
console.log(aluno.sobrenome)
console.log(aluno.nomeCompleto("gil","gomes"))