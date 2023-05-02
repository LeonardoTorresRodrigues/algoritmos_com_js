function maiorValor(arrProdutos, posicaoInicial) {
  let maisCaro = posicaoInicial;

  for (let i = posicaoInicial; i < arrProdutos.length; i++) {
    if (arrProdutos[i].preco > arrProdutos[maisCaro].preco) {
      maisCaro = i;
    }
  }
  return maisCaro;
}

module.exports = maiorValor;