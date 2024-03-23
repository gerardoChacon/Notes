// Creación de una nueva instancia de Array usando el constructor 'Array'.
const lista = new Array();
// Esta línea está comentada, pero si se descomentara, imprimiría el prototipo de Object.
// Todos los objetos en JavaScript heredan de Object.prototype, que es el nivel más alto en la cadena de prototipos.
// console.log(Object.prototype);

// Definición de una clase 'SuperArray' que extiende 'Array'.
// Esto significa que 'SuperArray' heredará todas las propiedades y métodos de 'Array'.
class SuperArray extends Array {

}

// Imprime el prototipo de 'SuperArray'.
// Se espera que SuperArray.prototype contenga todas las propiedades y métodos heredados de Array,
// además de cualquier propiedad o método que se agregue específicamente a 'SuperArray'.
console.log(SuperArray.prototype);
