/*Alarma
Escriba un programa que pregunte al usuario la cantidad de segundos necesarios hasta que se ejecute una alarma (mensaje)
 junto con un texto para mostrar una vez que hayan pasado esos segundos en tiempo real.

Ejemplo de resultado : "Hora de dormir en 10 segundos".*/

let segundosNecesarios = prompt("Ingresa los segundos necesarios ⏰: ");
let segundosNecesariosNum = Number(segundosNecesarios);

function alarma() {
    console.log(`Hora de dormir en ${segundosNecesarios} segundos`);
}

setTimeout(alarma, segundosNecesariosNum * 1000);
