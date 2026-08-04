import{Nota} from './Nota.js';

class Estudante{
    constructor(nome,matricula){
        this.nome= nome;
        this.matricula= matricula;
    } 
}
   class Disciplina{
    constructor(nome,codigo){
        this.nome= nome;
        this.codigo= codigo;
    }

}

export class Matricula{
    constructor(estudante, disciplina){
        this.estudante = estudante;
        this.disciplina = disciplina;
        this.dataMatricula= new Date();
        this.notas =[];
    }
    adicionarNota(valor, descricao){
        const novaNota = new Nota(valor,descricao);
        this.notas.push(novaNota);
        console.log(`Nota ${descricao} (${valor}) adicionada para ${this.estudante.nome} em ${this.disciplina.nome} `)

    }
    calcularMedia(){
         
          if (this.notas.length === 0){
            console.log("Esse aluno não possui notas.");
            return 0;
        }

        const soma = this.notas.reduce((acc, nota)=> acc + nota.valor,0);
        console.log(soma)
        return (soma / this.notas.length).toFixed(2);
    }
     
}
const estudanteJulie = new Estudante("Julie ribeiro", "2927007");
const disciplinaPOO = new Disciplina("Programação Orientada a Objetos", "POO101");

const matriculaJulieEmPOO = new Matricula(estudanteJulie, disciplinaPOO);


matriculaJulieEmPOO.adicionarNota(8, "Prova 1");
matriculaJulieEmPOO.adicionarNota(10, "Trabalho Final");


console.log("\n--- Detalhes da Matrícula ---");
console.log(matriculaJulieEmPOO);
console.log(`Média final de ${estudanteJulie.nome}: ${matriculaJulieEmPOO.calcularMedia()}`);


    