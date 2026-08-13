"use strict";
// classe abstrata que cumpre o contrato
class Pessoa {
    nome;
    cpf;
    constructor(nome, cpf) {
        this.nome = nome;
        this.cpf = cpf;
    }
    // método obrigatório pela interface
    apresentar() {
        console.log(`Olá, meu nome é ${this.nome}.`);
    }
}
class Estudante extends Pessoa {
    matricula;
    constructor(nome, cpf, matricula) {
        super(nome, cpf);
        this.matricula = matricula;
    }
    // ← sobrescrita explícita, com a palavra override
    apresentar() {
        console.log(`Sou a estudante ${this.nome}, matrícula ${this.matricula}.`);
    }
}
const estudanteTS = new Estudante("Débora", "432.667.769-00", "TS007");
estudanteTS.apresentar();
