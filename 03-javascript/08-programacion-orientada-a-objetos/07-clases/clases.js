/*
 * A pesar de la eficiencia de una funcion constructora y poder manipular su protiripo, el uso de clases ofrece varias ventajas sobre la
 * manipulación directa de prototipos:
*/
class Mascota { 
    // El constructor inicializa las propiedades del objeto 'Mascota'.
    constructor(animal, nombre, edad, color, sexo, actividades){
        this.animal = animal;
        this.nombre = nombre;
        this.edad = edad;
        this.color = color;
        this.sexo = sexo;
        this.actividades = actividades;
    }

    descripcion() {
        return `${this.nombre} es ${this.sexo === 'hembra' ? 'una' : 'un'} ${this.animal} ${this.color}, que le gusta ${this.actividades.join(', ')}`
    };
}

const barbara = new Mascota('gata', 'Bárbara', 16, 'café', 'hembra', ['dormir', 'comer', 'y tomar el sol']);
const lucas = new Mascota('gato', 'Lucas', 9, 'gris', 'macho', ['salir de noche', 'saltar', 'y correr']);

console.log(barbara.descripcion()); 
console.log(lucas.descripcion()); 

