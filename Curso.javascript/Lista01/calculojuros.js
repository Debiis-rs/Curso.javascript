const capitalInicial = 1000;
const taxaDeJuros = 0.05; // 5% ao mês
const tempoDeAplicacao = 12; // em meses
const montante = capitalInicial * (1 + taxaDeJuros * tempoDeAplicacao);

console.log(`Após ${tempoDeAplicacao} meses, o montante será de R$ ${montante.toFixed(2)}`);