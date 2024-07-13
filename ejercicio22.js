/* 

Ejercicio 22

Usa un for para remplazar todas las comidas que no sean veganas con las frutas del array de frutas.

Recuerda no usar frutas duplicadas.

Finalmente, imprime el array resultante.


*/
const fruits = ["Strawberry", "Banana", "Orange", "Apple"];

const foodSchedule = [
  { name: "Heura", isVegan: true },
  { name: "Salmon", isVegan: false },
  { name: "Tofu", isVegan: true },
  { name: "Burger", isVegan: false },
  { name: "Rice", isVegan: true },
  { name: "Pasta", isVegan: true },
];
/*
function listaVegana (comida){
    let veganaLista = [];
    for (let i = 0; i< comida.length ; i++){
        if (comida[i].isVegan === false){
            veganaLista.push(fruits[i]);
        } else {
            veganaLista.push(comida[i].name);
        }
    }
    return veganaLista;
}

console.log(listaVegana(foodSchedule));

*/
const newFood = [];
let fruitPos = 0;

for (const food of foodSchedule){ //
    if (food.isVegan){
        newFood.push(food);
   
    } else {
        newFood.push({ name: fruits[fruitPos], isVegan: true });
        fruitPos++;
    }
}
console.log(newFood);