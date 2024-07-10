function escopo(){ 
    const form = document.querySelector(".form");
    const txt = document.querySelector(".resultado")

    const pessoas = [];
    //Primeria forma de fazer
    
    //form.onsubmit = function(evento){  === Essa é uma função anônima, o onsubmit significa quando o botão for apertado.
    //    evento.preventDefault(); === Impede que a página atualize.
    //    alert(1);
    //}

    //Forma moderna
    function enviar(evento){
        evento.preventDefault(); //Impedir de atualizar
        const nome = form.querySelector('.nome'); //document verifica o arquivo inteiro --- form verifica só o <form> caso colocado em uma variável
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        let pessoa = `Nome: ${nome.value} Sobrenome: ${sobrenome.value} Peso: ${peso.value} Altura: ${altura.value}`

        pessoas.push(pessoa)

        txt.innerHTML += `${pessoa}<br/>`

        console.log(nome.value , sobrenome , peso , altura)//Precisa do value para MOSTRAR o valor no console.
        console.log(pessoas)
    }


    form.addEventListener('submit' , enviar); //Ler se clicou//form passa como parâm...

}
escopo();