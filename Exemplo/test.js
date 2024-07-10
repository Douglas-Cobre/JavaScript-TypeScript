function clicar(nome , sobrenome , peso , altura){
    const nome = document.getElementsByClassName('nome')
    const sobrenome = document.getElementsByClassName('sobrenome')
    const peso = document.getElementsByClassName('peso')
    const altura = document.getElementsByClassName('altura')
    a = `Nome: ${nome}`
    b = `Sobrenome: ${sobrenome}`
    c = `Peso: ${peso}`
    d = `Altura ${altura}`
    list = [a,b,c,d]
    let txt = document.getElementById('dados')
    txt.innerHTML = list
}
