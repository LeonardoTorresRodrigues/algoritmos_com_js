const novaListaLivros = require('./novaListaLivros');

function encontraMenores(pivo, array) {
  let menores = 0;

  array.forEach((_, i) => {
    let produtoAtual = array[i]
    if (produtoAtual.preco < pivo.preco) {
      menores++;
    }
  });

  trocaLugar(array, array.indexOf(pivo), menores);

  return array;
}

function trocaLugar(array, de, para) {
  const elem1 = array[de];
  const elem2 = array[para];

  array[para] = elem1;
  array[de] = elem2;
}

function divideNoPivo(array) {
  let pivo = array[Math.floor(array.length / 2)];
  encontraMenores(pivo, array);
  let valoresMenores = 0;

  array.forEach((_, i) => {
    let atual = array[i];

    if (atual.preco <= pivo.preco && atual !== pivo) {
      trocaLugar(array, i, valoresMenores);
      valoresMenores++;
    }
  });

  return array;
}

console.log(divideNoPivo(novaListaLivros));
//console.log(encontraMenores(novaListaLivros[2], novaListaLivros));