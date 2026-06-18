const codigoProduto = 4;
let nomedoProduto;
switch(codigoProduto){
    case 1:
        nomedoProduto = 'Hambúrguer';
    break;
    case 2: 
       nomedoProduto = 'Batata Frita';
    break;
    case 3:
         nomedoProduto = 'Refrigerante';
    break;
    case 4:
        nomedoProduto = 'Milkshake';
    break;
    default:
       nomedoProduto = 'Produto não encontrado.'
        break;

}
console.log(`O produto é : ${nomedoProduto}`);