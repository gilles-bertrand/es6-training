const person = {
    first : "Gilles", 
    last : "Bertrand",
    country : 'Belgium',
    city : 'Hyon',
    twitter : '@thecrazydigital'
};

// on a appris à faire ça :
// const first = person.first;
// const last = person.last;

// en déstructurant :
const {first, last, twitter} = person;

// console.log(first, last)
// console.log(twitter)



const infos = {
    first : "Anissa", 
    last : "Belkheir",
    country : 'Belgium',
    city : 'Mons',
    links : {
        social : {
            twitter : "@manissa",
            instagram : "@anissabelkheir"
        },
        website : "https://www.anissabelkheir.be"
    }
};

const {twitter : tw, instagram: ig} = infos.links.social;
// const tw = infos.links.social.twitter
console.log(tw, ig)



const settings = {
    speed : 150
}

const {speed, width = 300} = settings;
console.log(speed, width);

// /!\ attention, la valeur par défaut ne sera prise en compte que si le contenu est undefined
var {dogname = "Snickers"} = {dogname : undefined};
console.log(dogname) // Snickers

var {dogname = "Snickers"} = {dogname : 0};
console.log(dogname) // 0

var {dogname = "Snickers"} = {dogname : null};
console.log(dogname) // null

var {dogname = "Snickers"} = {dogname : false};
console.log(dogname) // false

// Tout en même (renommer + donner une valeur par défaut)

const personne = {
    first : "Anissa",
    last : "Belkheir"
}
const {first : f = "toto", middle : m = "Ani", last : l = "tata"} = personne;
console.log(f, m, l); // Anissa Ani Belkheir

// Déstructurer un array : 
const details = ["Anissa Belkheir", 123, "anissabelkheir.be"];
// const nom = details[0];
// const id = details[1];
// const website = details[2];
const [nom, id, website] = details; // je garde le même ordre
console.log(nom, id, website);


// Déstructurer un string  ---> passer par un array
const data = "Basketball,Sports,90210,23";
const [itemName, category, sku, inventory] = data.split(',');


// Déstructurer avec ...rest
const team = ["Gilles", "Joelle", "Anissa", "Geoffrey", "Steph"];
const [boss, assistant, ...employees] = team;
console.log(boss)
console.log(assistant)
console.log(employees)

// Inverser deux variables
let titulaire = "Hulk";
let remplacant = "The Rock";

// en temps normal :
// let temp = remplacant;
// remplacant = titulaire;
// titulaire = temp;

// en déstructurant :
// const joueurs =  [titulaire, remplacant];
[remplacant, titulaire] = [titulaire, remplacant];
// [remplacant, titulaire] = joueurs;

// const [prenom, nom] = ["Anissa", "Belkheir"]


//déstructurer une fonction
function convertCurrency(montant) {
    const converted = {
        USD : montant*1.12,
        GBP : montant*0.9,
        RUS : montant*71.65,
        JAP : montant*121.75
    }

    return converted;
}

const {RUS, USD : dollar, GBP, JAP} = convertCurrency(100);
console.log(dollar, RUS)


// Déstructurer arguments d'une fonction :
function calculAddition(prix, pourboire = 0.15, taxe = 0.13) {
    return prix + prix*pourboire + prix*taxe;
}

console.log(calculAddition(100, undefined, 0.2)); 

function calculAddition2({taxe = 0.13, prix = 100, pourboire = 0.15} = {}) {
    return prix + prix*pourboire + prix*taxe;
}

console.log(calculAddition2({prix : 100, taxe : 0.2}));
console.log(calculAddition2()); // si je n'envoie pas d'objet, je vais avoir une erreur, donc il faut donner une valeur par défaut à l'argument que j'ai dans ma fonction

// const {pourboire = 0.13, prix, taxe} = {prix: 100, taxe : 0.15}