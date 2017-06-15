var	services	=	{
	settings:	{
		url: "http://127.0.0.1:8000/api/"
	},
	user:{
		showInfoUser:	function()	{
			return	$.ajax({
				method: "GET",
				url: services.settings.url + 'perfil_usuarios/',
				dataType:'json',
				contentType: "application/json",
				data:{},
				beforeSend: services.request.startRequest()
			}).done(	function(	response) {
				services.request.successResponse(response);	
			}).fail(	function() {
				services.request.errorResponse();	
		  });
		}
	},
	dashboard:{
		showCarWashList: function()	{
			return	$.ajax({
				method: "GET",
				url: services.settings.url + "carwash/",
				dataType:'json',
				contentType: "application/json",
				data:{},
				beforeSend: services.request.startRequest()
			}).done(	function(	response) {
				services.request.successResponse(response);	
			}).fail(	function() {
				services.request.errorResponse();	
		  });	
		}
	},
	request: {
		numRequest:  0,
		startRequest: function()	{
			services.request.numRequest++;
    		$("#block-backgrund").show();
		},
		successResponse: function(	response) 	{
			response   =    response    || false;
		    if (response) {
		      if (!response.error) {
		          services.request.endRequest();
		          return response;
		      } else {
		          services.request.errorResponse(response);
		      }
		    } else {
		      services.request.errorResponse();
		    }
		},
		errorResponse: function(	response)	{
			services.request.endRequest();
			response   =    response    || false;
			var message =   "";
			if (response) {
				message = response.message;
			};
			/*	app.configAlertDialog(  "ALERT",  message, 5);	*/
		},
		fatalErrorResponse: function()	{
			services.request.breakeRequestError();
			alert("Tenemos un problema con la aplicacion. Por Favor Reportalo a maciasjasso0@hotmail.com");
			/*	app.configAlertDialog(  "ALERT",  message, 5);	*/
		},
		endRequest: function()  {
		    services.request.numRequest--;
		    if (this.numRequest<=0) {
		      $("#block-backgrund").hide();  // Hidden loadding
		    };
		},
		breakeRequestError: function()	{
			services.request.numRequest	=	0;
			$("#block-backgrund").hide();  // Hidden loadding
		}
	}, 
};
