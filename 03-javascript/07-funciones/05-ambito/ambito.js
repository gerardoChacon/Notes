// Declaración de una variable global 'x' con 'var'.
// Las variables declaradas con 'var' tienen un alcance de función o global si se declaran fuera de una función.
var x = 4;

// Declaración de una variable global 'y' con 'let'.
// Las variables declaradas con 'let' tienen un alcance de bloque (dentro de llaves {}).
let y = 300;

// Definición de la función 'ejemplo'.
function ejemplo() {
    // Declaración de una nueva variable 'y' con 'let' dentro del alcance de la función 'ejemplo'.
    // Esta 'y' es diferente y no está relacionada con la 'y' declarada globalmente.
    let y = 10;

    // Accede a la variable global 'x' y a la variable local 'y' (la 'y' dentro de 'ejemplo').
    console.log(x + y); // Imprime 14 (4 + 10)

    // Definición de una función anidada 'dentro' dentro de 'ejemplo'.
    function dentro() {
        // Declaración de una variable 'z' con 'var' dentro del alcance de la función 'dentro'.
        var z = 3;

        // Accede a la variable global 'x', a la variable 'y' del alcance de la función 'ejemplo',
        // y a la variable 'z' del alcance de la función 'dentro'.
        console.log(x + y + z); // Imprime 17 (4 + 10 + 3)
    }
    // Llamada a la función 'dentro'.
dentro();
}

// Llamada a la función 'ejemplo'.
ejemplo();

// Accede a la variable global 'y'.
// La variable 'y' dentro de 'ejemplo' no afecta a esta 'y'.
console.log(y); // Imprime 300



