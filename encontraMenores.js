const novaListaLivros = require('./novaListaLivros');

function encontraMenores(pivo, array) {
  let menores = 0;

  array.forEach((_, i) => {
    let produtoAtual = array[i]
    if (produtoAtual.preco < pivo.preco) {
      menores++;
    }
  })

  trocaLugar(array, array.indexOf(pivo), menores);

  return array;
}

function trocaLugar(array, de, para) {
  const elem1 = array[de];
  const elem2 = array[para];

  array[para] = elem1;
  array[de] = elem2;
}

console.log(encontraMenores(novaListaLivros[2], novaListaLivros));