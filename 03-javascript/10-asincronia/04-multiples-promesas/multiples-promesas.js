// Creación de dos promesas que se resuelven en tiempos diferentes.
let promesa1 = new Promise((reciboDatos, noReciboDatos) => {
    setTimeout(()=>{ reciboDatos('datos1'); }, 5000); // Se resuelve después de 5 segundos.
});
let promesa2 = new Promise((reciboDatos, noReciboDatos) => {
    setTimeout(()=>{ reciboDatos('datos2'); }, 2000); // Se resuelve después de 2 segundos.
});

// Promise.all espera a que todas las promesas del array se resuelvan.
Promise.all([promesa1, promesa2])
    .then(([resultado1, resultado2])=>{
        console.log(resultado1); // Muestra 'datos1' después de que ambas promesas se resuelvan.
        return resultado2; // Pasa 'datos2' al siguiente then.
    })
    .then(resultado2 => {
        console.log(resultado2.toUpperCase()); // Muestra 'DATOS2'.
    });

/*
Explicación de Promise.all:
- Promise.all es un método que toma un array de promesas y devuelve una nueva promesa.
- La nueva promesa se resuelve cuando todas las promesas en el array se han resuelto, o se rechaza si alguna de las promesas se rechaza.
- El resultado es un array que contiene los valores de las promesas resueltas, en el mismo orden en que se pasaron.
- Esto es útil para coordinar múltiples tareas asíncronas que pueden ejecutarse en paralelo, mejorando la eficiencia del programa.
*/
