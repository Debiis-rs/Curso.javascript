const listaDeNumeros = [15, 2, 88, 43, 5, 99, 12];
let maiorNumero = listaDeNumeros[0]; // Inicia com o primeiro elemento
for (const numero of listaDeNumeros) {
 if (numero > maiorNumero) {
 maiorNumero = numero;
 }
}
console.log(`O maior número na lista é: ${maiorNumero}`);