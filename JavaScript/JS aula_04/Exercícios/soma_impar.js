let inicio = Number(prompt('Digite o valor inicial do intervalo'));
let fim = Number(prompt('Digite o valor final do intervalo'));

let soma = 0;

for (let i = inicio; i <= fim; i++) {
    if (i % 2 !== 0) {  // Verifica se o número é ímpar
        soma += i;
    }
}

alert(`A soma dos números ímpares de ${inicio} até ${fim} é: ${soma}`);
