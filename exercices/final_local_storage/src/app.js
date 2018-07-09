/* global window document $*/

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
};

const init = () => {
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
