/*
 -------------------------------------  EJERCICIO 8  -----------------------------------------------------------------
Buscar la palabra más larga: 
Completa la función que tomando un array de strings como argumento devuelva el más largo, 
en caso de que dos strings tenga la misma longitud deberá devolver el primero.

Puedes usar este array para probar tu función:
 */

// Completa la función que tomando un array de strings como argumento devuelva el más largo,
// en caso de que dos strings tenga la misma longitud deberá devolver el primero.

const avengers = ['Hulk', 'Thor', 'Iron Man', 'Captain A.', 'Spiderman', 'Captain M.'];
const alumnos = ['pedro', 'samuel', 'lucas', 'rodrigo', 'juan'];

function palabraMasLarga(strings) { 
    let masLarga = strings[0];
    for (let i = 1; i < strings.length; i++) {
        if (strings[i].length > masLarga.length) {
            masLarga = strings[i];
        }
    }
    return masLarga;
}

// Ejemplo de uso con el array avengers
let resultadoAvengers = palabraMasLarga(avengers);
console.log("La palabra más larga en avengers es:", resultadoAvengers);

// Ejemplo de uso con el array alumnos
let resultadoAlumnos = palabraMasLarga(alumnos);
console.log("La palabra más larga en alumnos es:", resultadoAlumnos);