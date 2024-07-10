const form = document.getElementById('form')


function setResposta(msg , tipo){
    const resposta = document.querySelector('#resultado')
    if (tipo == 1){
        resposta.classList.add('abaixo')
    }else if (tipo == 2){
        resposta.classList.add('normal')
    }else if (tipo == 3){
        resposta.classList.add('sobrepeso')
    }else if (tipo == 4){
        resposta.classList.add('grau1')
    }else if (tipo == 5){
        resposta.classList.add('grau2')
    }else if (tipo == 6){
        resposta.classList.add('grau3')
    }
    resposta.innerHTML = `${msg}`
}

function calcular(evento){
    evento.preventDefault();
    const inputPeso = document.querySelector('#peso')
    const inputAltura = document.querySelector('#altura')
    const peso = Number(inputPeso.value)
    const altura = Number(inputAltura.value)
    let imc = peso/(altura*altura)
    imc = imc.toFixed(2)/*Limita as casas decimais*/
    if (imc<18.5){
        const resp = `Seu IMC é ${imc} (Abaixo do peso)`
        const tipo = 1
        setResposta(resp , tipo);
    }else if (imc>=18.5 && imc<25){
        const resp = `Seu IMC é ${imc} (Peso normal)`
        const tipo = 2
        setResposta(resp , tipo);
    }else if (imc>=25 && imc<30){
        const resp = `Seu IMC é ${imc} (Sobrepeso)`
        const tipo = 3
        setResposta(resp , tipo);
    }else if (imc>=30 && imc<35){
        const resp = `Seu IMC é ${imc} (Obesidade grau 1)`
        const tipo = 4
        setResposta(resp , tipo);
    }else if (imc >=35 && imc<40){
        const resp = `Seu IMC é ${imc} (Obesidade grau 2)`
        const tipo = 5
        setResposta(resp , tipo);
    }else if(imc>=40){
        const resp = `Seu IMC é ${imc} (Obesidade grau 3)`
        const tipo = 6
        setResposta(resp , tipo);
    }else{
        const resp = `Valor inválido`
        const tipo = 7
        setResposta(resp , tipo);
    }
}
form.addEventListener('submit',calcular);