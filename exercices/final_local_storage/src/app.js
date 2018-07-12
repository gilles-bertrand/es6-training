/* global window document $*/
import * as localForage from 'localforage'
function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}

const show = elem => {
  elem.style.display = "block";
};
const hide = elem => {
  elem.style.display = "none";
};
const changeScreen = screenToShow => {
  const screens = ["home", "addForm"];
  screens.map(screen => {
    hide(document.querySelector(`#${screen}`));
  });
  show(document.querySelector(`#${screenToShow}`));
};

const addInteractivity = () => {
  const addAnimalButton = document.querySelector("button");
  addAnimalButton.addEventListener("click", () => {
    changeScreen("addForm");
  });

  const addForm = document.querySelector("#addForm");
  const name = document.querySelector("#name");
  const lat = document.querySelector("#latitude");
  const lon = document.querySelector("#longitude");
  const file = document.querySelector("#file");
  addForm.addEventListener("submit", e => {
    e.preventDefault();
    getBase64(file.files[0]).then(result => {
      const record = {
        name: name.value,
        lat: lat.value,
        lon: lon.value,
        image: result
      };
      let monsters = []
      localForage.getItem('monsters').then((result) => {
        console.log(result)
        if (result === null) {
          localForage.setItem('monsters', monsters)
        } else {
          monsters.push(record)
          localForage.setItem('monsters', monsters)
        }
      })
    });
  });
}

const init = () => {
  // init localstorage
  localForage.setDriver(localForage.INDEXEDDB).then(() => {
    localForage.getItem('monsters').then((result) => {
      if (result !== null) {
       console.log(result)
       result.forEach((item)=>{
         console.log(item)
       })
       document.querySelector("#animals-list").innerHTML=result.reduce((prev, next) =>{
         return `${prev}<li>${next.name} - <img src="${next.image}" width=150px"></li>`
       },'')
      }
    })
  })

  mapboxgl.accessToken =
    "pk.eyJ1IjoidHJpcHR5ayIsImEiOiJjampjemtuZjEzcjQwM3dtbnN0OWY1ZjNiIn0.GikR8T10cdWqqaim5MJUXg";
  const carte = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/streets-v9",
    center: [-74.5, 40],
    zoom: 10
  });
  addInteractivity();
};

init();
