//Haz tú validación en javascript acá
import { tiposDeError,mensajes } from "./customErrors.js";

const camposDeFormulario = document.querySelectorAll ("[required]");


camposDeFormulario.forEach((campo) => {
    campo.addEventListener("blur", () => verificarCampo(campo))
    campo.addEventListener("invalid", evento => evento.preventDefault)
});

function verificarCampo(campo){
    let mensaje = ""
    tiposDeError.forEach(error => {
        if (campo.validity[error]) {
            mensaje = mensajes[campo.name][error];
            // console.log(mensaje);
        }
    })

    const mensajeError = campo.parentNode.querySelector(".mensaje-error")
    const validarInputCheck = campo.checkValidity()
    if (!validarInputCheck) {
        mensajeError.textContent = mensaje
    } else {
        mensajeError.textContent = ""
    }

}