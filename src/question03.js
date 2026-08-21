import leia from "readline-sync"

var somaNum = 0

for(var i = 0; i <= 10; i++){
var num = leia.questionFloat("Digite um numero: ")
 somaNum += num

if(num % 2 === 0){
    console.log("numeros pares: " + num)
}


else{
console.log("numeros impares:  " + num)
}
}



console.log("QTD de numeros apresentados: " + somaNum)
