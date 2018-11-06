import Animal from './animal';

export default class Chat extends Animal {
  constructor() {
    super('chat');
  }

  cri() {
    return `${this.type} miaule`;
  }
}
