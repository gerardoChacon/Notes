// Declaración de una variable de tipo string usando comillas simples.
let texto1 = 'texto entre comillas simples';

// Declaración de una variable de tipo string usando comillas dobles.
let texto2 = "texto entre comillas inglesas";

// Declaración de una variable que se utilizará dentro de una plantilla literal.
let plantillas = "(plantillas literales)";

// Declaración de una variable de tipo string usando plantillas literales (acentos graves),
// que permite la interpolación de variables.
let texto3 = `texto entre acentos graves ${plantillas}`;

console.log(texto3);

// Creación de un objeto String a partir de un primitivo de tipo string.
let objeto = new String('primitivo');
//imprime el objeto String 'objeto' en la consola.
 console.log(objeto);

// Ejemplo de uso de un método de String (toUpperCase) en un literal de tipo string.
// Convierte 'primitivo' a mayúsculas y lo imprime en la consola.
 console.log('primitivo'.toUpperCase());

// Imprime el tipo de 'texto1', que es 'string' (tipo de dato primitivo).
console.log(typeof texto1);

// Imprime el tipo de 'objeto', que es 'object' (aunque es un objeto String, no un primitivo de tipo string).
console.log(typeof objeto);
