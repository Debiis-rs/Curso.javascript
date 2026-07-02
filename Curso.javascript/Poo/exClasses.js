class Estudante {
    constructor(nome, matricula, curso, dataNascimento){
        this.nome = nome;
        this.matricula = matricula;
        this.curso = curso;
        this.dataNascimento = dataNascimento;
    }
    exibirDadosdoAluno(){
        console.log(`Estudante: ${this.nome}, Matrícula: ${this.matricula}, Curso: ${this.curso}`);  
    }
}
        const estudante = new Estudante('Debora', '20048', 'Engenharia');
        const estudante1 = new Estudante('Ana', '20067', 'javascript-backend');
        const estudante2 = new Estudante('Renato', '23045', 'java');

        estudante.exibirDadosdoAluno();
        estudante1.exibirDadosdoAluno();
        estudante2.exibirDadosdoAluno();
