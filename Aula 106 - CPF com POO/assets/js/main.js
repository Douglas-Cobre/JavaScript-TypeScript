//127.132.969-78

function ValidaCpf(cpf){
    Object.defineProperty(this, 'cpfLimpo',{//cpfLimpo vira um atributo
        get: function (){//Separa tudo que for número no CPF enviado
            return cpf.replace(/\D+/g,'')//Essa sequência /\D+/g significa tudo que não for nº
        }
    })
    ValidaCpf.prototype.valida = function(){
        if(typeof this.cpfLimpo === 'undefined') return false;
        if(this.cpfLimpo.length !== 11) return false;
        if(this.isSequencia())return console.log('Números repetidos são inválidos');

        const cpfParcial01 = this.cpfLimpo.slice(0,-2)
        const cpfParcial02 = this.cpfLimpo.slice(0,-1)
        const digito01 = this.criaDigito(cpfParcial01)
        const digito02 = this.criaDigito(cpfParcial02)

        console.log(`Os dois ultimos digitos são ${this.cpfLimpo.slice(-2,-1)}${this.cpfLimpo.slice(-1)}`)
        //console.log(digito01)
        //console.log(digito02)

        if(digito01 == this.cpfLimpo.slice(-2,-1) && digito02 == this.cpfLimpo.slice(-1)){
            return true
        }else{
            return false
        }
    }
    ValidaCpf.prototype.isSequencia = function () {
        const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length)
        if(sequencia == this.cpf){
            return true
        }else{
            return false
        }
    }
    ValidaCpf.prototype.criaDigito = function (cpfParcial) {
        const cpfArray = Array.from(cpfParcial);//Transforma a string em array
        let regressivo = cpfArray.length+1
        const total = cpfArray.reduce((ac,valor)=>{//reduce funciona como from
            ac += valor*regressivo
            regressivo--
            return ac
        },0)//Zero marca o inicio
        console.log(total)
        const res =(11-(total%11))
        if(res>9){
            return 0
        }else{
            return res
        }
    }
}
const cpf = new ValidaCpf('127.132.969-78')
console.log(cpf.cpfLimpo)//Separa oque for número
cpf.valida()//Verifica sé é valido