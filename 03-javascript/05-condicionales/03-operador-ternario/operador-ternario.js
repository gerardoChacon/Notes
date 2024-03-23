// Declaración de una variable 'usuario' y asignación del valor 'Xavier'.
let usuario = 'Xavier';

// Uso del operador ternario para asignar un valor a la variable 'autorizado' basado en la condición.
// Primero, verifica si 'usuario' es igual a 'Pedro'.
let autorizado = usuario === 'Pedro' 
    ? 'Autorizado' // Si 'usuario' es 'Pedro', asigna 'Autorizado'.
    : usuario === 'Emilia' // Si no es 'Pedro', verifica si 'usuario' es 'Emilia'.
    ? 'Autorizado con privilegios' // Si 'usuario' es 'Emilia', asigna 'Autorizado con privilegios'.
    : 'NO AUTORIZADO'; // Si no es ninguno de los anteriores, asigna 'NO AUTORIZADO'.

// Imprime el valor de la variable 'autorizado'.
console.log(autorizado); // 'NO AUTORIZADO' porque 'usuario' es 'Xavier', que no coincide con 'Pedro' ni 'Emilia'.

console.log(`${usuario = 'Pedro' ? '¡Hola Pedro!' : '¡Hola Xavier '}`)   
     
