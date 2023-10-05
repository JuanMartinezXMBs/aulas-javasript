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

console.log("-------------------------------");

// Objeto
let carro = {
    marca: "fiat",
    modelo: "uno com escada",
    portas: 2, // number 
    cor: "branco", // string
    opcionais: ["Ar condicionado", "Vidros elétricos", "alarme"] //Arrays(lista)
};

console.log(carro);
console.log(carro.modelo);

console.log(
    `carros da ${carro.marca} tem a ${carro.cor}.`
);

console.log(`Este carro tem ${carro.opcionais[0]} e ${carro.opcionais[2]}`);

/* Execício 
!) Crie um novo objeto contendo informações de algo que você gosta (filme, livro, comida, jogo etc)

2) Mostre uma mensagem com pelo menos 2 propriedades do objeto que você criou*/

let pizza = {
    tipo: ["Salgada", "Doce"],
    sabor: "Especialidade da Casa",
    borda: ["normal", "Cheddar", "Requeijão", "Chocolate"],
    Quantidade: [1 , 2, 3, 4, 5],
    acompanhamento: "suco de laranja"
};

console.log(`Clinte pediu uma Pizza ${pizza.tipo[0]} sabor: ${pizza.sabor} com borda de ${pizza.borda[1]}, cliente pediu ${pizza.Quantidade[2]} Pizzas com acompanhamento de ${pizza.acompanhamento}.`);