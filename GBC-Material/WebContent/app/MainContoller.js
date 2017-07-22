/**
 * 
 */
 gbcApp.controller('mainController', ['$rootScope','$scope','userInfoService','$state',function($rootScope,$scope,$userInfo,$state) {
	 
	 console.log("Inside MainController");
	 
	 $rootScope.isLandingPage = function(){
		 return true;
	 }
	  
	 $rootScope.getUserName = function(){
		 if (!angular.isUndefined($userInfo.getUserFirstName())){
			 return $userInfo.getUserFirstName();
		 }else{
			 return "Undefined";
		 }
	 }

	 $rootScope.isUserLoggedIn = function(){
		return !angular.isUndefined($userInfo.getUserFirstName());
	 }
	 
	 $rootScope.signOut = function(){
		 var auth2 = gapi.auth2.getAuthInstance();
		 auth2.signOut().then(function () {
		 $userInfo.clearUserData();
		 console.log('User signed out.');
		 });
	 }	 
 }])