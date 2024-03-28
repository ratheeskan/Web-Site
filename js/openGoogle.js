function initialize() {
    var latlng = new google.maps.LatLng(21.7679, 78.8718);
    var myOptions = {
        zoom: 5,
        center: latlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var map = new google.maps.Map(document.getElementById("map_area"), myOptions);
}
