//Exemplos de SHIFT e UNSHIFT
const nomes = ['Douglas','Vitor','Heitor']
const exShift = nomes.shift()//Tira o primeiro item
const exUnshift = nomes.unshift('Alexandre')//Tira o primeiro item
console.log(nomes)
console.log(exShift)

//Exemplos de POP e PUSH
const numeros = [1,2,3,4]
const exPop = numeros.pop()//Tira o último
const exPush = numeros.push('X')//Coloca no último
console.log(numeros)
console.log(exPop)

//Exemplo de SLICE
const carros = ['Celta','Saveiro','Gol']
const exSlice = carros.slice(1,2)//Tira um pedaço => O segundo indice não conta
console.log(carros)
console.log(exSlice)
const num = [5,50,80,1,2,3,5,8,7,11,15,22,27]
const num10 = []
//Isso filtra os valores maiores que 10, porém existe outtra forma
for(n of num){
    if(n>=10){
        num10.push(n)
    }
}
//console.log(num)
//console.log(num10)


//Exemplo de FILTER
/*const numFilter = num.filter(valor => valor>10)
console.log(numFilter)*/
const pessoas = [
    {nome:'Douglas', idade:23},
    {nome:'Vitor', idade:24},
    {nome:'Heitor', idade:17}
]
const pessoasNomeGrande = pessoas.filter(obj => obj.nome.length > 6)
//console.log(pessoasNomeGrande) 


//Exemplo de MAP -> Interaje com o array
const pessoasMap = pessoas.map(obj => ({idade:obj.idade}))
console.log(pessoasMap)