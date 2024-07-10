const paragrafo = document.querySelector('.paragrafo');
const ps = paragrafo.querySelectorAll('p');

const estilos = getComputedStyle(document.body);//Pega os estilos
const corFundo = estilos.backgroundColor;//Pega um estilo específico

for (let p of ps){//Coloca as cores de fundo um por um
    p.style.backgroundColor = corFundo;
    p.style.color = '#ffffff'
}
