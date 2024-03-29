/* Faça um programa para calcular o valor gasto de uma viagem.

    Você terá três variáveis, sendo elas:
    1 - Preço combustível;
    2 - Gasto médio de combustível do carro por KM;
    3 - Distância em KM da viagem;

Imprima no console o valor que será gasto para realizar esta viagem
*/

const precoCombustivel = 6.03;
const kmPorLitro = 14;
const distanciaEmKm = 100;

const valorGasto = (distanciaEmKm/kmPorLitro) * precoCombustivel;

console.log("Você terá uma gasto nesta viagem de:", valorGasto.toFixed(2));