document.getElementById("eye").addEventListener("click", function() {
    var passwordInput = document.getElementById("password");

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        this.src = "../img/open.png"; // Cambiar la imagen a 'open.png' cuando la contraseña es visible
    } else {
        passwordInput.type = "password";
        this.src = "../img/close.png"; // Cambiar la imagen a 'close.png' cuando la contraseña está oculta
    }
});


document.addEventListener('DOMContentLoaded', function() {
    var form = document.querySelector('form');
    var errorMessage = document.getElementById('error-message');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Evita que se envíe el formulario por defecto

        // Obtener los valores de correo electrónico y contraseña
        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;


        // Ejemplo de verificación simple
        if (email !== 'usuario@example.com' || password !== 'contraseña') {
            errorMessage.innerText = 'Correo electrónico o contraseña incorrectos';
            errorMessage.style.display = 'block'; // Mostrar el mensaje de error
        } else {
            window.location.href = '../index.html';
        }
    });
});