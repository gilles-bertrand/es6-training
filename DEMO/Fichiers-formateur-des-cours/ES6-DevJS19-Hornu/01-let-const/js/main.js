var maVar = "qqch";
console.log(maVar);

let prenom = "Anissa";
console.log(prenom);

const city = "Mons";
console.log(city);

// city = "Lille";

for (var i = 0; i < 10; i++) {
    console.log(i);
    var toto = "tata"
}

console.log('apres la boucle :' + i);

// function maFct() {
//     var toto = "tata"
// }

console.log(toto);

for (let j = 0; j < 10; j++) {
    console.log(j)
}

// console.log('apres la boucle '+j)


var qqch = "autre chose";
var qqch = "encore autre chose";
console.log(qqch);

let the = "sun shine";
if (true) {
    let the = "sun";
}
console.log(the); // sun shine
// let the = "rain"


const obj = {
    name : "Anissa",
    lastname : "Belkheir"
}

obj.ville = "Mons"; // je peux tjrs changer l'intérieur de l'obj
console.log(obj);
// obj = { // mais je ne peux pas remplacer l'objet lui meme
//     test : "test"
// }

Object.freeze(obj); // j'empêche toute modification de l'intérieur de l'obj
obj.age = 25; // n'affiche pas d'erreur, mais ne rajoute pas cette propriété à obj
obj.name = "Georgette";
console.log(obj);

var test = {"jour" : "nuit"};
Object.freeze(test);
test.date = "mercredi";
console.log(test); // Le freeze fonctionne aussi sur les var... : on peut modifier la var, mais pas le contenu de l'obj

test = "autre chose";
console.log(test)

const tab = ["lundi", "mardi"];
tab.push('mercredi', "jeudi");
console.log(tab);
Object.freeze(tab);
// tab.push('vendredi');
// console.log(tab)
