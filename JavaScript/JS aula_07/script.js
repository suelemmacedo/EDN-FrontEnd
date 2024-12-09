// Definindo os objetos pessoas
let pessoa1 = {
    nome: "Suelem",
    idade: 33,
    sexo: "feminino",
    peso: 84,
    engordar(peso) {
        this.peso += peso;
    },
    emagrecer(peso) {
        this.peso -= peso;
    }
};

let pessoa2 = {
    nome: "Iara",
    idade: 29,
    sexo: "feminino",
    peso: 65,
    engordar(peso) {
        this.peso += peso;
    },
    emagrecer(peso) {
        this.peso -= peso;
    }
};

let pessoa3 = {
    nome: "Pepe",
    idade: 3,
    sexo: "masculino",
    peso: 7,
    engordar(peso) {
        this.peso += peso;
    },
    emagrecer(peso) {
        this.peso -= peso;
    }
};

let pessoa4 = {
    nome: "Luna",
    idade: 3,
    sexo: "feminino",
    peso: 10,
    engordar(peso) {
        this.peso += peso;
    },
    emagrecer(peso) {
        this.peso -= peso;
    }
};

// Array de pessoas
let pessoas = [pessoa1, pessoa2, pessoa3, pessoa4];

// Função para renderizar os cards das pessoas
function renderPessoas() {
    const app = document.querySelector('#app');
    app.innerHTML = "";

    // Iterando sobre o array de pessoas
    pessoas.forEach((pessoa, index) => {
        const card = document.createElement('div');
        card.classList.add('card');

        // Adicionando informações e botões
        card.innerHTML = `
            <h2>${pessoa.nome}</h2>
            <p>Sexo: ${pessoa.sexo}</p>
            <p>Peso: <span id="peso-${index}">${pessoa.peso}</span> kg</p>
            <button class="emagrecer" onclick="emagrecer(${index})">Emagrecer</button>
            <button class="engordar" onclick="engordar(${index})">Engordar</button>
        `;

        app.appendChild(card);
    });
}

// Funções para emagrecer e engordar
function emagrecer(index) {
    const pessoa = pessoas[index];
    pessoa.emagrecer(1); // Reduz 1 kg
    atualizarPeso(index);
}

function engordar(index) {
    const pessoa = pessoas[index];
    pessoa.engordar(1); // Aumenta 1 kg
    atualizarPeso(index);
}

// Atualiza o peso exibido na página
function atualizarPeso(index) {
    const pesoSpan = document.querySelector(`#peso-${index}`);
    pesoSpan.textContent = pessoas[index].peso;
}

// Renderizar os cards na tela
renderPessoas();
