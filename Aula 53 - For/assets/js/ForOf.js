const nome = ['Douglas','Cobre','Galdino'];
console.log('####')

//Como pegar o valor de um elemento dentro de um array
for (let i in nome){
    console.log(nome[i]);
}
console.log('####')//Seprador --> Apenas visual
//OU
for (let valor of nome){
console.log(valor , pessoa[chave]/*Pega o valor*/);
}
console.log('####')
//OU
for (let c = 0; c< nome.length; c++){
    console.log(nome[c]);
}
console.log('####')

//Como discrimar o indice
nome.forEach(function(valor,indice){
    console.log(valor,indice)
})