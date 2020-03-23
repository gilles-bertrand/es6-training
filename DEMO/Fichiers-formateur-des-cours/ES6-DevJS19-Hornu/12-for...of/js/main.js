const noms = ["anissa","gilles","steph",'seb'];

// for (let i = 0; i < noms.length; i++) {
//     if (noms[i] == "steph") {
//         break;
//     }
//     console.log(noms[i]);
// }

// noms.forEach(nom => {
//     // if (nom == "steph") { // je ne peux pas faire de break dans le forEach
//     //     break;
//     // }
//     console.log(nom);
// });

// noms.forEach(nom => console.log(nom));

for (let nom of noms) {
    if (nom == "steph") {
        break;
    }
    console.log(nom);
}

console.log(noms.entries());
const next = noms.entries();

for (let nom of noms.entries()) {
    console.log(nom[0], nom[1]);
}


// for of dans arguments
function calculerSomme() {
    // console.log(arguments)
    let total = 0;
    for (let num of arguments) {
        total += num;
    }
    console.log(total);
}
calculerSomme(12,256,12,3,658,87,45);


// for of dans string
const name = "Anissa";
// console.log(name[0])
for (let letter of name) {
    console.log(letter);
}

// for of dans NodeList
const para = document.querySelectorAll('p');
for (let p of para) {
    p.addEventListener('click', function(){
        console.log(this.innerText);
    });
}


// for of sur des objets ?
const animal = {
    race : "licorne",
    type : "oiseau",
    taille : "grand",
    couleur : "arc-en-ciel"
}

// for (let prop of animal) {   //ES2017
//     console.log(prop);
// }

for (let prop of Object.keys(animal)) {
    const value = animal[prop];
    console.log(prop, value)
}

for (let key in animal) {
    const value = animal[key];
    console.log(key, value);
}