function enviarFormulario (e){
    e.preventDefault()
    const nombre = document.getElementById('nombre')
    const correo = document.getElementById('correo')
    const mensaje = document.getElementById('mensaje')
    console.log(enviarFormulario)
    const datosFormulario={
        nombre: nombre.value,
        correo: correo.value,
        mensaje: mensaje.value
    }
    console.log(datosFormulario)
    localStorage.setItem('usuario' , JSON.stringify('usuario'))
}
enviarFormulario()

//no me queda claro como usar las herramientas de inspeccionar en esto

function mostrarUsuario() {
    const usuario1 = JSON.parse(localStorage.getItem('usuario'));

    if (usuario1) {
        const informacionUsuario = 
            /*usuario1:nombre.value,
            usuario1:correo.value,
            usuario1:mensaje.value;*/ //no funciona
        document.getElementById("resultado").innerHTML = informacionUsuario;
    }
}