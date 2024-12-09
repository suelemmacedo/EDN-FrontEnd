$('#enviar').on('click', function () {
    // Coletar os valores dos campos
    let nome = $('#nome').val(); // Adicione as aspas ao seletor
    let cargo = $('#cargo').val();

    // Montar o objeto de dados
    let dados = {
        name: nome,
        job: cargo
    };

    // Enviar a requisição AJAX
    $.ajax({
        url: "https://reqres.in/api/users",
        type: "POST",
        contentType: "application/json",
        data: JSON.stringify(dados),
        success: function (resposta) {
            // Mostrar a resposta no elemento com ID 'resposta'
            $('#resposta').text(JSON.stringify(resposta, null, 2));
        },
        error: function (erro) {
            // Adicionar mensagem de erro na lista
            $('#usuarios-lista').append(`<li>Erro: ${erro.statusText || 'Erro desconhecido'}</li>`);
        }
    });
});
