let num = Number(prompt('Digite um número!')); // Converte a entrada para um número
let mensagem = `Tabuada do ${num}\n`;

for (let i = 1; i <= 10; i++) { // Itera de 1 a 10
    mensagem += (`${num} * ${i} = ${num * i}\n`); // Exibe o resultado da multiplicação
}
alert(mensagem);