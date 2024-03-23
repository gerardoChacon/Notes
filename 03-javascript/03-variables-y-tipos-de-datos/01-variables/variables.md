# ¿Qué es una variable?

Es un símbolo, palabra, letra, etc. que permite identificar a un elemento.


# Alcance de Función (Function Scope):

- La declaración de variables con var se rige por el alcance de función. Esto significa que si var se declara dentro de una función, solo es accesible dentro de esa función.

- Sin embargo, si var se declara fuera de una función, como dentro de un bloque if o un bucle (y fuera de cualquier función), la variable es global y accesible desde cualquier parte del programa

- Un "bloque" se refiere a cualquier conjunto de código encerrado en llaves {}, como en un bucle for, un bucle while, un if, o incluso bloques arbitrarios.

```js
if (true) {
    var variableGlobal = "Hola";
}
console.log(variableGlobal); // "Hola" - es accesible globalmente

```
# Alcance de Bloque (Block Scope):

- let y const tienen un alcance de bloque. Esto significa que solo son accesibles dentro del bloque ({}) donde se declaran.

- Si se declaran dentro de un bloque como if, un bucle o un bloque arbitrario, no serán accesibles fuera de ese bloque específico.

```js
if (true) {
    let variableDeBloque = "Hola";
    const otraVariableDeBloque = "Adiós";
}
console.log(variableDeBloque); // Error - variableDeBloque no está definida fuera del bloque
console.log(otraVariableDeBloque); // Error - otraVariableDeBloque no está definida fuera del bloque
```