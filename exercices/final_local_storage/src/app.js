/* global window document */
import mapboxgl from "mapbox-gl";
// or "const mapboxgl = require('mapbox-gl');"

mapboxgl.accessToken =
  "pk.eyJ1IjoidHJpcHR5ayIsImEiOiJjampjemtuZjEzcjQwM3dtbnN0OWY1ZjNiIn0.GikR8T10cdWqqaim5MJUXg";
const map = new mapboxgl.Map({
  container: "carte",
  style: "mapbox://styles/mapbox/streets-v9",
  center: [-74.5, 40],
  zoom: 9
});
