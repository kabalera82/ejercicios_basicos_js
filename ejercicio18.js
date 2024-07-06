/*

Ejercicio 18

Usa un bucle for para recorrer todos los destinos del array y elimina los elementos que tengan el id 11 y el id 40.

Imprime en un console log el array resultante.

Puedes usar este array:

*/

const placesToTravel = [{id: 5, name: 'Japan'}, {id: 11, name: 'Venecia'}, {id: 23, name: 'Murcia'}, {id: 40, name: 'Santander'}, {id: 44, name: 'Filipinas'}, {id: 59, name: 'Madagascar'}]

function recorreDestinos(lista){
    for (let i = 0; i <lista.length; i++){  // Recorre el array
        if (lista[i].id === 11){ 
            lista.splice(i, 1);
        }
        else if (lista[i].id === 40){
            lista.splice(i, 1);
        }
    }
    return lista; 
}
console.log(recorreDestinos(placesToTravel)); 