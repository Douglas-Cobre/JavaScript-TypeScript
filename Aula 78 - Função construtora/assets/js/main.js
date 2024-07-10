//Esse é um exemplo de função construtora
function Calculadora(){
    this.display = document.querySelector('.display')
    this.iniciar = () => {//Arrow function não muda o THIS
        this.cliqueBtn()
        this.pressioneEnter()
    }
    this.limpar = () => {
        this.display.value = ''
    }
    this.apagaUm = () => {
        this.display.value = this.display.value.slice(0,-1)
    }
    this.paraDisplay = (valor) => {
        this.display.value += valor
    }
    this.resultado = () => {
        try{
            let conta = this.display.value
            conta = eval(conta)
            if(!conta){
                alert('Conta inválida')
                this.display.value = ''
            }else{
                this.display.value = conta
            }
        }catch(error){
            alert('Conta inválida')
            this.display.value = ''
        }
    }
    this.pressioneEnter = () => {
        this.display.addEventListener('keyup', (e) => {
            if(e.keyCode === 13){
                this.resultado()
            }
        })
    }
    this.cliqueBtn = (e) => {
        document.addEventListener('click', (e) => {//Captura se clicou
            const el = e.target//Captura onde clicou
            if(el.classList.contains('btn-num')){
                this.paraDisplay(el.innerText)
            }
            if(el.classList.contains('btn-del')){
                this.apagaUm()
            }
            if(el.classList.contains('btn-clear')){
                this.limpar()
            }
            if(el.classList.contains('btn-eq')){
                this.resultado()
            }
            this.display.focus()
        })
    }
    
}

const calc = new Calculadora();
calc.iniciar()