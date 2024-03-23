// Ejercicio 1: Imprime números del 1 al 5 usando un bucle for
for (let i = 1; i <= 5; i++) {
    console.log(i); // Imprime el valor actual de i en cada iteración
}

// Ejercicio 2: Recorre e imprime los elementos del array 'colors'
let colors = ['rojo', 'verde', 'azul', 'amarillo'];
for (let color of colors) {
    console.log(color); // Imprime cada color del array
}

// Ejercicio 3: Define un objeto 'person' con propiedades de una persona y recorre e imprime las propiedades y valores del objeto 'person'
let person = {
    nombre: 'María',
    edad: 27,
    profesion: 'Diseñadora'
};

for (let key in person) {
    console.log(key + ': ' + person[key]); // Concatena la clave y el valor correspondiente del objeto 'person' y lo imprime
}

// Ejercicio 4: Encuentra el número más pequeño cuyo cuadrado es menor que 100
let goal = 100; // Define el objetivo
let number = 0; // Inicia la variable 'number'

while (number * number < goal) { // Mientras el cuadrado de 'number' sea menor que 'goal'
    number++; // Incrementa 'number'
}
console.log(`El número más cercano a ${goal} cuyo valor cuadrado sea menor a ${goal} es: ${number}`);

// Ejercicio 5: Imprime los números pares del 2 al 10 usando un bucle do...while
let x = 0;
do {
    x += 2; // Incrementa 'x' en 2 en cada iteración
    console.log(x); // Imprime el valor actual de 'x'
} while (x < 10); // Continúa mientras 'x' sea menor que 10

// Ejercicio 6: Imprime la tabla del 7 del 1 al 10 usando un bucle for
for (let i = 1; i <= 10; i++) {
    console.log(`7 * ${i} = ${7 * i}`); // Imprime el resultado de 7 multiplicado por 'i'
}

// Ejercicio 7: Invierte los elementos del array 'numeros'
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < numeros.length / 2; i++) {
    let temp = numeros[i]; // Almacena temporalmente el elemento actual
    numeros[i] = numeros[numeros.length - 1 - i]; // Intercambia el elemento actual con el correspondiente desde el final
    numeros[numeros.length - 1 - i] = temp; // Completa el intercambio
}
console.log(numeros); // Imprime el array invertido

// Ejercicio 8: Cuenta e imprime cuántas veces aparece el carácter 'e' en la cadena 'Electroencefalografista'
let cadena = 'Electroencefalografista';
let cadenaMin = cadena.toLowerCase(); // Convierte la cadena a minúsculas para hacer la comparación de manera insensible a mayúsculas
let letra = 0; // Inicia el contador de letras
let caracter = 'e'; // Define el carácter a contar

for (let i = 0; i < cadena.length; i++) {
    if (cadenaMin[i] === caracter) { // Si el carácter actual es igual al carácter objetivo
        letra++; // Incrementa el contador
    }
}
console.log(`El carácter '${caracter}' aparece ${letra} veces en la cadena.`);

// Ejercicio 9: Determina e imprime si los números del 1 al 20 son pares o impares
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) { // Si 'i' es divisible entre 2 (par)
        console.log(`${i} es par`);
    } else { // Si 'i' no es divisible entre 2 (impar)
        console.log(`${i} es impar`);
    }
}

// Ejercicio 10: Calcula la suma de todos los números hasta 'n' e imprime el resultado
let suma = 0; // Inicializa la suma en 0
let n = 5; // Define 'n', el número hasta el cual se sumará

for (let i = 1; i <= n; i++) { // Itera desde 1 hasta 'n'
    suma += i; // Suma el valor actual de 'i' a la variable 'suma'
}
console.log(`La suma de los primeros ${n} números es ${suma}`); // Imprime el resultado de la suma

// Ejercicio 11: Calcula el factorial de un número y lo imprime
let resultado = 1; // Inicializa el factorial en 1
let factorial = 170.9; // Define el número para calcular el factorial

for (let i = 1; i <= factorial; i++) { // Itera desde 1 hasta 'número'
    resultado *= i; // Multiplica el factorial por 'i' en cada iteración
}
console.log(`El factorial de ${factorial} es ${resultado}`); // Imprime el factorial del número


