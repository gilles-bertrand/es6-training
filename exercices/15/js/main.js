/* eslint no-console:0 */
const init = () => {
  //   let expense = {
  //     type: 'business',
  //     amount: '€ 50.00'
  //   };
  //   let type = expense.type;
  //   let amount = expense.amount;
  // es6
  //   let { type, amount } = expense;
  //   type = 'family';
  //   console.log(type);
  //   console.log(amount);
  //   console.log(expense);

  const savedFile = {
    extension: 'jpg',
    name: 'photo',
    size: 14400
  };
  //   function fileStats(file) {
  //     return `le fichier ${file.name}.${file.extension} fait ${file.size} octets`;
  //   }

  //   function fileStats({ name, extension, size }) {
  //     return `le fichier ${name}.${extension} fait ${size} octets`;
  //   }

  //   console.log(fileStats(savedFile));

  function tipCalc({ total, tip = 10, tax = 1.21 }) {
    // if (tip === undefined) tip = 10;
    // if (tax === undefined) tax = 1.21;
    // let tipIn = tip || 10;
    // let taxIn = tax || 1.21;
    // console.log(total, tip, tax);
    return (total + tip) * tax;
  }
  //   console.log(tipCalc({ total: 120, tip: 10, tax: 1.21 }));
  //   console.log(tipCalc({ total: 120 }));
  //   let b = 200.3;
  //   let total = b * 3;
  //   console.log(total);
  //   const person = {
  //     first: 'gilles',
  //     last: 'bertrand',
  //     country: 'belgium',
  //     city: 'mons',
  //     links: {
  //       social: {
  //         twitter: 'gilles-bertrand',
  //         facebook: 'http://facebook.com/TRIPTYK'
  //       },
  //       web: {
  //         blog: 'http://www.triptyk.eu'
  //       }
  //     }
  //   };
  //   const facebook = 'truc';
  //   const { first, last } = person;
  //   console.log(first);
  //   const { twitter, facebook: fb } = person.links.social;
  //   console.log(twitter);
  //   console.log(facebook);
  //   console.log(fb);

  //   const config = ['#ff0000', '/var/www', '123'];
  //   const color = config[0];
  //   const folder = config[1];
  //   const token = config[2];
  const [color, folder, token] = ['#ff0000', '/var/www', '123'];
  console.log(color, folder, token);
  const workers = [
    'Gilles',
    'joelle',
    'stephane',
    'steve',
    'anissa',
    'geoffrey',
    'guillaume',
    'bogdan'
  ];
  const [boss, assistant, ...team] = workers;
  console.log(boss);
  console.log(assistant);
  console.log(team);
};
init();
