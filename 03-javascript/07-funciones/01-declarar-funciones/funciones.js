// Declaración de una variable 'inicial' con valor 3.
let inicial = 3;

// Primera definición de la función 'sumar', que incrementa la variable 'inicial' en 4 y la devuelve.
function sumar() {
    inicial += 4;
    return inicial;
}

// Llamadas a la función 'sumar'. En cada llamada, 'inicial' se incrementa en 4.
console.log(sumar()); // Imprime 7 (3 + 4)
console.log(sumar()); // Imprime 11 (7 + 4)
console.log(sumar()); // Imprime 15 (11 + 4)

// Segunda definición de la función 'sumar', esta vez con dos parámetros con valores por defecto.
function sumar(a = 0, b = 0) {
    return a + b;
}

// Llamadas a la nueva definición de 'sumar'.
console.log(sumar(0, 3)); // Imprime 3 (0 + 3)
console.log(sumar(4, 5)); // Imprime 9 (4 + 5)
console.log(sumar(100, 2)); // Imprime 102 (100 + 2)
console.log(sumar()); // Imprime 0 (0 + 0)

// Tercera definición de la función 'sumar', que calcula la suma de un número variable de argumentos.
function sumar() {
    let suma = 0;
    for (let numero of arguments) {
        suma += numero;
        
    }
    return suma;
    
}
// Llamada a la tercera definición de 'sumar' con varios argumentos.
console.log(sumar(1, 2, 3, 4, 5, 6, 7, 8)); // Imprime 36 (suma de todos los argumentos)
