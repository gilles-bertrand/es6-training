const personnes = document.querySelectorAll('.personnes p'); // NodeList
// const personnes = document.getElementsByTagName('p'); // HTMLCollection
// console.log(personnes);
// const test = personnes.forEach(prenom => console.log(prenom.innerHTML)); // fonctionne avec NodeList, mais pas avec HTMLCollection
const newPersonnes = Array.from(personnes);
// console.log(newPersonnes);
// const prenoms = personnes.map(prenom => prenom.innerHTML);
// const prenoms = newPersonnes.map(prenom => prenom.innerHTML);
const prenoms = newPersonnes.map(prenom => console.log(prenom.innerHTML));

newPersonnes.map(function(prenom, index) {
    prenom.addEventListener('click', function(){
        console.log('click sur para n°' + (index+1));
    });
});


// Autre exemple
function calculTotal() {
    console.log(arguments);
    const nums = Array.from(arguments);
    const total = nums.reduce((prev, next) => prev + next, 0);
    console.log(total);
}

calculTotal(1,2,3,15,15415,15,687,78,989,45,4787,78);


// .of
const tableau = Array.of(12,235,5687,7874556,2,'dzerzer');
console.log(tableau);


