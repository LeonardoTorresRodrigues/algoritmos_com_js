const livros = require('./listaLivros');

let maisBarato = 0;
let maisCaro = 0;

for (let i = 0; i < livros.length; i++) {
  if (livros[i].preco < livros[maisBarato].preco) {
    maisBarato = i;
  }
  if (livros[i].preco > livros[maisCaro].preco) {
    maisCaro = i;
  }
}

console.log(`O livro mais barato custa R$${livros[maisBarato].preco} e o título é ${livros[maisBarato].titulo}`);
console.log(`O livro mais caro custa R$${livros[maisCaro].preco} e o título é ${livros[maisCaro].titulo}`);