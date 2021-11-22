// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with center at the San Francisco airport.
let map = L.map('mapid').setView([40.7, -94.5], 4);

// Coordinates for each point to be used in the polyline.
let line = [
    [37.6213, -122.3790],
    [30.1974292, -97.6663058],
    [43.67771760000001, -79.62481969999999],
    [40.641766, -73.780968]
  ];

// Create a polyline using the line coordinates and make the line yellow.
L.polyline(line, {
   color: "blue",
   dashArray: '5, 10'
}).addTo(map);

// Get data from cities.js
let cityData = cities;

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/light-v9',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: API_KEY
});
// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);