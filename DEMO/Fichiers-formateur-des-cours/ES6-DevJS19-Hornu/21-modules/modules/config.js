// const apiKey = "abc133edqt456";
// export const url = "http://www.unsite.com"; // export nommé
// export default apiKey;

/*export*/ const apiKey = "abc133edqt456";
/*export*/ const url = "http://www.unsite.com";

/*export*/ function sayHi(name) {
    console.log(`Bonjour ${name} !`)
}

export default apiKey;
export { url, sayHi as disBonjour };