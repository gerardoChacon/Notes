// Declaración de una variable usando 'var'. Se puede reasignar y tiene un alcance de función.
var a = 10;

// Declaración de variables usando 'let'. Se pueden reasignar y tienen un alcance de bloque.
let b = 20, c = 30;

// Reasignando el valor de la variable 'a'.
a = 40;

// Declaración implícita de una variable global 'd'. No es una práctica recomendada.
d = 50;

// Declaración de una constante usando 'const'. No se puede reasignar y tiene un alcance de bloque.
const e = 60;

// Intentar reasignar una constante causaría un error. Por lo tanto, esta línea está comentada.
// e = 70;

// Imprime los valores de las variables en la consola.
console.log(a, b, c, d, e);
