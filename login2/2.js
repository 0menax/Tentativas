document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("loginForm");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); 
        const usuario = document.getElementById("usuario").value;
        const senha = document.getElementById("senha").value;

        console.log("Usuário:", usuario);
        console.log("Senha:", senha);

        // Limpa os campos do formulário após o envio
        form.reset();
    });
});

