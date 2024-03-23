// Declaración de una variable 'admin' y asignación de un nombre.
let admin = 'Gerardo';
// Asignación del valor de 'admin' a la variable 'usuario'.
let usuario = admin;
// Condición que verifica si el valor de 'usuario' es igual a 'Pedro'.
if (usuario === 'Pedro') {
    // Si la condición es verdadera, imprime 'Autorizado!'.
    console.log('Autorizado!');
} 
// Si la primera condición no se cumple, verifica si 'usuario' es igual a 'Gerardo'.
else if (usuario === 'Gerardo') {
    // Si esta condición es verdadera, imprime 'Autorizado con privilegios!'.
    console.log('Autorizado con privilegios!');
} 
// Si ninguna de las condiciones anteriores se cumple, ejecuta el siguiente bloque.
else {
    // Imprime 'NO Autorizado!' si todas las condiciones anteriores son falsas.
    console.log('NO Autorizado!');
}
