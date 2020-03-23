import slug from 'slug'; // c'est l'export par défaut, donc je le nomme comme je veux et je ne mets pas de {}
import { Base64 } from 'js-base64';
import { url } from '../modules/config';

export default function User(name, email, website) {
    return {
        name,
        email,
        url : website
    }
}

export function createUrl(name) { // on va créer un url du genre : http://www.monsite.com/user/anissa-belkheir
    return `${url}/user/${slug(name, {lower: true})}`
}

export function gravatar(email) { // on passe notre email normal, mais il va être transformé en base64
    const newEmail = Base64.encode(email);
    const photoUrl = `http://www.gravatar.com/avatar/${newEmail}`;
    return photoUrl;
}