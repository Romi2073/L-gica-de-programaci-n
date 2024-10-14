/*Número más alto
Escribe un programa que pida 10 números. Utilizando operadores lógicos y cualquier 
otra función o estructura de JavaScript que hayas visto antes,
 determina y genera el mayor de esos números. */

 const numbers = prompt("Ingresa 10 números separados por comas:").split(',').map(Number);
 console.log(numbers);
 
 const numMax = Math.max(...numbers);
 console.log("El número más alto ingresado fue: " + numMax);
 