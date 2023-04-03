/*
  1 - Crie uma classe para representar carros.
  Os carros possuem uma marca, uma cor e um gasto médio de combustível por quilômetro rodado.
  Crie um método que dado a quantidade de quilômetros e o preço do combustível nos dê o valor
  gasto em reais para realizar este percurso.
*/

class Carro {
  marca;
  cor;
  gastoMedioPorKm;

  // quando é algo(campo) obrigatório ( tenho que sempre informar ), usamos o construtor

  constructor(marca, cor, gastoMedioPorKm) {
    this.marca = marca;
    this.cor = cor;
    this.gastoMedioPorKm = gastoMedioPorKm;
  }

  calcularGastoDeViagem(distanciaKm, preco) {
    return (distanciaKm *  this.gastoMedioPorKm) * preco;
  }

}

const palio = new Carro('Fiat', 'preto', 1/12);

console.log(palio.calcularGastoDeViagem(70, 3.5));