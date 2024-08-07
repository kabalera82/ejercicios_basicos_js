/*

Ejercicio 19

Mixed For...of e includes: Usa un bucle for...of para recorrer todos los juguetes y elimina los que incluyan la palabra gato (también podéis crear uno nuevo con solo los que NO incluyan esa palabra).

Recuerda usar la función .includes() para comprobar la palabra.

Puedes usar este array:

*/

const toys = [
    {id: 5, name: 'Transformers'}, 
    {id: 11, name: 'LEGO'}, 
    {id: 23, name: 'Hot Wheels'}, 
    {id: 40, name: 'Rascador de gato'},
    {id: 40, name: 'FurReal Friends gato interactivo'},
    {id: 60, name: 'Nerf Blaster'},
    {id: 71, name: 'Sylvanian Families - Familia gato'}
];
/*
function eliminaGato(lista){
    
    for (let i = 0; i <lista.length; i++){
        if (lista[i].name.toLowerCase().includes('gato')){
            lista.splice(i, lista.length - i);
        }
    }
    return lista;
}

console.log(eliminaGato(toys));

*/
/*
for (let i=0; i < toys.length;i++){
    const toy = toys[i];
    if (toy.name.includes("gato")){
        toys.splice(i, 1);
        i--; // Decrementa i para que no se salte el siguiente elemento 
    }
}

console.log(toys);
 
*/
const notcatToys = [];

for(const toy of toys){
    if(!toy.name.includes('gato')){
        notcatToys.push(toy);
    }
}
console.log(notcatToys);