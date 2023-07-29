const inputs = document.querySelectorAll(".Input");
const boton = document.getElementById("btnRegistrarse");
const botonLimpiar = document.getElementById("btnLimpiar");

boton.addEventListener("click", function () {
    let invalidInput = false;

    inputs.forEach(function (input) {
        if (!input.validity.valid) {
            invalidInput = true;
        }
    });

    if (invalidInput) {
        boton.style.backgroundColor = "#660000";
        boton.style.color = "white";
    } else {
        boton.style.backgroundColor = "";
        alert("Se ha registrado correctamente!");
        document.getElementById("contact_form").reset();
    }
});

botonLimpiar.addEventListener("click", function () {
    boton.style.color = "";
    boton.style.backgroundColor = "";
});

