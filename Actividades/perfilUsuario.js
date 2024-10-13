/*Perfil de usuario
Escriba un programa que le solicite al usuario sus datos: nombre de usuario,
 edad y una lista de sus películas favoritas. Almacene la información y luego muéstrela en la consola. 
 Tenga en cuenta que la salida para las películas debe agregar
 un pequeño mensaje como: 'La película {film} es una de mis favoritas'.*/


alert("Hola, quiero conocerte un poco más, por favor ingresa los datos que te pedimos a continuación 😄")
let name = prompt("Ingresa tu nombre: ");
let age = prompt("Ingresa tu edad: ");
let movies = prompt("Ingresa tus películas favoritas separadas por una coma: ").split(',');


console.log("Nombre: " + name)
console.log("Edad: " + age)
movies.forEach(film => {
    console.log(`La película ${film.trim()} es una de mis favoritas`)
});

