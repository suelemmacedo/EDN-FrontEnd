// Intercepta o envio do formulário
$("#consultar").on("click", function (event) {
    event.preventDefault(); // Evita o recarregamento da página
    const apiKey = "18c01d03f1ea8e7a2911eb0661c180f8";

    // Obtém o valor do campo de entrada (cidade)
    const cidade = $("#cidade").val().trim();

    // Verifica se a cidade foi preenchida
    if (cidade === "") {
        alert("Por favor, insira o nome de uma cidade.");
        return;
    }

    // URL da API com a cidade e API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${apiKey}&units=metric&lang=pt_br`;

    // Faz a requisição AJAX
    $.ajax({
        url: apiUrl,
        method: "GET",
        dataType: "json",
        success: function (data) {
            // Processa os dados recebidos da API
            const { name, main, weather, wind } = data;

            // Monta o HTML com os resultados
            const resultadoHtml = `
                    <h3>Clima em ${name}</h3>
                    <p><strong>Temperatura:</strong> ${main.temp} °C</p>
                    <p><strong>Condições:</strong> ${weather.description}</p>
                    <p><strong>Umidade:</strong> ${main.humidity}%</p>
                    <p><strong>Velocidade do Vento:</strong> ${wind.speed} m/s</p>
                `;

            // Insere os resultados na página
            $("#resultado").html(resultadoHtml);
        },
        error: function (erro) {
            // Exibe detalhes do erro no console para facilitar o diagnóstico
            console.error(`Erro ${erro.status}: ${erro.responseText}`);

            // Exibe o erro retornado pela API
            if (erro.status === 404) {
                const errorMessage = erro.responseJSON.message || "Cidade não encontrada.";
                $("#resultado").html(`<p>Erro: ${errorMessage}. Tente novamente.</p>`);
            } else {
                $("#resultado").html("<p>Ocorreu um erro ao buscar os dados. Tente novamente mais tarde.</p>");
            }
        }
    });
});
