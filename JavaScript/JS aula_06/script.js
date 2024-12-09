/*
Você é professor(a) e possui uma tabela com as notas de cada aluno em diferentes 
provas. Cada linha representa um aluno, e cada coluna é uma prova. Seu objetivo é 
calcular a média de notas de cada aluno para ver quem está acima da média.
*/

let notas = [
    [7.5, 8.0, 4.7],
    [9.0, 7.3, 8.5],   // matriz (array bidimensional)
    [10, 8.7, 3.2],
    [8.0, 6.0, 5.0]
];

let medias = [];
let somaNotas = 0;

// Calcular as médias de cada aluno
for (let i = 0; i < notas.length; i++) { // Percorre cada aluno
    let soma = 0;
    for (let j = 0; j < notas[i].length; j++) { // Percorre as notas de cada aluno
        soma += notas[i][j];
    }
    let media = soma / notas[i].length;
    medias.push(media);

    somaNotas += media;
}

// Calcular a média geral
let mediaGeral = somaNotas / medias.length;

// Saber quem atingiu ou superou a média geral
let alunosAcimaDaMedia = [];
for (let i = 0; i < medias.length; i++) {
    if (medias[i] >= mediaGeral) {
        alunosAcimaDaMedia.push(`Aluno ${i + 1}`);
    }
}

// Exibir os resultados
console.log("Médias dos alunos:", medias.map(media => media.toFixed(2)));
console.log("Média geral:", mediaGeral.toFixed(2));
console.log("Alunos que atingiram ou superaram a média geral:", alunosAcimaDaMedia);
