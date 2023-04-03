/*
    3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta
    e a escolha da condição de pagamento.
    Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo
    adequado.

    Código Condição de pagamento:
    - À vista Débito, recebe 10% de desconto;
    - À vista no Dinheiro ou PIX, recebe 15% de desconto;
    - Em duas vezes, preço normal de etiqueta sem juros;
    - Acima de duas vezes, preço normal de etiqueta mais juros de 10%;

*/
function aplicarDesconto(valor, desconto) {
    return valor - (valor * (desconto/100));
}

function aplicarJuros(valor, juros) {
    return valor + (valor * (juros/100));
}

const precoEtiqueta = 100.00;
const condicaoPagamento = 'Acima de duas vezes';

if (condicaoPagamento === 'A Vista Debito') {
    const valorASerPago = aplicarDesconto(precoEtiqueta, 10)
    console.log('Valor a ser pago com 10% de desconto é de:', valorASerPago);
}
else if (condicaoPagamento === 'A vista no Dinheiro' || condicaoPagamento === 'PIX') {
    const valorASerPago = aplicarDesconto(precoEtiqueta, 15)
    console.log('Valor a ser pago com 15% de desconto é de:', valorASerPago);
}
else if (condicaoPagamento === 'Acima de duas vezes') {
    const valorASerPago = aplicarJuros(precoEtiqueta, 10)
    console.log('Valor a ser pago acima de duas vezes com acrescimo de 10% é de:', valorASerPago);
}
else {
    console.log("Valor a ser pago é de:", precoEtiqueta);
}