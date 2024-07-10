function zeroEsquerda(num){
    return num >= 10? num : `0${num}`
    //Essa função apenas coloca um zero à esquerdas por motivos estéticos
    //O operador Ternário faz a verificação -> poderia ser substituido po IF
}

function mesNome(m){
    switch(m){//Começa contar no zero
        case 0:
            nome = 'Janeiro'
            return nome
        case 1:
            nome = 'Fevereiro'
            return nome
        case 2:
            nome = 'Março'
            return nome
        case 3:
            nome = 'Abril'
            return nome
        case 4:
            nome = 'Maio'
            return nome
        case 5:
            nome = 'Junho'
            return nome
        case 6:
            nome = 'Julho'
            return nome
        case 7:
            nome = 'Agosto'
            return nome
        case 8:
            nome = 'Setembro'
            return nome
        case 9:
            nome = 'Outubro'
            return nome
        case 10:
            nome = 'Novembro'
            return nome
        case 11:
            nome = 'Dezembro'
            return nome
    }
}

function diaSemana(d){
    switch(d){
        case 0://Começa contar no zero
            feira = 'Domingo'
            return feira
        case 1:
            feira = 'Segunda-feira'
            return feira
        case 2:
            feira = 'Terça-feira'
            return feira
        case 3:
            feira = 'Quarta-feira'
            return feira
        case 4:
            feira = 'Quinta-feira'
            return feira
        case 5:
            feira = 'Sexta-feira'
            return feira
        case 6:
            feira = 'Sábado'
            return feira
    }
}

function relogio(){
    const txt = document.querySelector('#txt');
    const data = new Date();
    const ano = data.getFullYear(); //Ano
    const mes = data.getMonth(); // Mês -> Precisa do swtch/case para colocar o nome
    const dia = data.getDate();//Dia do mês
    const hora = data.getHours();//Hora -> somente hora
    const minutos = data.getMinutes();//Minutos -> Precisa corrigir a formatação
    const nomeMes = mesNome(mes);//Colaca o nome do mês
    const feira = diaSemana(data.getDay());//Coloca o dia da semana
    txt.innerHTML = `${feira}, ${dia} de ${nomeMes} de ${ano}, ${hora}:${zeroEsquerda(minutos)}`;
}
relogio()


//Essa é a forma usando os mecanismos do JavaScript -->
//const h1 = document.querySelector('.container h1');
//const data = new Date();
//h1.ineerHTML = data.toLocaleDateString('pt-BR',{dateStyle: 'full',timeStyle:'short'});