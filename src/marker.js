const mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');
mapboxgl.accessToken = "pk.eyJ1IjoiZGF2aWRmdWRhY3oiLCJhIjoiY2plenRvNXF1MGljbjMzbm5hZms5enplZCJ9.-wKGDmuBwhyZGjjKMaRxgA";

function builderFunc (coordsArr, placeType) {
  const markerDomEl = document.createElement('div');
  markerDomEl.style.width = "32px";
  markerDomEl.style.height = "39px";
  switch (placeType) { 
    case 'Activity':
    markerDomEl.style.backgroundImage = 'url(http://i.imgur.com/WbMOfMl.png)'
      break;
    case 'Hotel':
    markerDomEl.style.backgroundImage = 'url(http://i.imgur.com/D9574Cu.png)'
      break;
    case 'Restaurant':
    markerDomEl.style.backgroundImage = 'url(http://i.imgur.com/cqR6pUI.png)'
      break;
  } 
  return new mapboxgl.Marker(markerDomEl).setLngLat(coordsArr);
}



module.exports = builderFunc