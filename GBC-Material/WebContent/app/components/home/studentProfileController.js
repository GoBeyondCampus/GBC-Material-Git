/**
 * Home-Page Controller
 */

gbcApp.filter('interestFilter',['$rootScope', function() {
	
	
}])

gbcApp.controller('studentProfileController', ['$rootScope','$http',function($rootScope,$http) {
	console.log("I am in profile Crontroller");

	$rootScope.selectedInterests = [];
	
	$rootScope.interestOptions = [];
	$http.get('app/components/home/Interests.js').success(function(data) {
		$rootScope.interestOptions = data;
	}).error(function(status) {
		console.log("Error Occurred");
	})
	
	$rootScope.filterInt = $rootScope.interestOptions;
	
	$rootScope.fillInt = function(interest){
		
		if ($rootScope.selectedInterests.hasOwnProperty("subDisc")) {
			//do nothing
		}else {
			$rootScope.selectedInterests = [];
		}
		
		$rootScope.selectedInterests.push(interest);
		$rootScope.hidethisfunc = true;
	 }
	
	$rootScope.completeInt = function(searchString){
		 var output = [];
		 var intName = searchString.toString().toLowerCase();
		 console.log(intName);
		 angular.forEach($rootScope.interestOptions, function(interest) {
			
		 	if (interest.discipline.name.toLowerCase().indexOf(intName) >= 0) {
				output.push(interest);
			}
		 });
		 $rootScope.filterInt = output;
	 }
	
	
	$rootScope.completeSubInt = function(selectedInterest) {
	    var subIntList = [];
	    var intName = selectedInterest.toString().toLowerCase();
	    console.log(intName);
   }	

}])