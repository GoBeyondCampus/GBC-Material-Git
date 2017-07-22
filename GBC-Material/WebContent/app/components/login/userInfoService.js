/**
 * 
 */
gbcApp.factory('userInfoService',['$cookies', function($cookies) {
		var userProfile = "";
		var fullname = "";
		//var firstName = "";
		var email = "";
		
		return{
			setUserData: function(profile){
				 userProfile = profile;
				 $cookies.put('currentUser',profile);
				 $cookies.put('userid',profile.getId());
				 $cookies.put('fullname',profile.getName());
				 $cookies.put('firstname',profile.getGivenName());
				 $cookies.put('email',profile.getEmail());
			},
			
			getUserProfile: function(){
				return $cookies.get('currentUser');
			},
			getUserId: function(){
				return $cookies.get('userid');
			},
			getUserFullName: function(){
				return $cookies.get('fullname');
			},
			getUserFirstName: function(){
				return $cookies.get('firstname');
			},	
			getUserEmail: function(){
				return $cookies.get('email');
			},
			
			clearUserData: function(){
				userProfile = "";
				$cookies.remove('currentUser');
				$cookies.remove('userInitials');
				$cookies.remove('fullname');
				$cookies.remove('firstname');
				$cookies.remove('email');
			}
		}
}])