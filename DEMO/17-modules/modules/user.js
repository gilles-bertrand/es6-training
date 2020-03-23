/* -------------------------------------------------------------------------- */
/*                                   etape 3                                  */
/* -------------------------------------------------------------------------- */

//on se rend compte après coup qu'on a besoin de slug :
import slug from 'slug';
import { url } from "../modules/config" //
import { Base64 } from 'js-base64';


export default function User(name, email, website) {
    return {
        name,
        email,
        website
    }
}


export function createUrl(name) { // on va créer une fonction qui va créer un truc du genre : site.com/wes-bos si j'envoie Web Bos => besoin de slug
    return `${url}/user/${slug(name)}`
}


export function gravatar(email) {
    const newEmail = Base64.encode(email);
    const photoUrl = `https://www.gravatar.com/avatar/${newEmail}`; // je vais besoin d'un autre pluing pour l'id
    return photoUrl;
}
