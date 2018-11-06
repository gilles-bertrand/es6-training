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
          monsters=result
          monsters.push(record)
          localForage.setItem('monsters', monsters)
        }
      })
    });
  });
}

const renderMap = (monsters)=>{
  console.log('ttt')
  mapboxgl.accessToken =
    "pk.eyJ1IjoidHJpcHR5ayIsImEiOiJjampjemtuZjEzcjQwM3dtbnN0OWY1ZjNiIn0.GikR8T10cdWqqaim5MJUXg";
  const carte = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/streets-v9",
    center: [3.964070,50.461049],
    zoom: 10
  });
  if(monsters.length){
    monsters.forEach(item=>{
      console.log(item)
      let marker = new mapboxgl.Marker()
      .setLngLat([item.lat,item.lon])
      .addTo(carte);
    })
  }

}

const init = () => {
  // init localstorage
  let monsters =[]
  localForage.setDriver(localForage.INDEXEDDB).then(() => {
    localForage.getItem('monsters').then((result) => {
      if (result !== null) {
       document.querySelector("#animals-list").innerHTML=result.reduce((prev, next) =>{
         return `${prev}<li>${next.name}</li>`
       },'')
       monsters = result;
       renderMap(monsters)
      }
    })
  })



  addInteractivity();
};

init();
