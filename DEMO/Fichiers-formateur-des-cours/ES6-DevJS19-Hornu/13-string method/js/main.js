//
const texte = "hello";
console.log(texte.startsWith('he'));
console.log(texte.endsWith('lo'));
console.log(texte.includes('ll'));
console.log(texte.repeat(3));


const ref = "EDC2";
console.log(ref.startsWith('edc')); // false -> sensible à la casse

const numeroVol = "20-AC45612377-FF3";
// const numeroVol = "20-AB4561AC77-FF3";
console.log(numeroVol.startsWith('AC', 3)); // j'ignore les 3 premiers caractères


// exemple utilisation du repeat :
const marque = "Audi";
const modele = "Q7";
const couleur = "Bleu électrique";

function decalage(str, length = 20) {
    return "->" + " ".repeat(length-str.length) + str;
    // "->           bleu électrique"
    // "->                      audi"
    // "->                        Q7"
}

console.log(decalage(marque))
console.log(decalage(modele))
console.log(decalage(couleur))