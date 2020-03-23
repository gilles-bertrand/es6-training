// // Class declaration
// class Dog {

// }

// // Class expression
// const Dog = class { 

// }

//-------------------

// Une classe contient plusieurs méthode. Une seule est obligatoire c'est le constructeur
// class Dog {
//     constructor(nom, race) { // elle va définir ce qu'il se passe quand je crée une nouvelle instance de Dog
//         this.nom = nom;
//         this.race = race;
//     }

//     aboyer() {
//         console.log(`Wouf wouf ! Je m'appelle ${this.nom} et je suis un ${this.race} !`);
//     }

//     caliner() {
//         console.log(`Slurp !`);
//     }

//     static info() { // seul Dog aura accès à cette méthode, donc via Dog.info()
//         console.log("Un chien c'est 10x mieux qu'un chat");
//     }

//     get description() {
//         return `${this.nom} fait partie de la race : ${this.race}`;
//     }

//     set nickname(value) {
//         this.nick = value.trim();
//     }

//     get nickname() {
//         return this.nick || '?'; //affiche le nick, mais si pas encore donné (undefined), il affiche ?
//     }

// }

// const rex = new Dog('Rex', 'Berger Allemand');
// const ulrok = new Dog('Ulrok', 'Leonberg');

// ulrok.aboyer();
// // ulrok.info();
// Dog.info()


// // getters et setters

// // document.body.innerHTML
// // document.body.innerHTML = "qqch"
// console.log(ulrok.nickname);
// console.log(ulrok.description);
// ulrok.nickname = "  Riri  ";


//----------------------------

// class Animal {
//     constructor(type, nom) {
//         this.type = type;
//         this.nom = nom;
//         this.soif = 100;
//         this.bide = [];
//     }

//     boire() {
//         this.soif -= 10;
//         return this.soif;
//     }

//     manger(encas) {
//         this.bide.push(encas);
//         return this.bide;
//     }
// }

// class Dog extends Animal {
//     constructor(nom, race) {
//         super("chien", nom); // permet d'instancier la classe étendue (comme si je faisais un new Animal('chien', 'rex'))
//         // this.nom = nom;
//         this.race = race;
//     }

//     aboyer() {
//         console.log(`Woufwouf ! Je suis un ${this.race}`);
//     }
// }

// const elephant = new Animal("elephant","fanfan");
// console.log(elephant);

// const rex = new Dog('t-Rex', 'caniche');
// console.log(rex.nom);

// console.log(rex);

// class Chat extends Animal {
//     constructor(nom, race) {
//         super("chat", nom);
//         this.race = race;
//     }
// }

// const felix = new Chat('felix', "siamois")
// console.log(felix)


// ------------------------------

class MovieCollection extends Array {
    constructor(name, ...movies) { // je récupère tous les arguments avec un ...rest operator
        super(...movies); // je les envoie dans mon Array grâce à un ...spread operator
        this.name = name;
    }

    add(movie) {
        this.push(movie);
        // console.log(movie);
    }

    get title() {
        console.log(`Le titre de ma collection est : ${this.name}`);
    }

    topRated(limit = 10) {
        return this.sort((a,b) => a.stars > b.stars ? -1 : 1).slice(0, limit);
    }

}

// const tableau = new Array("element1", "element2");
// console.log(tableau)

const films = new MovieCollection("Mes favoris",
    { title : "White House Down", stars : 10},
    { title : "Taken", stars : 9},
    { title : "Gladiator", stars : 8},
    { title : "Orgueil et préjugés", stars : 8}
);

console.log(films)

films.add({title : "Le Seigneur des Anneaux", stars : 10});
films.add({title : "Dragons", stars : 8});

console.log(films)

films.push({title : "Le Labyrinthe de Pan", stars : 3});

console.log(films);

//------
for (var key in films) {
    console.log(films[key].title); // il boucle aussi sur le name "Mes favoris"
}

//-----

films.forEach(film => console.log(film.title)); // bouclera uniquement sur les films

films.title // fera un console.log de "Le titre de ma collection est : Mes Favoris"
console.log(films.name) // fera un console.log de "Mes Favoris"

console.log(films.topRated(3)); // affiche les 3 films qui ont les meilleurs points