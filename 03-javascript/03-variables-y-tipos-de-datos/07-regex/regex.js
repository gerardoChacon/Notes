// Declaración de varias variables 'texto' con diferentes cadenas de texto.
let texto1 = "Me encanta la música de Charly García.";
let texto2 = "me encanta la música de Led Zeppelin.";
let texto3 = "encanta la música de Calle 13.";
let texto4 = "la música de Meshuggah.";
let texto5 = "música de Daft Punk.";
let texto6 = "Me gusta Diplo.";
let texto7 = "No me gusta Diplo.";
let texto8 = "led zeppelin.";

// Creación de una expresión regular para buscar la palabra 'Zeppelin' al final de una cadena de texto.
// La bandera 'i' indica que la búsqueda es insensible a mayúsculas y minúsculas.
// La bandera '$' indica que la coincidencia debe ocurrir al final de la cadena de texto. 
let regex = /Zeppelin.$/i;

// Prueba la expresión regular 'regex' en cada uno de los textos y muestra los resultados.
// 'true' si el texto coincide con la expresión regular, 'false' si no coincide.
console.log(regex.test(texto1)); // false
console.log(regex.test(texto2)); // true
console.log(regex.test(texto3)); // false
console.log(regex.test(texto4)); // false
console.log(regex.test(texto5)); // false
console.log(regex.test(texto6)); // false
console.log(regex.test(texto7)); // false
console.log(regex.test(texto8)); // true