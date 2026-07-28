//AGREGAÇÃO
import {Professor} from './classeprofessor.js';
import{Estudante} from './estudanteclasse.js';

export class Disciplina{
    constructor(nome,codigo,cargaHoraria){
        this.nome = nome;
        this.codigo = codigo;
        this.cargaHoraria = cargaHoraria;
        this.professor = null;
        this.estudantesMatriculados = [];
    }

    atribuirProfessor(professor){
        if(professor instanceof Professor){
            this.professor = professor;
            console.log(`Professor ${professor.nome} atribuido á disciplina ${this.nome}`);
            
        }else{
            console.log("Erro:Objeto fornecido não é uma instância de Professor");
        }

    }

    matricularEstudante(estudante){
        if(estudante instanceof Estudante){
            this.estudantesMatriculados.push (estudante);
            console.log(`Estudante${estudante.nome} matrículado em ${this.nome}`);  
        }else{
            console.log("Erro:Objeto fornecido não é uma instância de Estudante");
        }

    }

    listarEstudante(){
        console.log(`\n ---Estudantes matriculados em ${this.nome} ---\n`);
        this.estudantesMatriculados.forEach(estudante =>{
            console.log(`-${estudante.nome}(Matrícula: ${estudante.matricula})`);
        });
        console.log('--------------------------------------------\n');

    }

}
const renato = new Professor("Renato","256789", "Cálculo");
const debora = new Professor("Débora","256687","Javascript");

const joao = new Estudante("Joao silva","2612081007","2009-08-06");
const maria = new Estudante("Maria mendes","26120812307","2007-05-03");

const javascript = new Disciplina("Javascript","b432", "60");
const calculo = new Disciplina("Cálculo","aw23","120");

javascript.atribuirProfessor(debora);
calculo.atribuirProfessor(renato);

javascript.matricularEstudante(joao);
calculo.matricularEstudante(maria);
console.log(javascript);
console.log(calculo);

console.log (`A disciplina ${javascript.nome} é lecionada por ${javascript.professor.nome}`);
console.log (`A disciplina ${calculo.nome} é lecionada por ${calculo.professor.nome}`);
javascript.listarEstudante();
calculo.listarEstudante();


