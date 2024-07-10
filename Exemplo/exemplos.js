//EXEMPLOS COM NÚMEROS

const num =Number(prompt('Digite um número: '));

const txt = document.getElementById('texto');
const n = document.getElementById('num'); // Pega um elemento pelo ID

n.innerHTML = num;
txt.innerHTML += `Raiz quadrada ${Math.sqrt(num)}<br/>`; // Raiz quadrada
txt.innerHTML += `É inteiro ${Number.isInteger(num)}<br/>`;
txt.innerHTML += `NaN:  ${Number.isNaN(num)}<br/>`; // Verifica se é numero
txt.innerHTML += `Arredondado para cima ${Math.ceil(num)}<br/>`;
txt.innerHTML += `Arredondado para baixo ${Math.floor(num)}<br/>`; // Aredondar
txt.innerHTML += `Casas decimais ${num.toFixed(2)}<br/>`; // Casa decimais