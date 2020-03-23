const utils = {
    hexToRgb(hexa){
        if (/^#?([a-f\d]{3}|[a-f\d]{6})$/.test(hexa)) {
            hexa[0] == "#" ? (hexa = hexa.substring(1)) : hexa; // si #ffffff ou #fff -> retire le #
            if (hexa.length == 3) { // exemple fff
                const [r, g, b] = hexa; // ["f", "f", "f"]
                return this.hexToRgb(`${r}${r}${g}${g}${b}${b}`);
            } else {
                [r, g, b] = [0, 2, 4]
                    .map(el => hexa.substring(el, el +2)) // ["ff", "ff", "ff"]
                    .map(el => parseInt(el, 16)); // [255, 255, 255]
                return {r, g, b};
            }
        }
        const error = new Error(`Votre hexadécimal ne semble pas correct du tout ! ${hexa}`);
        throw error;
    },
    rgbToHex(rgb){
        return `#${rgb
            .split(',')
            .map(el => Math.max(0, Math.min(255, el)).toString(16)) // ['ff','5','ff']
            .map(el => el.length == 1 ? `0${el}` : el)
            .join('')
        }`
    }
}

const app = {
    init() {
        this.inputToRGB = document.getElementById('hex2rgb'); // premier input
        this.btnToRGB = document.getElementById('btnhex2rgb'); // premier bouton
        this.inputToHex = document.getElementById('rgb2hex'); // deuxieme input
        this.btnToHex = document.getElementById('btnrgb2hex'); // deuxieme bouton
        this.setInteractivity();
    },
    setInteractivity() {
        this.btnToRGB.addEventListener('click', e => {
            e.preventDefault();
            console.log(utils.hexToRgb(this.inputToRGB.value));
        });
        this.btnToHex.addEventListener('click', e => {
            e.preventDefault();
            console.log(utils.rgbToHex(this.inputToHex.value));
        });
    }
}

app.init();