// Escreva uma função chamada fizzBuzz que receba um número n e imprima números de 1 a n seguindo estas regras:

// Se o número for divisível por 3, imprima "Fizz".

// Se o número for divisível por 5, imprima "Buzz".

// Se o número for divisível por 3 e 5, imprima "FizzBuzz".

// Caso contrário, imprima o próprio número.

function fizzBuzz(n) {
    for (let i = 1; i <= n; i++) {
        switch (true) {
            case i % 3 === 0 && i % 5 === 0:
                console.log("FizzBuzz");
                break;
            case i % 3 === 0:
                console.log("Fizz");
                break;
            case i % 5 === 0:
                console.log("Buzz");
                break;
            default:
                console.log(i);
                break;
        }
    }
}

// Exemplo de chamada
fizzBuzz(15);


//Calculadora básica
//Crie uma função chamada calculadora que receba três argumentos: dois números e uma operação matemática (+, -, *, /)
// A função deve realizar a operação e retornar o resultado. Se a operação for inválida, retorne uma mensagem de erro

function calculadora(num1, num2, operacao) {
    switch (operacao) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1 * num2;
        case "/":
            return num2 !== 0 ? num1 / num2 : "Erro: Divisão por zero";
        default:
            return "Erro: Operação inválida";
    }
}

//Arrow Function

const calculadora = (num1, num2, operacao) => {
    switch (operacao) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1 * num2;
        case "/":
            return num2 !== 0 ? num1 / num2 : "Erro: Divisão por zero";
        default:
            return "Erro: Operação inválida";
    }
};


console.log(calculadora(10, 5, "+")); // 15
console.log(calculadora(10, 5, "-")); // 5
console.log(calculadora(10, 5, "*")); // 50
console.log(calculadora(10, 5, "/")); // 2
console.log(calculadora(10, 0, "/")); // Erro: Divisão por zero
console.log(calculadora(10, 5, "^")); // Erro: Operação inválida