import leia from "readline-sync"

var somaNotas = 0
var somaMedia = 0

var alunos = leia.questionInt("Alunos matriculados na turma: ")


for(var i = 1
    ; i < alunos; i++){
    
    var Notas = leia.questionFloat("Digite a media de cada aluno: " + i + " nota ")

    if(Notas <= 6){

        console.log("Alunos com notas menor de 7: " + Notas)
        } else {
          console.log("Alunos com notas += 7: " + Notas)
        }

        somaNotas += Notas

        somaMedia = somaNotas / alunos

}

console.log("Soma das notas da turma: " + somaNotas)

console.log("Soma da media: " + somaMedia)