/*
2 - Crie um programa que seja capaz de percorrer uma lista de números e imprima cada número par encontrado
*/

const lista = [1, 2, 4, 5, 6, 10, 3, 7, 9, 3, 12, 24, 30, 24];

for (let index = 0; index < lista.length; index += 1) {
  if ((lista[index] % 2) == 0) {
    console.log(`${lista[index]} é par`);
  }
}