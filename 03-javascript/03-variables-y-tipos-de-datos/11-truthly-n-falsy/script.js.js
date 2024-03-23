function esVerdaderoOFalso(valor){
    // En JavaScript, un valor es "truthy" si es considerado verdadero en un contexto booleano.
    // Excepto por los valores "falsy" definidos, todos los demás valores son "truthy".
    if(valor){
        // Si 'valor' es "truthy", este bloque se ejecuta.
        console.log(`${valor} es truthy`);
    } else{
        // Los valores "falsy" en JavaScript son: false, 0, '', null, undefined y NaN.
        // Si 'valor' es "falsy", este bloque se ejecuta.
        console.log(`${valor} es falsy`);
    }
}

// Ejemplos de llamadas a la función con diferentes valores para demostrar cuáles son considerados "truthy" y cuáles "falsy".

esVerdaderoOFalso('false'); // 'false' es un string no vacío, por lo tanto es "truthy".
esVerdaderoOFalso(false); // false es "falsy".
esVerdaderoOFalso(true); // true es "truthy".
esVerdaderoOFalso(null); // null es "falsy".
esVerdaderoOFalso(30); // 30 es un número no cero, por lo tanto es "truthy".
esVerdaderoOFalso(0); // 0 es "falsy".
esVerdaderoOFalso(NaN); // NaN es "falsy".
esVerdaderoOFalso('String'); // 'String' es un string no vacío, por lo tanto es "truthy".
esVerdaderoOFalso(''); // '' es un string vacío, por lo tanto es "falsy".
esVerdaderoOFalso(undefined); // undefined es "falsy".
esVerdaderoOFalso(Infinity); //Infinity es truthy.