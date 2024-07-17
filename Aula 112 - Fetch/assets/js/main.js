//O FETCH funciona parecido com o xml, fazendo uma requisição,. Porém ele já faz uma promisse automaticamente

document.addEventListener('click',(e)=>{
    const el = e.target
    const tag = el.tagName.toLowerCase()//Tag do html(body,p,h1,etc...)

    if(tag === 'a'){
        e.preventDefault()//Não sair da pag quando clicar
        carregaPagina(el)
    }
})



async function carregaPagina(el){
    try{
        const href = el.getAttribute('href')//Nesse caso será o link
        const response = await fetch(href)
    
        if(response.status !== 200)throw new Error('Erro 404')
    
        const html = await response.text()
        carregaResultado(html)
        
    }catch(e){
        console.log(e)
    }

        //Usando fetch sem Awiat e Async

        /*fetch(href)
        .then(response => {
             if(response.status >= 200 && response.status < 300){
                return response.text()
             }else{
                throw new Error('Erro 404')
             }
        })
        .then(html => carregaResultado(html))
        .catch(e => console.log(e))*/
    
}

function carregaResultado(response){
    const resultado = document.querySelector('.resultado')
    resultado.innerHTML = response
}

