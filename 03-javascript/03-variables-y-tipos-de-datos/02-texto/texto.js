// Declaración de una variable 'libroEjemplo' con un string.
let libroEjemplo = "Harry Potter ";

// Intento fallido de declarar una variable 'libroEjemplo2' con un string que contiene una comilla simple.
// Esta línea está comentada porque causaría un error de sintaxis debido a la comilla simple no escapada.
// let libroEjemplo2 ='Harry Potter's wing'

// Declaración correcta de 'libroEjemplo2' utilizando el carácter de escape '\' para incluir una comilla simple en el string.
let libroEjemplo2 = 'Harry Potter\'s Diary';

// Intento fallido de declarar una variable 'libroEjemplo3' con un string multilínea.
// Esta línea está comentada porque causaría un error de sintaxis debido a la forma en que se manejan los saltos de línea.
//let libroEjemplo3='Harry
//Potter\'s 
//Diary'

// Declaración correcta de 'libroEjemplo3' como un string multilínea utilizando el carácter de escape '\' para los saltos de línea y la comilla simple.
// \n = new line
let libroEjemplo3 = 'Harry\n\
Potter\'s\n\
Castle';

// Declaración de una variable 'segundoLibro' con un string que incluye comillas simples.
// Se utilizan comillas dobles para el string, lo que permite incluir comillas simples sin necesidad de escaparlas.
// \t = tab
let segundoLibro = "Pragmatic\t 'Programmer'";

// Imprime los valores de las variables en la consola.
console.log(libroEjemplo, libroEjemplo2, libroEjemplo3, segundoLibro);



