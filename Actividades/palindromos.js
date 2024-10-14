/*Palindrome
Escribe un programa que pida una
 palabra o frase (puede estar en mayúsculas,
tener espacios y puntuación). Determina si
 la frase/palabra es un palíndromo o no,
ignorando los espacios y las letras mayúsculas.*/


const isPalindrome = () => {
    const str = prompt("Ingresa una palabra o frase para verificar si es palindromo o no");
    const strNormalized = str.toLowerCase().replaceAll("", "");
    const strArray = strNormalized.split()
    const strNormReversed = strArray.reverse().join("");
    if (strNormalized === strNormReversed) {
        console.log("Tus palabras son palindromas")
    } else {
        console.log("NO son palidromas")
    }
};

isPalindrome()