/* global document customElements */
class UserCard extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open" });
    const wrapper = document.createElement("div");
    const texte = document.createTextNode("User text");
    shadow.appendChild(wrapper);
    wrapper.appendChild(texte);
    this.addEventListener("click", e => {
      this.toggleCard();
    });
  }
  toggleCard() {
    console.log("Element was clicked");
  }
}
customElements.define("user-card", UserCard);
