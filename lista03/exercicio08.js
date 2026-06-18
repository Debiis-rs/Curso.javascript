const calcularFatorial = (numero) => {
   if (numero === 0) {
      return 1;
    }
   let resultado = 1;
 for (let i = numero; i > 1; i--) {
 resultado *= i;
 }

 return resultado;
};
console.log(`O resultado do fatorial de 4 é:${calcularFatorial(4)}`);
console.log(`O fatorial de 0 é: ${calcularFatorial(0)}`); 
console.log(`O fatorial de 8 é: ${calcularFatorial(8).toFixed(2)}`); 
        
