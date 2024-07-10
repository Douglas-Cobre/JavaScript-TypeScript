//Exemplo de função fábrica:
function criaPessoa (nome,sobrenome,altura,peso){
    return {
        nome: nome, 
        sobrenome: sobrenome, 
        fala: function(assunto){//THIS.se refere a quem chama o objeto
            return `${this.nome} está falando sobre ${assunto}`
        },
        altura: altura,
        peso: peso,
        //GETTER
        get imc(){
            const indice = this.peso/(this.altura**2)
            return indice.toFixed(2)
        },
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`
        },
        //SETTER 
        set nomeCompleto(valor){
            valor = valor.split('');//Cria um array com a função de cima
            this.nome = valor.shift();//Retira o elemento do array
            this.sobrenome = valor.join(' ');//Junta os elementos
        }
    }
}
const p1 = criaPessoa('Douglas','Cobre',1.80,87);
const p2 = criaPessoa('Maria','Suzana',1.60,83);
console.log(p1)
console.log(p1.nome)
console.log(p1.sobrenome)
console.log(p1.fala('JS'))
console.log(p1.imc)//O getter trasforma a função em um método
console.log(p1.nomeCompleto)
