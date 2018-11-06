import Animal from './modules/animal';
import Chat from './modules/chat';

const init = () => {
  const bull = new Animal('taureau');
  console.log(bull.type);
  console.log(bull.walk());
  const chat = new Chat();
  console.log(chat.type);
  console.log(chat.walk());
  console.log(chat.cri());
};

init();
