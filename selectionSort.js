const livros = require('./listaLivros');
const menorValor = require('./menorValor');

livros.forEach((_, i) => {
  let menor = menorValor(livros, i);

  let livroAtual = livros[i];
  console.log('Posição atual', i);
  console.log('Livro atual', livros[i]);
  let livroMenorPreco = livros[menor];
  console.log('Livro menor preço', livros[menor]);

  livros[i] = livroMenorPreco;
  livros[menor] = livroAtual;
})

console.log(livros);