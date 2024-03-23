function Mascota(animal, nombre, edad, color, sexo, actividades){
    this.animal = animal;
    this.nombre = nombre;
    this.edad = edad;
    this.color = color;
    this.sexo = sexo;
    this.actividades = actividades;
}

/**
 * Al agregar un método al prototipo de una función constructora como 'Mascota', se asegura que
 * todas las instancias creadas con 'new Mascota()' compartan la misma implementación del método
 * 'descripcion'. Esto es eficiente en términos de memoria, ya que el método no se duplica en cada
 * instancia; en cambio, cada instancia accede al mismo método definido en el prototipo
 */
 
    Mascota.prototype.descripcion = function() {
        return `${this.nombre} es ${this.sexo === 'hembra' ? 'una' : 'un'} ${this.animal} ${this.color}, que le gusta ${this.actividades}`
}; 

