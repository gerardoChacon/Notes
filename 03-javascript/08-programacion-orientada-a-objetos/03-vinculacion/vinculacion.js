// Definición de una función 'info' que imprime el valor de 'this' y el argumento 'a'.
function info(a) {
    console.log(this, a);
}

// Creación de un objeto 'auto'.
let auto = {
    modelo: 'Modelo 3',
    año: 2021,
    marca: 'Tesla'
};

// Creación de un objeto 'persona'.
let persona = {
    nombre: 'Gerardo',
    peso: 90,
    altura: 1.90,
    edad: 26
}

let pc = {
    procesador: 'i7',
    tarjetaGrafica: 4070,
    almacenamiento: '1TB'
}

// bind, call, apply

// El método 'bind' crea una nueva función donde 'this' se establece en el objeto 'auto'.
// info.bind(auto) devuelve una nueva función con 'this' vinculado a 'auto'.
// Luego, esa función se invoca con ().
info.bind(auto, 10)();

// El método 'call' invoca la función 'info' inmediatamente con 'this' establecido en 'persona'.
// Los argumentos adicionales después de 'auto' se pasan a la función 'info'.
info.call(persona, 20);

// El método 'apply' es similar a 'call', pero los argumentos adicionales se pasan como un arreglo.
// Aquí, 'info' se llama con 'this' establecido en 'pc' y 'a' establecido en 30.
info.apply(pc, [30]);