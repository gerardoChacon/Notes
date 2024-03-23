// Declaración de un objeto 'objeto' con varias propiedades de diferentes tipos.
let objeto = { 
    numero: 1, 
    texto: 'texto', 
    'lista': [], 
    boolean: true, 
    objeto: {
        objeto2: 'Hola'
    } 
};

// Las siguientes líneas, si se descomentan, imprimirían en la consola diferentes propiedades del objeto 'objeto'.
 console.log(objeto);
 console.log(objeto.numero);
 console.log(objeto.texto);
// Imprime el valor de la propiedad 'objeto2' dentro del subobjeto 'objeto' de 'objeto'.
 console.log(objeto.objeto.objeto2)
// Imprime el valor de la propiedad 'objeto2' dentro del subobjeto 'objeto' de 'objeto', accediendo mediante notación de corchetes.
 console.log(objeto['objeto']['objeto2']);

// Elimina la propiedad 'objeto' del objeto 'objeto'.
delete objeto['objeto'];
// Si se descomenta, imprimirá el objeto 'objeto' después de eliminar la propiedad 'objeto'.
// console.log(objeto);

console.log(objeto.objeto);

// Declaración de un objeto 'usuario' con varias propiedades.
let usuario = {
    nombre: 'Gerardo',
    apellidos: 'Chacón Álvarez',
    alias: 'Chac',
};

// Declaración y asignación de dos variables numéricas.
let numero1 = 1;
let numero2 = numero1;
// Modifica el valor de 'numero2', demostrando la asignación por valor en tipos primitivos.
numero2 = 3;

 console.log(numero1, numero2);


// Crea una copia profunda de 'usuario' y la almacena en 'usuario2'.
let usuario2 = JSON.parse(JSON.stringify(usuario));
// Modifica la propiedad 'alias' de 'usuario2'.
usuario2.alias = 'Ger';
// Imprime los objetos 'usuario' y 'usuario2' para mostrar que son independientes entre sí.
console.log(usuario);
console.log(usuario2);
