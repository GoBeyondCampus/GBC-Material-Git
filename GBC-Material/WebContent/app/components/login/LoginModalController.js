/**
 * 
 */
gbcApp.controller('LoginModalController', ['$rootScope','$scope','$uibModalInstance','$cookies','userInfoService', function($rootScope,$scope,$uibModalInstance,$cookies,$userInfo) {
	
	console.log("Inside loginModalController");
	$rootScope.userInitials = "Login";
	var $ctrl = this;
	
	$scope.cancel = function(){
		$uibModalInstance.dismiss('cancel');
	}
	
	$scope.$on('event:google-plus-signin-success', function(event,authResult) {
		var profile = authResult.getBasicProfile();
		$rootScope.currentUser = profile;
		$userInfo.setUserData(profile);
		console.log('Full Name: ' + profile.getName());
		/*
		$rootScope.userInitials = givenName.toString().charAt(0) + familyName.toString().charAt(0);	
		console.log('ID: ' + profile.getId());
		console.log('Given Name: ' + profile.getGivenName());
		console.log('Family Name: ' + profile.getFamilyName());
		console.log('Image URL: ' + profile.getImageUrl());
		console.log('Email: ' + profile.getEmail());
		*/
		$uibModalInstance.close(profile);
	})
}])