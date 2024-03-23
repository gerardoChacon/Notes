
// Creación de un objeto 'objeto' con una propiedad y un par de getters y setters.
const objeto = {
    // Propiedad 'a' con el valor inicial 10.
    a: 10,

    // Getter para la propiedad 'b'.
    // Un getter es una función que se ejecuta cuando se accede a una propiedad.
    // En este caso, al acceder a 'objeto.b', se ejecuta este código, que devuelve el valor de 'objeto.a'.
    get b() {
        return this.a;
    },

    // Setter para la propiedad 'b'.
    // Un setter es una función que se ejecuta cuando se asigna un valor a una propiedad.
    // Aquí, al asignar un valor a 'objeto.b', se ejecuta este código, que actualiza 'objeto.a' con ese valor.
    set b(x) {
        this.a = x;
    },
};
// Accede a la propiedad 'b' utilizando el getter definido.
// El getter permite obtener el valor de 'a' de forma indirecta.
console.log(objeto.b); // Imprime 10

// Asigna un nuevo valor (20) a la propiedad 'b' utilizando el setter definido.
// El setter permite modificar el valor de 'a' de forma controlada.
objeto.b = 20;

// Imprime el valor actualizado de 'objeto.a', que ahora es 20 gracias al setter.
console.log(objeto.a); // Imprime 20

let persona = {
    // Propiedades privadas: nombre y edad.
    _nombre: '',
    _edad: 0,

    // Getter para la propiedad 'datos'.
    // Este getter concatena el nombre y la edad en un solo string.
    get datos() {
        return this._nombre + ' ' + this._edad;
    },

    // Setter para la propiedad 'datos'.
    // Este setter permite asignar el nombre y la edad a través de un string.
     set datos(valor) {
        // Divide el string 'valor' en un arreglo basado en un espacio.
        const splitValor = valor.split(' ');
        // Asigna el primer elemento del arreglo a '_nombre'.
        this._nombre = splitValor[0];
        // Asigna el segundo elemento del arreglo a '_edad'.
        this._edad = splitValor[1];
    } 
};

persona.datos = 'Gerardo 26'
console.log(persona.datos);
