// Definición de la función 'llamar' que acepta dos funciones como argumentos: 'enExito' y 'enError'.
function llamar(enExito, enError) {
     // Variable 'exito' que determina el flujo de ejecución. En este caso, se establece en 'false'.
     let exito = false;
     // ... (puede haber más lógica aquí para determinar si la operación fue exitosa o no)
 
     // Condición que verifica el valor de 'exito'.
     if (exito) {
         // Si 'exito' es verdadero, llama a la función 'enExito'.
         enExito();
     } else {
         // Si 'exito' es falso, llama a la función 'enError'.
         enError();
     }
 }
 
 // Llamada a la función 'llamar' con dos funciones flecha (arrow functions) como argumentos.
 let resultado = llamar(
     // Primer argumento: una función flecha que se ejecutará en caso de éxito.
     () => ('Exito'),
 
     // Segundo argumento: una función flecha que se ejecutará en caso de error.
     () => ('Error') 
 );
 
console.log(resultado)

let array = [1,2,3,40];

array.forEach(e => console.log(e))


let bob = (a) => a + 100;
let bobo = a => a + 100;