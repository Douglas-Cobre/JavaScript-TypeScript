const elementos = [
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'section', texto: 'Frase 3'},
    {tag: 'footer', texto: 'Frase 4'},
];
const container = document.querySelector('.container');
const div = document.createElement('div');//Cria uma DIV para ser adicionada posteriormente


function texto(){
    for (let i=0; i<elementos.length ; i++){
        let txt = document.createElement(`${elementos[i].tag}`);
        txt.innerHTML = `${elementos[i].texto}`
        div.appendChild(txt)//Adiciona dentro da DIV criada no script
        console.log(elementos[i].tag)
        console.log(elementos[i].texto)
    }
    container.appendChild(div)//Adiciona no HTML, dentro da section
} 
texto();
