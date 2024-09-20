// Agregar feedback visual en los campos del formulario
const inputs = document.querySelectorAll("input, textarea");

inputs.forEach(input => {
    input.addEventListener("input", function () {
        if (input.value.trim() !== "") {
            input.classList.add("valid");
        } else {
            input.classList.remove("valid");
        }
    });
});

// Scroll suave al hacer clic en los enlaces del menú
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const nombre = document.getElementById("nombre");
    const email = document.getElementById("email");
    const mensaje = document.getElementById("mensaje");

    form.addEventListener("submit", function (e) {
        // Evitar envío del formulario real
        e.preventDefault(); 

        // Limpiar mensajes de error anteriores
        const errorMessages = document.querySelectorAll('.error-message');
        errorMessages.forEach(msg => msg.remove());

        // Validaciones
        let valid = true;

        // Validar nombre
        if (nombre.value.trim() === "") {
            showError(nombre, "Por favor, ingresa tu nombre.");
            valid = false;
        }

        // Validar email
        if (!validateEmail(email.value)) {
            showError(email, "Por favor, ingresa un correo electrónico válido.");
            valid = false;
        }

        // Validar mensaje
        if (mensaje.value.trim() === "") {
            showError(mensaje, "El mensaje no puede estar vacío.");
            valid = false;
        }

        if (valid) {
            showSuccessMessage(); // Mostrar mensaje de éxito si todo es válido
            form.reset(); // Limpiar el formulario
        }
    });

    // Función para mostrar el mensaje de error
    function showError(input, message) {
        const errorElement = document.createElement('div');
        errorElement.classList.add('error-message');
        errorElement.innerText = message;
        input.parentElement.appendChild(errorElement);
    }

    // Función para validar formato de correo electrónico
    function validateEmail(email) {
        const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return re.test(email);
    }

    // Función para mostrar el mensaje de éxito
    function showSuccessMessage() {
        const successMessage = document.createElement('div');
        successMessage.classList.add('success-message');
        successMessage.innerText = "¡Gracias por contactarme! Tu mensaje ha sido enviado con éxito.";
        form.appendChild(successMessage);
        setTimeout(() => successMessage.remove(), 5000); // El mensaje desaparece después de 5 segundos
    }
});
// Mostrar el botón cuando el usuario baja 200px
window.onscroll = function() {
    let boton = document.getElementById('volverInicio');
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      boton.style.display = 'block';
    } else {
      boton.style.display = 'none';
    }
  };