//SuperClass
function Conta(agencia, conta, saldo){
    this.agencia = agencia
    this.conta = conta
    this.saldo = saldo
}

Conta.prototype.sacar = function(valor){
    if(valor<=this.saldo){
        this.saldo -= valor
        this.verSaldo()//console.log(`Você sacou R$${valor.toFixed(2)}`)
        return
    }else{
        console.log(`Impossível sacar esse valor.`)
        this.verSaldo()
        return
    }
}
Conta.prototype.depositar = function(valor){
    if(valor>0){
        this.saldo += valor 
        this.verSaldo()
        return //console.log(`Você depositou R$${valor.toFixed(2)}`)
    }else{
        console.log(`Impossível depositar esse valor.`)
        this.verSaldo()
        return 
        
    }
}
Conta.prototype.verSaldo = function(){
    return console.log(`Ag/Cont : ${this.agencia}/${this.conta}| Saldo: R$${this.saldo.toFixed(2)}`)
}


function CC(agencia,conta,saldo,limite){
    Conta.call(this,agencia,conta,saldo)//Chama os parametros da superclasse
    this.limite = limite
}

CC.prototype = Object.create(Conta.prototype)//torna CC filha de Conta
CC.prototype.constructor = CC//os métodos de CC serão prioridade

CC.prototype.sacar = function(valor){
    if(valor>(this.saldo+this.limite)){
        console.log(`Saldo insuficiente`)
        return
    }
    this.saldo -= valor
    this.verSaldo()
}

const c1 = new CC('11','22',0,100)
c1.depositar(10)
c1.sacar(110)
