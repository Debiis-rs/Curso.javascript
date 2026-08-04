class Contabancaria{
    #titular; #saldo; 
    constructor (titular){
        this.#titular = titular;
        this.#saldo = 0;
           
    }
     
    get saldo(){return this.#saldo;}
    get titular() {return this.#titular;}
   
    depositar(valor){
        if(valor<=0){
            console.log("Valor inválido para depósito!");
        }else{
            this.#saldo +=valor;
            console.log("Deposito feito.");}
    }
    sacar(saldo){
        if(valor > 0){
            this.#saldo -=valor;
        }else{console.log("Saldo insuficiente.");}

    }
}
const debora = new Contabancaria ("Debora reinita")
debora.depositar(23000);
console.log(debora.saldo)
console.log(debora.titular)



