export const apiKey = 'abc123'; // si je mets export ici, je ne dois pas utiliser la version par défault

// export default apiKey; // quand je mets default, je peux l'importer sous n'importe quel nom. Mais sans le mot clé default, je dois l'exporter sous un nom précis qui sera appelé à l'import


// exporter une autre constante :
export const url = 'https://websitemachin.com';


// exporter une fonction :
export function sayHi(name) {
    console.log(`Hi, ${name}`);
}

const machin = "chose";
const truc = "bidule";

export {machin, truc as youpie} // j'export en donnant un alias à l'export, mais du coup il faut l'importer avec l'alias