/*
Ejercicio 16

For...of: Usa un bucle formof para recorrer todos los destinos del array.

Imprime en un console.log cada uno de sus valores.

*/

const placesToTravel = ['Japon', 'Venecia', 'Murcia', 'Santander', 'Filipinas', 'Madagascar']

function recorreDestinos(lista){
    for (const destino of lista){
        console.log(destino);
    }
    
}
recorreDestinos(placesToTravel);

for (let place of placesToTravel){
    console.log(place)
}
