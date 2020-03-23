// 1. sélectionner tous les li
const list = Array.from(document.querySelectorAll('li'));

// 2. filtrer pour ne garder que les li qui contiennent flexbox
const filtered = list.filter(item => item.textContent.includes('Flexbox'));
console.log(filtered);

// 3. map pour récolter les timing
const time = filtered.map(item => item.dataset.time);
// const time = filtered.map(item => {
//     return item.dataset.time
// });
console.log(time);

// 4. convertir ces durées en secondes
const seconds = time.map(item => {
    const temp = item.split(':'); // ['5', '17'];
    return parseInt(temp[0])*60 + parseInt(temp[1]);
});

// j'aurais pu le faire en une seule ligne :
// const seconds = time.map(item => parseInt(item.split(':')[0])*60 + parseInt(item.split(':')[1]));

console.log(seconds);

// 5. calculer le total en secondes

const total = seconds.reduce((tot, item) => tot + item, 0); 

console.log(total);



// version plus courte :

const resultat = Array.from(document.querySelectorAll('li'))
    .filter(item => item.textContent.includes('Flexbox'))
    .map(item => item.dataset.time)
    // .map(item => parseInt(item.split(':')[0])*60 + parseInt(item.split(':')[1]))
    .map(item => {
        const temp = item.split(':'); // ['5', '17'];
        return parseInt(temp[0])*60 + parseInt(temp[1]);
    })
    .reduce((tot, item) => tot + item, 0);
console.log(resultat);