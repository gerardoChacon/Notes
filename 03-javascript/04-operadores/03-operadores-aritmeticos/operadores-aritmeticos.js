// Operaciones aritméticas básicas
console.log(3 + 4);  // Suma: imprime 7
console.log(3 - 4);  // Resta: imprime -1
console.log(3 * 4);  // Multiplicación: imprime 12
console.log(12 / 4); // División: imprime 3
console.log(12 % 7); // Módulo (resto de la división): imprime 5

// Uso del operador módulo (%) para verificar si un número es par o impar
console.log(12 % 2); // Par: el resultado es 0 cuando el número es par
console.log(11 % 2); // Impar: el resultado es 1 cuando el número es impar

// Declaración y modificación de una variable numérica 'a'
let a = 10;
a = a + 1;  // Código no recomendable porque es muy largo, mejor usar 'a++;' para agregar uno o 'a += #;' para restar cualquier otro número.
a += 5;     // Incrementa 'a' en 5, ahora 'a' es 16
a++;        // Incremento postfijo: incrementa 'a' en 1, ahora 'a' es 17
console.log(a); // Imprime el valor de 'a', que es 17
// Operaciones de decremento en la variable 'a'
a = a - 1;  // Código no recomendable porque es muy largo, mejor usar 'a--;' para restar uno o 'a -= #;' para restar cualquier otro número.
a -= 5;     // Decrementa 'a' en 5, ahora 'a' es 11
a--;        // Decremento postfijo: decrementa 'a' en 1, ahora 'a' es 10
console.log(++a); // Incremento prefijo: incrementa 'a' primero y luego lo imprime, 'a' es 11
console.log(a);   // Imprime el valor actual de 'a', que es 11



