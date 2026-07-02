class Estudante {
    nome;
    matricula;
    dataNascimento;
    notas;

    constructor(nome, matricula,dataNascimento) {
        this.nome = nome;
        this.matricula = matricula;
        this.dataNascimento = dataNascimento;
        this. notas = [];
    }

    adicionandoNota(nota){
        if (nota>=0 && nota <=10){
            this.notas.push(nota);
            console.log(`Nota ${nota} adicionada para ${this.nome}`);
        } else{
            console.log('Nota invalída. adicione uma nova nota!');
        }
    }

    calcularMedia(){
        if( this.notas ===0){
            console.log("Esse aluno não possui notas.");
            return 0;
        }
        
        const soma =this.notas.reduce((acc, nota )=> acc + nota,0);
        return(soma / this.notas.length).toFixed(2);
}
  }
        const Debora = new Estudante("Debora Silva", "20048", "27-03-2008");
        const Ana = new Estudante("Ana Clara", "20067", "12-09-2006");
        const Renato = new Estudante("Renato Moreira", "23045", "01-03-2007");

        Debora.adicionandoNota(9.8)
        Debora.adicionandoNota(10)
        Debora.adicionandoNota(9.8)
        Debora.calcularMedia()

        console.log(`Média da Débora: ${Debora.calcularMedia()}`);
        




    
        