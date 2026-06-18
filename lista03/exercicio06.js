const notas = [8, 4.9, 7, 10, 5];
let somaNotas = 0;

for(let nota of notas){
    somaNotas += nota;  
}
const media = somaNotas/ notas.length
console.log(`A média do aluno é: ${media.toFixed(2)}`);