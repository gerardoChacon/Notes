// Y &&
// O ||
// Declaración de variables con diferentes nombres de lenguajes de programación.
let a = 'java';
let b = 'javascript';
let c = 'c#';

// Utiliza el operador lógico AND (&&) para comprobar si ambas condiciones son verdaderas.
// En este caso, ambas son verdaderas.
console.log(a === 'java' && b === 'javascript'); // true

// Utiliza el operador lógico OR (||) para comprobar si alguna de las condiciones es verdadera.
// En este caso, ninguna es verdadera.
console.log(a === 'javascript' || b === 'java'); // false

// Muestra los resultados de combinar valores booleanos con el operador AND (&&).
console.log(true && true, true && false, false && true, false && false); // true, false, false, false

// Muestra los resultados de combinar valores booleanos con el operador OR (||).
console.log(true || true, true || false, false || true, false || false); // true, true, true, false

// Comprueba si 'c' es igual a 'c#' o si 'b' es igual a 'go' y a 'javascript' al mismo tiempo.
// El resultado es verdadero porque la primera condición es verdadera.
console.log(c === 'c#' || (b === 'go' && b === 'javascript')); // true

// Utiliza el operador lógico AND (&&) para comprobar si ambas condiciones son falsas.
// En este caso, ambas son falsas.
console.log(c !== 'c#' &&  a !== 'javascript'); // false

// Utiliza el operador lógico NOT (!) para negar el resultado de la expresión.
// El resultado es falso porque la condición dentro de los paréntesis es verdadera.
console.log(!(c === 'c#' ||  a === 'javascript')); // false




