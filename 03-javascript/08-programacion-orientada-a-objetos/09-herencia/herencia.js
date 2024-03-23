// Función constructora para crear objetos 'Padre'.
function Padre(nombre, apellido, soy) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.soy = soy;
}

// Método agregado al prototipo de 'Padre' para todos los objetos 'Padre'.
Padre.prototype.saludo = function() {
    console.log(`Soy ${this.nombre} ${this.apellido} y soy ${this.soy}`);
}

// Función constructora para crear objetos 'Hijo', que hereda de 'Padre'.
function Hijo(nombre, apellido, soy, tengo) {
    // Llamada a la función constructora de 'Padre' con el contexto de 'Hijo'.
    Padre.call(this, nombre, apellido, soy);
    // Propiedad específica de 'Hijo'.
    this.tengo = tengo;
}

// Estableciendo la herencia: 'Hijo' hereda de 'Padre'.
// Se crea un nuevo objeto que hereda de Padre.prototype.
Hijo.prototype = Object.create(Padre.prototype);

// Asegurándonos de que el constructor de 'Hijo' sea correcto.
Hijo.prototype.constructor = Hijo;

// Método específico para objetos 'Hijo'.
Hijo.prototype.saludoHijo = function() {
    console.log(`Soy ${this.nombre} ${this.apellido} y soy ${this.soy} y tengo ${this.tengo} años`);
}

// Creación de una instancia de 'Padre' y 'Hijo'.
const padre = new Padre('Ramón Antonio Gerardo', 'Estévez', 'el padre');
const hijo = new Hijo('Carlos Irwin', padre.apellido, 'el hijo', 55);

// Pruebas de los objetos y sus métodos.
console.log(padre);
console.log(hijo);
padre.saludo();
hijo.saludoHijo();
