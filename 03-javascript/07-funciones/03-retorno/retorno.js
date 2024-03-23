// Declaración de un objeto 'usuario'.
let usuario = {
    nombre: 'Ana',
    apellido: 'Perez'
};

// Declaración de la función 'cambiarApellido' que toma un objeto y devuelve una copia modificada.
function cambiarApellido(objeto) {
    // JSON.stringify convierte el objeto 'objeto' en una cadena JSON.
    // Esto crea una representación en texto del objeto, que es una manera de 'serializar' el objeto.
    let objetoSerializado = JSON.stringify(objeto);

    console.log(objetoSerializado)

    // JSON.parse toma la cadena JSON creada por JSON.stringify y la 'deserializa',
    // convirtiéndola de nuevo en un objeto de JavaScript.
    // Esto resulta en una copia profunda del objeto original, que es completamente independiente del original.
    let copia = JSON.parse(objetoSerializado);

    // Cambia el apellido en la copia del objeto.
    copia.apellido = 'Ochoa';

    // Devuelve la copia modificada.
    return copia;
}



console.log(cambiarApellido(usuario)); // { nombre: 'Ana', apellido: 'Ochoa' }
console.log(usuario); // { nombre: 'Ana', apellido: 'Perez' }
