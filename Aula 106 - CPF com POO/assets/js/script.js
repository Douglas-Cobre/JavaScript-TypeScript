//127.132.969-78

class ValidaCpf{
    constructor(cpf){
        Object.defineProperty(this,'cpfLimpo',{
            get: function(){
                return cpf.replace(/\D+/g,'')
            }
        })
    }

    isSequencia(){
        return this.cpfLimpo.charAt(0).repeat(11) === this.cpfLimpo
    }

    valida(){
        console.log('Cheguei aqui')

        if(!typeof this.cpfLimpo)return ('Cpf inválido')
        if(this.isSequencia()) return ('Sequência')
        //if(typeof this.cpfLimpo.length != 11)return console.log('Quantidade errada')

        const cpfParcial01 = this.cpfLimpo.slice(0,-2)
        const cpfParcial02 = this.cpfLimpo.slice(0,-1)
        const digito01 = this.criaDigito(cpfParcial01)
        const digito02 = this.criaDigito(cpfParcial02)

        console.log(`Os dois últimos dígitos são ${digito01} e ${digito02}`)
        if(digito01 == this.cpfLimpo.slice(-2,-1) && digito02 == this.cpfLimpo.slice(-1)){
            return console.log('CPF válido')
        }else{
            return console.log('CPF inválido')
        }
    }

    criaDigito(digito){
        const cpfArray = Array.from(digito)
        let regressivo = cpfArray.length + 1
        const total = cpfArray.reduce((ac,valor)=>{
            ac += valor*regressivo 
            regressivo--
            return ac
        },0)
        console.log(total)
        const res = 11-(total%11)
        if(res>9){
            return 0
        }else{
            return res
        }
    }
}

const cpf01 = new ValidaCpf('127.132.969-78')
console.log(cpf01.cpfLimpo)
cpf01.valida()