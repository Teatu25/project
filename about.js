// UA92 Coordinates
var bTLat = 53.461350;
var bTLng = -2.281259;

// Initialize the map and set its view
var map = L.map('map').setView([bTLat, bTLng], 15);

// Add OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var marker = L.marker([bTLat,bTLng]).addTo(map)
    .bindPopup('<b>B&P Takeaway</b><br>Burger & Pizza Takeaway')
    .openPopup();



map.on('click', function(e) {
  window.location.href = "https://www.bing.com/search?q=ua92%20directions&qs=n&form=QBRE&sp=-1&ghc=2&lq=0&pq=ua92%20dir&sc=5-8&sk=&cvid=9E3F01A91D4C4D96BAC3F6EE31A4CBA9&ghsh=0&ghacc=0&ghpl=";
});