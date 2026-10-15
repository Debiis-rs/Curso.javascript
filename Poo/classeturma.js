import{Disciplina} from './classedisciplina.js';

export class Turma{
    constructor(ano,disciplina,codigoTurma,semestre,){
        this.ano = ano;
        this.disciplina = [];
        this.codigoTurma = codigoTurma;
        this.semestre = semestre;
         
    }
    adicionardisciplina(disciplina){
         if(disciplina instanceof Disciplina){
                    this.adicionardisciplina.push (disciplina);
                    console.log(`Disciplina${disciplina.nome} adicionado á turma`);  
                }else{
                    console.log("Erro:Objeto fornecido não é uma instância de Disciplina");
                }

    }
    listarDisciplinas(){
        console.log(`\n ---Lista de Disciplina ${this.codigoTurma}/${this.semestre}/${this.ano} ---\n`);
        this.listarDisciplinas.forEach(disciplina =>{
            console.log(`-${disciplina.nome}`);
        });
        console.log('--------------------------------------------\n');
    }
}
const logica = new Disciplina("Logica JS","LOG101", 24);
const jspoo = new Disciplina(" Javascript","POO", 26);
const turma2026_2 = new Turma("Logica JS","LOG101", 24);





        