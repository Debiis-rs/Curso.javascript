export class Professor{
    constructor(nome,idFuncional){
        this.nome = nome ;
        this.idFuncional = idFuncional;
        this.disciplinas= [];
    }

    adicionandoDisciplina(nomeDisciplina){
        this.disciplinas.push(nomeDisciplina)
        console.log(`Disciplina${nomeDisciplina} adicionada ao professor ${this.nome}`);
    }
}

const sofia = new Professor("sofia tamaguchi","12082029", );
const caio = new Professor("caio ambrosio","12345679", );

caio.adicionandoDisciplina('Literatura')
console.log(caio)

sofia.adicionandoDisciplina('Cálculo')
console.log(sofia)