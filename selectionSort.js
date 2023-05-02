const livros = require('./listaLivros');
const menorValor = require('./menorValor');

for (let i = 0; i < livros.length - 1; i++) {
  let menor = menorValor(livros, i);

  let livroAtual = livros[i];
  console.log('Posição atual', i);
  console.log('Livro atual', livros[i]);
  let livroMenorPreco = livros[menor];
  console.log('Livro menor preço', livros[menor]);

  livros[i] = livroMenorPreco;
  livros[menor] = livroAtual;
}

console.log(livros);