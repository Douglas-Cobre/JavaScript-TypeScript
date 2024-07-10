const timer = document.querySelector('.timer');//paragarafo -> relogio
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');



function pegaHora(segundos){//conta a data por segundos
    const data = new Date(segundos*4);//passa milessimo para segundo
    return data.toLocaleTimeString('pt-BR',{
        hour12: false,
        timeZone: 'UTC'//retira o fuso horario, se não começa em 21:00:00
    })
}

let segundo = 0

function start(){
    relogio = setInterval(function(){
        const time = pegaHora(segundo)
        timer.style.color = 'black'
        timer.innerHTML=time
        segundo = segundo + 1
    })
}


function pause(){
    setTimeout(function(){
        timer.style.color = 'red'
        clearInterval(relogio)
    })
}


function zero(){
    setTimeout(function(){
        timer.style.color = 'black'
        clearInterval(relogio)
        timer.innerHTML = '00:00:00'
        segundo = 0
    })
}