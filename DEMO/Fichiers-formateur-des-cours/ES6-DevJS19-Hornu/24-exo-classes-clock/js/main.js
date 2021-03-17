// créer une classe Clock
// elle contient 3 méthodes
// Une qui lance l'horloge (setInterval)
// Une qui l'arrête
// Une qui fait tout le reste (récupération de la date du jour, décomposer h, m, s...)

// const clock = new Clock("hh:mm:ss");  /* 10h:31m:25s */
// const clock = new Clock("h:m:s");  /* 10:31:25 */

class Clock {
    constructor(template) {
        this.template = template;
    }
    render() {
        let date = new Date();

        let hours = date.getHours();
        if (hours < 10) hours = `0${hours}`

        let mins = date.getMinutes();
        if (mins < 10) mins = `0${mins}`

        let secs = date.getSeconds();
        if (secs < 10) secs = `0${secs}`

        const output = this.template
            .replace("h", hours)
            .replace("m", mins)
            .replace("s", secs);

        console.log(output);
        return output;
    }

    start() {
        this.count = 0;
        this.render() // pour avoir un premier affichage sans attendre 1sec que le setInterval se lance
        // this.timer = setInterval(() =>  this.render(), 1000);
        this.timer = setInterval(() => {
            this.render();
            this.count++;
        }, 1000);
    }

    stop() {
        clearInterval(this.timer);
        console.log(this.count);
        // return '';
    }
}


const clock = new Clock("hh mm ss");
clock.start();
setTimeout(() => {
    clock.stop()
}, 20000) // arrêter l'horloge au bout de 20sec







// Extend de class
// Créer une class Animal qui prend le groupe (mammifere, reptile,...), le type (chat, dinosaure,...) et le nom
// Les Animal mangent, boivent, respirent et meurent
// Créer une ou plusieurs class enfant qui étendent animal et qui prennent qqs arguments
//  (pas tous obligatoires) du genre nom, race, continent, âge,... Soyez inventifs ^^
//  Chacune de ces classes a des spécificité, class Serpent aura une métohode "ramper()", la class Chat aura un "miauler()"... etc.

// Autre proposition :
// Une class Véhicule qui prend un nombre de roues et une vitessemax
// tous les Véhicules avancent à une certaine vitesse max
// une class Voiture qui prend un nombre de roues, moteur, vitessemax...