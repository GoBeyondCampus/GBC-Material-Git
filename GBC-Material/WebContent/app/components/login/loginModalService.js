gbcApp.service('loginModalService', ['$uibModal',function($uibModal) {
	
	function assignCurrentUser(user){
		var currentUser = user;
		console.log("user" + user);
		return user;
	}
	
	return function(){
		var modalInstance = $uibModal.open({
			templateUrl: 'app/components/login/LoginModal.html',
			backdrop: 'static',
			controller: 'LoginModalController',
			controllerAs: 'LoginModalController'
		})
	
	return modalInstance.result.then(function () {
        console.log('Modal dismissed at: ' + new Date());
    })
	
    return modalInstance.result.catch(function () {
        console.log('Modal dismissed at: ' + new Date());
    })
	
	}
}])