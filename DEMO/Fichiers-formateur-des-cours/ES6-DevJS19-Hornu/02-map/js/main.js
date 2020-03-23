// const nombres = [1,2,3,4,5,6,7,8];
// const doubleNombres = [];

// for (let i = 0; i < nombres.length; i++) {
//     doubleNombres.push(nombres[i]*2);
// }
// console.log(doubleNombres);

// const doubleNombres = nombres.map(function(nombre, index){
//     if (index == 3) {
//         return 'hep' + nombre*3;
//     }
//     return nombre*2;
// });

// console.log(doubleNombres);

// bientôt, on l'écrira comme ça :
// const doubleNombres = nombres.map(nombre => nombre*2);

// exo : me faire un array qui contient toutes les hauteurs;
// const images = [
//     { height: '32px', width: '450px', color: '#dfe253'},
//     { height: '54px', width: '562px', color: '#dfe253'},
//     { height: '87px', width: '454px', color: '#dfe253'},
//     { height: '65px', width: '788px', color: '#dfe253'},
//     { height: '23px', width: '362px', color: '#dfe253'},
//     { height: '77px', width: '450px', color: '#dfe253'}
// ];

// // ['32px', '54px', '87px', '65px', '23px', '77px'];

// const hauteurs = images.map(function(image){
//     return image.height;
// });

// console.log(hauteurs);

// fonction qui converti une chaine de caractères en majuscules 
// capitalize('hello tout le monde, comment ça va ?'); // 'HELLO TOUT LE MONDE, COMMENT CA VA ?'

// var nom = "Anissa Belkheir";
// var splitedName = nom.split('');
// console.log(splitedName);
// var newName = splitedName.join('*');
// console.log(newName);

// function capitalize(s) {
    // .split()
    // const stringArray = s.split('');
    // console.log(stringArray);
    // // .map()
    // const majArray = stringArray.map(function(lettre) {
    //     return lettre.toUpperCase();
    // });
    // console.log(majArray);
    // // .join()
    // const stringMaj = majArray.join('');
    // console.log(stringMaj);

    // ou :
    // console.log(
    //     s.split('').map(function(lettre){
    //         return lettre.toUpperCase();
    //     }).join('')
    // );

    //ou :
//     return s.split('').map(function(lettre){
//         return lettre.toUpperCase();
//     }).join('')
// }
// // capitalize('hello tout le monde, comment ça va ?') // dans le cas où le console.log est dans la fct
// console.log(capitalize('hello tout le monde, comment ça va ?'));



// function capitalizeWord(string) {
//     return string.split(' ').map(function(mot, index) {
//         // if (index%2) { // sous entend : if (index%2 == 1), donc tous les index impairs
//         //     return mot.toUpperCase();
//         // }
//         // return mot.toLowerCase();
//         // condition ternaire :
//         return index%2 ? mot.toUpperCase() : mot.toLowerCase();
//     }).join(' ');
// }

// console.log(capitalizeWord("Ceci est une phrase qu'il va falloir modifier"));

// exo : créer une fonction qui décale les lettres d'un mot
// exemple : shiftLetters('bonjour') ----> "cpokpvs"
// vous aurez besoin de .charCodeAt() et de String.fromCharCode()

// var mot = ['t', 'o', 't'];
// console.log(mot[0].charCodeAt()); // me dit quel est le code de la mettre t ---> 116
// console.log(String.fromCharCode(116)); // me dit quelle est la lettre du code 116 ----> t

// function shiftLetters(s) {
//     return s.split('').map(function(lettre) {
//         return String.fromCharCode(lettre.charCodeAt() + 1);
//     }).join("");
// }

// console.log(shiftLetters('bonjour'));

// function shiftLettersBis(phrase) {
//     return phrase.split(' ').map(function(mot) {
//         return mot.split('').map(function(lettre) {
//             return String.fromCharCode(lettre.charCodeAt() + 1);
//         }).join('');
//     }).join(' ');
// }

// console.log(shiftLettersBis('Bonjour tout le monde'));




const images = [
    { height: '32px', width: '450px', color: '#dfe253'},
    { height: '54px', width: '562px', color: '#dfe253'},
    { height: '87px', width: '454px', color: '#dfe253'},
    { height: '65px', width: '788px', color: '#dfe253'},
    { height: '23px', width: '362px', color: '#dfe253'},
    { height: '77px', width: '450px', color: '#dfe253'}
];

// tri(images, "width")
// ['450px', '562px', '454px', '788px','362px', '450px']

// tri(images, ["width", "color"], "object")
// [
//     {width : '', color: ''},
//     {width : '', color: '' }
// ]

// tri(images, ["width", "color"], "array")
// [
//     ['450px', '#dfe253'],
//     ['362px', '#dfe253']
// ]

// const machin = { name : "Ned", city : 'winterfell', continent :'westeros', children : 5}
// const properties = ["name", "children", "city"];


// // dans la fonction si returnType == 'object'
// return array.map(function(elem) {
//     const personnage = {};
//     for (let i = 0; i < properties.length; i++) {
//         personnage[properties[i]] = elem[properties[i]];
//     }
//     return personnage;
// });

function tri(tableau, properties, returnType) {
    if (!Array.isArray(properties)) { // dans le cas où properties n'est pas un array
        return tableau.map(function(element){
            return element[properties];
        });
    } else { // dans le cas où properties est un array
        if (returnType == 'object') {
            return tableau.map(function(element){
                const o = {};
                for (let i = 0; i < properties.length; i++) {
                    o[properties[i]] = element[properties[i]];
                }
                return o;
            });
        } else {
            return tableau.map(function(element){
                return properties.map(function(property) {
                    return element[property];
                });
            });
        }
    }
}

console.log(tri(images, "height"))
console.log(tri(images, ["width", "color"], "object"));
console.log(tri(images, ["width", "color"], "array"));


const trips = [
    {destination : 'Bruxelles', distance : "65km", country: "Belgium"},
    {destination : "Marseilles", distance : "1000km", country: "France"},
    {destination : "Namur", distance : "75km", country: "Belgium"}
]

console.log(tri(trips, "destination"));
console.log(tri(trips, ["destination", "country"], "object"));