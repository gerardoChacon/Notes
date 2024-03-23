// Primero, se imprime 'arriba' de manera sincrónica.
console.log('arriba');

// Se programa una función para ejecutarse después de un retraso de 1000 milisegundos.
let timeout = setTimeout(() => {
    console.log('en medio');
}, 1000);

// Mientras la función anterior está esperando para ejecutarse después del retraso,
// el flujo del programa continúa y se imprime 'abajo' de manera sincrónica.
console.log('abajo');

// La línea siguiente, aunque está comentada, mostraría cómo cancelar
// la ejecución programada con setTimeout, usando clearTimeout.
// Si se descomentara, 'en medio' no se imprimiría.
// clearTimeout(timeout);

