/*const nome = document.querySelector('.nome')
const sobrenome = document.querySelector('.sobrenome')
const cpf = document.querySelector('.cpf')
const senha = document.querySelector('.senha')
const repetir = document.querySelector('.repetir')*/

class Cadastro{
    constructor(){
        this.form = document.querySelector('.form')
        this.eventos()
    }

    eventos(){
        this.form.addEventListener('submit', e => {
            this.handleSubmit(e)
        })
    }
    handleSubmit(e){
        e.preventDefault();
        const camposValidos = this.campValid();
        const senhaValida = this.senhaValida();

        if(senhaValida && camposValidos){
            alert('Enviado')
            this.form.submit()
        }else{
            alert('Deu errado')
            console.log(camposValidos)
            console.log(senhaValida)
        }
    }

    campValid(){
        let valid = true//verifica se tem algo errado

        for(let errorText of this.form.querySelectorAll('.erro')){
            errorText.remove();
        }

        for(let campo of this.form.querySelectorAll('.validar')){
            const label = campo.previousElementSibling.innerText;

            if(!campo.value){
                this.criaErro(campo,`Campo ${label} não pode estar em branco`)
                valid = false
            }
            if(campo.classList.contains('cpf')){
                if(!this.validaCpf(campo)) valid = false
            }
            if(campo.classList.contains('usuario')){
                if(!this.validaUser(campo)) valid = false
            }
        }
        return valid
    }
    senhaValida(){
        let valid = true
        const senha = this.form.querySelector('.senha')
        const repetir = this.form.querySelector('.repetir')
        if(senha.value!==repetir.value){
            this.criaErro(senha,'Senhas devem ser iguais')
            this.criaErro(repetir,'Senhas devem ser iguais')
            valid = false
        }
        if(senha.value.length < 6 || senha.value.length > 12){
            this.criaErro(senha,'Senha precisa ter entre 6 e 12 caracteres')
            valid = false
        }
        if(repetir.value.length < 6 || repetir.value.length > 12){
            this.criaErro(senha,'Repetir senha precisa ter entre 6 e 12 caracteres')
            valid = false
        }
        return valid
    }
    validaSenha(campo){
        const senha = campo.value
        if(senha.length > 12 || senha.length < 6){
            this.criaErro(campo,'Senha deve conter entre 6 e 12 caracteres')
            return false
        }
    }
    validaRepetir(campo){
        const repete = campo.value
        if(repete.length > 12 || repete.length < 6){
            this.criaErro(campo,'Repetir senha deve conter entre 6 e 12 caracteres')
            return false
        }
    }
    validaUser(campo){
        let valid = true
        if(campo.value.length > 12 || campo.value.length < 3){
            this.criaErro(campo,'Usuário deve conter entre 3 e 12 caracteres')
            valid = false
        }
        if(!campo.value.match(/^[a-zA-Z0-9]+$/g)){//Na expressão fica od caracteres válidos
            this.criaErro(campo,'Usuário só pode conter letras ou números')
            valid = false
        }
        return valid
    }
    validaCpf(campo){
        const cpf = new ValidaCPF(campo.value)
        if(!cpf.valida()){
            this.criaErro(campo,`CPF inválido`)
            return false
        }
        return true
    }
    criaErro(campo,msg){
        const criaDiv = document.createElement('div')
        criaDiv.innerHTML = msg
        criaDiv.classList.add('erro')
        campo.insertAdjacentElement('afterend',criaDiv)
    }
}

const c = new Cadastro()
console.log(c)