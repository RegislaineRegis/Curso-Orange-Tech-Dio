/*
Faça um programa para calcular o valor de uma viagem.

    Você terá 5 variáveis, sendo elas:
    1 - Preço do etanol;
    2 - Preço da gasolina;
    3 - O tipo de combustível que está no seu carro;
    4 - Gasto médio de combustível do carro por KM;
    5 - Distância em KM da viagem;

Imprima no console o valor que será gasto para realizar esta viagem.
*/

const precoEtanol = 5.02;
const precoGasolina = 6.03;
const kmPorLitro = 14;
const distanciaEmKm = 100;
const tipoCombustivel = 'Etanol';

if (tipoCombustivel === 'Etanol') {
    const valorGasto = (distanciaEmKm/ kmPorLitro) * precoEtanol;
    console.log("O valor gasto para realizar a viagem é de:", valorGasto.toFixed(2));
} else {
    const valorGasto = (distanciaEmKm/ kmPorLitro) * precoGasolina;
    console.log("O valor gasto para realizar a viagem é de:", valorGasto.toFixed(2));
}
