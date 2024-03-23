// Primer bucle for: imprime números del 6 al 10, incrementando de 2 en 2.
for (let i = 6; i <= 10; i += 2) {
    console.log(i);
}

// Declaración de una lista de animales.
let lista = ['gato', 'perro', 'elefante', 'dinosaurio', 'tortuga'];

// Segundo bucle for: recorre la lista de animales.
for (let i = 0; i < lista.length; i++) {
    let animal = lista[i];

    // Condicional que verifica si el animal actual es 'dinosaurio'.
    if (animal === 'dinosaurio') {
        // Si el animal es un 'dinosaurio', imprime que es un animal extinto.
        console.log(animal + ' es un animal extinto');
    } else {
        // Si no es un 'dinosaurio', imprime que es un animal.
        console.log(animal + ' es un animal');
    }
}

// Declaración de una variable 'indiceDePerro' sin asignar un valor.
let indiceDePerro;

// Tercer bucle for: recorre nuevamente la lista de animales.
for (let i = 0; i < lista.length; i++) {
    let animal = lista[i];

    // Condicional que verifica si el animal actual es 'dinosaurio'.
    if (animal === 'dinosaurio') {
        // Si el animal es un 'dinosaurio', se salta al siguiente ciclo del bucle con 'continue'.
        continue;
    }
    // Imprime los animales vivos.
    console.log('animal vivo: ' + animal);
}

// Imprime el valor de 'indiceDePerro', que no ha sido modificado y sigue siendo 'undefined'.
console.log(indiceDePerro);

// Cuarto bucle for: realiza un bucle desde 0 hasta 10000, imprimiendo cada número.
// Advertencia: Este bucle imprimirá una gran cantidad de números y puede ser lento.
for (let i = 0; i <= 10000; i++) {
    console.log(i);
}
