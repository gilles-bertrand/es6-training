// je veux constuire un objet à partir de variables
const first = "Anissa";
const last = "Belkheir";
const age = 23;
const city = "Mons";

// const person = {
//     first : first,
//     last : last,
//     age : age,
//     city : city
// };

const person = {
    prenom : first,
    last,
    age,
    city
};

console.log(person);


//objets qui contiennent des fonctions 

const date = new Date();
console.log(date)
const anneeActuelle = date.getFullYear();
console.log(anneeActuelle);

const obj = {
    name : "Anissa",
    year : 2000,
    create : function() {
        console.log(this)
        return anneeActuelle - this.year;
    },
    open : function() { console.log('open the door') },
    close : function() { console.log('ferme la porte bordel !')}
}

console.log(obj.create());
obj.open();
obj.close();

const monObj = {
    name : "Anissa",
    year : 1990,
    create() {
        return anneeActuelle - this.year
    },
    open() {
        console.log('open the door')
    },
    close() {
        console.log('ferme la porte bordel !')
    }
}

console.log(monObj.create())
monObj.open();
monObj.close();




const key = "inkColor";
const value = "#123def";

// const tshirt = {
//     [key] : value
// }

const vieuxTshirt = {}
vieuxTshirt[key] = value;

// function qui sert à inverser une couleur donnée
function invertColor(color) { 
    return '#' + ("000000" + (0xFFFFFF ^ parseInt(color.substring(1), 16)).toString(16)).slice(-6)
}

const tshirt = {
    [key] : value,
    [`${key}Opposite`] : invertColor(value)
}

console.log(tshirt)


const keys = ["color", "size", "weight"];
const values = ["medium", "red", 100];

const teeshirt = {
    [keys[0]] : values[0],
    [keys[1]] : values[1],
    [keys[2]] : values[2]
}

console.log(teeshirt);

const teeteeshirt = {
    [keys.shift()] : values.shift(),
    [keys.shift()] : values.shift(),
    [keys.shift()] : values.shift()
}

console.log(teeteeshirt);


// créer un obj qui contient un string et 2 fct
// la premiere fct renvoit le string
// la deuxieme fct renvoit une phrase contenant une var passée dans les ()
// faire l'appel des fonctions dans une fonction init() (qui doit être une fonction fléchée)

const monObjet = {
    phrase : "Bonjour tout le monde !",
    sayHi() {
        // console.log(this.phrase);
        return this.phrase;
    },
    sayGoodbye(prenom) {
        // console.log(`Aurevoir ${prenom} ! A bientôt !`);
        return `Aurevoir ${prenom} ! A bientôt !`;
    }
}

const init = () => {
    // si le console.log se trouve dans les fonctions, pas besoin de console.log ici :
    // monObjet.sayHi()
    // monObjet.sayGoodbye("Anissa")
    // si c'est un return dans les fonctions, je les mets dans un console.log pour les voir :
    console.log(monObjet.sayHi())
    console.log(monObjet.sayGoodbye("Anissa"))
}

init();




const toto = {
    // element : "the door",
    open(el) {
        this.element = el;
        console.log(`open ${this.element}`);
    },
    close() {
        console.log(`close ${this.element}`);
    }
}

toto.open("the door");
toto.close();



// exo de la muerte : 
// 1 fct init
// 1 obj avec 2 fct : une qui converti d'hex vers rgb, l'autre qui fait l'inverse

// let hex = parseInt("2c", 16); // je convertis d'une base 16 (donc hexa) vers un nombre décimal
// console.log(hex);

// let color = 255;
// const result = color.toString(16); // je convertis un décimal vers un hexa
// console.log(result)


// // window.$ = window.document.querySelector.bind(document);

// // $('.qqch')

// const hexa = "#123123"
// const regex = /^#?([a-f\d]{3}|[a-f\d]{6})$/;
// console.log(regex.test(hexa));

