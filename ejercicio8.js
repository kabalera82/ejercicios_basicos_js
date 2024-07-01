/*
 -------------------------------------  EJERCICIO 8  -----------------------------------------------------------------
Buscar la palabra más larga: 
Completa la función que tomando un array de strings como argumento devuelva el más largo, 
en caso de que dos strings tenga la misma longitud deberá devolver el primero.

Puedes usar este array para probar tu función:
 */

const avengers = ['Hulk', 'Thor', 'Iron Man', 'Captain A.', 'Spiderman', 'Captain M.'];

const resultado = palabraMasCorta(avengers);

function palabraMasCorta (string) { // Función que recibe un array de strings
    let palabraMasCorta = string[0];
    for (let i = 1; i < string.length; i++) {
        if (string[i].length < palabraMasCorta.length) {
            palabraMasCorta = string[i];
        }
    }
    return palabraMasCorta;
}

console.log("La palabra más corta es:", resultado); // 