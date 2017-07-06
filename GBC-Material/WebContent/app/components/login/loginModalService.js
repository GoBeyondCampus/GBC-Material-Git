gbcApp.service('loginModalService', ['$uibModal',function($uibModal) {
	
	function assignCurrentUser(user){
		var currentUser = user;
		console.log("user" + user);
		return user;
	}
	
	return function(){
		var modalInstance = $uibModal.open({
			templateUrl: 'app/components/login/LoginModal.html',
			controller: 'LoginModalController',
			controllerAs: 'LoginModalController'
		})
	
	return modalInstance.result.then(function () {
        console.log('Modal dismissed at: ' + new Date());
    })
	
	
	}
}])