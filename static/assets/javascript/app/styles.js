var setStyles = {
	init: function	()	{
		setStyles.fixPositionHomeInfo();
	},
	fixPositionHomeInfo: function () {
		var homeInfoObj = document.getElementsByClassName('home-info');
		var height = homeInfoObj[0].clientHeight;
		
		$(".home-info").css(	"margin-top",	(-(height/2) + 30))

		console.log(homeInfoObj[0].style.top);
	}
}