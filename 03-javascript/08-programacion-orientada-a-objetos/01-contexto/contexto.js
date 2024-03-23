// En este ejemplo, la función encapsulado redefine this.modelo a 15.
// La función info es una función flecha que captura el valor de this del contexto de encapsulado. 
// Cuando info es llamada como método de auto, this no se refiere a auto, sino a encapsulado
// Por lo tanto, this.marca y this.año son undefined, ya que estas propiedades no están definidas en el contexto de encapsulado, y this.modelo es 15, el valor asignado dentro de encapsulado.

// Asignación de un valor a 'this.modelo' en el ámbito global.
this.modelo = 5;

// Definición de la función 'encapsulado'.
function encapsulado() {
    // Asignación de un nuevo valor a 'this.modelo' en el contexto de la función 'encapsulado'.
    this.modelo = 15;

    // Definición de una función flecha 'info'.
    const info = () => {
        // La función flecha 'info' captura el valor de 'this' del ámbito en el que fue definida,
        // que en este caso es el ámbito de la función 'encapsulado'.
        return 'Este es un auto ' + this.marca
            + ', ' + this.modelo + ' del año ' + this.año;
    }

    // Creación de un objeto 'auto' con varias propiedades, incluida la función 'info'.
    let auto = {
        modelo: 'Modelo 3',
        año: 2021,
        marca: 'Tesla',
        info: info
    };

    // Imprime la propiedad 'marca' del objeto 'auto'.
    console.log(auto.marca); // 'Tesla'

    // Llama a la función 'info' dentro del objeto 'auto'.
    // Aunque 'info' es llamada en el contexto de 'auto', debido a que es una función flecha,
    // 'this' se refiere al contexto de la función 'encapsulado', no al objeto 'auto'.
    console.log(auto.info()); // 'Este es un auto undefined, 15 del año undefined'
}

// Llamada a la función 'encapsulado'.
encapsulado();
