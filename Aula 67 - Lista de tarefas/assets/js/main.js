const novaTarefa = document.querySelector('.novaTarefa');
const add = document.querySelector('.add');
const lista = document.querySelector('.tarefas');
const btnDelete = document.querySelector('.apagar'); 
//let tarefas = [] //Para salvar no JSON, é preciso colocar em um array

function limpa(){
    novaTarefa.value = ''//limpa a caixa de texto
    novaTarefa.focus()//foca o curso automaticamente na caixa de texto
}

novaTarefa.addEventListener('keypress', function(e){
    if (e.keyCode === 13){
        if (!novaTarefa.value) return
        adicionar(novaTarefa.value)
        limpa()
    }
})

add.addEventListener('click',function(){
    if (!novaTarefa.value) return
    adicionar(novaTarefa.value)
    limpa()
});


//Essa função cria um botão e cria uma classe para ele
function criaBtn(){
    const btn = document.createElement('button')
    btn.innerText = 'Apagar'
    btn.setAttribute('class','apagar')//melhor que o NodeList
    return btn
}



function criaLi(task){
    task = document.createElement('li');
    return task
}


function adicionar(newTask){
    const li = criaLi();
    li.innerText = newTask;
    //tarefas.push(li.innerText)
    li.innerText += ' ';
    lista.appendChild(li);
    const botao = criaBtn();
    li.appendChild (botao); 
    salvarTarefas();
}

//Sempre que clicar em algo o sistema irá verificar oque foi apertado, caso seja o botão de apagar, ele irá remover a LI do botaõ, assim apagando todo o elemento
document.addEventListener('click', function(e){
    const el = e.target;
    if (el.classList == 'apagar'){
        el.parentElement.remove();
    }
    salvarTarefas()
});


//É possíivel salvar STRINGS dentro do navegador por meio do JSON
function salvarTarefas(){
    const lis = lista.querySelectorAll('li')
    const tarefas = []
    for (let tarefa of lis){
        let tarefaTxt = tarefa.innerText
        tarefaTxt = tarefaTxt.replace('Apagar','')
        tarefas.push(tarefaTxt)
    }
    //JSON só salva no navegador se for STRING
    const tarefaJSON = JSON.stringify(tarefas);
    localStorage.setItem('tarefas',tarefaJSON)//'tarefas' é como os sistema irá identificar o JSON armazenado
}


//Agora é preciso recuperar oque foi salvo no armazenamento local para criar tarefas
function adicionarTarefasSalvas(){
    const tarefaSalva = localStorage.getItem('tarefas')
    const listaTarefas = JSON.parse(tarefaSalva)
    for (let task of listaTarefas){
        adicionar(task)
    }
}
adicionarTarefasSalvas()