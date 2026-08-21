import leia from "readline-sync"
    var agua = 1
    var refri = 1
    var suco = 1
    var Sagua = 0
    var Srefri = 0 
    var Ssuco = 0
var pedidos = leia.questionInt("Quantos pedidos deseja fazer? : ")

for(var i = 0; i < pedidos; i++){
    console.log("1 - Água - 4")
    console.log("2 - Refrigerante - 7 ")
    console.log("3 - suco - 6")
    console.log("0 - finalizar")
    var item = leia.question("Escolha seu pedido: ")
   

    if( item  === 1){
      agua += pedidos
       
    
    } else if(item  === 2){
   refri += pedidos
      

    }else if(item === 3){
      suco += pedidos
      

    } else {
        console.log("informação invalida")
    }


}
console.log("Agua adicionada: " + (agua * 4))
console.log("refri adicionada: " + (refri * 7))
console.log("suco adicionada: " + (suco * 6))