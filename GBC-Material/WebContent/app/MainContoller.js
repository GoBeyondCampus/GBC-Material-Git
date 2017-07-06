/**
 * 
 */
 gbcApp.controller('mainController', ['$rootScope','$scope','$cookies' ,function($rootScope,$scope,$cookies) {
	 
	 console.log("Inside MainController");
	 
	 $scope.isUserLoggedIn = function(){
			return !angular.isUndefined($cookies.get('currentUser'));
	 }
 	
	 $scope.clearUser = function(){
		 $cookies.remove('currentUser')
	 }
	 
	 $scope.signOut = function(){
		 var auth2 = gapi.auth2.getAuthInstance();
		 auth2.signOut().then(function () {
		   console.log('User signed out.');
		 });
		 $cookies.remove('currentUser')
	 }
 }])