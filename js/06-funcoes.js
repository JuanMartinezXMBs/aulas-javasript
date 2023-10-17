"use strict";

/* Sobre Funções:
Funções são blocos de codigos que podem ser reaproveitados em praticamente qualquer lugar de uma aplicação

Usar Funções também é benefico para o ponto de viista de organização do código

O JS possui centanas de funções prontas:
log(), alert(), toFixed(2), prompt etc...
*/

//Forma 1: função anonima
const exemplo1 = function(){
    console.log("Função anônima");
};

//Forma 2: Função nomeada/declarada
function exemplo2(){
    console.log("Função nomeada/declarada");
};

//Forma 3: arrow Function
const exemplo3 = () => {
    console.log("Arrow Function");
};

//CHAMADA DE FUNÇÃO
exemplo1();
exemplo2();
exemplo3();

/* Exemplos diversos */

//Função com parâmetro e retorno de dados/resultados
function somar(valor1, valor2){
    return valor1 + valor2;
}

/* Chamamos a função diversas vezes e passando valores diferentes como parâmetros. */
console.log( somar(10,20));
console.log( somar(10,20));
console.log( somar(10,20));

/* Formatação de valores em reais */

let preco = 5500;
let desconto = preco * 0.10; // 
let precoFinal = preco - desconto;

console.log(`Preço: ${preco.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL"
})}`);

console.log(`desconto: ${desconto.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL"
})}`);

console.log(`Preço final: ${precoFinal.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL"
})}`);
