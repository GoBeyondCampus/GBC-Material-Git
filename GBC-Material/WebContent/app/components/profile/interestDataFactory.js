/**
 * 
 */
angular.module('gbcApp').factory('interestDataFactory', function($http) {
		
		return {
			get : function() {
				$http.get('interest.json');
			}
		}
});