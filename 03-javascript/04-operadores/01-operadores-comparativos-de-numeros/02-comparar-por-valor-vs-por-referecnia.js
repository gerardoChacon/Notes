// Declaración de una variable numérica 'x'.
let x = 20;
// Asignación del valor de 'x' a una nueva variable 'y'.
let y = x;
// Modificación del valor de 'y'.
y = 30;

// Imprime el valor actual de 'y', que es 30.
console.log(y); // 30

// Declaración de un objeto 'uno'.
let uno = { valor: 10 };
// Asignación de la referencia del objeto 'uno' a la variable 'dos'.
let dos = uno;
// Modificación de la propiedad 'valor' del objeto referenciado por 'uno'.
uno.valor = 20;

// Ambas variables 'uno' y 'dos' apuntan al mismo objeto, por lo que el cambio se refleja en ambas.
console.log(uno); // { valor: 20 }
console.log(dos); // { valor: 20 }

// Declaración de dos objetos diferentes 'a' y 'b'.
let a = { valor: 10 };
let b = { valor: 10 };

// Comparación de objetos 'a' y 'b'.
// Como son objetos diferentes, la comparación es falsa, incluso si tienen propiedades idénticas.
console.log(a == b); // false
console.log(a === b); // false

// Declaración de un objeto 'c' y asignación de su referencia a 'd'.
let c = { valor: 10 };
let d = c;

// Comparación de objetos 'c' y 'd'.
// Ambos apuntan a la misma referencia, por lo que la comparación es verdadera.
console.log(c == d);  // true
console.log(c === d); // true
