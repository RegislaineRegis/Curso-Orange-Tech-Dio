/*
  2 - Crie uma classe para representar pessoas.
  Para cada pessoa teremos os atributos nome, peso e altura.
  As pessoas devem ter a capacidade de dizer o valor do seu IMC(IMC = peso/ (altura * altura));
  Instancie uma pessoa chamada José que tenha 70kg de peso e 1,75 de altura e peca ao José para dizer o valor 
  do seu IMC;
*/

class Pessoa {
  nome;
  peso;
  altura;

  constructor(nome, peso, altura){
    this.nome = nome;
    this.peso = peso;
    this.altura = altura;
  }

  calculoImc() {
    return this.peso / (this.altura * this.altura);
  }
}

const jose = new Pessoa('José', 70, 1.75);

console.log(jose.calculoImc());