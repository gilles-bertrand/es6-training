const numbers = [15, 25, 35, 45, 55, 65, 75, 85, 95];

// const filteredNumbers = [];
// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] > 50) {
//         filteredNumbers.push(numbers[i]);
//     }
// }
// console.log(filteredNumbers);

const filteredNumbers = numbers.filter(function(num) {
    return num > 50; // si mon num est > 50 push le dans filteredNumbers
});
console.log(filteredNumbers);

// exo : filtrer les admins
const users = [
    {id : 1, admin : true, city: "mons"},
    {id : 2, admin : false, city: "bxl"},
    {id : 3, admin : false, city: "mons"},
    {id : 4, admin : true, city: "namur"},
    {id : 5, admin : false, city: "tournai"}
];

const admins = users.filter(function(user) {
    return user.admin; // return uniquement si user.admin == true
});
console.log(admins);

// exo : créer une fonction qui fait l'inverse du filter
reject(users, "admin", true);
// [
//     {id : 2, admin : false},
//     {id : 3, admin : false},
//     {id : 5, admin : false}
// ]
function reject(tab, prop, val) {
    return tab.filter(function(element) {
        return element[prop] != val;
    });
}
console.log(reject(users, "admin", true))
console.log(reject(users, "city", "mons"))


//exo: créer une fonction qui filtre tous les nombres pairs d'un array
var nums = [2,23,256,1,4,7,9,8,36,15];
function filterEven(tab) {
    return tab.filter(function(el) {
        // return el%2 == 0
        return !(el%2)
    });
}

console.log(filterEven(nums))


//exo:
const ar = [12, "dfdf", null, 23,5,6,"rerer",8,456, {}, [], undefined]
console.log(maFct(ar, 3));
function maFct(tab, mult) {
    const tabFiltre = tab.filter(function(el){
        return typeof el == "number";
    });

    const calcul = tabFiltre.map(function(el){
        return el*mult;
    });

    // return tabFiltre
    return calcul;
}

// version raccourcie :
function maFct(tab, mult) {
    return tab
        .filter(function(el){
            return typeof el == "number";
        })
        .map(function(el){
            return el*mult;
        });
}

// version raccourcie (mais on n'a pas encore vu ça):
function maFct(tab, mult) {
    return tab
        .filter(el => typeof el == "number")
        .map(el => el*mult);
}
