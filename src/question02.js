import leia from "readline-sync"

    var Tvendido = 0
    var mediaC = 0
    var qtdCompras = leia.questionInt("Quantas compras foram realizadas: ")
    

    for(var i = 0; i < qtdCompras; i++){
        var valor = leia.questionFloat("Digite o valor da sua: " + i + "compra ")

    
        Tvendido += valor
        mediaC = Tvendido / qtdCompras
    }

    if(valor > 100){
        console.log("compras com valor maior q 100R$: " + valor)
    }

    console.log("compras realizadas: " + qtdCompras)
    console.log("valor total vendido:  " + Tvendido)
    console.log("media das compras: " + mediaC)