class Estudante {
    contructor(nome,matricula,notas=[]){
        this.nome = nome;
        this.matricula = matricula;
        this.notas= notas;
    }  

 CalcularMedia() {
    if (this.notas.length === 0) return 0;
    const soma = this.notas.reduce ((acc,nota) => acc + nota, 0);
    return(soma/this.notas.length.toFixed(2));
}

}


Module.export = Estudante;