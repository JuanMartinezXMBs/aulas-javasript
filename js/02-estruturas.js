/* Estruturas de Dados 

Arrays (Vetores/Matrizes):
Lista de dados indexados, sequenciais acessiveis por um indice numérico.

Objetos: 
Lista de dados não indexados e formados por propriedados e valores.*/

// Arrays (contagem sempre inicia em 0)
let cursos = ["Node.js", "React", "SQL", "UX/UI Desing"];

console.log(cursos); // SAIDA DIRETA/ESTRUTURADA NO CONSOLE
console.log(cursos[2]); // SQL

/* Exercicio 
1) crie uma constante chama "dados" e coloque nela os dados de uma pessoa: nome, sobrenome, idade, telefone e cidade


2) Mostre no console uma mensagem contendo somento o nome e a idade da poessoa. Exemplo: "Fulano tem 25 anos"*/

const dados = ["Ximbas", "Martinez", 23, "11-4002-8922", "São Paulo"];

console.log(`${dados[0]} tem ${dados[2]} anos.`);
