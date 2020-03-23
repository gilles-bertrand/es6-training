const users = [
    {name : "Anissa", id: 1},
    {name : "Gilles", id: 2},
    {name : "Steph", id: 3},
    {name : "Anissa", id: 4},
    {name : "Steph", id: 5}
];

// let user;
// for (let i = 0; i < users.length; i++) {
//     if (users[i].name == "Steph") {
//         user = users[i];
//         break; // je veux que ma boucle arrête dès qu'il a trouvé un el qui correspond
//     }
// }
// console.log(user)

const user = users.find(function(u) {
    return u.name == "Steph"
});
console.log(user);

const userIndex = users.findIndex(function(u) {
    return u.name == "Steph"
});
console.log(userIndex) // 2