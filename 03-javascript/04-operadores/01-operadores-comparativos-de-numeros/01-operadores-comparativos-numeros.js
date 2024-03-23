// Declaración de una variable numérica.
let diez = 10;

// Declaración de una variable de tipo string con el contenido '10'.
let diez2 = '10';

// Compara 'diez' y 'diez2' usando el operador de igualdad (==).
// Este operador convierte los operandos a un tipo común antes de hacer la comparación.
// En este caso, '10' (string) se convierte en 10 (número) y la comparación resulta verdadera.
console.log(diez == diez2); // true

// Compara 'diez' y 'diez2' usando el operador de igualdad estricta (===).
// Este operador compara tanto el valor como el tipo de los operandos.
// Aquí, a pesar de que los valores son iguales, sus tipos son diferentes (número y string),
// por lo que la comparación resulta falsa.
console.log(diez === diez2); // false

// Compara 'diez' y 'diez2' usando el operador de desigualdad (!=).
// Al igual que con '==', este operador convierte los operandos a un tipo común antes de hacer la comparación.
// En este caso, como los valores se convierten y son iguales, la comparación resulta falsa.
console.log(diez != diez2); // false

// Compara 'diez' y 'diez2' usando el operador de desigualdad estricta (!==).
// Este operador compara tanto el valor como el tipo de los operandos.
// Dado que sus tipos son diferentes, la comparación resulta verdadera.
console.log(diez !== diez2); // true
