// Las pilas son una estructura de datos lineal que sigue el principio FILO (First In, Last Out),
// lo que significa que el último elemento añadido a la pila será el primero en ser eliminado.
// Esta estructura es útil para diversas operaciones donde se necesita un orden de procesamiento
// inverso, como en la evaluación de expresiones, navegación de historial, y más. 

class Stack {
    // El símbolo '#' antes de 'items' indica que es una propiedad privada de la clase.
    // Esto significa que 'items' solo puede ser accedido y modificado dentro de la definición de la clase.
    // Las propiedades privadas aseguran el encapsulamiento y la seguridad de los datos.
    #items = [];

    push(item) {
        // Aquí, accedemos a la propiedad privada 'items' para agregar un nuevo elemento.
        // Esto es permitido porque el acceso se realiza dentro de la clase.
        this.#items.push(item);
    }

    pop() {
        // Similarmente, accedemos a la propiedad privada 'items' para eliminar el último elemento y devolverlo.
        // Este método modifica el estado interno de la pila al eliminar el último elemento.
        return this.#items.pop();
    }

    peek() {
        // Accedemos a 'items' para obtener el último elemento sin removerlo,
        // demostrando de nuevo el acceso permitido a la propiedad privada dentro de métodos de la clase.
        // Este método permite observar el elemento sin modificar el estado de la pila.
        return this.#items[this.#items.length - 1];
    }

    print() {
        // Método para imprimir todos los elementos de la pila en la consola.
        // Este bucle forEach itera sobre cada elemento de 'items', demostrando que
        // la iteración y manipulación de 'items' también es posible internamente.
        this.#items.forEach(element => {
            console.log(element);
        }); 
    }
}

// Creación de una instancia de la clase Stack y demostración de su uso.
const stack = new Stack();
stack.push('Jose');
stack.push('Juan');
stack.push('Jairo');
// En este punto, intentar acceder a stack.#items desde fuera de la clase resultará en un error.
// Ejemplo: console.log(stack.#items); // Error: SyntaxError o similar.

// La llamada a push() simplemente añade un elemento a la pila, pero no devuelve un valor,
// por lo que el siguiente console.log() mostrará 'undefined'.
console.log(stack.push('Gerardo')); // Muestra 'undefined' porque push() no tiene un return explícito.

// Muestra el último elemento y lo elimina de la pila.
console.log(stack.pop()); // Muestra 'Gerardo', el último elemento agregado.

// Muestra el nuevo último elemento sin eliminarlo.
console.log(stack.peek()); // Muestra 'Jairo', el nuevo último elemento tras el pop().

// Imprime todos los elementos restantes en la pila.
stack.print(); // Muestra 'Jose', 'Juan', 'Jairo' en ese orden.
