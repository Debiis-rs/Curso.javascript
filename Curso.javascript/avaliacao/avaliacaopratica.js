//Cálculo de Desconto Progressivo
/*let valorCompra = 350;
let desconto10 = (valorCompra *10)/100;
let desconto20 = (valorCompra * 20)/100; 
let valorDesconto10 = valorCompra - desconto10;
let valorDesconto20 = valorCompra - desconto20;

if(valorCompra >= 1000){
    console.log(`O desconto é de 20 %.`); 
    console.log(`O valor original: ${valorCompra}`)
    console.log(`O valor após o desconto: ${valorDesconto20} `)  
}else if(valorCompra >= 500 ){
    console.log(`O desconto será de 10%.`);
    console.log(`O valor após o desconto: ${valorDesconto10}`);
}else if(valorCompra < 1000 ){
    console.log('Sua compra não haverá desconto.');
}
*/

//Sistema de Pontos de Fidelidade
/*
const categoria = 15;
let nivel;
switch (categoria){
    case 15:
        nivel ="Prata";
        break;
     case 10:
         nivel ="Bronze";
        break; 
     case 20:
         nivel ="Ouro";
        break;
    default:
         nivel =  "Categoria inválida!";
           break;          
} console.log(`O nível de fidelidade do cliente é ${nivel}`);
 */

//Sequência de Fibonacci
/*
let a = 0;
let b = 1 ;

for(let i = 1; i<= 10; i++){
    console.log(a);
    let  proximo = a + b;
       a = b;
       b =  proximo ;
}  */

//Simulador de Bateria
/*
 let nivelBateria= 100;
 let hora = 1;

 while(nivelBateria > 0){
    nivelBateria -=10
    console.log(`Hora:${hora} nivel da bateria: ${nivelBateria}%`);
    hora++
 } console.log('Bateria esgotada.');
  */

 //Função para Calcular Dias de Vida
 /*
 const calcularDiasDevida = (idadeEmAnos) => {
    let diasVividos = idadeEmAnos * 365;

 return diasVividos;
};
console.log(`Uma pessoa de 20 anos viveu aproximadamente ${calcularDiasDevida(20)} dias.`); 
console.log(`Uma pessoa de 30 anos viveu aproximadamente ${calcularDiasDevida(30)} dias.`); 
console.log(`Uma pessoa de 18 anos viveu aproximadamente ${calcularDiasDevida(18)} dias.`);
 */

//Verificador de Aprovação Escolar
/*
const nota1 = 9.4;
const nota2 = 6.7;
const nota3 = 8.9;
const nota4 = 3.4;
let frequencia = 97;

const media =( nota1+nota2+nota3+nota4)/4;
if(media >= 6 && frequencia >= 75){
    console.log('o aluno está aprovado!');
}else{
    console.log('o aluno está reprovado!');
}*/

//Menor Número da Lista
/*
const listaDeNumeros = [15, 2, 88, 43, 5, 99, 12];

let menorNumero = listaDeNumeros[0]; 
for (const numero of listaDeNumeros) {
 if (numero < menorNumero) {
 menorNumero = numero;
 }
}
console.log(`O menor número na lista é: ${menorNumero}`);
*/



