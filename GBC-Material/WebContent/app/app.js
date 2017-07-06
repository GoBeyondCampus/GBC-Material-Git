/**
 * Angular app creation.
 */

var gbcApp = angular.module('gbcApp',['ui.router','directive.g+signin','ui.bootstrap','ngCookies']);

gbcApp.config(['$httpProvider', '$stateProvider', '$urlRouterProvider',
               function($httpProvider, $stateProvider, $urlRouterProvider) {
	
		$stateProvider
		.state('landing',{
			abstract: false,
			url: "/landing",
			templateUrl: "app/components/landing-page/landing-page.html",
			controller: "mainController",
			data: { requireLogin: false}
		})
		.state('home',{
			abstract: false,
			url:"/home",
			templateUrl: "app/components/home/home.html",
			controller: "homeController",
			data: { requireLogin: true}
		})
		.state('login',{
			abstract:false,
			url:"/login",
			templateUrl: "app/components/login/login.html",
			controller: "loginController",
			data: { requireLogin: false}
		})
		
		$urlRouterProvider.otherwise('/landing');
}])

gbcApp.run(['$rootScope','$state','$transitions','loginModalService','$cookies',function($rootScope,$state,$transitions,loginModalService,$cookies) {
	/*Every state change event is captured and checked for require Login, if Login is required and user is not logged in,
	Login Modal should pop-up*/
	
	$transitions.onEnter({to: function(state) {
	    return state.data != null && state.data.requireLogin === true && angular.isUndefined($cookies.get('currentUser'))
	  }},function($transitions){
		 console.log("I am in transition");
		 var newToState = $transitions.$to();
		 loginModalService()
			 .then(function () {
		          return $state.go(newToState.name, $transitions.params());
		        })
		     .catch(function () {
		          return $state.go('welcome');
		        })  
	  })
}])


/*gbcApp.config(function($routeProvider) {
	$routeProvider
	
	//route for landing page when user has not logged in
	.when('/', {
		templateUrl: "app/components/landing-page/landing-page.html",
		controller: "mainController"
	})
	
})*/