
    var altura = 1.78
    var peso = 80
    var imc = peso / (altura * altura)

    if(imc < 18.5){
        console.log('Magreza')
    }else if(imc < 24.9){
        console.log('Normal')
    }else if(imc < 29.9){
        console.log('Sobrepeso - Obesidade Grau I')
    }else if(imc < 39.9){
        console.log('Obesidade Grau II')
    }else{
        console.log('Obesidade Grau III')
    }

    console.log(imc.toFixed(2))
