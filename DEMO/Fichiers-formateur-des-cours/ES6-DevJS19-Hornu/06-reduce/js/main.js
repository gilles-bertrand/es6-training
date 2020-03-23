// const numbers = [10,20,30];
// // let somme = 15;
// // for (let i = 0; i < numbers.length; i++) {
// //     somme += numbers[i];
// // }
// // console.log(somme);

// let somme = numbers.reduce(function(total, num){
//     return total + num
// }, 0);
// console.log(somme)

// var colors = [
//     {color : 'red'},
//     {color : 'blue'},
//     {color : 'green'}
// ];

// // ["red", "blue", "green"]
// var couleurs = colors.reduce(function(current, next){
//     current.push(next.color);
//     return current;
// }, []);
// console.log(couleurs)

//exo : calculer le total de la wishlist
const wishlist = [
    {title : "tesla", price : 90000},
    {title : "d5", price : 7000},
    {title : "une deuxieme tesla", price : 90000},
    {title : "voyage en Islande", price : 3000},
    {title : "pied Apple", price : 1000}
]

const prix = wishlist.reduce(function(total, element){
    return total + element.price
}, 0);
console.log(prix);


//exo :
const panierDeFruits = ["banane", "pomme", "orange", "banane", "banane", "melon", "poire", "pomme", "cerise", "orange", "banane"];

// ouput attendu :
// {
//     "banane" : 4,
//     "pomme" : 2,
//     "orange" : 2,
//     "melon" : 1,
//     "poire" : 1,
//     "cerise" : 1
// }

// let o = {}
// // o.banane = 1
// o["banane"] = 5
// console.log(o)
// o.pomme = 1
// console.log(o);
// o.banane = o.banane + 1
// console.log(o);

const decompte = panierDeFruits.reduce(function(panier,fruit) {
    // if (panier[fruit]) {
    //     panier[fruit] = panier[fruit] + 1
    // } else {
    //     panier[fruit] = 1;
    // }

    panier[fruit] = (panier[fruit] || 0) + 1;
    return panier;
}, {});
console.log(decompte);



// exo : créer une fonction qui permet de déterminer s'il y a autant de ( que de )

testParentheses("(((())()))") // ok
testParentheses('((())()') // pas ok

function testParentheses(string) {
    return string
        .split("")
        .reduce(function(count, s){
            if (count < 0) { // si j'ai une ) avant d'en avoir une (
                return count; // je condamne le count à rester en négatif ---> résultat false
            }
            if (s == "(") {
                return ++count;
            }
            if (s == ")") {
                return --count;
            }
            return count; // ignorer les caractères qui ne sont pas des parenthèses
        }, 0);
}

console.log(testParentheses("()e)(t)("));
console.log(testParentheses("((     re(())(236)))"));
console.log(testParentheses('((())()'));



