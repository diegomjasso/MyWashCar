(function(){
	var extenxionJS = '.js';
	var sourceScripts = '../../static/assets/javascript/';
	var scriptsList =	[

						];

	for(var i = 0; i < scriptsList.length; i++){
		var scriptTagHTML = document.createElement('script');
		scriptTagHTML.type ='text/javascript';
		scriptTagHTML.async = false;
		scriptTagHTML.src = sourceScripts + scriptsList[i] + extenxionJS;
		(document.getElementsByTagName('HEAD')[0]||document.body).appendChild(scriptTagHTML);
	};

	setTimeout( function()  {
    	setStyles.init();
  	},	200);
})();


var setStyles = {
	init: function	()	{
		setStyles.fixPositionHomeInfo();
		$(window).resize(	function (){
			//dashboard.fixMapHeiight();
			setStyles.fixPositionHomeInfo();
		});
	},
	fixPositionHomeInfo: function () {
		var authenticationObj = document.getElementsByClassName('authentication');
		var heightAuthentication = authenticationObj[0].clientHeight;
		var homeInfoObj = document.getElementsByClassName('home-info');
		var height = homeInfoObj[0].clientHeight;

		$("#home-info").css(	"margin-top",	(-(height/2)));
		$("#authentication").css(	"margin-top",	(-(heightAuthentication/2)))
	}
}