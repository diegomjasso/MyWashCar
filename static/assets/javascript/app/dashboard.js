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
    carWashPoints: [
        ['Bondi Beach', -33.890542, 151.274856, 4],
        ['Coogee Beach', -33.923036, 151.259052, 5],
        ['Cronulla Beach', -34.028249, 151.157507, 3],
        ['Manly Beach', -33.80010128657071, 151.28747820854187, 2],
        ['Maroubra Beach', -33.950198, 151.259302, 1]
      ],
    showMap: function ()  {
      mapObject = document.getElementById('map');
      if (  mapObject != null) {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function (p) {
            var LatLng = new google.maps.LatLng(p.coords.latitude, p.coords.longitude);
          });
        } else {
          var LatLng = {lat: 21.9589651, lng: -102.290256};
          alert('Geo Location feature is not supported in this browser.');
        }

        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 12,
        /*  center: LatLng,*/
          center: {lat: -33.9, lng: 151.2},
        });

        dashboard.map.setMarkers( map);
      };
    },
    setMarkers:  function(  map) {
      var image = {
        // Set the icon for the markers on the map
        /*url: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',*/
        url: '/static/assets/images/marker.png',
        // This marker is 20 pixels wide by 32 pixels high.
        size: new google.maps.Size(20, 32),
        // The origin for this image is (0, 0).
        origin: new google.maps.Point(0, 0),
        // The anchor for this image is the base of the flagpole at (0, 32).
        anchor: new google.maps.Point(0, 32)
      };

      var shape = {
        coords: [1, 1, 1, 20, 18, 20, 18, 1],
        type: 'poly'
      };
      
      for (var i = 0; i < dashboard.map.carWashPoints.length; i++) {
        var carWash = dashboard.map.carWashPoints[i];
        var marker = new google.maps.Marker({
          position: {lat: carWash[1], lng: carWash[2]},
          map: map,
          icon: image,
          shape: shape,
          title: carWash[0],
          zIndex: carWash[3]
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