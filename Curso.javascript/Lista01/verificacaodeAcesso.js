const usuarioLogado = true;
const temPermissaoAdmin = false;
const podeAcessarAreaAdmin = usuarioLogado && temPermissaoAdmin;

console.log(`O usuário pode acessar a área de admin?
${podeAcessarAreaAdmin}`);