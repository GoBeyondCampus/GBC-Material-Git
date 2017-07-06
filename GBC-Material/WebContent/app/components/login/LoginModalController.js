/**
 * 
 */
gbcApp.controller('LoginModalController', ['$rootScope','$scope','$uibModalInstance','$cookies', function($rootScope,$scope,$uibModalInstance, $cookies) {
	
	console.log("Inside loginModalController");
	var $ctrl = this;
	
	$scope.cancel = function(){
		$uibModalInstance.dismiss('cancel');
	}
	
	$scope.$on('event:google-plus-signin-success', function(event,authResult) {
		var profile = authResult.getBasicProfile();
		$rootScope.currentUser = profile;
		$cookies.put('currentUser',profile);
		var givenName = profile.getGivenName();
		var familyName = profile.getFamilyName();
		$rootScope.userInitials = givenName.toString().charAt(0) + familyName.toString().charAt(0);	
		console.log(authResult);
		console.log('ID: ' + profile.getId());
		console.log('Full Name: ' + profile.getName());
		console.log('Given Name: ' + profile.getGivenName());
		console.log('Family Name: ' + profile.getFamilyName());
		console.log('Image URL: ' + profile.getImageUrl());
		console.log('Email: ' + profile.getEmail());	
		$uibModalInstance.close(profile);
	})
}])