import React,{useState} from 'react'
// import { MapContainer, TileLayer, marker,Popup,useMapEvents } from 'react-leaflet'
// import L from 'leaflet'
// import { createControlComponent } from "@react-leaflet/core";
// import "leaflet-routing-machine";




export default function Maps() {
 
  // var mymap = L.map('map').setView([23.763004181411393, 79.30224083048866], 5);

  // L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  //     maxZoom: 19,
  //     attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  // }).addTo(mymap);
  
  // if(!navigator.geolocation)console.log("Wrong browser!")
  // else 
  // {
  // // setInterval(()=>{
  //     navigator.geolocation.getCurrentPosition(getPosition)
  // // },1000)
  // }
  
  // var marker,circle;
  // function getPosition(position)
  // {
  // //  console.log(position)
  // // console.log(position.coords.latitude,position.coords.longitude)
  // var lat = position.coords.latitude
  // var long= position.coords.longitude
  // var acc = position.coords.accuracy
  
  // var latt=lat+0.1
  // var longg=long+0.1
  // // if(marker)
  // // {
  // //     mymap.removeLayer(marker)
  // // }
  
  // // if(circle) mymap.removeLayer(circle)
  // var myIcon = L.icon({
  //     iconUrl: 'taxi.png',
  //     iconSize: [30, 30],
  //   });
  
  
  
  //  marker = L.marker([latt,longg], {icon:myIcon,rotationAngle:90})
  //  circle = L.circle([lat,long],{radius: acc,color:'green'})
  
  //  var marker1 = L.marker([lat+0.2,long+0.2], {icon:myIcon,rotationAngle:90})
  //  var marker2 = L.marker([latt+0.3,longg+0.3], {icon:myIcon,rotationAngle:90})
  //  var marker3 = L.marker([lat+0.33,long+0.43], {icon:myIcon,rotationAngle:90})
  
  //   L.layerGroup([marker1,marker2,marker3]).addTo(mymap);
  
  
  // var featuredGroups = L.featureGroup([marker,circle]).addTo(mymap);
  // mymap.fitBounds(featuredGroups.getBounds())
 
  
  // // marker.bindPopup("here you are");
  
  // L.Routing.control({
  //     waypoints: [
  //       L.latLng(latt,longg),
  //     //   L.latLng(e.latlng.lat,e.latlng.lng)
  //     L.latLng(lat,long),
  //     L.latLng()
  //     ],
    
  //     routeWhileDragging: true,
  //     geocoder: L.Control.Geocoder.nominatim(),
  
  //     waypointNameFallback: function(latLng) {
  //       function zeroPad(n) {
  //           n = Math.round(n);
  //           return n < 10 ? '0' + n : n;
  //       }
  //       function sexagesimal(p, pos, neg) {
  //           var n = Math.abs(p),
  //               degs = Math.floor(n),
  //               mins = (n - degs) * 60,
  //               secs = (mins - Math.floor(mins)) * 60,
  //               frac = Math.round((secs - Math.floor(secs)) * 100);
  //           return (n >= 0 ? pos : neg) + degs + '°' +
  //               zeroPad(mins) + '\'' +
  //               zeroPad(secs) + '.' + zeroPad(frac) + '"';
  //       }
  
  //       return sexagesimal(latLng.lat, 'N', 'S') + ' ' + sexagesimal(latLng.lng, 'E', 'W');
  //   }
  //   })
  //   .on('routesfound',function(e){
  //     console.log(e);
  //     // var routes = e.routes
  //     // e.routes[0].coordinates.
  //     e.routes[0].coordinates.forEach(
  
  //       function (coord,index) {
  
  //       setTimeout(function() {
  //         marker.setLatLng([coord.lat, coord.lng]);
  //       }, 100 *index );
  //     })
  //   })
  //   .addTo(mymap);
  
  // //   marker.bindPopup("you have reached").openPopup();
  
  // console.log("Your current location :"+"\nlatitude : "+lat+" \nlongitude :  "+long+" \naccuracy : "+acc)
  // }
  
  
  

  return (
    <>
    <link rel="stylesheet" href="../app.css" />
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.2/dist/leaflet.css"
    integrity="sha256-sA+zWATbFveLLNqWO2gtiw3HL/lh1giY/Inf1BJ0z14="
    crossOrigin=""/>
    <div id="map" style={{height:'100px'}}></div>
    <script src="https://unpkg.com/leaflet@1.9.2/dist/leaflet.js"
    integrity="sha256-o9N1jGDZrf5tS+Ft4gbIK7mYMipq9lqpVJ91xHSyKhg="
    crossOrigin=""></script>
    <script src="map.js"></script>

   </>
  )
}
