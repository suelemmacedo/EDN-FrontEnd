// Seleciona a tabela no DOM
const tabela = document.querySelector('table');

// Seleciona todas as linhas da tabela
const linhas = tabela.querySelectorAll('tr');


// Itera pelas linhas usando for
for (let i = 1; i < linhas.length; i++) {
    // Seleciona a célula que contém a idade
    const idadeCelula = linhas[i].querySelector('.idade'); // Certifique-se de que as células de idade têm a classe 'idade'

    if (idadeCelula) {
        const idade = parseInt(idadeCelula.textContent);

        // Verifica se é maior de idade
        if (idade <= 18) {
            linhas[i].style.backgroundColor = 'yellow'; // Altera a cor de fundo
        }
    }
}
