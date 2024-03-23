// Declaración de una lista vacía.
let listaVacia = [];

// Declaración de una lista de números.
let listaDeNumeros = [1, 2, 3, 4, 5];
console.log(listaDeNumeros); // Imprime la lista completa de números.

// Declaración de una lista de textos (strings).
const listaDeTextos = ['Lunes', 'Martes', 'Miércoles'];
console.log(listaDeTextos); // Imprime la lista completa de textos.

// Modificación de un elemento en la lista 'listaDeTextos'.
// A pesar de que 'listaDeTextos' se declaró con 'const', los elementos dentro de la lista pueden ser modificados.
listaDeTextos[1] = 'jueves';
console.log(listaDeTextos); // Imprime la lista modificada, donde 'Martes' ha sido reemplazado por 'jueves'.

// Declaración de una lista con elementos de tipos variados (número, string, booleano, objeto y otra lista).
let listaRandom = [1, 'Lunes', true, {}, [true, false]];

// Imprime los elementos individuales de 'listaRandom'.
console.log(listaRandom[0]); // 1
console.log(listaRandom[1]); // 'Lunes'
console.log(listaRandom[2]); // true
console.log(listaRandom[4]); // [true, false]

// Imprime el primer elemento de la lista anidada dentro de 'listaRandom'.
console.log(listaRandom[4][0]); // true
