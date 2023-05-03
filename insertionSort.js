const livros = require('./listaLivros');
const troca = require('./troca');

function insertionSort(lista) {
  livros.forEach((_, i) => {
    let analise = i;

    while (analise > 0 && lista[analise].preco < lista[analise - 1].preco) {
      troca(lista, analise, analise - 1);
      analise--
    }
  })
  console.log(lista);
}

insertionSort(livros);