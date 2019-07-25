//----- Global Variables -----

var autocomplete;
var map;
var markers = [];
var infoWindow;
var places;
var google;


//----- Initiliase Map -----

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 13,
        center: {
            //  inits the map with a view of Dublin
            lat: 53.3498,
            lng: -6.2603
        }
    });
    
    // Instantiates Google Maps' autocomplete
    autocomplete = new google.maps.places.Autocomplete(document.getElementById('searchMap'));
    
    // Google Maps places service
    places = new google.maps.places.PlacesService(map);
    
    // Binding event listeners
    autocomplete.addListener('place_changed', goToSearchPlace);
    document.getElementById('attractions').addEventListener('click', goToSearchPlace);
    document.getElementById('food').addEventListener('click', goToSearchPlace);
    document.getElementById('hotels').addEventListener('click', goToSearchPlace);
    google.maps.event.addListener(map, 'dragend', onMapDrag);
    document.getElementById('center-paris').addEventListener('click', findParis);
    document.getElementById('center-rome').addEventListener('click', findRome);
    document.getElementById('center-newyork').addEventListener('click', findNewYork);

    // Info Window
    infoWindow = new google.maps.InfoWindow({
        content: document.getElementById('place-info')
    });
    goToLatLng(53.3498, -6.2603);
}

// Zooms in to the User's search query
function goToSearchPlace() {
    // setTimeout to allow view update and correct class applied to buttons
    setTimeout(function() {
        var place = autocomplete.getPlace();
        if (place && place.geometry) {
            map.panTo(place.geometry.location);
            map.setZoom(15);
        }
        
       searchByFilter();
    }, 100);
}


// This function allows the user to change a place on the map using their cursor without the map snapping back to the view port from the autocomplete result
function onMapDrag() {
    autocomplete.set('place',null);
    searchByFilter();
}


// Checks which filter button is active and searches for respective establishments
function searchByFilter() {
    if ($('.attractions-button').hasClass('active')) {
        searchAttractions();
    }
    else if ($('.food-button').hasClass('active')) {
        searchFood();
    }
    else if ($('.hotels-button').hasClass('active')) {
        searchHotels();
    }
}


// Goes to specified location 
function goToLatLng(lat, lng) {
    var latLng = new google.maps.LatLng(lat, lng);
    setTimeout(function() {
        map.setZoom(15);
        map.panTo(latLng);
        searchByFilter();
    }, 800);
}

// Centres the map on Paris when the "Explore Paris" button is clicked and populates search input with city name
function findParis() {
    autocomplete.set('place',null);
    $('#searchMap').val("Paris");
    goToLatLng(48.8566, 2.3522);
}

// Centres the map on Rome when the "Explore Rome" button is clicked and populates search input with city name
function findRome() {
    autocomplete.set('place',null);
    $('#searchMap').val("Rome");
    goToLatLng(41.9028, 12.4964);
}

// Centres the map on New York when the "Explore New York" button is clicked and populates search input with city name
function findNewYork() {
    autocomplete.set('place',null);
    $('#searchMap').val("New York");
    goToLatLng(40.758896, -73.985130);
}

// Searches attractions when goToSearchPlace and onMapDrag functions are triggered by an eventlistener
function searchAttractions() {
    var search = {
        bounds: map.getBounds(),
        types: ['shopping_mall', 'night_club', 'museum', 'art_gallery', 'park', 'amusement_park']
    };

    places.nearbySearch(search, function(results, status) {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
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

// Searches food establishments when goToSearchPlace and onMapDrag functions are triggered by an eventlistener
function searchFood() {
    var search = {
        bounds: map.getBounds(),
        types: ['restaurant', 'bar']
    };

    places.nearbySearch(search, function(results, status) {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
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

// Searches establishments to stay when goToSearchPlace and onMapDrag functions are triggered by an eventlistener
function searchHotels() {
    var search = {
        bounds: map.getBounds(),
        types: ['lodging']
    };

    places.nearbySearch(search, function(results, status) {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
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
        if (!results[0]) {
            $('#results').show();
            setTimeout(function() {
                $('#results').hide();
            }, 2000);
        }
    });
}

// Places markers on map, triggered by searchAttractions/Food/Hotels functions
function dropMarkers(i) {
    return function() {
        markers[i].setMap(map);
    };
}

//Clears markers when goToSearchPlace functions is triggered
function clearMarkers() {
    for (var i = 0; i < markers.length; i++) {
        if (markers[i]) {
            markers[i].setMap(null);
        }
    }
    markers = [];
}

// Displays infoWindow for establishments on map
function showInfoWindow() {
    var marker = this;
    places.getDetails({ placeId: marker.placeResult.place_id },
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
    document.getElementById('place-name').textContent = place.name;
    document.getElementById('place-address').textContent = place.vicinity;
    document.getElementById('place-number').textContent = place.formatted_phone_number;
    document.getElementById('place-url').innerHTML = '<a href="' + place.website + '"target="_blank">' + 'Go to Website' + '</a>';
}

// Scrolls smoothly to Map section when the CTA "Navigate your Travel" button is pressed
$('#cta').click(function() {
    $('html, body').animate({ scrollTop: $('.search').offset().top }, 1000);
});

// Scrolls smoothly to Map section when the Navbar "Map" link is pressed
$('#map-scroll').click(function() {
    $('html, body').animate({ scrollTop: $('.search').offset().top }, 1000);
});

// Scrolls smoothly to "City Breaks" section when the Navbar "City Breaks" link is pressed
$('#city-scroll').click(function() {
    $('html, body').animate({ scrollTop: $('.city-break').offset().top }, 1000);
});

// Scrolls smoothly to the Map section when the "Explore Paris" link is pressed
$('#center-paris').click(function() {
    $('html, body').animate({ scrollTop: $('.search').offset().top }, 1000);
});

// Scrolls smoothly to the Map section when the "Explore Rome" link is pressed
$('#center-rome').click(function() {
    $('html, body').animate({ scrollTop: $('.search').offset().top }, 1000);
});

// Scrolls smoothly to the Map section when the "Explore New York" link is pressed
$('#center-newyork').click(function() {
    $('html, body').animate({ scrollTop: $('.search').offset().top }, 1000);
});

// Stops page reloading when "Enter" or "Return" are pressed in search box
$(document).keypress(
  function(event){
    if (event.which == '13') {
      event.preventDefault();
    }
});
