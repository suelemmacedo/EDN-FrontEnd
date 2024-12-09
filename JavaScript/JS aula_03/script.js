// // Revisão Aulas Anteriores

// // Operadores Matemáticos


// function soma(a, b) {
//     return a + b;
// }

// console.log(soma(5, 6));

// function diminuicao(a, b) {
//     return a - b;
// }

// console.log(diminuicao(15, 6));

// function mult(a, b) {
//     return a * b;
// }

// console.log(mult(5, 6));

// function div(a, b) {
//     return a / b;
// }

// console.log(div(10, 5));

// function mod(a, b) {
//     return a % b;
// }

// console.log(mod(10, 5));


// // Operadores Relacionais


// let a = 5;
// let b = 10;
// let c = 15;
// let d = "15";

// console.log(a < b);
// console.log(a > b);
// console.log(a <= b);
// console.log(c == d);
// console.log(c === d);


// // Operadores Lógicos


// console.log(a < b || c == d);
// console.log(a < b && c == d);
// console.log(!(c == d));

// // O operador "!" converte o valor para um booleano e depois o inverte
// // -->  Valores considerados truthy(não falsos) tornam-se false.
// // --> Valores falsy (falsos) tornam-se true


// if (a > 15) {
//     console.log("Número maior que 15");
// } else {
//     console.log("Número menor que 15");
// }

// let num = 37;
// console.log(typeof (num));

// if (num % 2 !== 0) {
//     console.log("Número ímpar");
// } else {
//     console.log("Número par");


// }


// Aula do dia - Looping
// O looping tem como objetivo repetir uma sequência de ações ou operações de forma contínua
// ou até que uma condição específica seja atingida.


// for (


//     let i = 0; onde começa;
//     i <= 10; quantas vezes precisa ser feito ou onde termina;
//     i = i + 1 ou i++; e o que muda;
// ) {
//   console.log('Olá')(programa que rodaria 10 vezes)
// }

// for (let i = 0; i <= 10; i++) {
//     console.log(`${i} * 2 =`,  i * 2);

// }


//While = Enquanto


// let i = 5;
// while (i < 10) {
//     console.log(`${i}`);
//     i += 2 //Faça alguma coisa
// }


// let i = 5;
// while (i < 10) {
//     i += 2;
//     if (i < 10) {
//         console.log(`${i}`);
//     }
// }


// for (inicialização; condição; incremento/decremento) {
//     // Código a ser repetido
// }

// const frutas = ['maçã', 'banana', 'laranja'];
// for (let i = 0; i < frutas.length; i++) {
//     console.log(frutas[i]);
// }

// Use o for quando:

// Você sabe o início e o fim do loop.
// É necessário trabalhar com índices.
// A lógica envolve passos regulares (ex.: incrementos/decrementos previsíveis).

// Quando usar while?
// O loop while é melhor quando:

// O número de iterações não é conhecido antecipadamente.
// Você deseja continuar repetindo enquanto uma condição for verdadeira, sem uma estrutura de controle rígida.

// while (condição) {
//     // Código a ser repetido
// }

// let saldo = 100;
// while (saldo > 0) {
//     saldo -= 10; // Decrementa o saldo
//     console.log(`Saldo atual: ${saldo}`);
// }

// let entrada = '';
// while (entrada !== 'sair') {
//     entrada = prompt('Digite algo (ou "sair" para terminar):');
//     console.log(`Você digitou: ${entrada}`);
// }

// let i = parseInt(prompt('Digite um número!')); // Converte o valor para número

// while (i !== 10) { // Continua enquanto i for diferente de 10
//     i = parseInt(prompt('Olá, digite outro número!')); // Solicita outro número e converte
//     alert(`Você digitou: ${i}`);
// }

// alert('Você digitou 10. O loop foi encerrado!');



//Do...while

// let number = 10;
// do {
//     console.log('Olá!');
//     number += 2
// } while (number < 20);



//Tabuada

// let num = Number(prompt('Digite um número!')); // Converte a entrada para um número
// let mensagem = `Tabuada do ${num}\n`;

// for (let i = 1; i <= 10; i++) { // Itera de 1 a 10
//     mensagem += (`${num} * ${i} = ${num * i}\n`); // Exibe o resultado da multiplicação
// }
// alert(mensagem);


// ---- Desafio

let numeroSorteado = Math.floor(Math.random() * 100) + 1;  // Gera o número aleatório entre 1 e 100
let tentativas = 10;  // Número de tentativas restantes

// Começo do jogo
while (tentativas > 0) {
    // Solicita ao jogador um palpite
    let palpite = prompt(`Digite um número entre 1 e 100. Você tem ${tentativas} tentativas restantes.`);

    // Converte o palpite para número
    palpite = Number(palpite);

    // Verifica se o palpite é um número válido
    if (isNaN(palpite) || palpite < 1 || palpite > 100) {
        alert("Por favor, insira um número válido entre 1 e 100.");
        continue;  // Vai para a próxima iteração do loop
    }

    // Decrementa o número de tentativas
    tentativas--;

    // Verifica se o jogador acertou o número
    if (palpite === numeroSorteado) {
        alert("Acertou!");
        break;  // Encerra o jogo se o jogador acertar
    } else if (palpite > numeroSorteado) {
        alert("O número sorteado é menor.");
    } else {
        alert("O número sorteado é maior.");
    }

    // Caso o jogador tenha usado todas as tentativas, termina o jogo
    if (tentativas === 0) {
        alert(`Fim de jogo! O número correto era ${numeroSorteado}.`);
    }
}
