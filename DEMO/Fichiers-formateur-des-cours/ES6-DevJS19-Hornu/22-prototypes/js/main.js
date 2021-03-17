// function Dog(nom, race) {
//     this.nom = nom;
//     this.race = race;
// }
// Dog.prototype.aboyer = function() {
//     console.log(`Wouf Wouf ! Je m'appelle ${this.nom} !`);
// }

// const rex = new Dog('Rex', 'Berger Allemand');
// const ulrok = new Dog('Ulrok', 'Leonberg');
// console.log(rex);

// rex.aboyer();
// ulrok.aboyer();

// console.log(ulrok);

// Dog.prototype.aboyer = function() {
//     console.log(`Woufwouf ! Je m'appelle ${this.nom} et je suis un ${this.race}.` );
// }

// ulrok.aboyer();

// Dog.prototype.caliner = function() {
//     console.log('Slurp !');

// }

// rex.caliner();


//

function Animal(nom) {
    this.nom = nom;
}
Animal.prototype.marche = function() {
    console.log(`${this.nom} est en train de marcher.`);
}

function Chat(nom, race) {
    Animal.call(this, nom);
    this.race = race;
}

Chat.prototype = Object.create(Animal.prototype);

Chat.prototype.cri = function() {
    console.log('miaou !');
}

const felix = new Chat("felix", "siamois");
console.log(felix)

felix.cri() // hérité de Chat
felix.marche() // hérité de Animal

const ulrok = new Animal("ulrok");

console.log(ulrok)

ulrok.marche() // hérité de Animal