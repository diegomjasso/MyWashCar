var dashboard = {
	test: function ()	{
		console.log("Load dashboard script");
	},
  init: function()  {
    dashboard.startedDashboard();
    dashboard.map.showMap();
  },
  startedDashboard: function() {
    /*dashboard.ui.closeSide();*/
  },
  ui: {
    sideStatus:  true,
    manageSide: function()  {
      if (dashboard.ui.sideStatus == false) {
        dashboard.ui.openSide();
      } else  {
        dashboard.ui.closeSide();
      };
    },
    openSide: function() {
      $("#side-dashboard-container").addClass("side-dashboard-container-opened");
      $("#side-dashboard").addClass("side-dashboard-opened");
      $("#direction-icnon-sidelash").addClass("fa-angle-double-left");
      
      $("#map-content").removeClass("map-content-closed");
      $("#side-dashboard-container").removeClass("side-dashboard-container-closed");
      $("#side-dashboard").removeClass("side-dashboard-closed");
      $("#direction-icnon-sidelash").removeClass("fa-angle-double-right");
      dashboard.ui.sideStatus = true;
    },
    closeSide: function() {
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
    carWashPoints: [],
    showMap: function ()  {
      var LatLng = {lat: 21.8853, lng:- 102.2916};
      mapObject = document.getElementById('map');
      if (  mapObject != null) {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function (p) {
            /*var LatLng = new google.maps.LatLng(p.coords.latitude, p.coords.longitude);*/
            dashboard.map.setMap( LatLng);
          });
        } else {
            /*var LatLng = {lat: 21.9589651, lng: -102.290256};*/
            dashboard.map.setMap( LatLng);
        }
      };
    },
    setMap:  function(  LatLng) {
          var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 13,
            center: LatLng
          });
          $.when(   services.dashboard.showCarWashList())
            .done(function( response, status, request ) {
              dashboard.map.carWashPoints = response; // Setting Car Washes
              dashboard.map.setMarkers( map);
          });
    },
    setMarkers:  function(  map) {
      var image = {
        // Set the icon for the markers on the map
        url: '/static/assets/images/markerIcon.png',
        // This marker is 20 pixels wide by 32 pixels high.
        size: new google.maps.Size(34, 40),
        // The origin for this image is (0, 0).
        origin: new google.maps.Point(0, 0),
        // The anchor for this image is the base of the flagpole at (0, 32).
        anchor: new google.maps.Point(17, 40)
      };

      var shape = {
        coords: [1, 1, 1, 20, 18, 20, 18, 1],
        type: 'poly'
      };
      
      for (var i = 0; i < dashboard.map.carWashPoints.length; i++) {
        var carWash = dashboard.map.carWashPoints[i];
        var ubicacion = carWash["ubicacion"].split(',');
        var marker = new google.maps.Marker({
          position: {
            lat: parseFloat(ubicacion[0]),
            lng: parseFloat(ubicacion[1])
          },
          map: map,
          icon: image,
          shape: shape,
          title: carWash["nombre"]
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