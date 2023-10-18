"use strict";

/* Sobre Funções:
Funções são blocos de codigos que podem ser reaproveitados em praticamente qualquer lugar de uma aplicação

Usar Funções também é benefico para o ponto de viista de organização do código

O JS possui centanas de funções prontas:
log(), alert(), toFixed(2), prompt etc...
*/

//Forma 1: função anonima
const exemplo1 = function () {
    console.log("Função anônima");
};

//Forma 2: Função nomeada/declarada
function exemplo2() {
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
function somar(valor1, valor2) {
    return valor1 + valor2;
}

/* Chamamos a função diversas vezes e passando valores diferentes como parâmetros. */
console.log(somar(10, 20));
console.log(somar(10, 20));
console.log(somar(10, 20));

/* Formatação de valores em reais */

let preco = 5500;
let desconto = preco * 0.10; // 
let precoFinal = preco - desconto;

//REFATORANDO
function formatarPreco(valor) {
    let opcoes = {
        style: "currency",
        currency: "BRL"
    };

    return valor.toLocaleString("pt-br", opcoes);

}

console.log(`Preço: ${formatarPreco(preco)}`);

console.log(`desconto:  ${formatarPreco(desconto)}`);

console.log(`Preço final:  ${formatarPreco(precoFinal)}`);

console.log("--------------------------------------------");

/* Sobre arrow Function Sintaxe moderna para funções no JS, bastante usada por bibliotecas, frameworks (React, Angular, Vue e etc).

A sintaxe geral é: 

const algumNome = () => {};

no entanto essa sintaxe pode ser mais concisa (menor)
*/

//Versão 1
//function dobra(valor) {
//    return valor * 2;
//}

//-------------------------------------------------------------------------------------------

//Versão 2 (arrow function)
// const dobra = (valor) => {
//     return valor * 2;
// };

//Versão 3 (arrow function com retorno implicito)
const dobra = valor => valor * 2;

//chamada
console.log( dobra(80) );
console.log( dobra(30) );



















