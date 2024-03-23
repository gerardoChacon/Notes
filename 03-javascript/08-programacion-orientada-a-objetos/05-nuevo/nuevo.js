// Definición de la función constructora 'Mascota'.
function Mascota(animal, nombre, edad, color, sexo, actividades){
    this.animal = animal;
    this.nombre = nombre;
    this.edad = edad;
    this.color = color;
    this.sexo = sexo;
    // 'actividades' es un array de strings que representa las actividades que le gustan a la mascota.
    this.actividades = actividades;
    // Método 'descripcion' que devuelve una cadena descriptiva de la mascota.
    this.descripcion = function() {
        // Uso de template strings para construir la descripción.
        // Se utiliza un operador ternario para decidir entre 'una' o 'un' basado en el sexo de la mascota.
        return `${this.nombre} es ${this.sexo === 'hembra' ? 'una' : 'un'} ${this.animal} ${this.color}, que le gusta ${this.actividades}`
    };
}

// Creación de instancias de 'Mascota' con diferentes atributos.
const rooney = new Mascota('perra', 'Rooney', 1, 'café', 'hembra', ['destruir', 'correr', 'y comer']);
const bruna = new Mascota('perra', 'Bruna', 1, 'negra', 'hembra', ['dormir', 'jugar', 'y comer']);


// Impresión de la descripción de cada mascota utilizando el método 'descripcion'.
console.log(bruna.descripcion()); // Imprime la descripción de Bruna.
console.log(rooney.descripcion()); // Imprime la descripción de Rooney.

