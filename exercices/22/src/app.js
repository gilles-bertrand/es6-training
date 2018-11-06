import Application from './modules/application';

const app = new Application('https://picsum.photos/list');

app.loadJson().then(result => {
  console.log(result);
  document.querySelector('#wrapper ul').innerHTML = app.getTitles();
});
