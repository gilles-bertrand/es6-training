import Application from '../modules/application';

const app = new Application("https://picsum.photos/list");

app
    .loadJson()
    .then(() => {
      document.querySelector('#output ul').innerHTML = app.getTitles()  
    })

