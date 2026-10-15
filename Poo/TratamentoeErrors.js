class Estudante{
    constructor(nome,DatadeNascimento,matricula,codigoEstudante){
        this.nome = nome;
        this.DatadeNascimento= DatadeNascimento;
        this.matricula= matricula;
        this.codigoEstudante= codigoEstudante;
    }
}

class Disciplina{
    #nome;
    #estudantesMatriculados;
    constructor(nome){
        this.#nome=nome;
        this.#estudantesMatriculados=[];
    }

matricularEstudante(estudante){  
if(!(estudante instanceof Estudante)){
    throw new TypeError("Parâmetros inválidos. Esperando uma instância de estudante.");
}
if(this.#estudantesMatriculados.lenght=2){
     throw new Error(`Matricula não permitida. turma de ${this.nome} está lotada`);
}

this.#estudantesMatriculados.push(estudante)
console.log(`Estudante ${estudante.nome} matriculado com sucesso`);

}

}

    const poo = new Disciplina("Programação Orientada Objetos");
    const stephen = new Estudante("Stephen","1998-04-09","E209865","poo98");
    const holly = new Estudante("Holly","1989-06-03","E207567","poo76");
    const cherry = new Estudante("Cherry","2000-10-13","E253456","poo74");

try{
    poo.matricularEstudante(stephen);
    poo.matricularEstudante(holly);
    poo.matricularEstudante(cherry);
    //poo.matriculaEstudante({nome:"objeto qualquer"});
    console.log("esse log nao sera exibido.")

}catch(error){
    console.error("----OCORREU UM ERRO----");
    console.error(`Tipo de erro:${error.name}`);
    console.error(`Mensagem:${error.message}`);
}finally{
   console.log("---Bloco de matrícula finalizado com sucesso---");
}

