// Declaración de dos variables numéricas.
let five = 5;
let six = 6;

// Compara si 'five' es mayor o igual a 'six'. Resulta falso porque 5 es menor que 6.
console.log(five >= six); // false

// Compara si 'five' es menor o igual a 'six'. Resulta verdadero porque 5 es menor que 6.
console.log(five <= six); // true

// Declaración de dos variables de tipo string.
let a = 'a';
let b = 'b';

// Compara si 'a' es mayor que 'b' usando el orden lexicográfico. Resulta falso porque 'a' viene antes de 'b'.
console.log(a > b); // false

// Compara si 'a' es menor que 'b' usando el orden lexicográfico. Resulta verdadero porque 'a' viene antes de 'b'.
console.log(a < b); // true

// Declaración de una variable de tipo string.
let A = 'A';

// Compara si 'A' es menor que 'a'. Resulta verdadero debido a que en ASCII, las letras mayúsculas tienen un valor menor que las minúsculas.
console.log(A < a); // true

// Compara si 'A' es mayor que 'a'. Resulta falso por la misma razón anterior.
console.log(A > a); // false

// Compara si 'z' es mayor que 'A'. Resulta verdadero porque las letras minúsculas tienen un valor mayor que las mayúsculas en ASCII.
console.log('z' > 'A'); // true

// Compara las versiones en mayúsculas de 'z' y 'A'.
// 'z'.toUpperCase() se convierte en 'Z' y 'A'.toUpperCase() se mantiene como 'A'.
// La comparación es verdadera porque 'Z' tiene un valor mayor que 'A' en ASCII.
console.log('z'.toUpperCase() > 'A'.toUpperCase()); // true

let x = 20;
let y = x;
y = 30





