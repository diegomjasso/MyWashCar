 $( document ).ready(function() {
 	setStyles.init();
});


var setStyles = {
	init: function	()	{
		dashboard.init();
		setStyles.callInitFunctions();
		$(window).resize(	function ()	{
			setStyles.callInitFunctions();
		});
	},
	callInitFunctions:	function()	{
		setStyles.fixPositionHomeInfo();
		setStyles.fixRightSideWidth();
		dashboard.map.fixMapHeight();
	},
	fixPositionHomeInfo: function () {
		var authenticationObj = document.getElementsByClassName('authentication');
		var homeInfoObj = document.getElementsByClassName('home-info');

		if (	authenticationObj[0] != undefined || homeInfoObj[0] != undefined) {
			var widthAuthentication = authenticationObj[0].clientWidth;
			var heightAuthentication = authenticationObj[0].clientHeight;
			var height = homeInfoObj[0].clientHeight;

			$("#home-info").css(	"margin-top",	(-(height/2)));
			$("#authentication").css(	"margin-top",	(-(heightAuthentication/2)));
			$("#authentication").css(	"margin-left",	(-(widthAuthentication) - 40));
		};
	},
	fixRightSideWidth: function()	{
		var windowsWidth = $( window ).width();
		var widthLeftSide = document.getElementById('side-dashboard');
		if (widthLeftSide != undefined) {
			var finalWidth = windowsWidth - widthLeftSide.clientWidth;
        	$("#right-side-opened").css(  "width", finalWidth);
		}
	}
}

var loadModal = function() {
	$('.btnModal').on("click", function(event) {
	    event.preventDefault();

	    var $contenedorModal = $('#myModal');
	    var urlModal         = $(this).attr("href");
	    var idModal          = $(this).data("idmodal");
	 
	    $contenedorModal.load(urlModal + ' ' + idModal , function(response) {
	    	$(this).modal({backdrop: "static"});
	    });
	});
}