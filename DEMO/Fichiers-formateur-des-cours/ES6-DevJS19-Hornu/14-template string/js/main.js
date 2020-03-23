// const name = "Monia";
// const city = "Tervuren";
// console.log('Ma soeur '+name+' habite à '+city);
// console.log(`Ma soeur ${name} habite à ${city}`); //backtick

// // let text = "Ceci est une phrase
// // sur plusieurs lignes";

// // let text = "Ceci est une phrase \
// // sur plusieurs lignes";

// // let text = "Ceci est une phrase";
// // text += "sur plusieurs lignes";

// let text = `
//         Ceci est une phrase
//         sur plusieurs lignes
//     `;
// console.log(text);

// // const person = {
// //     name : "Anissa",
// //     job : "Front-end dev",
// //     city : "Mons",
// //     bio : "Anissa est la best formatrice ever..."
// // }

// // const contenu = `
// //     <div class="person">
// //         <h2>
// //             ${person.name}
// //             <span class="job">${person.job}</span>
// //         </h2>
// //         <p class="city">${person.city}</p>
// //         <p class="bio">${person.bio}</p>
// //     </div>
// // `;

// // document.querySelector('.output').innerHTML = contenu;


// // exemple avec boucle
// const dogs = [
//     {name : "Rex", age : 9},
//     {name : "Cannelle", age : 6},
//     {name : "Snickers", age : 12}
// ];

// // en temps normal, j'aurais fait des createElement('ul') dans lequel j'aurais mis des createElement('li') que j'aurais généré en bouclant dans mon objet, puis j'aurais "reconstruit" les balises html pour obtenir le résultat voulu (rappel, on a déjà fait ça avec les générations de thumbnails pour les galeries par exemple)
// // const contenu = `
// //     <ul class="dogs">
// //         ${dogs.map(dog => `
// //             <li>
// //                 ${dog.name} a ${dog.age*7} ans 
// //             </li>
// //         `).join('')}
// //     </ul>
// // `;
// // document.querySelector('.output').innerHTML = contenu;

// // const tab = dogs.map(dog => {
// //     // return '<li>'+dog.name+' a '+(dog.age)*7+' ans</li>'
// //     return `<li>
// //                 ${dog.name} a ${dog.age*7} ans
// //             </li>`
// // }).join(''); 
// // console.log(tab);
// // document.querySelector('.output').innerHTML = tab;

// const computers = [
//     { name : 'Apple', ram : 16},
//     { name : 'IBM', ram : 8},
//     { name : 'Tuxedo', ram : 32}
// ];

// // ul /li Mon Appel a 16 Gigas de ram

// const contenu = `
//     <ul>
//         ${computers.map(item => `
//             <li>
//                 Mon ${item.name} a ${item.ram} Gigas de ram
//             </li>
//         `).join('')}
//     </ul>
// `; 

// document.querySelector('.output').innerHTML = contenu;


// // avec un if

// const song = {
//     name : 'Dying to live',
//     artist : 'Tupac',
//     featuring : 'Biggie Smalls'
// }
// // Dying to live - Tupac (Featuring Biggie Smalls)
// // Dying to live - Tupac (Featuring undefined) // il faut prévoir ce qu'il se passe si pas de featuring

// const chanson = `
//     <div>
//         ${song.name} - ${song.artist}
//         ${(song.featuring) ? `(Featuring ${song.featuring})` : '' }
//     </div>
// `

// document.querySelector('.output').innerHTML = chanson;

// const album = [
//     { name : "ere", artist : "zerz", featuring : "zerzrhgh"},
//     { name : "zerzer", artist : "zerzer" },
//     { name : "zerze", artist : "zerze" },
//     { name : "erzer", artist : "zerzer", featuring : "fghfghfgh"}
// ]

// const showAlbum = `
//     <ul>
//         ${album.map(item => `
//             <li>
//                 ${item.name} - ${item.artist}
//                 ${(item.featuring) ? `(Featuring ${item.featuring})` : '' }
//             </li>
//         `).join('')}
//     </ul>
// `;

// document.querySelector('.output').innerHTML = showAlbum;



// const beer = {
//     name : "Cuvée des Trolls",
//     brewery : "Dubuisson",
//     keywords : ["fruitée", "trouble", "sucrée", "amer"]
// }

// const bieres = `
//     <div class="beer">
//         <h2>${beer.name}</h2>
//         <h3>${beer.brewery}</h3>
//         ${renderKeywords(beer.keywords)}
//     </div>
// `;

// function renderKeywords(words) {
//     return `
//         <ul>
//             ${words.map(item => `
//                 <li>${item}</li>
//             `).join('')}
//         </ul>
//     `
// }

// document.querySelector('.output').innerHTML = bieres;


// // générer ces liens dans un ul/li en utilisant une fonction
// const boutons = [
//     { texte : 'triptyk', link : 'http://www.triptyk.eu'},
//     { texte : 'technocite', link : 'http://www.technocite.be'},
//     { texte : 'ember', link : 'http://www.emberjs.com'},
//     { texte : 'glimmer', link : 'http://www.glimmerjs.com'}
// ]

// // méthode #1 + creatLink()
// const contenu = `
//     <div class="liens">
//         <ul> ${boutons.map(bouton => createLink(bouton)).join('')} </ul>
//     </div>
// `

// // méthode #2 + createList()
// const contenu2 = `
//     <div class="liens">
//         ${createList(boutons)}
//     </div>
// `

// function createLink(btn) {
//     return `
//         <li><a href="${btn.link}">${btn.texte}</a></li>
//     `
// }

// function createList(boutons) {
//     return `<ul>
//         ${boutons.map(bouton => `
//             <li><a href="${bouton.link}">${bouton.texte}</a></li>
//         `).join('')}
//     </ul>`
// }


// tagged strings

const name = "Snickers";
const age = 100;
const phrase = highlight`Mon chien ${name} va avoir ${age} ans`;


// function highlight(strings, n, a) {
//     // debugger;
//     const str = `${strings[0]}<mark>${n}</mark>${strings[1]}<mark>${a}</mark>${strings[2]}`; 
//     return str;
// }

function highlight(strings, ...values) {
    // debugger;
    let str = '';
    strings.forEach((string, index) => {
        str += `${string} <mark>${values[index] || ''}</mark>` ;
    });
    return str;
}

// console.log(phrase);
document.querySelector('.output').innerHTML = phrase;




// function calculSomme() {
//     let total = 0
//     for (let num of arguments) {
//         total += num
//     }

//     return total;
// }

function calculSomme(txt, age, ...nombres) {
    console.log(txt)
    console.log(age)
    console.log(nombres)
}

calculSomme("texte",12,15,14,23,15,23)


function team(boss, assistant, ...employees) {
    console.log(boss)
    console.log(assistant)
    console.log(employees)
}

team('Gilles', 'Joëlle', 'Anissa', {name:"Steph"}, 'Geoffrey', "Seb")