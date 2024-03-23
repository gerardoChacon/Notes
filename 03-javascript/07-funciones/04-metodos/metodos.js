// Declaración de un objeto 'mago' que representa a un personaje de un juego, por ejemplo.
let mago = {
    // Propiedad 'nombre' del objeto 'mago'.
    nombre: 'Mago Obscuro',

    // Método 'ataque' dentro del objeto 'mago'.
    // Este método es una función que, cuando se llama, imprime el valor -2500.
    ataque: function() {
        console.log(-2500);
    }
};

// Llamada al método 'ataque' del objeto 'mago'.
// Esto ejecutará el código dentro de la función 'ataque', imprimiendo -2500.
mago.ataque(); // Imprime -2500
