// Declaración de un arreglo 'listaUno' con números.
let listaUno = [1, 2, 3, 5, 8];

// Primer bucle for...of: recorre cada elemento del arreglo 'listaUno'.
for (let elemento of listaUno) {
    // Imprime cada elemento del arreglo.
    console.log(elemento); // Imprimirá 1, 2, 3, 5, 8 en líneas separadas.
}

// Declaración de un segundo arreglo 'listaDos' con números.
let listaDos = [1, 2, 3, 5, 8];

// Segundo bucle for...of: recorre cada elemento del arreglo 'listaDos'.
for (let elemento of listaDos) {
    // Imprime cada elemento del arreglo sumándole 4.
    console.log(elemento + 4); // Imprimirá 5, 6, 7, 9, 12 en líneas separadas.
}
