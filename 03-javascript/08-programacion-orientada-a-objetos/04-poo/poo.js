// Definición del primer objeto 'auto1' con tres propiedades: modelo, año y marca.
let auto1 = {
    modelo: 'Modelo 3',
    año: 2021,
    marca: 'Tesla'
};

// Definición del segundo objeto 'auto2' con tres propiedades: modelo, año y marca.
let auto2 = {
    modelo: 'Hummer EV',
    año: 2022,
    marca: 'GMC'
};

// Definición del objeto 'servicio' con una propiedad 'nombre' y un método 'transformar'.
let servicio = {
    nombre: 'Transforma modelos a mayúsculas',
    
    // Método 'transformar' que toma un objeto 'auto' como argumento.
    transformar: function(auto) {
        // Modifica la propiedad 'modelo' del objeto 'auto', convirtiéndola a mayúsculas.
        auto.modelo = auto.modelo.toUpperCase();
    }
};

// Llamada al método 'transformar' del objeto 'servicio', pasando 'auto2' como argumento.
servicio.transformar(auto2);

// Imprime el objeto 'auto2' después de la transformación.
// Se espera que la propiedad 'modelo' esté ahora en mayúsculas.
console.log(auto2);



let mascota = {
    nombre: 'Bruna',
    edad: 1,
    color: 'negra',
    sexo: 'hembra',
    // Lista de actividades que le gustan a la mascota.
    actividades: ['dormir', 'comer', 'correr', 'ir por la pelota', 'jugar'],
    // Método que simula el ladrido de la mascota.
    ladrar: () => 'Woof!',
    // Método que simula el aullido de la mascota.
    auyar: () => 'Auuuu!',
    // Método que devuelve una descripción de la mascota.
    descripcion() {
        // Construye y devuelve una cadena descriptiva.
        return `${this.nombre} es ${this.sexo === 'hembra' ? 'una perra' : 'un perro'} ${this.color}, que le gusta ${this.actividades[0]}, ${this.actividades[1]} e ${this.actividades[3]}`
    }
}

console.log(mascota.descripcion()); // Imprime la descripción de Bruna.


