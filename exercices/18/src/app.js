/* global document */
import { uniq, join } from 'lodash-es';
// import _ from 'lodash-es';
import user from './modules/user';
import { key, generateUIDFromEmail as UIDFromMail, generatePassword } from './modules/user';
import calculTVA from './modules/utils';
// import { user } from './modules/user';

const init = () => {
  const values = [
    'Gilles',
    'joelle',
    'Gilles',
    'vincent',
    'stephane',
    'vincent',
    'geoffrey',
    'geoffrey',
    'bogdan',
    'steve',
    'steve',
    'anatole'
  ];
  document.querySelector('#wrapper').innerHTML = uniq(values);
  document.querySelector('#wrapper2').innerHTML = join(values);
  // document.querySelector('#wrapper').innerHTML = _.uniq(values);
  console.log(user('gilles', 'gilles@triptyk.eu'));
  console.log(key);
  console.log(UIDFromMail('gilles@triptyk.eu'));
  console.log(generatePassword('gilles@triptyk.eu'));

  console.log(calculTVA({ taux: 0.21, total: 1000 }));
  console.log(calculTVA({ total: 1000, taux: 0.21 }));
};
init();
