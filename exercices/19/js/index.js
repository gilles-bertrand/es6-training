function Animal(type) {
  this.type = type;
}
Animal.prototype.walk = function() {
  return `${this.type} is walking`;
};

function Chat() {
  Animal.call(this, 'chat');
}
Chat.prototype = Object.create(Animal.prototype);
Chat.prototype.cri = function() {
  return 'miaouw';
};

const chat = new Chat('chat');
const chien = new Animal('chien');
console.log(chat);
console.log(chien);
console.log(chat.type);
console.log(chat.walk());
console.log(chat.cri());
