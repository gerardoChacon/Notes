// TIPO DE DATOS PRIMITIVOS

// Declaración de una variable de tipo string.
let texto = 'texto';

// Declaración de una variable de tipo número (puede ser entero o decimal).
let numero = 3.534;

// Declaración de una variable de tipo booleano.
let booleano = true;

// Declaración de una variable sin asignar, resultando en undefined.
let indefinido; // undefined

// Declaración de una variable de tipo BigInt, útil para números muy grandes.
let bigInt = BigInt(34565988745762345762345786);

// Declaración de una variable de tipo Symbol, que representa un identificador único.
// Se le pasa una descripción 'Symbolo' como argumento, la cual es útil para la depuración pero no afecta la unicidad del Symbol.
let symbol = Symbol('Symbolo');

// Imprime el Symbol en la consola. Verás algo como "Symbol(Symbolo)" en la salida,
// pero el valor real es único e inmutable.
console.log(symbol);

// Compara el Symbol almacenado en la variable 'symbol' con un nuevo Symbol creado con la misma descripción.
// Esta comparación dará como resultado 'false' porque cada Symbol es único,
// incluso si se crea con la misma descripción.
console.log(symbol === Symbol('Symbolo'));


// TIPOS DE DATOS ESTRUCTURALES

// Declaración de un objeto, que es una colección de pares clave-valor.
let objeto = { 0: 'Gerardo' }; 

// Declaración de una lista (Array), que es un tipo especial de objeto para almacenar colecciones ordenadas.
let lista = ['Gerardo']; 

// Declaración de una expresión regular.
let regex = /asd/; 
// Otros objetos incluyen: Map, Set, WeakMap, WeakSet, Date, RegExp

// Declaración de una función, que es un bloque de código reutilizable.
let funcion = function() {};

// RAIZ ESTRUCTURAL PRIMITIVO

// Declaración de una variable con valor null, que representa la ausencia de valor. 
// null es un valor asignado intencionalmente para indicar que una variable o un objeto está vacío o carece de valor.
let nulo = null;

// Uso de 'typeof' para imprimir el tipo de cada variable.
console.log('texto es ' + typeof texto);
console.log('numero es ' + typeof numero);
console.log('booleano es ' + typeof booleano);
console.log('indefinido es ' + typeof indefinido);
console.log('bigInt es ' + typeof bigInt);
console.log('symbol es ' + typeof symbol);
console.log('objeto es un ' + typeof objeto);
console.log('lista es un ' + typeof lista);
console.log('regex es un ' + typeof funcion);
console.log('nulo es un ' + typeof nulo);
