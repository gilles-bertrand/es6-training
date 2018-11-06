/* global document HTMLElement */
export default class UserCard extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    const wrapper = document.createElement('div');
    const texte = document.createTextNode('tes de User Card');
    shadow.appendChild(wrapper);
    wrapper.appendChild(texte);
    this.addEventListener('click', e => {
      this.toggleCard();
    });
  }
  toggleCard() {
    console.log('The user cars has been clicked');
  }
}
