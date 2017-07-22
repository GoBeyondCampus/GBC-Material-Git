/**
 * Angular app creation.
 */

var gbcApp = angular.module('gbcApp',['ui.router','directive.g+signin','ui.bootstrap','ngCookies']);

gbcApp.config(['$httpProvider', '$stateProvider', '$urlRouterProvider',
       function($httpProvider,   $stateProvider,   $urlRouterProvider) {
	
		$stateProvider
		.state('landing',{
			abstract: false,
			url: "/landing",
			templateUrl: "app/components/landing-page/landing-page.html",
			controller: "landingController",
			data: { requireLogin: false}
		})
		.state('contribute',{
			abstract: false,
			url: "/contribute",
			templateUrl: "app/components/contribute/contribute.html",
			controller: "contributeController",
			data: { requireLogin: false}
		})
		.state('home',{
			abstract: false,
			url:"/home",
			templateUrl: "app/components/home/home.student.html",
			controller: "homeStudentController",
			data: { requireLogin: true}
		})
		.state('home.student',{
			abstract: false,
			url:"/Student",
			templateUrl: "app/components/home/home.student.html",
			controller: "homeStudentController",
			data: { requireLogin: true}
		})
		.state('home.student.expert',{
			abstract: false,
			url:"/home",
			templateUrl: "app/components/home/home.expert.html",
			controller: "expertListController",
			data: { requireLogin: true}
		})
		.state('home.profile',{
			abstract: false,
			url:"/Profile",
			templateUrl: "app/components/home/home.student.profile.html",
			controller: "studentProfileController",
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

gbcApp.run(['$rootScope','$state','$stateParams','$transitions','loginModalService','userInfoService',
    function($rootScope,  $state,  $stateParams,  $transitions,  loginModalService,  $userInfo) {
	/*Every state change event is captured and checked for require Login, if Login is required and user is not logged in,
	Login Modal should pop-up*/
	$rootScope.$state = $state;
	$rootScope.$stateParam = $stateParams;
	
	$transitions.onEnter({to: function(state) {
	    return state.data != null && state.data.requireLogin === true && angular.isUndefined($userInfo.getUserFirstName())
	  }},function($transitions){
		 console.log("I am in transition");
		 var newToState = $transitions.$to();
		 var fromState = $transitions.$from();
		 loginModalService()
			 .then(function () {
		          return $state.go(newToState.name, $transitions.params());
		        })
		     .catch(function () {
		          return $state.go(fromState.name);
		        })  
	  })
	 
/*	$transitions.onEnter({to: function(state) {
	    return state.name == 'landing' && angular.isDefined($userInfo.getUserFirstName())
	  }},function($transitions){
		 console.log("I am in landing and user cookies check");
		 return $state.go('home', $transitions.params());    
	  })*/
}])


/*gbcApp.config(function($routeProvider) {
	$routeProvider
	
	//route for landing page when user has not logged in
	.when('/', {
		templateUrl: "app/components/landing-page/landing-page.html",
		controller: "mainController"
	})
	
})*/