var dashboard = {
	test: function ()	{
		console.log("Load dashboard script");
	},
	init_map: function ()	{
		var corrida_inicio = {lat: 21.9589651, lng: -102.290256};
    var corrida_final = {lat: 21.8497435, lng: -102.30098720000001};

    mapObject = document.getElementById('map');

    if (  mapObject != null) {
      var map = new google.maps.Map(document.getElementById('map'), {
        center: corrida_inicio,
        scrollwheel: false,
        zoom: 7
      });

      var directionsDisplay = new google.maps.DirectionsRenderer({
        map: map
      });

      // Set destination, origin and travel mode.
      var request = {
        destination: corrida_final,
        origin: corrida_inicio,
        travelMode: 'DRIVING'
      };

      // Pass the directions request to the directions service.
      var directionsService = new google.maps.DirectionsService();
      directionsService.route(request, function(response, status) {
        if (status == 'OK') {
          directionsDisplay.setDirections(response);
        }
      });
    }
	},
	fixMapHeiight: function	()	{
    var windowsHeight = $( window ).height();
			finalHeight = windowsHeight;

		$("#map").css(	"height",	finalHeight);
	}
};