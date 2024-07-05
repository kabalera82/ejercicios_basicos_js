/*

Ejercicio 15

Includes: Haz un bucle y muestra por consola todos aquellos valores del array que incluyan la palabra "Camiseta".

Usa la función .includes de javascript.

*/

const products = ['Camiseta de Metallica', 'Pantalón vaquero', 'Gorra de beisbol', 'Camiseta de Basket', 'Cinturón de Orión', 'AC/DC Camiseta']

function cuentaCamiseta(lista){
    let recorreLista = [];
    for (let articulo of lista){
        if (articulo.toLowerCase().includes('camiseta')){
            recorreLista.push(articulo);
        }
    }
    return recorreLista;
}

console.log(cuentaCamiseta(products));