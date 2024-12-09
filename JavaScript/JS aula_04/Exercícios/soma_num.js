let inicio = Number(prompt('Digite o valor inicial do intervalo'));
let fim = Number(prompt('Digite o valor final do intervalo'));

let soma = 0;

for (let i = inicio; i <= fim; i++) {
    soma += i;
}

alert(`A soma dos números de ${inicio} até ${fim} é: ${soma}`);


// Prompt sempre retorna string