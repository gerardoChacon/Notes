// Declaración de la variable 'user' y asignación del valor 'Pedro'.
let user = 'Pedro';

// Estructura switch que evalúa el valor de la variable 'user'.
switch (user) {
    case 'Pedro':
        // Ejecuta este bloque si 'user' es igual a 'Pedro'.
        console.log('ADMINISTRADOR');
        // Falta un 'break' aquí, por lo que la ejecución continuará con el siguiente caso.

    case 'Gerardo':
        // Este bloque se ejecuta si 'user' es igual a 'Gerardo'.
        console.log('Autorizado');
        // También falta un 'break' aquí, por lo que la ejecución continuará con el caso 'default'.

    default:
        // Este bloque se ejecuta si ninguno de los casos anteriores coincide.
        console.log('No Autorizado');
}

//OJO: Switch compara con ===.

// Declaración de la variable 'usuario' y asignación del valor 'Gerardo'.
let usuario = 'Gerardo';

// Estructura switch que evalúa el valor de la variable 'usuario'.
switch (usuario) {
    case 'Pedro':
        // Ejecuta este bloque si 'usuario' es igual a 'Pedro'.
        console.log('ADMINISTRADOR');
        break; // 'break' detiene la ejecución y sale del bloque switch.

    case 'Gerardo':
        // Este bloque se ejecuta si 'usuario' es igual a 'Gerardo'.
        console.log('Autorizado');
        break; // 'break' detiene la ejecución y sale del bloque switch.

    default:
        // Este bloque se ejecuta si ninguno de los casos anteriores coincide.
        console.log('No Autorizado');
}