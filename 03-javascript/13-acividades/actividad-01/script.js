const nombre = 'Ger';
const mensaje = '¡Hola mundo!';
console.log(`${mensaje} soy ${nombre}`)
console.log('Mi nombre en mayúsculas es:' + nombre.toUpperCase());
console.log('Mi nombre en minúsculas es:' + nombre.toLowerCase());

const caracteres = mensaje.length;

console.log(`El mensaje '${mensaje}' tiene ${caracteres} de caracteres.`);

let lista = [1,2,3,4,5];
console.log(`El tercer número del array con los valores ${lista} es: ` + lista[2]);

lista.push(6);

console.log('Se añade el número que sigue en orden al final del arreglo y es: ' + lista[5]);

let texto = 'La lluvia en Sevilla es una maravilla';
let regex = /Lluvia/i;
let resultado = texto.match(regex)

console.log(`Se encontró el patrón 'lluvia' en el texto '${texto}', por lo que el resultado es: ${resultado}`,);


