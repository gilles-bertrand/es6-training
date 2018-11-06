import Application from './modules/application';

async function init() {
  const app = new Application('https://picsum.photos/list');
  await app.loadJson();
  document.querySelector('#wrapper ul').innerHTML = app.getTitles();
}
init();
