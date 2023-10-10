let nota01 = 7;
let nota02 = 7;

let media = (nota01 + nota02) / 2;
let mensagem;

if (media >= 7){
    mensagem = "Aprovado";
} else if(media >= 5){
    mensagem = "Recuperação";
}else {
    mensagem = "Reprovado";
}

console.log(`o aluno está: ${mensagem}`);