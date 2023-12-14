/* eslint-disable no-undef */
/* eslint-disable no-loop-func */
/* eslint-disable no-useless-concat */

var map = L.map('map').setView([23.763004181411393, 79.30224083048866], 5);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// List of available cabs and their fares
var cabOptions = {
    "Bike": 5,        // Replace with your fare for a Bike
    "Auto": 10,        // Replace with your fare for an Auto
    "Mini": 15,     // Replace with your fare for a Rikshaw
    "SUV": 20,         // Replace with your fare for an SUV
    "Prime SUV": 30    // Replace with your fare for a Prime SUV
};

if (!navigator.geolocation) console.log("Wrong browser!");
else {
    navigator.geolocation.getCurrentPosition(getPosition);
}

// Display a menu for users to choose their preferred vehicle
var selectedCabFare;

function getPosition(position) {
    var lat = position.coords.latitude;
    var long = position.coords.longitude;
    var acc = position.coords.accuracy;

    var latt = lat + 0.1;
    var longg = long + 0.1;

    var myIcon = L.icon({
        iconUrl: 'taxi.png',
        iconSize: [30, 30],
    });

    var marker = L.marker([latt, longg], { icon: myIcon, rotationAngle: 90 });
    var circle = L.circle([lat, long], { radius: acc, color: 'green' });

    var marker1 = L.marker([lat + 0.2, long + 0.2], { icon: myIcon, rotationAngle: 90 });
    var marker2 = L.marker([latt + 0.3, longg + 0.3], { icon: myIcon, rotationAngle: 90 });
    var marker3 = L.marker([lat + 0.33, long + 0.43], { icon: myIcon, rotationAngle: 90 });
    var marker4 = L.marker([lat + 0.33, long], { icon: myIcon, rotationAngle: 90 });
    var marker5 = L.marker([lat, long + 0.43], { icon: myIcon, rotationAngle: 90 });
    var marker6 = L.marker([lat - 0.33, long - 0.43], { icon: myIcon, rotationAngle: 90 });
    var marker7 = L.marker([lat - 0.33, long], { icon: myIcon, rotationAngle: 90 });
    var marker8 = L.marker([lat, long - 0.43], { icon: myIcon, rotationAngle: 90 });

    var taxis = L.layerGroup([marker1, marker2, marker3, marker4, marker5, marker6, marker7, marker8]).addTo(map);

    var featuredGroups = L.featureGroup([marker, circle]).addTo(map);
    map.fitBounds(featuredGroups.getBounds());

    L.Routing.control({
        waypoints: [
            L.latLng(latt, longg),
            L.latLng(lat, long),
            L.latLng()
        ],

        routeWhileDragging: true,
        geocoder: L.Control.Geocoder.nominatim(),
        waypointNameFallback: function (latLng) {
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
        .on('routesfound', function (e) {
            var x = Math.floor(Math.random() * 10000);
            var selectedCab = prompt("Choose a cab:\n" + Object.keys(cabOptions).join("\n"));

            if (!cabOptions[selectedCab]) {
                alert("Invalid cab choice. Please choose from the available options.");
            } else {
                // Set the fare based on the selected vehicle
                selectedCabFare = cabOptions[selectedCab];

                alert(`Your OTP is ${x}`);
                var check = prompt("Enter your OTP : ");

                if (check == x) {
                    console.log(e);
                    map.removeLayer(taxis);

                    e.routes[0].coordinates.forEach(function (coord, index) {
                        setTimeout(function () {
                            marker.setLatLng([coord.lat, coord.lng]);
                            if (index === e.routes[0].coordinates.length - 1) {
                                setTimeout(function () {
                                    var totalDistance = calculateTotalDistance(e.routes[0].coordinates);
                                    var fare = calculateFare(totalDistance);
                                    alert("Total Distance Traveled: " + totalDistance.toFixed(2) + " km and " +
                                        "Fare: Rs " + fare.toFixed(2));
                                    window.location.href = "payment.html";
                                }, 10);
                            }
                        }, 30 * index); // 100 is cab slowness
                    });
                } else {
                    var count = 3;
                    while (true) {
                        if (count === 1) check = prompt("Last chance to enter correct OTP!");
                        else check = prompt("Please enter correct OTP");
                        count = count - 1;
                        if (check === x) {
                            console.log(e);
                            map.removeLayer(taxis);
                            e.routes[0].coordinates.forEach(function (coord, index) {
                                setTimeout(function () {
                                    marker.setLatLng([coord.lat, coord.lng]);
                                    if (index === e.routes[0].coordinates.length - 1) {
                                        setTimeout(function () {
                                            var totalDistance = calculateTotalDistance(e.routes[0].coordinates);
                                            var fare = calculateFare(totalDistance);
                                            alert("Total Distance Traveled: " + totalDistance.toFixed(2) + " km and " +
                                                "Fare: Rs " + fare.toFixed(2));
                                            window.location.href = "payment.html";
                                        }, 10);
                                    }
                                }, 30 * index); // 100 is cab slowness
                            });
                            break;
                        }
                        if (count === 0) break;
                    }
                }
            }
        })
        .addTo(map);

    console.log("Your current location :" + "\nlatitude : " + lat + " \nlongitude :  " + long + " \naccuracy : " + acc);
}

function calculateTotalDistance(coordinates) {
    var totalDistance = 0;
    for (var i = 1; i < coordinates.length; i++) {
        var latlng1 = coordinates[i - 1];
        var latlng2 = coordinates[i];
        var distance = calculateDistance(latlng1.lat, latlng1.lng, latlng2.lat, latlng2.lng);
        totalDistance += distance;
    }
    return totalDistance;
}

function calculateDistance(lat1, lon1, lat2, lon2) {
    var R = 6371; // Radius of the Earth in kilometers
    var dLat = toRad(lat2 - lat1);
    var dLon = toRad(lon2 - lon1);
    var a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var distance = R * c; // Distance in kilometers
    return distance;
}

function toRad(degrees) {
    return degrees * Math.PI / 180;
}

function calculateFare(totalDistance) {
    const CONSTANT_RATE_PER_UNIT_DISTANCE = selectedCabFare;  // Use the fare for the selected vehicle
    const MINIMUM_FARE = 20;  // Replace with your minimum fare or additional charges
    const t = totalDistance * CONSTANT_RATE_PER_UNIT_DISTANCE;
    const totalFare = Math.max(t, MINIMUM_FARE);
    return totalFare;
}

