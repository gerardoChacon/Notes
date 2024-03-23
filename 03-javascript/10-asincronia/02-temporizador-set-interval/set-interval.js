// Se declara una variable 'i' inicializada en 0.
let i = 0;

// Se imprime 'antes' en la consola.
console.log('antes');

// Se inicia un intervalo que ejecuta una función cada 1000 milisegundos (1 segundo).
let interval = setInterval(()=>{
    console.log(i++); // Imprime el valor de 'i' y luego incrementa 'i' en 1.
}, 1000);

// Se imprime 'después' en la consola.
console.log('después');

// Después de 11000 milisegundos (11 segundos), se detiene el intervalo.
setTimeout(()=>{
    clearInterval(interval); // Detiene la ejecución repetida establecida por 'setInterval'.
}, 11000);
