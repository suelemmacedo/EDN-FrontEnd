class Pessoa {
    constructor(nome, idade, sexo, peso) {
        this.nome = nome;
        this.idade = idade;
        this.sexo = sexo;
        this.peso = peso;
    }

    alterarPeso(quantidade) {
        this.peso += quantidade; // Altera o peso da pessoa (pode ser positivo ou negativo)
    }
}

const pessoa1 = new Pessoa("Suelem", 33, "feminino", 84);
const pessoa2 = new Pessoa("Iara", 29, "feminino", 65);
const pessoa3 = new Pessoa("Pepe", 3, "masculino", 7);
const pessoa4 = new Pessoa("Luna", 3, "feminino", 10);

let pessoas = [pessoa1, pessoa2, pessoa3, pessoa4];

// Função para criar o HTML de cada card
function criarCard(pessoa, index) {
    const cardTemplate = `
        <div class="card">
            <h2>${pessoa.nome}</h2>
            <p>Sexo: ${pessoa.sexo}</p>
            <p>Peso: <span id="peso-${index}">${pessoa.peso}</span> kg</p>
            <button class="emagrecer" onclick="emagrecer(${index})">Emagrecer</button>
            <button class="engordar" onclick="engordar(${index})">Engordar</button>
        </div>
    `;
    return cardTemplate;
}

// Função para engordar a pessoa (aumentar peso)
function engordar(index) {
    pessoas[index].alterarPeso(1); // Aumenta o peso em 1 kg
    atualizarPeso(index); // Atualiza o peso no card
}

// Função para emagrecer a pessoa (diminuir peso)
function emagrecer(index) {
    pessoas[index].alterarPeso(-1); // Diminui o peso em 1 kg
    atualizarPeso(index); // Atualiza o peso no card
}

// Função para atualizar o peso no card HTML
function atualizarPeso(index) {
    document.querySelector(`#peso-${index}`).textContent = pessoas[index].peso;
}

// Função para renderizar todos os cards das pessoas
function renderPessoas() {
    const app = document.querySelector('#app');
    app.innerHTML = ''; // Limpa o conteúdo antes de adicionar novos cartões

    pessoas.forEach((pessoa, index) => {
        const card = criarCard(pessoa, index);  // Cria o card para cada pessoa
        app.innerHTML += card;  // Adiciona o card no HTML
    });
}


// Chama a função renderPessoas para exibir os cards ao carregar a página
renderPessoas();
