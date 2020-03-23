/* -------------------------------------------------------------------------- */
/*                                   config                                   */
/* -------------------------------------------------------------------------- */

// // import api from '../modules/config'; // import par défaut
// // import { url, apiKey, sayHi } from '../modules/config'; // import nommé

// // console.log(api)  // ne fonctionne que si j'ai un export par défaut dans config, sinon "undefined"


// // import api, {url as website, sayHi} from '../modules/config';
// import api, {url as website, disBonjour} from '../modules/config';

// console.log(api)
// disBonjour("Anissa");
// console.log(website)



// import { uniq } from 'lodash';

// const chiffres = [1,23,256,12,12,23,89,4,6,4,4,1];
// console.log(uniq(chiffres));


/* -------------------------------------------------------------------------- */
/*                                    user                                    */
/* -------------------------------------------------------------------------- */

import User, { createUrl, gravatar } from '../modules/user';

const ani = new User("Anissa Belkheir", "anissa@triptyk.eu", "http://www.triptyk.eu");
console.log(ani);

const website = createUrl(ani.name);
console.log(website);

const photo = gravatar(ani.email);
console.log(photo)