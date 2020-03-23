const players = ["Anissa", "Geoffrey", "Guillaume", "Maxime", "Maximilien"];
const [capitaine, gardien, ...joueurs] = players;
console.log(capitaine, gardien, joueurs);


const courses = ["Anissa", 123, 5.5, 35, 2, 10];
const [name, id, ...runs] = courses;
console.log(name, id, runs);


function convertCurrency(rate, tax, ...amounts) {
    console.log(rate, tax, amounts);
    return amounts.map(montant => Math.floor(montant*rate + montant*tax));
}

console.log(convertCurrency(1.12, 0.13, 100, 50, 20, 456));


// const array1 = ["rer", "rerer"];
// const array2 = ["bdgg", "rerzer", "dfsf", "ererer"];
// const pizzas = [];

// // array1.forEach(element => pizzas.push(element))
// // array2.forEach(element => pizzas.push(element))

// array2.forEach((element, index) => {
//     pizzas.push(element)
//     pizzas.push(array1[index]);
// })


// console.log(pizzas)