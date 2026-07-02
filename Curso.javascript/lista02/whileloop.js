let saldo = 0;
const meta = 1000;
const depositoMensal = 150;
let meses = 0;

while (saldo < meta) {
 saldo += depositoMensal;
 meses++;
 console.log(`Mês ${meses}: Saldo de R$ ${saldo.toFixed(2)}`);
}
console.log(`\nMeta atingida em ${meses} meses!`);