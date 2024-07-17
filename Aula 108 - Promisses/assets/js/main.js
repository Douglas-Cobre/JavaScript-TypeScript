//Promisses são uma form de "verificar algo" e reagir de acordo

function rand(min,max){
    min *=1000
    max *=1000
    return Math.floor(Math.random()*(max-min)+min)
}

function esperaAi(msg){
    return new Promise((resolve,reject)=>{//São duas funções
        if(typeof msg !== 'string') reject('Bad value')//Esse sera o 'ERROR', lá embaixo
        setTimeout(()=>{//setTimeout não é obrigatório
            resolve(msg)
        },tempo)
    })
}

//THEN()=>É a resposta caso seja um resultado positivo(resolve)
//CATCH()=>É a resposta caso seja um resultado negativo(reject)
esperaAi('Frase 01',rand(1,3))//.then(arrow function)
.then(resposta=>{
    console.log(resposta)
})
.then(()=>{//É possível ENCADEAR varios THEN
    console.log('Esse é o segundo THEN')
})
.catch(error=>{
    console.log(error)
})

//As PROMISSES são executadas em paralelo e geralmente aparecem no final.