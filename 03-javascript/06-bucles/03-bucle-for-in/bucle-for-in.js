// Declaración de un objeto 'traductor' con pares de palabras en español e inglés.
let traductor = {
    bucle: 'loop',
    lista: 'array',
    declaración: 'declaration',
    objecto: 'object'
};

// Bucle for...in para recorrer las propiedades del objeto 'traductor'.
for (let etiqueta in traductor) {
    // Imprime la clave (etiqueta) y su valor correspondiente en inglés.
    // Utiliza la notación de corchetes para acceder al valor asociado a cada clave en 'traductor'.
    console.log(etiqueta + ' en inglés es ' + traductor[etiqueta]);
}

