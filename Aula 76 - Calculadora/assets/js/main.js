//Esse é um exemplo de factory function
function criaCalculadora(){
    return {
        display: document.querySelector('.display'),
        btnClear: document.querySelector('.btn-clear'),

        iniciar(){
            this.cliqueBtn()
            this.pressionaEnter()
        },
        limpar(){
            this.display.value = ''
        },
        apagaUm(){
            this.display.value = this.display.value.slice(0,-1)
        },
        pressionaEnter(){
            this.display.addEventListener('keyup', (e)=>{
                if(e.keyCode === 13){
                    this.resultado()
                }
            })
        },
        resultado(){
            let conta = this.display.value
            try{
                conta = eval(conta)
                if(!conta){
                    alert('Conta inválida')
                    this.limpar()
                    return
                }
                this.display.value = String(conta)
            }catch(error){
                alert('Conta inválida')
                this.limpar()
                return
            }
        },

        cliqueBtn(){
            //arrow function não muda o this('nesse caso this=calculadora')
            document.addEventListener('click', (e)=>{
                const el = e.target
                if(el.classList.contains('btn-num')){
                    this.paraDisplay(el.innerText)
                }
                if(el.classList.contains('btn-clear')){
                    this.limpar()
                }
                if(el.classList.contains('btn-del')){
                    this.apagaUm()
                }
                if(el.classList.contains('btn-eq')){
                    this.resultado()
                }
                this.display.focus()//serve para permitir o funcionamento da função 'pressionaEnter()'
            })
        },

        paraDisplay(valor){
            this.display.value += valor
        },

    }
}

const calculadora = criaCalculadora()
calculadora.iniciar()