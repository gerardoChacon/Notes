// Creación de una promesa que se resuelve después de 5 segundos.
let promesa = new Promise((reciboDatos, noReciboDatos) => {
    setTimeout(()=>{
        reciboDatos('datos'); // Resuelve la promesa con el valor 'datos'.
    }, 5000);
});

// Función autoinvocada asincrónica para esperar la resolución de la promesa.
(async function asincrona() {
    let resultado = await promesa; // Espera a que la promesa se resuelva y almacena su resultado.
    console.log(resultado.toUpperCase()); // Muestra el resultado en mayúsculas.
})();

/*
Explicación de async/await:
- 'async' indica que una función es asincrónica, lo que permite usar 'await' dentro de ella.
- 'await' hace que la ejecución de la función asincrónica espere hasta que la promesa se resuelva.
- Esto permite escribir código asincrónico que parece síncrono y es más fácil de leer y mantener.
- La función asincrónica se autoinvoca para ejecutarse de inmediato.
- Esta técnica es útil para realizar operaciones asíncronas secuenciales de manera clara y concisa.
*/
