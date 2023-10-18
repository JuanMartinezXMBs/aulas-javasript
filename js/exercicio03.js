"use strict";

/* 
1)Crie um arquivo chamado exercicio03.html.

2)A partir dele, faça um script chamado exercicio03.js (não se esqueça de usar a pasta js).

3)Programe no arquivo JS recursos que permitam converter um valor em dólar (ex: 1000 dólares) para um valor em reais (ex: 5.030 reais).

Para esta atividade, você deverá criar uma função chamada converteMoeda e realizar dentro dela a operação de conversão.

Dica: para converter, basta pegar o valor e multiplicar pela cotação do dólar (hoje 17/10/2023, está em R$ 5,03)

Após a conversão, mostre o valor original em dólar e o valor convertido para reais. */

//Dados de entrada
let cotacaodia = 5.03;
let valordolar = 2500;

//função que realiza a conversão matematica ao receber PARAMETROS
function converteMoeda(valor, cotacao ) {
    return valor * cotacao
}

// Variavel que recebera o resultado processado pela função DEPOIS que a função terminar sua execução
let valorConvertido = converteMoeda(cotacaodia, valordolar)

//Saida após o processamento 
console.log(valordolar);
console.log(valorConvertido);