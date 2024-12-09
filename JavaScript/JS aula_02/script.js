// Operadores Relacionais

let a = 2
let b = 3
let c = 5
let d = '5'

// console.log(a < b);
// console.log(a <= b);
// console.log(a > b);
// console.log(a >= b);
// console.log(c == d); // == não importa o tipo
// console.log(c === d);// === analisa de forma completa, incluindo o tipo (estritamente igual).
// console.log(c != d); // Diferente
// console.log(c !== d); // Estritamente diferente


//Operadores Lógicos

// && - "e"
// console.log(c == d && c <= b && c === d);

// || - "or"

// console.log(c == d && c <= b && c === d);

// NOT

// console.log(!c == d);

// Condições
// let num1 = Number(prompt("Digite sua primeira nota:"))
// let num2 = Number(prompt("Digite sua segunda nota:"))
// let num3 = Number(prompt("Digite sua terceira nota:"))
// let media = (num1 + num2 + num3) / 3
// alert(`A média das suas três notas é ${media.toFixed(2)}`)

// Se a média for >= 7 -> aprovado

// if (media >= 7) {
//     alert("Aprovado")
// } else if (media >= 5 && media < 7) {
//     alert("Recuperação")
// } else {
//     alert("Reprovado")
// }


// Desafio Aula
let idade = prompt("Digite sua idade:");

if (idade >= 6 && idade <= 12) {
    alert("Você está classificado(a) na categoria infantil");
} else if (idade >= 13 && idade <= 17) {
    alert("Você está classificado(a) na categoria juvenil");
} else if (idade >= 18) {
    alert("Você está classificado(a) na categoria adulto");
} else {
    alert("Você é muito jovem! Sua idade não é permitida para competir");
} 
