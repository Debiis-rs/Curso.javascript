// O mais correto é fazer cada classe em seu devido arquivo. 

class Pessoa{
    nome ;
    datadeNascimento;
    #cpf;
    constructor(nome,datadeNascimento,cpf){
        this.nome=nome;
        this.datadeNascimento = datadeNascimento;
        this.#cpf = cpf; // atributo privado
    }   
    get cpf (){
        return this.#cpf;
    } 
    apresentar(){
        console.log(`Olá, meu nome é ${this.nome}`);
    }
}
/*
class Estudante extends Pessoa{

    constructor(nome,datadeNascimento,cpf,matricula){

        super(nome,datadeNascimento,cpf,matricula);
        this.matricula = matricula;
        this.nota =[];
    }

    adicionarnota(nota){
        this.nota.push(nota);
    }
    apresentar(){
        console.log(`Olá sou a estudante ${this.nome} minha matrícula é ${this.matricula}`);
    }

}
class Professor extends Pessoa{
    constructor(nome,datadeNascimento,cpf, idfuncional){

        super(nome,datadeNascimento,cpf,idfuncional);

        this.idfuncional =idfuncional;
        this.disciplinas =[];

    }
}
const pessoaComum=new Pessoa("Morgana Rosa","1997-03-27","021.334.556-98");
const estudante=new Estudante("Débora Rosa","2008-03-27","024.354.547-78","2612082029");
const professor=new Professor("Samuel Ferreto","1997-03-27","012.374.566-45","APC12");

console.log(pessoaComum);

console.log(estudante);
console.log(professor);
console.log(estudante.cpf);

pessoaComum.apresentar();
estudante.apresentar();
professor.apresentar();
*/

class Funcionario extends Pessoa{
    #salario;
    constructor(nome,datadeNascimento,cpf,cargo,salario){
        super(nome,datadeNascimento,cpf);
        this.cargo = cargo;
        this.#salario = salario;
    }
    get salario(){
        return this.#salario
    }
    promover(novoCargo,novoSalario){
        this.cargo = novoCargo;
        this.#salario = novoSalario;
        console.log(`${this.nome} foi promovido (a)...`);
    }
}
const funcionario=new Funcionario("Morgana Rosa","1997-03-27","021.334.556-98","Estagiária", 2300);


console.log(funcionario);
console.log(funcionario.cpf);
funcionario.apresentar();
funcionario.promover()
