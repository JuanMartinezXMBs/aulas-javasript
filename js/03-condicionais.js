// console.log("Helloooooooooooooooo");

/* Estruturas de Controle Condicional */

/* Comandos que permitem analisar uma ou mais condições, e a partir do resultado desta análise (verdadeiro ou falso), o programa pode executar ações diferentes. */

/* comando mais comuns: if (se), else (senão), else if (senão se) */

let usuario = prompt("Qual seu nome?");
let idade = prompt("quantos anos você tem?");

let mensagem; // indefinida/undefined

// Verificar a idade e determinar se é menor ou maior de idade
// estruturas de controles não usam ";"

if ( idade >= 18 ){
    mensagem = "maior";
} else {
    mensagem = "menor";
}

// Apresentando os resultados após o condiconal
console.log(`${usuario} é ${mensagem} de idade!`);
alert(`${usuario} é ${mensagem} de idade!`);








