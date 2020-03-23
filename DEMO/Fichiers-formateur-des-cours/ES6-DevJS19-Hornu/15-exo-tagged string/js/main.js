// const dict = {
//     HTML : 'Hyper Text Markup Language',
//     CSS : 'Cascading StyleSheet',
//     JS : 'JavaScript'
// }

// const first = "Anissa";
// const last = "Belkheir";

// const phrase = 
// addAbbreviations`Bonjour, je m'appelle ${first} ${last} et j'adooore coder en ${'HTML'}, ${'CSS'} et ${'JS'}!`;

// function addAbbreviations(strings, ...values) {
//     // console.log(values);
//     // console.log(strings);

//     const abbr = values.map(item => {
//         if (dict[item]) {
//             return `<abbr title="${dict[item]}">${item}</abbr>` 
//         } else {
//             return item;
//         }
//     });

//     const abbr = values.map(item => (dict[item]) ? `<abbr title="${dict[item]}">${item}</abbr>` 
//         : item);

//     // let str = '';
//     // strings.forEach((string, index) => {
//     //     str += `${string}${abbr[index] || ''}` ;
//     // });
//     // return str;

//     return strings.reduce((str, string, index) => str + string + (abbr[index] || '' ), '')

// }

// console.log(phrase)
// document.querySelector('.output').innerHTML = phrase;







const dict = {
    HTML : 'Hyper Text Markup Language',
    CSS : 'Cascading StyleSheet',
    JS : 'JavaScript'
}

const first = "Anissa";
const last = "Belkheir";

const phrase = 
addAbbreviations`Bonjour, je m'appelle ${first} ${last} et j'adooore coder en ${'HTML'}, ${'CSS'} et ${'JS'}!`;


function addAbbreviations(phrases, ...valeurs) {
    //valeurs contient : ["Anissa", "Belkheir", "HTML", "CSS", "JS"]
    //phrases contient : ["Bonjour, je m'appelle "," ", " et j'adooore coder en ",", "," et ", "!"]
    const abbr = valeurs.map(element => {
        if (dict[element]) {
            return `<abbr title="${dict[element]}">${element}</abbr>` 
        } else {
            return element
        }
    })
    //abbr contient : ["Anissa", 
                    // "Belkheir",
                    // "<abbr title="Hyper Text Markup Language">HTML</abbr>",
                    // "<abbr title="Cascading StyleSheet">CSS</abbr>",
                    // "<abbr title="JavaScript">JS</abbr>",
                    // ]
    
    let phraseRecomposee = "";
    phrases.forEach((morceau, index) => {
        phraseRecomposee += `${morceau}${abbr[index] || ''}`
    });

    return phraseRecomposee;

}

console.log(phrase)