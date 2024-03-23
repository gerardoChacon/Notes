// Creación de una promesa que se resuelve después de 5 segundos.
// Las promesas permiten manejar operaciones asíncronas de forma más eficiente.
let promesa = new Promise((reciboDatos, noReciboDatos) => {
    // Simula una operación asíncrona, como una solicitud de red.
    setTimeout(()=>{
        reciboDatos('datos'); // Resuelve la promesa con un valor.
    }, 5000);
});

// Encadenamiento de then para procesar el resultado de la promesa de manera secuencial.
promesa
    .then(texto => texto.toUpperCase()) // Primero, convierte el texto a mayúsculas.
    .then(texto => texto + '!!!') // Luego, agrega exclamaciones.
    .then(texto => console.log(texto)) // Muestra el resultado final.
    .catch(problema => console.log('Error: ' + problema)) // Maneja errores.
    .finally(() => console.log('Todo Listo!')); // Se ejecuta al final, haya o no errores.

// Ejemplo de ejecución no bloqueante, este mensaje se muestra inmediatamente.
console.log('Quiero ejecutar lo más pronto posible');

/*
Explicación de Asincronía:
- JavaScript es un lenguaje de programación de un solo hilo, lo que significa que puede ejecutar una sola tarea a la vez.
- La asincronía permite a JavaScript ejecutar tareas de larga duración (como solicitudes a una API, leer archivos, etc.) sin bloquear el hilo principal.
- Mientras espera, JavaScript puede continuar ejecutando otras tareas, mejorando la experiencia del usuario y la eficiencia del programa.
- Las promesas y async/await son herramientas que facilitan la gestión de estas operaciones asíncronas, permitiendo escribir código más limpio y legible.
*/

