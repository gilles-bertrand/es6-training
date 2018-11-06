export default class Animal {
  constructor(type) {
    this.type = type;
  }

  walk() {
    return `${this.type} is walking`;
  }
}
