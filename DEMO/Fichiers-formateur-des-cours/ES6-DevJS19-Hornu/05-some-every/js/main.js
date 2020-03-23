const ages = [32,12,19,15,46];

//Est-ce qu'il y a au moins 1 adulte dans l'array ages ?
// let adultes = false;
// for (let i = 0; i < ages.length; i++) {
//     if (ages[i] >= 18) {
//         adultes = true;
//     }
// }
// console.log(adultes);

//Est-ce qu'il y a au moins 1 adulte dans l'array ages ?
let adultes = ages.some(function(el) {
    return el >= 18;
});
console.log(adultes);

// let drink = true;
// //Est-ce que tout le monde est en âge de boire ?
// for (let i = 0; i < ages.length; i++) {
//     if (ages[i] < 18) { // si j'ai ne serait-ce qu'un seul élément qui ne rempli pas la condition --> false
//         drink = false;
//     }
// }
// console.log(drink);

let drink = ages.every(function(el) {
    return el >= 18
});
console.log(drink)