console.log("Hello from JavaScript");
const mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');

mapboxgl.accessToken = "pk.eyJ1IjoiZGF2aWRmdWRhY3oiLCJhIjoiY2plenRvNXF1MGljbjMzbm5hZms5enplZCJ9.-wKGDmuBwhyZGjjKMaRxgA";

const map = new mapboxgl.Map({
  container: "map",
  center: [-87.6354, 41.8885], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/outdoors-v10" // mapbox has lots of different map styles available.
});

