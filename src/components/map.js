var map = L.map('map').setView([23.763004181411393, 79.30224083048866], 5);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

if(!navigator.geolocation)console.log("Wrong browser!")
else 
{
// setInterval(()=>{
    navigator.geolocation.getCurrentPosition(getPosition)
// },5000)
}

var marker,circle;
function getPosition(position)
{
//  console.log(position)
// console.log(position.coords.latitude,position.coords.longitude)
var lat = position.coords.latitude
var long= position.coords.longitude
var acc = position.coords.accuracy

var latt=lat+0.1
var longg=long+0.1
// if(marker)
// {
//     map.removeLayer(marker)
// }

// if(circle) map.removeLayer(circle)
var myIcon = L.icon({
    iconUrl: 'taxi.png',
    iconSize: [30, 30],
    // iconAnchor: [22, 94],
    // popupAnchor: [-3, -76],
    // shadowUrl: 'my-icon-shadow.png',
    // shadowSize: [68, 95],
    // shadowAnchor: [22, 94]
    
  });



 marker = L.marker([latt,longg], {icon:myIcon,rotationAngle:90})
 circle = L.circle([lat,long],{radius: acc,color:'green'})

 var marker1 = L.marker([lat+0.2,long+0.2], {icon:myIcon,rotationAngle:90})
 var marker2 = L.marker([latt+0.3,longg+0.3], {icon:myIcon,rotationAngle:90})
 var marker3 = L.marker([lat+0.33,long+0.43], {icon:myIcon,rotationAngle:90})

  L.layerGroup([marker1,marker2,marker3]).addTo(map);


var featuredGroups = L.featureGroup([marker,circle]).addTo(map);
map.fitBounds(featuredGroups.getBounds())
// var latt=lat+0.1
// var longg=long+0.1;

// marker.bindPopup("here you are");

L.Routing.control({
    waypoints: [
      L.latLng(latt,longg),
    //   L.latLng(e.latlng.lat,e.latlng.lng)
    L.latLng(lat,long),
    L.latLng()
    ],
  
    routeWhileDragging: true,
    geocoder: L.Control.Geocoder.nominatim(),

    waypointNameFallback: function(latLng) {
      function zeroPad(n) {
          n = Math.round(n);
          return n < 10 ? '0' + n : n;
      }
      function sexagesimal(p, pos, neg) {
          var n = Math.abs(p),
              degs = Math.floor(n),
              mins = (n - degs) * 60,
              secs = (mins - Math.floor(mins)) * 60,
              frac = Math.round((secs - Math.floor(secs)) * 100);
          return (n >= 0 ? pos : neg) + degs + '°' +
              zeroPad(mins) + '\'' +
              zeroPad(secs) + '.' + zeroPad(frac) + '"';
      }

      return sexagesimal(latLng.lat, 'N', 'S') + ' ' + sexagesimal(latLng.lng, 'E', 'W');
  }
  })
  .on('routesfound',function(e){
    console.log(e);
    // var routes = e.routes
    // e.routes[0].coordinates.
    e.routes[0].coordinates.forEach(

      function (coord,index) {

      setTimeout(function() {
        marker.setLatLng([coord.lat, coord.lng]);
      }, 100 *index );
    })
  })
  .addTo(map);

//   marker.bindPopup("you have reached").openPopup();

console.log("Your current location :"+"\nlatitude : "+lat+" \nlongitude :  "+long+" \naccuracy : "+acc)
}


