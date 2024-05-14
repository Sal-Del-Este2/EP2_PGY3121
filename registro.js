var nombre=document.getElementById("nombre");
var correo=document.getElementById("correo");
var error=document.getElementById("error");
error.style.color="red";

function enviarFormulario(){
    console.log("formulario enviado");
    var mensajeError =[];
    if(nombre.value === null || nombre.value === ""){
        mensajeError.push("ingresa tu nombre");
    }
    if(correo.value === null || correo.value === ""){
        mensajeError.push("ingresa tu Correo");
    }
    if (!document.getElementById("exampleCheck1").checked) {
        mensajeError.push("Debes aceptar los términos y condiciones");
    }
    error.innerHTML = mensajeError.join(", ");
    return false;
}