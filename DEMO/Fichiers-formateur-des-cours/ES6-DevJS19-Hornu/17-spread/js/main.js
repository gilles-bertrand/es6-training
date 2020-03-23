const featured = ["Barbecue", "Margherita", "Hawaian"];
const specialty = ["Tartiflette", "4 saisons", "Merguez Couscous"];

//fusionner les arrays
// const pizzas = featured.concat(specialty);
// console.log(pizzas)

// Si je veux intercaller une végé entre les 2 arrays
// let pizzas = [];
// pizzas = pizzas.concat(featured);
// pizzas.push('Vegetarienne');
// pizzas = pizzas.concat(specialty);
// console.log(pizzas);

// spread :
const pizzas = [...featured, "végétarienne", ...specialty];
// const pizzas = ["Barbecue", "Margherita", "Hawaian", ...specialty];
// console.log(pizzas);


// let pizzasDuVendredi = pizzas;
// console.log(pizzas)
// console.log(pizzasDuVendredi)
// pizzasDuVendredi[0] = "Calzone";
// console.log(pizzasDuVendredi)
// console.log(pizzas)

// solution qu'on avait sans spread :
// let pizzasDuVendredi = [].concat(pizzas);
// console.log(pizzasDuVendredi)
// pizzasDuVendredi[0] = "Calzone";
// console.log(pizzasDuVendredi)
// console.log(pizzas)

// Avec spread :
let pizzasDuVendredi = [...pizzas]; // bcp plus simple
pizzasDuVendredi[0] = "Calzone";
console.log(pizzasDuVendredi)
console.log(pizzas);


// EXO JUMPING LETTERS ---> dans jumping-letters.html

// const people = Array.from(document.querySelectorAll('.people p'));
const people = [...document.querySelectorAll('.people p')];
// const people = document.querySelectorAll('.people p');
console.log(people)

const contenu = people.map(user => user.textContent);
console.log(contenu);



//
const pizzaMerguez = {
    pizzaName : "Merguez Couscous",
    size : "Medium",
    ingredients : ["saucisse", "semoule", "harissa", "farine", "fromage"]
}

const listeCourses = ["pq", "liquide vaisselle", ...pizzaMerguez.ingredients];
console.log(listeCourses);


// Je veux supprimer un élément de mon array :
const comments = [
    {id : 123456, text : "Super, ton blog est génial !"},
    {id : 127893, text : "C'est vraiement intéressant ce que tu racontes"},
    {id : 789456, text : "J'aime les pizzas merguez couscous !"},
    {id : 456123, text : "Tu racontes n'importe quoi..."},
    {id : 987654, text : "Poseeeeey !"}
];

const id = 456123;
const commentIndex = comments.findIndex(comment => comment.id == id);
console.log(commentIndex); //3

// supprime le commentaire qui commence à l'index commentIndex et n'en supprime qu'un :
// comments.splice(commentIndex, 1); 
// console.log(comments);

// const newComments = [comments.slice(0, commentIndex), comments.slice(commentIndex+1)];
const newComments = [...comments.slice(0, commentIndex), ...comments.slice(commentIndex+1)];
console.log(newComments);
console.log(comments);



// spread dans une fonction
const inventeurs = ["Einstein", "Newton", "Galileo"];
const newInventeurs = ["Musk", "Jobs"];

// inventeurs.push(newInventeurs); // ça me met l'array dans l'array
// inventeurs.push.apply(inventeurs, newInventeurs); // pas très très joli et bien tordu
inventeurs.push(...newInventeurs);

console.log(inventeurs);

function sayHi(prenom, nom, age = 20) {
    alert(`Bonjour ${prenom} ${nom} de ${age} ans !`);
}

const noms = ["Anissa", "Belkheir"];
// sayHi(noms[0], noms[1]);
sayHi(...noms);