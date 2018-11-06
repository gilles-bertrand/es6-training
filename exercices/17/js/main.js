/* global window document  $ */
const utils = {
  hexToRgb(hex) {
    if (/^#?([a-f\d]{3}|[a-f\d]{6})$/.test(hex)) {
      hex[0] === '#' ? (hex = hex.substring(1)) : hex;
      if (hex.length === 3) {
        const [hr, hg, hb] = hex;
        return this.hexToRgb(`${hr}${hr}${hg}${hg}${hb}${hb}`);
      }
      const [r, g, b] = [0, 2, 4]
        .map(offset => hex.substring(offset, offset + 2))
        .map(hexCh => parseInt(hexCh, 16));
      return { r, g, b };
    }
    const error = new Error('The hexadecimal string seems bad !!!');
    throw error;
  },
  rgbToHex(rgbString) {
    return `#${rgbString
      .split(',')
      .map(decCh => Math.max(0, Math.min(255, decCh)).toString(16))
      .map(hexCh => (hexCh.length === 1 ? `0${hexCh}` : hexCh))
      .join('')}`;
  }
};
const app = {
  init() {
    window.$ = window.document.querySelector.bind(document);
    this.inputHEX2RGB = $('#inputHEX2RGB');
    this.buttonHEX2RGB = $('#buttonHEX2RGB');
    this.inputRGB2HEX = $('#inputRGB2HEX');
    this.buttonRGB2HEX = $('#buttonRGB2HEX');
    this.setInteractivity();
  },
  setInteractivity() {
    this.buttonHEX2RGB.addEventListener('click', () => {
      console.log(utils.hexToRgb(this.inputHEX2RGB.value));
    });
    this.buttonRGB2HEX.addEventListener('click', () => {
      console.log(utils.rgbToHex(this.inputRGB2HEX.value));
    });
  }
};
app.init();
