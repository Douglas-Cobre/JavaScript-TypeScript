
//Usando somente FETCH
/*fetch('pessoas.json')
.then(resposta => resposta.json())//Converte o JSON para um array de objetos com nome resposta
.then(json => carregaElementos(json))*/

//Usando AXIOS => precisa instalar na maquibna e importar ou usar o script cdn (como estou usando => ver index.html)
axios('pessoas.json')
    .then(resposta => carregaElementos(resposta.data))
//AXIOS pula uma etapa


function carregaElementos(json){
    const table = document.createElement('table')//cria um tag html
    for(let pessoa of json){
        //tr = linha
        //td = coluna dentro da linha
        const tr = document.createElement('tr')

        let td = document.createElement('td')
        td.innerHTML = pessoa.nome
        tr.appendChild(td)

        td = document.createElement('td')
        td.innerHTML = pessoa.idade
        tr.appendChild(td)

        td = document.createElement('td')
        td.innerHTML = pessoa.salario
        tr.appendChild(td)

        table.appendChild(tr)
    }
    const div = document.querySelector('.resultado')
    div.appendChild(table)
}