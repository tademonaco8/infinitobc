const app = document.getElementById('typewriter');

const typewriter = new Typewriter(app, {
    loop: true,
    delay: 75
});

typewriter
    .typeString('La cuna del Cruce Tandilia')
    .pauseFor(200)
    .start();


mapboxgl.accessToken = 'pk.eyJ1IjoidG1vbmFrIiwiYSI6ImNreXFldnF3ZjBqYTgycG0xa3VhbXV6eHYifQ.EAdWXBHQdor6D932QUDQRQ';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-59.12697732341374, -37.31831667371738],
    zoom: 15
});
new mapboxgl.Marker()
    .setLngLat([-59.12697732341374, -37.31831667371738])
    .addTo(map);
const nav = new mapboxgl.NavigationControl();
map.addControl(nav, 'top-left');