//O xlm faz uma requisição de outro lugar ou arquivo (JSON, html, api, etc.)

document.addEventListener('click',(e)=>{
    const el = e.target
    const tag = el.tagName.toLowerCase()//Tag do html(body,p,h1,etc...)

    if(tag === 'a'){
        e.preventDefault()//Não sair da pag quando clicar
        carregaPagina(el)
    }
})

//Essa função verifica se esta td ok
const request = obj => {//obj como parametro
    return new Promise((resolve , reject)=>{
        const xhr = new XMLHttpRequest()
        xhr.open(obj.method , obj.url , true)//true = assinc
        xhr.send()//vazio se for GET
    
        xhr.addEventListener('load',()=>{//status = cod. HTTP
            if(xhr.status>=200 && xhr.status< 300){
                resolve(xhr.responseText);
            }else{
                reject(xhr.statusText);
            }
        })
    })
}

async function carregaPagina(el){
    const href = el.getAttribute('href')//Nesse caso será o link

    const objConfig = {
        method: 'GET',
        url: href
    } 
    try{//Serve como se fosse THEN
        const response = await request(objConfig)
        carregaResultado(response)
    }catch(error){
        console.log(error)
    }


    /*Usando somente PROMISSE => Tira o async la emcima
    request(objConfig)
    .then(response => {
        carregaResultado(response)
    })
    .catch(errorText => console.log(errorText))*/
}

function carregaResultado(response){
    const resultado = document.querySelector('.resultado')
    resultado.innerHTML = response
}

fetch('p1.html')
.then(resposta => {
    if(resposta.status !== 200) throw new Error('Erro 404 nosso')
    return resposta.text()
})
.then(html => console.log(html))
.catch(e => console.log(e))