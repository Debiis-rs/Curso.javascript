const valorProduto = "150";
const valorDesconto = 20;
const valorProdutoNumerico = Number(valorProduto);
const valorFinal = valorProdutoNumerico - valorDesconto;

console.log(`O valor final do produto com desconto é: R$ ${valorFinal}`);