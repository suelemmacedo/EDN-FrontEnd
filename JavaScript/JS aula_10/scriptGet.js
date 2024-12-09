$("#buscar").on('click', function () {
    // Esconde o botão após o clique
    $(this).hide();

    $.ajax({
        url: "https://reqres.in/api/users",
        type: "GET",
        success: function (resposta) {
            $('#usuarios-lista').empty();

            resposta.data.forEach(usuario => {
                $('#usuarios-lista').append(`
                    <li>
                        <img src="${usuario.avatar}" alt="Avatar de ${usuario.first_name}">
                        <div>
                            <strong>Nome:</strong> ${usuario.first_name} ${usuario.last_name} <br>
                            <span><strong>Email:</strong> ${usuario.email}</span>
                        </div>
                    </li>
                `);
            });
        },
        error: function (erro) {
            $('#usuarios-lista').append(`<li>Erro: ${erro.statusText || 'Erro desconhecido'}</li>`);
        }
    });
});


