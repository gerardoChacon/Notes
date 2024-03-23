
// Declaración e inicialización de la variable 'i' con 0.
let i = 0;

// Bucle while que se ejecuta mientras 'i' sea menor que 100.
while (i < 100) {
    // Imprime el valor actual de 'i'.
    console.log(i);
    // Incrementa 'i' en 1.
    i++;
}

// Declaración de un arreglo 'lista' con varios números.
let lista = [3, 6, 4, 8, 2, 9, 4, 7, 6, 1, 0, 33, 8, 9, 3, 546, 7, 87];

// Declaración e inicialización de la variable 'numero' con 0.
let numero = 0;

// Bucle while que se ejecuta mientras 'numero' sea menor que 30.
while (numero < 30) {
    // Asigna a 'numero' el primer elemento de 'lista' y lo elimina de 'lista'.
    numero = lista.shift();
    // Imprime el valor actual de 'numero'.
    console.log(numero);
}

// Imprime el estado actual de 'lista' después de las operaciones del bucle.
console.log(lista);

