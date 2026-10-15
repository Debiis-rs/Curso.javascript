const diaDaSemana = 4;
switch (diaDaSemana) {
 case 1:
   Dia = "Domingo";
 break;
 case 2:
   Dia = "Segunda-feira";
 break;
 case 3:
   Dia = "Terça-feira";
 break;
 case 4:
   Dia = "Quarta-feira";
 break;
 case 5:
   Dia = "Quinta-feira";
 break;
 case 6:
   Dia = "Sexta-feira";
 break;
 case 7:
   Dia = "Sábado";
 break;
 default:
   Dia = "Dia inválido";
}
console.log(`O dia correspondente é: ${Dia}`);