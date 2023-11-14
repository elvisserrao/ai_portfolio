// Arquivo script.js

function enviarMensagem(event) {
    // Evitar o comportamento padrão do formulário
    event.preventDefault();

    // Obter os valores dos campos do formulário
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var mensagem = document.getElementById("mensagem").value;

    // Validar se os campos estão preenchidos
    if (nome == "" || email == "" || mensagem == "") {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    // Simular o envio da mensagem para um servidor
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "https://example.com/enviar-mensagem");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify({
        nome: nome,
        email: email,
        mensagem: mensagem
    }));

    // Exibir uma mensagem de sucesso ou erro na tela
    var resposta = document.getElementById("resposta");
    xhr.onload = function() {
        if (xhr.status == 200) {
            resposta.innerHTML = "Mensagem enviada com sucesso!";
            resposta.style.color = "green";
        } else {
            resposta.innerHTML = "Ocorreu um erro ao enviar a mensagem.";
            resposta.style.color = "red";
        }
    };
}
