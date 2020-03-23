/* -------------------------------------------------------------------------- */
/*                     Différence synchrone et asynchrone                     */
/* -------------------------------------------------------------------------- */

var somme = (num1, num2) => num1 + num2;
console.log(somme(1,2));

// Le résultat s'affiche tout de suite -> fonction synchrone

var showImg = img => {
    const i = document.createElement('img');
    i.alt = img;
    i.src = img;
    i.id = "image";
    document.getElementsByTagName('body')[0].appendChild(i);
}

showImg('https://eoimages.gsfc.nasa.gov/images/imagerecords/73000/73751/world.topo.bathy.200407.3x5400x2700.png');
console.log(document.getElementById('image').height)

// Le résultat ne s'affiche pas tout de suite : c'est une fonction asynchrone

// Je dois créer un timeout (ou une promise) pour laisser le temps à la fonction de faire son job, avant de continuer

setTimeout(() =>  {
    console.log(document.getElementById('image').height)
}, 500)


/* -------------------------------------------------------------------------- */
/*                        Exemple avec custom promise                         */
/* -------------------------------------------------------------------------- */

// breath(1000, function() {
//     breath(500, function() {
//         breath(200, function() {
//             breath(1200, function() {
//                 // ...
//             })
//         })
//     })
// })

// function breath(duree) {
//     return new Promise((resolve, reject) => {
//         duree < 500 ?
//             reject(Error(`Erreur : pas assez long`)) : 
//             resolve(`Respiration retenue pendant : ${duree}ms`)
//     });
// }

// breath(1000)
//     .then(res => {
//         console.log(res);
//         return breath(900)
//     })
//     .then(res => {
//         console.log(res);
//         return breath(1000)
//     })
//     .then(res => {
//         console.log(res);
//         return breath(200)
//     })
//     .then(res => {
//         console.log(res);
//         return breath(500)
//     })
//     .then(res => {
//         console.log(res);
//     })
//     .catch(err => console.error(err))

/* -------------------------------------------------------------------------- */
/*                        Faire pareil avec async await                       */
/* -------------------------------------------------------------------------- */

// setInterval(() => console.log(Date.now()), 1000);

function breath(duree) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            duree < 500 ?
                reject(Error(`Erreur : pas assez long`)) : 
                resolve(`Respiration retenue pendant : ${duree}ms`)
        }, duree)
    });
}

// await breath(1000);
// await breath(1000);

// async function go() {
//     console.log('start')

//     const res = await breath(1000);
//     console.log(res);

//     const res1 = await breath(3000);
//     console.log(res1);

//     const res2 = await breath(800);
//     console.log(res2);

//     const res3 = await breath(900);
//     console.log(res3);

//     console.log('stop')
// }

// Comment gérer les erreurs ???

// async function go() {
//     try {
//         console.log('start')
//         const res = await breath(1000);
//         console.log(res);
//         const res1 = await breath(3000);
//         console.log(res1);
//         const res2 = await breath(800);
//         console.log(res2);
//         const res3 = await breath(400);
//         console.log(res3);
//         console.log('stop')
//     } catch(err) {
//         // console.error("Ohhh nooooon, ça marche pas")
//         console.error(err)
//     }
// }

// go();

// AUTRE METHODE pour gérer les erreurs (à la place de try catch)

async function go(prenom, nom) {
    console.log(`start with ${prenom} ${nom}`)
    const res = await breath(1000);
    console.log(res);
    const res1 = await breath(3000);
    console.log(res1);
    const res2 = await breath(800);
    console.log(res2);
    const res3 = await breath(400);
    console.log(res3);
    console.log('stop');
}

function catchError(fn) {
    return function(...args) { // ...Rest operator
        return fn(...args).catch(err => console.error(err)) // ...Spread operator
    }
}

const fonctionEntouree = catchError(go);
fonctionEntouree("Anissa", "Belkheir")