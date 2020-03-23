
let log = console.log;

/* -------------------------------------------------------------------------- */
/*                                   étape 1                                  */
/* -------------------------------------------------------------------------- */
// import _ from 'lodash';
// import slug from 'slug';
// import {uniq, shuffle } from 'lodash';
// import Flickity from 'flickity';
// const ages = [1, 1, 4, 52, 12, 4];
// console.log(uniq(ages));
// function component() {
//     const element = document.createElement('div');
//     // Lodash, currently included via a script, is required for this line to work
//     // element.innerHTML = _.join(['Hello', 'webpack'], ' ');
//     element.innerHTML = "Hello Webpack !"
//     return element;
//   }
//   document.body.appendChild(component());
/* -------------------------------------------------------------------------- */
/*                                   étape 2                                  */
/* -------------------------------------------------------------------------- */

// si exporté comme defaut : 
// import toto from '../modules/config'; // quand exporté par défaut, je ne mets pas la var entre {}
// console.log(toto);


// export nommé :
// import {apiKey} from "../modules/config";
// console.log(apiKey)

// importer plusieurs éléments du même fichier :
// import {apiKey, url} from "../modules/config";
// log(apiKey, url)

// importer une fonction 
// import {apiKey, url, sayHi} from "../modules/config";
// sayHi("Anissa")

//importer en donnant un alias : 
// import {apiKey as key, url, sayHi} from "../modules/config"; // je renomme apiKey en key



/* -------------------------------------------------------------------------- */
/*                            étape 3, avec user.js                           */
/* -------------------------------------------------------------------------- */

import User, {createUrl, gravatar} from '../modules/user';

const ani = new User('Anissa Belkheir', 'anissa.belkheir@gmail.com', 'http://www.anissabelkheir.be'); // pas obligé de faire new pour la démo...
const profile = createUrl(ani.name);
const image = gravatar(ani.email);
console.log(ani);
console.log(profile);
console.log(image);
