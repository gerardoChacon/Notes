// Llamada a la función 'sumar' con dos argumentos.
console.log(sumar(1, 2)); // Imprime el resultado de sumar 1 y 2. En este momento, 'sumar' se refiere a la última definición de la función 'sumar' que hemos visto en el fragmento anterior.

// Declaración de función: se define 'sumar' como una función con nombre.
function sumar(a, b) {
    return a + b;
}
// Las funciones declaradas(function sumar()), como 'sumar', son elevadas ('hoisted') en su ámbito completo.
// Esto significa que pueden ser llamadas antes de su declaración en el código.

// La siguiente línea está comentada y, si se descomenta, lanzaría un error porque 'sumar2' aún no está definida.
// console.log(sumar2(1, 2));
// Por el contrario, las expresiones de función, como 'sumar2', solo pueden ser utilizadas después de su declaración.

// Expresión de función: se define 'sumar2' como una función anónima(let sumar2 = funtion()) asignada a una variable.
let sumar2 = function(a, b) {
    return a + b;
};

// Llamada a la función 'sumar2' con dos argumentos.
console.log(sumar2(1, 2)); // Imprime el resultado de sumar 1 y 2.





