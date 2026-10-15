export class Boletim {
constructor(estudante, disciplina) {
this.estudante = estudante;
this.disciplina = disciplina;
this.avaliacoes = []; 
}

lancarAvaliacao(valor, peso) {
    
const nova = new Avaliacao(valor, peso);
this.avaliacoes.push(nova);

 }
}