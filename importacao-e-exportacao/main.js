
const { gets, print } = require('./funcoes-auxiliares');

/*
  Uma sala contem 5 alunos e para cada aluno foi sorteado um número de 1 - 100.
  Faça um programa que receba os 5 números sorteados para os alunos e mostre o maior número sorteado.

  Dados de entrada:
  5
  50
  10
  98
  23

  Saída:
  98
*/

let maiorValor = 0;
const quantidadeDeAlunos = gets();

for(let index = 0; index < quantidadeDeAlunos; index += 1) {
  const numerosSorteados = gets();
  if (numerosSorteados > maiorValor) {
    maiorValor = numerosSorteados;
  } 
}

print(maiorValor);