// https://jsonplaceholder.typicode.com/posts

// const promesseDeDatas = fetch('https://jsonplaceholder.typicode.com/posts'); // n'a pas livré les datas, mais préviens qu'il est allé les chercher et qu'il attend... qu'on lui demande de les afficher
// // console.log(promesseDeDatas)

// promesseDeDatas
//     // .then((response) => console.log(response)); // n'affiche pas le json, mais l'info comme quoi il a bien récupéré qqch... Mais pas dans le format que je veux
//     .then((response) => response.json()) // Je lui demande de me cracher le json
//     .then((response) => console.log(response)) // j'affiche le json
//     .catch((err) => console.log(err));


/* -------------------------------------------------------------------------- */
/*                             créer notre promise                            */
/* -------------------------------------------------------------------------- */

// const p = new Promise((resolve,reject) => { // je crée une promesse, qui contient 2 fct : resolve si c'est ok, reject si pas
//     setTimeout(() => { // pour simuler l'attente lors d'un appel ajax
//         resolve("Anissa est très cool !")
//         // reject(Error("message d'erreur"));
//     }, 200)
// });

// p
//     .then(res => console.log(res))
//     .catch(err => console.error(err));



/* -------------------------------------------------------------------------- */
/*                    Enchainer les promises - cas concret                    */
/* -------------------------------------------------------------------------- */

// const posts = [
//     {title: "J'aime le JavaScript", author: "Anissa Belkheir", id: 1},
//     {title: "CSS !", author: "Guillaume Danzin", id: 2},
//     {title: "Astuces de Développeurs", author: "Geoffrey Denys", id: 3},
// ]

// const authors = [
//     {name : "Geoffrey Denys", twitter : "@geoffreydenys", bio : "Le Chuck Norris du Web"},
//     {name : "Guillaume Danzin", twitter : "@guigui", bio : "Intègre et désintègre dans les règles de l'art"},
//     {name : "Anissa Belkheir", twitter : "@manissa", bio : "Ze best formatrice EVER"},
// ]

// function getPostById(id) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => { // setTimeout non obligatoires, ils ne sont là que pour imiter un temps de réponse
//             const post = posts.find((el) => el.id == id);
//             post ? resolve(post) : reject(Error("Post not found"));
//         }, 200)
//     });
// }

// function findAuthor(post) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const authorDetails = authors.find((el) => el.name === post.author );
//             if (authorDetails) {
//                 post.author = authorDetails;
//                 resolve(post);
//             } else {
//                 reject(Error('Author not found'));
//             }
//         }, 500)
//     })
// }

// getPostById(3)
//     .then(res => { // infos reçues de la premiere promise dans getPostById
//         return findAuthor(res);
//     })
//     .then(res => { // infos reçues de la deuxième promise dans findAuthor
//         console.log(res);
//     })
//     .catch(err => console.error(err)) // en cas d'erreur dans l'une des fonctions


/* -------------------------------------------------------------------------- */
/*                     travailler avec plusieurs promises                     */
/* -------------------------------------------------------------------------- */

const weather = new Promise((resolve) => {
    setTimeout(() => {
        resolve({temps: 29, conditions: "Grand soleil mais partiellement nuageux"});
    }, 2000)
});

const tweets = new Promise((resolve) => {
    setTimeout(() => {
        resolve(["J'aime la réglisse", "Mais le BBQ c'est bien aussi"]);
    }, 500)
});

Promise
    .all([weather, tweets])
    .then(res => {
        const [weatherinfos, tweetsinfos] = res;
        console.log("meteo : " + weatherinfos.temps + ' ' +weatherinfos.conditions)
        console.log("tweets : " + tweetsinfos)
    })

/* ------------------------------- cas concret ------------------------------ */

const postPromise = fetch('https://jsonplaceholder.typicode.com/posts');
const streetPromise = fetch('http://data.ratp.fr/api/datasets/1.0/search/?q=paris');

Promise
    .all([postPromise, streetPromise])
    .then(res => {
        // console.log(res)
        return Promise.all(res.map((el) => el.json()))
    })
    .then(res => {
        const [posts, ratp] = res
        console.log(posts, ratp)
    })
    .catch(err => console.error(err))