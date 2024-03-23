//IF
let age = 26;

if (age >= 18 && age < 60){
    console.log('Eres mayor de edad')
}
else if (age >= 60){
    console.log('Eres de la tercera edad')
}
else{
    console.log('Eres menor de edad')
}

//Switch
let action = 'crear';

switch(action){

case 'crear':
console.log(`La acción es ${action}`);
    break;
case undefined:
    console.log('No se registró una acción');
    break;
case '':
    console.log('No se registró una acción');
    break;
default:
    console.log(`La acción es ${action}`);
}

//Operador ternario
let number = (85 % 2);

let parImpar = number === 0 
? 'El número ingresado es par'
: 'El número ingresado es impar'
console.log(parImpar);
