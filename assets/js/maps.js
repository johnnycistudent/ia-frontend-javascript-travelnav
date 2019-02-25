//----- Global Variables -----

var autocomplete;
var map;
var markers = [];
var infoWindow;
var places;


//----- Initiliase Map -----

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 2,
        center: {
            lat: 10.519325,
            lng: 7.392709
        }
    });



    autocomplete = new google.maps.places.Autocomplete(document.getElementById('searchMap'));
    places = new google.maps.places.PlacesService(map);

    autocomplete.addListener('place_changed', onPlaceChanged);
    document.getElementById('attractions').addEventListener('change', onPlaceChanged);
    document.getElementById('food').addEventListener('change', onPlaceChanged);
    document.getElementById('hotels').addEventListener('change', onPlaceChanged);




    // Info Window
    infoWindow = new google.maps.InfoWindow({
        content: document.getElementById('place-info')
    });
}

function onPlaceChanged() {
    if ($(".attractions-button").hasClass('active')) {
        var place = autocomplete.getPlace();
        if (place.geometry) {
            map.panTo(place.geometry.location);
            map.setZoom(15);
            searchAttractions();
        }
        else {
            $('#mapSearch').attr("placeholder", "Search");
        }
    }

    else if ($(".food-button").hasClass('active')) {
        var place = autocomplete.getPlace();
        if (place.geometry) {
            map.panTo(place.geometry.location);
            map.setZoom(15);
            searchFood();
        }
        else {
            $('#mapSearch').attr("placeholder", "Search");
        }
    }

    else if ($(".hotels-button").hasClass('active')) {
        var place = autocomplete.getPlace();
        if (place.geometry) {
            map.panTo(place.geometry.location);
            map.setZoom(15);
            searchHotels();
        }
        else {
            $('#mapSearch').attr("placeholder", "Search");
        }
    }
}

function searchAttractions() {
    var search = {
        bounds: map.getBounds(),
        types: ['shopping_mall', 'night_club', 'museum', 'art_gallery', 'park', 'amusement_park']
    };

    places.nearbySearch(search, function(results, status) {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
            clearResults();
            clearMarkers();

            // Create Marker
            for (var i = 0; i < results.length; i++) {
                markers[i] = new google.maps.Marker({
                    position: results[i].geometry.location,
                });
                // If the user clicks a hotel marker, show the details of that hotel
                // in an info window.
                markers[i].placeResult = results[i];
                google.maps.event.addListener(markers[i], 'click', showInfoWindow);
                setTimeout(dropMarkers(i), i * 100);
                
            }
        }
    });
}

function searchFood() {
    var search = {
        bounds: map.getBounds(),
        types: ['restaurant', 'bar']
    };

    places.nearbySearch(search, function(results, status) {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
            clearResults();
            clearMarkers();

            // Create Marker
            for (var i = 0; i < results.length; i++) {
                markers[i] = new google.maps.Marker({
                    position: results[i].geometry.location,
                });
                // If the user clicks a hotel marker, show the details of that hotel
                // in an info window.
                markers[i].placeResult = results[i];
                google.maps.event.addListener(markers[i], 'click', showInfoWindow);
                setTimeout(dropMarkers(i), i * 100);
                //addResult(results[i], i);
            }
        }
    });
}

function searchHotels() {
    var search = {
        bounds: map.getBounds(),
        types: ['lodging']
    };

    places.nearbySearch(search, function(results, status) {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
            clearResults();
            clearMarkers();

            // Create Marker
            for (var i = 0; i < results.length; i++) {
                markers[i] = new google.maps.Marker({
                    position: results[i].geometry.location,
                });
                // If the user clicks a hotel marker, show the details of that hotel
                // in an info window.
                markers[i].placeResult = results[i];
                google.maps.event.addListener(markers[i], 'click', showInfoWindow);
                setTimeout(dropMarkers(i), i * 100);
                
            }
        }
    });
}

function dropMarkers(i) {
    return function() {
        markers[i].setMap(map);
    };
}

function clearMarkers() {
    for (var i = 0; i < markers.length; i++) {
        if (markers[i]) {
            markers[i].setMap(null);
        }
    }
    markers = [];
}

function clearResults() {
    var results = document.getElementById('results');
    while (results.childNodes[0]) {
        results.removeChild(results.childNodes[0]);
    }
}

function showInfoWindow() {
    var marker = this;
    places.getDetails({placeId: marker.placeResult.place_id},
        function(place, status) {
            if (status !== google.maps.places.PlacesServiceStatus.OK) {
                return;
            }
            infoWindow.open(map, marker);
            setPlaceDetails(place);
        });
}

// Show place details in info window on map
function setPlaceDetails(place) {
    document.getElementById('place-name').innerHTML = '<a href="' + place.url + 'target="_blank">' + place.name + '</a>';
    document.getElementById('place-address').textContent = place.vicinity;
    document.getElementById('place-number').textContent = place.formatted_phone_number;
}