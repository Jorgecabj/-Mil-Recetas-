/* JS que aplica al login para verificar email y contraseña */
/* Derechos reservados al Grupo 4 : Matias Abel Cortés, Héctor Salvador Guzmán, Bárbara Marisol Garro, Ceballos Jorge */


document.getElementById("eye").addEventListener("click", function() {
    var passwordInput = document.getElementById("password");

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        this.src = "../img/open.png"; // pone la imagen open para ver la contraseña
    } else {
        passwordInput.type = "password";
        this.src = "../img/close.png"; // pone la imagen close para censurar la contraseña
    }
});


document.addEventListener('DOMContentLoaded', function() {
    var form = document.querySelector('form');
    var errorMessage = document.getElementById('error-message');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        // para obtener el EMAIL y Contraseña
        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;


        // Verifica el email y contraseña
        if(email =='' || password == '')
            {
                errorMessage.innerText = 'Campos de email o contraseña vacio';
                errorMessage.style.display = 'block'; // Muestra el mensaje de error
            }
            else
            {
                if (email !== 'usuario@example.com' || password !== 'contraseña') 
                {
                    errorMessage.innerText = 'Correo electrónico o contraseña incorrectos';
                    errorMessage.style.display = 'block'; // Muestra el mensaje de error
                } 
                else 
                {
                window.location.href = '../index.html'; // Email y contraseña correcta, te manda al inicio de la page
                }
            }
    });
});