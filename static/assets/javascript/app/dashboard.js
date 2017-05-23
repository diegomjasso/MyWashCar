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
      mapObject = document.getElementById('map');
      if (  mapObject != null) {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function (p) {
            var LatLng = new google.maps.LatLng(p.coords.latitude, p.coords.longitude);
            /*var myLatLng = {lat: 21.9589651, lng: -102.290256};*/
            var map = new google.maps.Map(document.getElementById('map'), {
              zoom: 13,
              center: LatLng,
              mapTypeId: google.maps.MapTypeId.ROADMAP
            });

            var marker = new google.maps.Marker({
              position: LatLng,
              map: map,
              title: "<div style = 'height:60px;width:200px'><b>Your location:</b><br />Latitude: " + p.coords.latitude + "<br />Longitude: " + p.coords.longitude
            });

            google.maps.event.addListener(marker, "click", function (e) {
                var infoWindow = new google.maps.InfoWindow();
                infoWindow.setContent(marker.title);
                infoWindow.open(map, marker);
            });
          });
        } else {
          alert('Geo Location feature is not supported in this browser.');
        }
      }
    },
    fixMapHeiight: function ()  {
      var windowsHeight = $( window ).height();
        finalHeight = windowsHeight;

      $("#map").css(  "height", finalHeight);
    }
  }
};