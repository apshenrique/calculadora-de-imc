function calcular() {
    let peso = document.getElementById('txtpeso')
    let altura = document.getElementById('txtaltura')
    let resultado = document.getElementById('txtresultado')
    let recomendacoes = document.getElementById('txtrecomendacoes')

    if (peso.value.length == 0 || altura.value.length == 0) {
        resultado.innerHTML = 'Impossível realizar o cálculo'
    } else {
        let valorImc = peso.value / (altura.value * altura.value)
        resultado.innerHTML = `Seu IMC está em ${valorImc.toFixed(2)}`
    
        if (valorImc < 18.5) {
            recomendacoes.innerHTML = `Você está abaixo do peso ideal. É recomendado que você procure a ajuda de um Nutricionista para fazer uma avaliação mais detalhada.`
        } else if (valorImc < 24.9) {
            recomendacoes.innerHTML = `Parabéns, você está com o peso normal! É recomendado que você mantenha hábitos saudáveis.`
        } else if (valorImc < 29.9) {
            recomendacoes.innerHTML = `Cuidado, você está acima do seu peso ideal. Reveja os seus hábitos, pratique atividades físicas e melhore a usa alimentação.`
        } else if(valorImc < 34.9){
            recomendacoes.innerHTML = `Cuidado, você está com Obesidade Grau I. Procure ajuda médica e nutricional para melhorar a sua qualidade de vida. Iniciar uma reeducação alimentar é fundamental.`
        }else if (valorImc < 39.9) {
            recomendacoes.innerHTML = `Seu nível de obesidade é grau II. Você precisará fazer uma dieta alimentar rigorosa, com o acompanhamento de um nutricionista e consultar um médico especialista. Também, necessita de exercícios intensos para emagrecer.`
        } else if (valorImc >= 40){
            recomendacoes.innerHTML = `Atenção! Seu nível de obesidade está no grau III. A realização de um tratamento adequado pode ajudar a melhorar a sua qualidade de vida. Porém, cada caso deve ser analisado individualmente por uma equipe multidisciplinar que envolvem nutricionistas, médicos especialistas e psicólogos. Apenas com o acordo desses profissionais é possível indicar o melhor tratamento para cada pessoa que tenha obesidade grau 3.`
        } else{
            recomendacoes.innerHTML = `Insira as informações corretas.`
        }
    }
}
