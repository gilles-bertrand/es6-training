// const prenoms = ["Anissa", "Monia", "Amina", "Leila", "Khaled", "Chakib"];
// // const nomsEntiers = prenoms.map(function(personne) {
// //     return personne + ' Belkheir';
// // });
// // console.log(nomsEntiers);

// // const nomsEntiers = prenoms.map((personne) => {
// //     return personne + ' Belkheir';
// // });
// // console.log(nomsEntiers);

// // const nomsEntiers = prenoms.map(personne => {
// //     return personne + ' Belkheir';
// // });
// // console.log(nomsEntiers);

// const nomsEntiers = prenoms.map(personne => personne + ' Belkheir');
// console.log(nomsEntiers);


// // Dans le cas où je n'ai pas d'argument
// // const sayHello = function() {
// //     console.log('Hello');
// // }
// // devient :
// const sayHello = () => console.log('Hello');
// sayHello();


// const ages = [25,35,45,55,65,75,85,95];
// // const vieux = ages.filter(function(age) {
// //     return age >= 75;
// // });
// const vieux = ages.filter(age => age >= 75);
// console.log(vieux);


// // exo :
// const course = "100m haies";
// const gagnants = ["Henri", "Alfred", "José"];

// // output attendu :
// // [
// //     {"name" : "Henri", "course": "100m haies", "place" : 1},
// //     {"name" : "Alfred", "course": "100m haies", "place" : 2},
// //     {"name" : "José", "course": "100m haies", "place" : 3}
// // ]

// const tableau = gagnants.map((name, index) => ({name, course, place : index+1}));
// console.log(tableau);


// quand ne pas utiliser l'arrow function
const button = document.querySelector('button');
button.addEventListener('click', function() {
    console.log(this);
    this.classList.toggle("selected");
});

// button.addEventListener('click', () => {
//     console.log(this);
//     this.classList.toggle("selected");
// });

// const person = {
//     points : 23,
//     score : function() { // score() {}
//         console.log(this); // this correspond à l'objet lui même (person)
//         this.points++;
//     }
// }

// const person = {
//     points : 23,
//     score : () => { 
//         console.log(this); // this correspond au parent de l'objet, donc window
//         this.points++;
//     }
// }

// person.score();


// function Voiture() {
//     const that = this;
//     that.kilometres = 100;
//     setTimeout(function() {
//         that.kilometres += 10;
//         console.log(that.kilometres);
//     });
// }
// new Voiture();

// function Voiture() {
//     this.kilometres = 100;
//     setTimeout(() => {
//         this.kilometres += 10;
//         console.log(this.kilometres);
//     }, 1000);
// }
// new Voiture();

// Arguments par défaut

// function calculAddition(total, taxe, pourboire) {
//     return total + total*taxe + total*pourboire + "€";
// }
// console.log(calculAddition(100, 0.15, 0.13));

// function calculAddition(total, taxe, pourboire) {
//     if (taxe == undefined) {
//         taxe = 0.15
//     }
//     if (pourboire == undefined) {
//         pourboire = 0.13
//     }
//     return total + total*taxe + total*pourboire + "€";
// }
// console.log(calculAddition(100, 0.6));

// function calculAddition(total, taxe, pourboire) {
//     taxe = taxe || 0.15;
//     pourboire = pourboire || 0.13;

//     return total + total*taxe + total*pourboire + "€";
// }
// console.log(calculAddition(100, 0.6));

function calculAddition(total, taxe = 0.21, pourboire = 0.03) {
    return total + total*taxe + total*pourboire + "€";
}
console.log(calculAddition(100, undefined, 0.6)); // total = 100, taxe = 0.21, pourboire = 0.6
console.log(calculAddition(100, 0.29)); // total = 100, taxe = 0.29, pourboire = 0.03