class Recursodidatico{
    constructor(nome){
        if (this.constructor === Recursodidatico){
            throw new error ("Classe abstata 'Recurso didatico' não pode ser instaciada");
        }   
           this.nome = nome;
    }
    exibir(){
    throw new error ("Esse metodo 'exibir()' deve ser implementando pelas subclasses.");
}

} 


class Livro extends Recursodidatico{
    constructor(nome, autor){
        super(nome);

        this.autor = autor;
    }
    exibir(){
    console.log(`Livro: ${this.nome}, de ${this.autor}`);
 }
}
//const recurso = new Recursodidatico("Genérico");// aqui lança o erro .

const livropoo = new Livro("Livro de POO","Stephen King");

console.log(livropoo);
livropoo.exibir();
