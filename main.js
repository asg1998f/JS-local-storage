function enviarFormulario (e){
    //e.preventDefault()
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
    localStorage.setItem('usuario' , JSON.stringify())
}
enviarFormulario()

//no me queda claro como usar las herramientas de inspeccionar en esto

function mostrarUsuario() {
    const usuario1 = JSON.parse(localStorage.getItem('usuario'));

    if (usuario1) {
        const informacionUsuario = `
            <p>Nombre: ${usuario1.nombre}</p>
            <p>Correo: ${usuario1.correo}</p>
            <p>Mensaje: ${usuario1.mensaje}</p>
        `;
        document.getElementById("resultado").innerHTML = informacionUsuario;
    }
}