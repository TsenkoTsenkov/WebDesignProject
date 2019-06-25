function initMap(){
    var sofia = {lat: 42.698, lng:23.319};
    var map = new google.maps.Map(document.getElementById('map'), {zoom:10, center:sofia});
    var marker = new google.maps.Marker({position: sofia, map: map});

    google.maps.event.addListener(map, 'click', function(event) {
        placeMarker(event.latLng);
    });
    
    function placeMarker(location) {
        if (marker == undefined){
            marker = new google.maps.Marker({
                position: location,
                map: map, 
                animation: google.maps.Animation.DROP,
            });
        }
        else{
            marker.setPosition(location);
        }
    }

}


