
// #1
// créer un "game loop" : une fonction qui va se répéter encore et encore
// function main(currentTime) { // le moment actuel
//     window.requestAnimationFrame(main) // je fais répéter cette fonction encore et encore...
//     console.log(currentTime)
// }

// window.requestAnimationFrame(main)

// #2
let lastRenderTime = 0;

function main(currentTime) {
    window.requestAnimationFrame(main)
    lastRenderTime = currentTime;
    console.log(currentTime)
}