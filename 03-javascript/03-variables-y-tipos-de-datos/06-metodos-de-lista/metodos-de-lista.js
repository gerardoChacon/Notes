// Declaración de un arreglo 'abecedario' con letras en desorden.
let abecedario = ['c', 'b', 'a', 'z', 'y', 'm'];

// Imprime la cantidad de elementos en el arreglo 'abecedario'.
console.log(abecedario.length);

// Imprime el penúltimo elemento del arreglo 'abecedario'.
console.log(abecedario[abecedario.length - 2]);

// Ordena el arreglo 'abecedario' alfabéticamente y lo imprime.
console.log(abecedario.sort());

// Verifica si 'q' está incluido en 'abecedario' e imprime el resultado (true o false).
console.log(abecedario.includes('q'));

// Agrega 'x' al final del arreglo 'abecedario'.
abecedario.push('x');

// Imprime el estado actual del arreglo 'abecedario'.
console.log(abecedario);

// Elimina el último elemento del arreglo 'abecedario'.
abecedario.pop();

// Imprime el estado actual del arreglo 'abecedario'.
console.log(abecedario);

// Agrega 'x' al inicio del arreglo 'abecedario'.
abecedario.unshift('x');

// Imprime el estado actual del arreglo 'abecedario'.
console.log(abecedario);

// Elimina el primer elemento del arreglo 'abecedario'.
abecedario.shift();

// Imprime el estado actual del arreglo 'abecedario'.
console.log(abecedario);

// Elimina 2 elementos del arreglo 'abecedario' empezando desde el índice 1.
abecedario.splice(1, 2);

// Imprime el estado actual del arreglo 'abecedario'.
console.log(abecedario);
