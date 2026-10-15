class Estudanteprivado{
    #nome; #matricula;#notas;

    constructor (nome,matricula){
        this.#nome = nome;
        this.#matricula = matricula;
        this.#notas = [];
    }
    get nome(){return this.#nome;}  
    set nome(novoNome) {this.#nome = novoNome;}
    get matricula(){}

     get notas(){
        return [...this.#notas];
    }

adicionarNota(nota){ 
        if (nota >= 0 && nota <= 10){
            this.#notas.push(nota);
        }else{console.log(`Erro: nota ${nota} é invalída`)}
}
    get nome() {return this.#nome;}
    set nome(novoNome){
        this.#nome = novoNome;
    }
    get notas(){return [...this.#notas];}

    calcularMedia(){
        if( this.notas ===0){
            console.log("Esse aluno não possui notas.");
            return 0;
        }
        const soma =this.notas.reduce((acc, nota )=> acc + nota,0);
        return(soma / this.notas.length).toFixed(2);
    }
}
const joao = new Estudanteprivado("João","E2023001");
console.log(joao.nome);
joao.adicionarNota(9.0);
joao.adicionarNota(5.9);
joao.adicionarNota(8.0);
joao.adicionarNota(-8);

console.log(joao.notas);
console.log("Média do João:", joao.calcularMedia());

console.log("\n----Testando o Setter de nome----");
console.log(`Nome atual: ${joao.nome}`);

joao.nome = "joão da Silva Sauro";
console.log(`Nome Novo: ${joao.nome}`);



