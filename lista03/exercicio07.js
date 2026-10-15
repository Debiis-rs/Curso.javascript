const verificarParidade = (numero) => {
    if (numero % 2 === 0) {
        return 'par';
    } else {
        return 'ímpar';
    }
};
console.log(`O número 7 é ${verificarParidade(7)}`);
console.log(`O número 345 é ${verificarParidade(345)}`);
console.log(`O número 3 é ${verificarParidade(3)}`);
console.log(`O número 15 é ${verificarParidade(15)}`);