// console.log('Hello, World!');


// Variáveis

// let nome = "Suelem"
// console.log(nome);
// nome = "Pepe";
// console.log(nome);

// const dog = "Luna"
// console.log(dog);
// dog = "Pepe"
// console.log(dog);


// const firstName = "Suelem"
// const lastName = "Pinto"
// let idade = 33

// console.log(firstName + " " + lastName + ", " + idade);

// ----------------------------

// Tipos de Dados

// let name = "Suelem" string
// let idad = 33 number
// let vascaina = true boolean
// let altura = 1.65 number

// console.log(typeof (altura));

// ----------------------------

// alert('Olá')
// confirm('Confirme a visualização')
// prompt('Digite seu nome:')

// let n1 = Number(
//     prompt('Escreva um número')
// )

// let n2 = Number(
//     prompt('Escreva outro número')
// )

// let resultado = n1 + n2
// alert(`A soma entre ${n1} e ${n2} é ${resultado}`) // template literals

// resultado = n1 - n2
// alert(`A subtração entre ${n1} e ${n2} é ${resultado}`) // template literals

// resultado = n1 * n2
// alert(`A multiplicação entre ${n1} e ${n2} é ${resultado}`) // template literals

// resultado = n1 / n2
// alert(`A divisão entre ${n1} e ${n2} é ${resultado}`) // template literals

// resultado = n1 % n2
// alert(`O resto da divisão entre ${n1} e ${n2} é ${resultado}`) // template literals

function programaInterativo() {
    // Cumprimentar o usuário
    alert("Seja bem-vindo!");

    // Coletar informações do usuário
    const nome = prompt("Digite seu nome");
    const idade = prompt("Digite sua idade");
    const cidade = prompt("Cidade onde mora");

    alert(`Olá, ${nome}! Você tem ${idade} anos e mora em ${cidade}. Vamos fazer alguns cálculos!`);

    // Solicitar dois números
    const num1 = parseFloat(prompt("Digite um valor"));
    const num2 = parseFloat(prompt("Digite outro valor"));

    // Validar as entradas
    if (isNaN(num1) || isNaN(num2)) {
        alert("Por favor, insira números válidos.");
        return; // Encerra a execução da função
    }

    // Realizar cálculos
    const soma = num1 + num2;
    const subtracao = num1 - num2;
    const multiplicacao = num1 * num2;
    const divisao = num2 !== 0 ? (num1 / num2).toFixed(2) : "Indefinido (divisão por zero)";
    const modulo = num2 !== 0 ? num1 % num2 : "Indefinido (módulo por zero)";

    // Exibir resultados
    alert(`Aqui estão os resultados das operações:
    Soma: ${soma}
    Subtração: ${subtracao}
    Multiplicação: ${multiplicacao}
    Divisão: ${divisao}
    Módulo: ${modulo}`);

    // Mensagem final
    alert("Agradecemos por sua visita!");
}

// Chamar a função principal
programaInterativo();



// Chamar a função principal
programaInterativo();