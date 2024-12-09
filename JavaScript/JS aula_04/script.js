
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
