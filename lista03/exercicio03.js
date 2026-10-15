const codigoProduto = 4;
switch(codigoProduto){
    case 1:
        codigoProduto = 'Hambúrguer';
    break;
    case 2: 
       codigoProduto ='Batata Frita';
    break;
    case 3:
         codigoProduto = 'Refrigerante';
    break;
    case 4:
        codigoProduto ='Milk-shake';
    break;
    default:
       codigoProduto = 'Produto não encontrado.'
        break;

}
console.log(`O produto é : ${codigoProduto}`);