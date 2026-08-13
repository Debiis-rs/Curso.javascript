interface IApresentavel {
 apresentar(): void;
}

abstract class Pessoa implements IApresentavel {
 public nome: string;

 protected readonly cpf: string;

 constructor(nome: string, cpf: string){
    this.nome= nome;
    this.cpf = cpf;

 }

 apresentar(): void {
 console.log(`Olá, meu nome é ${this.nome}.`);
 }
}

class Estudante extends Pessoa {
 public matricula: string;
 constructor(nome: string, cpf: string, matricula: string) {
 super(nome, cpf);
 this.matricula = matricula;
 }
 
 public override apresentar(): void {
 console.log(`Sou a estudante ${this.nome}, matrícula ${this.matricula}.`);
 }
}
const estudanteTS = new Estudante("Débora", "432.667.769-00", "TS007");
estudanteTS.apresentar();