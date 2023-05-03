const livros = require('./listaLivros');
const menorValor = require('./menorValor');
const troca = require('./troca');

livros.forEach((_, i) => {
  let menor = menorValor(livros, i);
  
  troca(livros, i, menor);
  
})

console.log(livros);