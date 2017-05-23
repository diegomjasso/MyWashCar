var dashboard = {
	test: function ()	{
		console.log("Load dashboard script");
	},
  init: function()  {
    dashboard.startedDashboard();
    dashboard.map.showMap();
  },
  startedDashboard: function() {
    dashboard.ui.closeSide();
  },
  ui: {
    /*
        Classes

        --
        .map-content-closed
        .map-content-opened

        .side-dashboard-container-opened
        .side-dashboard-container-closed

        .side-dashboard-opened
        .side-dashboard-closed

    */
    sideStatus:  true,
    manageSide: function()  {
      if (dashboard.ui.sideStatus == false) {
        dashboard.ui.openSide();
      } else  {
        dashboard.ui.closeSide();
      };
    },
    openSide: function() {
      $("#map-content").addClass("map-content-closed");
      $("#side-dashboard-container").addClass("side-dashboard-container-opened");
      $("#side-dashboard").addClass("side-dashboard-opened");
      $("#direction-icnon-sidelash").addClass("fa-angle-double-left");
      
      $("#map-content").removeClass("map-content-opened");
      $("#side-dashboard-container").removeClass("side-dashboard-container-closed");
      $("#side-dashboard").removeClass("side-dashboard-closed");
      $("#direction-icnon-sidelash").removeClass("fa-angle-double-right");
      dashboard.ui.sideStatus = true;
    },
    closeSide: function() {
      $("#map-content").removeClass("map-content-closed");
      $("#side-dashboard-container").removeClass("side-dashboard-container-opened");
      $("#side-dashboard").removeClass("side-dashboard-opened");
      $("#direction-icnon-sidelash").removeClass("fa-angle-double-left");
      
      $("#map-content").addClass("map-content-opened");
      $("#side-dashboard-container").addClass("side-dashboard-container-closed");
      $("#side-dashboard").addClass("side-dashboard-closed");
      $("#direction-icnon-sidelash").addClass("fa-angle-double-right");
      dashboard.ui.sideStatus = false;
    }
  },
  map: {
    showMap: function ()  {
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
    fixMapHeiight: function ()  {
      var windowsHeight = $( window ).height();
        finalHeight = windowsHeight;

      $("#map").css(  "height", finalHeight);
    }
  }
};