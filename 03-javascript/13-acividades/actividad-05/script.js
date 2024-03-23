const envioFormulario = (nombre, email, mensaje) => {
    if(nombre && email && mensaje){
    console.log('¡Formulario enviado con éxito!')
    }
    else{
        console.log('Por favor completa todos los campos.')
    }
}   

envioFormulario('Gerardo', 'elchac97@gmail.com', '¡Hola mundo!')
envioFormulario( 'elchac97@gmail.com')

