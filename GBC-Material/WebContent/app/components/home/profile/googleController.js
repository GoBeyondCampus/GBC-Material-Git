/**
 * Controller to autocomplete google places and related college search
 */

			gbcApp.controller('gCtrl',['$scope',function(sc){
				 console.log("In controller");
				 var lat = "";
				 var lng = "";
				 sc.colleges = {};
				  
				 var inputcity = document.getElementById("autolocation");
				 		 
				 var searchboxcity = new google.maps.places.Autocomplete(inputcity,{types: ['(cities)']});
				 searchboxcity.addListener('place_changed',function(){
					 var chosencity = searchboxcity.getPlace();
					 var query = "colleges in" + chosencity.name;
					 lat = chosencity.geometry.location.lat();
					 lng = chosencity.geometry.location.lng();
					 console.log(chosencity.name);
					 console.log(lat);
					 console.log(lng);
					 
					 var latlng = new google.maps.LatLng(lat,lng);
				     var map = document.getElementById("map");
	 				 var searchcollege = new google.maps.places.PlacesService(map, {
						 center: latlng,
	 				 	 zoom: 15
					 });
					 
					 var request = {
							    location: latlng,
							    radius: "50000",
							    //type: "university"
							    query: query
							  };
					 
					 searchcollege.textSearch(request,function(results, status){
						 if (status == google.maps.places.PlacesServiceStatus.OK) {
							 sc.colleges = results;
							    for (var i = 0; i < results.length; i++) {
							      var place = results[i];
							      console.log(place);
							    }
						 }
					 });
				 });
				 
				 sc.complete = function(searchString){
					 var output = [];
					 console.log(searchString);
					 angular.forEach(sc.colleges, function(college) {
					 	if (college.name.toLowerCase().indexOf(searchString.toLowerCase()) >= 0) {
							output.push(college);
						}
					 });
					 sc.filterCollege = output;
				 }
				 
				 sc.fillText = function(string1){
					 sc.college = string1;
					 sc.hidethis = true;
				 }
			}]);