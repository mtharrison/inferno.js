var Inferno = function(data, id) {
	setTimeout(function(){

		var type 	= new WebInspector.CPUProfileType();
		var header 	= new WebInspector.CPUProfileHeader(type);
		header.setProtocolProfile(data);
		WebInspector.panels.profiles.showProfile(header)

	}, 1000);
}