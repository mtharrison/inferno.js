var Inferno = {

	Flame: function(data, id, options) {

		var inspector = new WebInspector.Main(id, options || {});
		inspector._loaded();

		setTimeout(function(){

			var type 	= new WebInspector.CPUProfileType();
			var header 	= new WebInspector.CPUProfileHeader(type);
			header.setProtocolProfile(data);
			WebInspector.panels.profiles.showProfile(header)

		}, 1000);
	}

}