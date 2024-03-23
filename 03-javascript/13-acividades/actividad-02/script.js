let uno = 1;
let dos = 2;

let textoUno = 'Texto';
let textoDos = 'texto';

let objetoUno = [1, 2, 'Texto','texto' ];
let objetoDos = [1, 2, 'Texto','texto' ];

console.log(`¿El número ${uno} es mayor que el número ${dos}? ` + (dos > uno));
console.log(`¿El número ${uno} es menor que el número ${dos}? ` + (uno > dos));
console.log(`¿El número ${uno} es igual que el número ${dos}? ` + (uno == dos));
console.log(`¿El texto ${uno} es igual al texto ${dos}? ` + (textoUno == textoDos));
console.log(`¿Los objetos son iguales? ` + (objetoUno == objetoDos));
console.log('AND LÓGICO: ' + (uno == dos && uno == 1));
console.log('OR LÓGICO: ' + (uno == dos || uno == 1));
console.log('La suma de 10 + 3: ' + (10 + 3))
console.log('La resta de 10 - 3: ' + (10 - 3))
console.log('La multiplicación de 10 x 3: ' + (10 * 3))
console.log('La división de 10 ÷ 3: ' + (10 / 3))
console.log('10 módulo de 3: ' + (10 % 3))