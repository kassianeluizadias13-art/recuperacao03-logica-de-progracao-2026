import leia from "readline-sync"
var somaNum = 0
var numN = 1;
var numP = 1;
var numT = 0

for(var i = 0; i <= 5; i++){
    var num = leia.questionInt("digite um num negativo ou positivo: ")

numP += (num * 1)
numN += (num * -1)
somaNum += num

    if(num === 0){
        
        console.log("soma dos numeros: " + somaNum)
    }
}

console.log("numeros negat: " + numN)
console.log("numeros  posi: " + numP)
