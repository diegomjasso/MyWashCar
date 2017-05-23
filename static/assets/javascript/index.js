(function(){
	/*var extenxionJS = '.js';
	var sourceScripts = '../../static/assets/javascript/';
	var scriptsList =	[
							'app/dashboard'
						];

	for(var i = 0; i < scriptsList.length; i++){
		var scriptTagHTML = document.createElement('script');
		scriptTagHTML.type ='text/javascript';
		scriptTagHTML.async = false;
		scriptTagHTML.src = sourceScripts + scriptsList[i] + extenxionJS;
		(document.getElementsByTagName('HEAD')[0]||document.body).appendChild(scriptTagHTML);
	};
*/
	setTimeout( function()  {
    	setStyles.init();
    	loadModal();
  	},	200);
})();


var setStyles = {
	init: function	()	{
		setStyles.fixPositionHomeInfo();
<<<<<<< HEAD

=======
		dashboard.init();
		dashboard.map.fixMapHeiight();
>>>>>>> 6fb0d4cbd6decf6f6224018ecf1a81fd13bf5e3e

		$(window).resize(	function (){
			dashboard.map.fixMapHeiight();
			setStyles.fixPositionHomeInfo();
		});
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
	}
}

var app = {
	loadModal: function()	{
		var $contenedorModal = $('#myModal');
	    var urlModal         = $(this).attr("href");
	    var idModal          = $(this).data("idmodal");
	 
	    $contenedorModal.load(urlModal + ' ' + idModal , function(response) {
	    $(this).modal({backdrop: "static"});
	    });	
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