var dashboard = {
	test: function ()	{
		console.log("Load dashboard script");
	},
  init: function()  {
    dashboard.startedDashboard();
    dashboard.map.showMap();
  },
  startedDashboard: function() {
    dashboard.ui.loadUserInfo.load();
    /*dashboard.ui.closeSide();*/
  },
  ui: {
    sideStatus:  true,
    backgroundOpacity: false,
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
    },
    openUserSettings: function()  {
      dashboard.ui.openSide();
      $("#side-dashboard-lash").removeClass("display-inline-block");
      $("#right-side-opened").removeClass("display-none");
      $("#user-settings-container").removeClass("display-none");
      $("#payment-settings-container").removeClass("display-inline-block");

      $("#side-dashboard-lash").addClass("display-none");
      $("#right-side-opened").addClass("display-inline-block");
      $("#user-settings-container").addClass("display-inline-block");
      $("#payment-settings-container").addClass("display-none");
    },
    openPaymentSettings: function() {
      dashboard.ui.openSide();
      $("#side-dashboard-lash").removeClass("display-inline-block");
      $("#right-side-opened").removeClass("display-none");
      $("#user-settings-container").removeClass("display-inline-block");
      $("#payment-settings-container").removeClass("display-none");

      $("#side-dashboard-lash").addClass("display-none");
      $("#right-side-opened").addClass("display-inline-block");
      $("#user-settings-container").addClass("display-none");
      $("#payment-settings-container").addClass("display-inline-block");
    },
    closeRightSection: function()  {
      dashboard.ui.openSide();
      $("#side-dashboard-lash").removeClass("display-none");
      $("#right-side-opened").removeClass("display-inline-block");
      $("#user-settings-container").removeClass("display-inline-block");
      $("#payment-settings-container").removeClass("display-inline-block");

      $("#side-dashboard-lash").addClass("display-inline-block");
      $("#right-side-opened").addClass("display-none");
      $("#user-settings-container").addClass("display-none");
      $("#payment-settings-container").removeClass("display-none");
    },
    imageBackgroundOpacity: function()  {
      if (dashboard.ui.backgroundOpacity == false) {
        $("#background-image-profile").addClass("background-image-profile-hover");
        dashboard.ui.backgroundOpacity = true;
      } else  {
        $("#background-image-profile").removeClass("background-image-profile-hover");
        dashboard.ui.backgroundOpacity = false;
      };
    },
    loadUserInfo: {
      left: function( info) {
        if (info.perfil_usuario.avatar ==  "") {
          $("img#avatar-perfil").addClass("display-none");
          $("i#avatar-perfil").addClass("display-inline-block");
        } else  {
          $("img#avatar-perfil").attr("src",  "/" + info.perfil_usuario.avatar);
          $("img#avatar-perfil").addClass("display-inline-block");
          $("i#avatar-perfil").addClass("display-none");
        };

        $("label#username-info").text( info.username);
      },
      right: function(  info) {
        if (info.perfil_usuario.avatar ==  "") {
          $("img#avatar-perfil-dashboard").addClass("display-none");
          $("i#avatar-perfil-dashboard").addClass("display-inline-block");
        } else  {
          $("img#avatar-perfil-dashboard").attr("src",  "/" + info.perfil_usuario.avatar);
          $("img#avatar-perfil-dashboard").addClass("display-inline-block");
          $("i#avatar-perfil-dashboard").addClass("display-none");
        };

        $("h4#username-info").text( info.username);
        $("label#nombre-perfil").text(info.first_name);
        $("label#apellidos-perfil").text(info.last_name);
        $("label#emal-perfil").text(info.email);
        $("label#direccion-perfil").text(info.perfil_usuario.direccion);
        $("label#colonia-perfil").text(info.perfil_usuario.colonia);
        $("label#pais-perfil").text(info.perfil_usuario.pais);
        $("label#estado-perfild").text(info.perfil_usuario.estado);
        $("label#municipio-perfil").text(info.perfil_usuario.municipio);
        $("label#telfono-perfil").text(info.perfil_usuario.telefono);
      },
      load: function()  {
        $.when( services.user.showInfoUser()).done( function( response, status, request)  {
          var info = response[0];
          dashboard.ui.loadUserInfo.left( info);
          dashboard.ui.loadUserInfo.right(  info);
        });
      }
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
    fixMapHeight: function ()  {
      var windowsHeight = $( window ).height();
        finalHeight = windowsHeight;

      $("#map").css(  "height", finalHeight);
    }
  }
};